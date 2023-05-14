import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Nav from "components/Common/nav";
import icBell from "assets/ic_home_bell.png";
import logo from "assets/logo.png";
import seniorill from "assets/seniorill.png";
import ReservationCard from "components/Common/resevationCard";
import WhiteCard from "components/Common/WhiteCard";
import PurpleCard from "components/Common/purpleCard";

const SeniorMain = () => {
  const scrollRef = useRef(null);
  const [reservationData, setReservationData] = useState({
    userInfo: [
      {
        Name: "백이진",
        StarNo: 3,
        Job: "UX 디자이너",
        TimeStamp: "8월 20일 15:00-16:00",
        Comment: "디자이너도 코딩을 배워야 하는지 궁금해요.",
      },
      {
        Name: "djbf",
        StarNo: 3,
        Job: "UX 디자이너",
        TimeStamp: "8월 20일 15:00-16:00",
        Comment: "디자이너도 코딩을 배워야 하는지 궁금해요.",
      },
    ],
  });
  const [seniorData, setSeniorData] = useState({
    seniorInfo: [
      {
        ImgSrc: "aaa",
        Company: "삼전",
        Job: "UX 디자이너",
        Working: "14년",
        RecommendPrize: 1,
        MeetingCnt: 14,
        Tag: ["사수꿀팁", "기획 팁"],
      },
      {
        ImgSrc: "bbb",
        Company: "Lg",
        Job: "Ufd 디자이너",
        Working: "15년",
        RecommendPrize: 6,
        MeetingCnt: 18,
        Tag: ["사수꿀dss팁", "기dsfv획 팁"],
      },
      {
        ImgSrc: "ccc",
        Company: "구글",
        Job: "PM",
        Working: "6년",
        RecommendPrize: 8,
        MeetingCnt: 9,
        Tag: ["개발언어", "아이디어"],
      },
    ],
  });
  const [juniorNeeds, setJuniorNeeds] = useState({
    needsInfo: [
      {
        ImgSrc: "aaa",
        Title: "사수 꿀팁 알려주세요.",
        Comment:
          "원하던 회사에 드디어 취업했어요! 취업 후에 사수님께 잘 보일 꿀팁 있나요?",
      },
      {
        ImgSrc: "bbb",
        Title: "아이디어가 부족해요.",
        Comment:
          "독창적인 아이디어를 생각해내는 게 늘 어려워요. 이럴 땐 어떻게 하나요?",
      },
      {
        ImgSrc: "ccc",
        Title: "개발 언어가 어려워요.",
        Comment:
          "개발 언어를 공부한지 3개월이 넘었는데 아직도 어렵게 느껴져요.",
      },
      {
        ImgSrc: "bbb",
        Title: "아이디어가 부족해요.",
        Comment:
          "독창적인 아이디어를 생각해내는 게 늘 어려워요. 이럴 땐 어떻게 하나요?",
      },
    ],
  });

  useEffect(() => {
    console.log("reservationData", reservationData);
  }, []);

  return (
    <StSeniorMain>
      <Nav />
      <StLogo>
        <img src={logo} alt="로고" />
      </StLogo>
      <StIll>
        <img src={seniorill} alt="" />
      </StIll>
      <StLogoHeader>
        <img src={icBell} alt="알림" />
      </StLogoHeader>
      <StTitleHeader>
        <StPurpleBox>
          <StTitleText>
            퇴직 후 나의 소중한 경험을 <br />
            주니어에게 공유하자!
          </StTitleText>
        </StPurpleBox>
      </StTitleHeader>
      <StReservationContainer>
        <StLabel>예정 미팅</StLabel>
        <div>
          {reservationData.userInfo.map(
            ({ Name, StarNo, Job, TimeStamp, Comment }) => (
              <ReservationCard
                name={Name}
                starNo={StarNo}
                job={Job}
                timeStampRaw={TimeStamp}
                comment={Comment}
              />
            )
          )}
        </div>
      </StReservationContainer>
      <StSimilarSeniorContainer>
        <StLabel>나와 비슷한 직군의 시니어</StLabel>
        <div>
          {seniorData.seniorInfo.map(
            ({
              UserNo,
              ImgSrc,
              Company,
              Category,
              Period,
              ConnectCnt,
              WorkTag,
              CharacterTag,
            }) => (
              <WhiteCard
                id={UserNo}
                imgSrc={ImgSrc}
                companyArr={Company}
                jobRaw={Category}
                working={Period}
                meetingCnt={ConnectCnt}
                workTagArr={WorkTag}
                characterTagArr={CharacterTag}
              />
            )
          )}
        </div>
      </StSimilarSeniorContainer>
      <StLabel>직무 관련 주니어 니즈</StLabel>
      <StJuniorNeedsContainer>
        <div ref={scrollRef}>
          {juniorNeeds.needsInfo.map(({ ImgSrc, Title, Comment }) => (
            <PurpleCard imgsrc={ImgSrc} title={Title} comment={Comment} />
          ))}
        </div>
      </StJuniorNeedsContainer>
    </StSeniorMain>
  );
};
export default SeniorMain;
const StLogo = styled.div`
  position: absolute;
  margin-left: 30px;

  & > img {
    width: 179.82px;
    height: 48px;
  }
`;
const StIll = styled.div`
  position: absolute;
  margin: 47.57px 0 0 154px;

  & > img {
    width: 217.19px;
    height: 178px;
  }
`;
const StSeniorMain = styled.div`
  width: 375px;
  overflow-x: scroll;
`;
const StLogoHeader = styled.div`
  width: 375px;
  height: 37px;

  & > img {
    width: 19px;
    height: 19px;
    float: right;
    margin: 14px 18px 0 0;
  }

  background: rgba(102, 97, 230, 0.15);
`;
const StTitleHeader = styled.div`
  height: 145px;
  width: 375px;
`;
const StPurpleBox = styled.div`
  height: 123px;
  width: 375px;
  background: rgba(102, 97, 230, 0.15);
`;
const StTitleText = styled.h1`
  padding: 56px 0 0 30px;
  margin: 0px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.02em;

  color: #202e5f;
`;
const StReservationContainer = styled.section`
  & > div {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  margin-bottom: 30px;
`;
const StSimilarSeniorContainer = styled.section`
  & > div {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }
  margin-bottom: 30px;
`;
const StJuniorNeedsContainer = styled.section`
  overflow-x: scroll;
  margin-bottom: 100px;

  & > div {
    display: inline-flex;
    overflow-x: scroll;
    gap: 12px;
    margin: 0 30px 0 30px;
  }
`;
const StLabel = styled.h2`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;

  color: #202e5f;

  margin-left: 30px;
`;
