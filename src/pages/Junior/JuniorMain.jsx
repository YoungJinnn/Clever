import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import Nav from "components/Common/nav";
import icBell from "assets/ic_home_bell.png";
import logo from "assets/logo.png";
import juniorill from "assets/juniorill.png";
import ReservationCard from "components/Common/resevationCard";
import WhiteCard from "components/Common/WhiteCard";
import PurpleCard from "components/Common/purpleCard";
import SearchBox from "components/Junior/searchBox";
import axios from "axios";

const JuniorMain = () => {
  const location = useLocation();
  const locationData = location.state;
  console.log(locationData);
  const [reservationData, setReservationData] = useState({
    Name: "주니어",
    Category: 3,
    Start: "202208101630",
    Title: "뽑아주세요",
    Score: 0,
    StarNo: 3,
  });
  const [seniorData, setSeniorData] = useState();
  useEffect(() => {
    setSeniorData(locationData.RecommendSeniorList);
    getReservationInfo();
  }, []);

  const getReservationInfo = () => {
    axios
      .get("junior/meetingInfo", { UserNo: locationData.UserNo })
      .then((response) => {
        console.log(response);
        setReservationData(response);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  const [popularSenior, setPopularSenior] = useState({
    seniorInfo: [
      {
        ImgSrc: "aaa",
        Title: "UX 플로우 설정은 누구보다자신있어요.",
        Comment:
          "타겟층 플로우 설정에 어려움을 느꼈던 분들을 위해 가장 쉽게 설명해드려요.",
      },
      {
        ImgSrc: "bbb",
        Title: "서울대 컴퓨터 공학과를 전공하고 개발자로 일했어요.",
        Comment:
          "많은 학생들을 만나면서 가장 어려워했던 파트를 저만의 방법으로 알려드려요.",
      },
      {
        ImgSrc: "ccc",
        Title: "현대차의 영업비밀을 여러분께소개합니다.",
        Comment:
          "3개월 동안 베스트 영업 팀장으로 뽑힐 수 있던 이유를 공유해드려요.",
      },
      {
        ImgSrc: "bbb",
        Title: "코리아 구글러가 되고 싶으신가요?",
        Comment: "구글 개발자들이 일하는 법, 구글 개발자들의 커뮤니케이션.",
      },
    ],
  });
  const [searchOption, setSearchOption] = useState("Company");

  return (
    <StJuniorMain>
      <Nav />
      <StLogo>
        <img src={logo} alt="로고" />
      </StLogo>
      <StIll>
        <img src={juniorill} alt="" />
      </StIll>
      <StLogoHeader>
        <img src={icBell} alt="알림" />
      </StLogoHeader>
      <StTitleHeader>
        <StPurpleBox>
          <StTitleText>
            내가 궁금한 직무와 더불어 <br />
            꿀팁까지 얻어가자!
          </StTitleText>
        </StPurpleBox>
      </StTitleHeader>
      <StSearchWrapper>
        <StOption>
          <StOptionli
            onClick={() => setSearchOption("Company")}
            isActive={searchOption === "Company"}
          >
            회사
          </StOptionli>
          <StOptionli
            onClick={() => setSearchOption("Category")}
            isActive={searchOption === "Category"}
          >
            직무
          </StOptionli>
        </StOption>
        <SearchBox searchOption={searchOption} />
      </StSearchWrapper>
      <StReservationContainer>
        <StLabel>예정 미팅</StLabel>
        <div>
          <ReservationCard
            name={reservationData.Name} //string
            starNo={reservationData.StarNo} //float
            job={reservationData.Category} //num
            timeStampRaw={reservationData.Start} //string
            comment={reservationData.Title} //string
          />
        </div>
      </StReservationContainer>
      <StSimilarSeniorContainer>
        <StLabel>당신을 위한 시니어</StLabel>
        <div>
          {seniorData &&
            seniorData.map(
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
      <StLabel>실시간 인기 시니어</StLabel>
      <StJuniorNeedsContainer>
        <div>
          {popularSenior.seniorInfo.map(({ ImgSrc, Title, Comment }) => (
            <PurpleCard imgsrc={ImgSrc} title={Title} comment={Comment} />
          ))}
        </div>
      </StJuniorNeedsContainer>
    </StJuniorMain>
  );
};
export default JuniorMain;
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
  margin: 33.57px 0 0 154px;

  & > img {
    width: 217.19px;
    height: 178px;
  }
`;
const StSearchWrapper = styled.section`
  & > div {
    margin: auto;
  }
  margin-bottom: 27px;
`;
const StOption = styled.ul`
  display: flex;
  gap: 19px;
  list-style: none;
`;

const StOptionli = styled.li`
  height: 15px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 11px;
  text-align: center;
  letter-spacing: -0.02em;

  color: #202e5f;
  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 1px solid #6661e6;
    `}
`;

const StJuniorMain = styled.div`
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
