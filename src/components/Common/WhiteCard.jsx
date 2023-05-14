import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProfileImgDiv from "./profileImgDiv";
import icRecommend from "assets/ic_home_recommend.png";
import icMeet from "assets/ic_home_meet.png";
import icBookMark from "assets/ic_home_bookmark.png";
import icBookMarkActive from "assets/ic_home_bookmark_click.png";

const WhiteCard = (props) => {
  let navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const {
    id,
    imgSrc,
    companyArr,
    jobRaw,
    working,
    meetingCnt,
    workTagArr,
    characterTagArr,
  } = props;

  useEffect(() => {
    getCompanyName(); //회사정보배열 숫자 -> 이름으로 변경
    getJobName();
    getTag();
  }, []);

  const [company, setCompany] = useState("");
  const [job, setJob] = useState("");

  const getJobName = () => {
    if (jobRaw === 1) {
      setJob("개발자");
    } else if (jobRaw === 2) {
      setJob("UX/UI 디자이너");
    } else if (jobRaw === 3) {
      setJob("인사");
    } else if (jobRaw === 4) {
      setJob("마케터");
    }
    console.log(job);
  };
  const getCompanyName = () => {
    const companyNo = companyArr[0];
    console.log(companyNo);
    switch (companyNo) {
      case 1:
        setCompany("삼성전자");
        break;
      case 2:
        setCompany("LG전자");
        break;
      case 3:
        setCompany("애플");
        break;
      case 4:
        setCompany("구글");
        break;
      default:
        break;
    }
  };

  const [tag, setTag] = useState([]);
  useEffect(() => {
    console.log(tag);
  }, [tag]);

  const getTag = () => {
    if (workTagArr) {
      for (let i = 0; i < workTagArr.length; i++) {
        if (workTagArr[i] === 1) {
          setTag((prev) => [...prev, "Backend"]);
        } else if (workTagArr[i] === 2) {
          setTag((prevList) => [...prevList, "Software"]);
        } else if (workTagArr[i] === 3) {
          setTag((prev) => [...prev, "인사관리"]);
        } else if (workTagArr[i] === 4) {
          setTag((prev) => [...prev, "판매"]);
        }
      }
    }
    if (characterTagArr) {
      for (let i = 0; i < characterTagArr.length; i++) {
        if (characterTagArr[i] === 1) {
          setTag((prev) => [...prev, "냉철한"]);
        } else if (characterTagArr[i] === 2) {
          setTag((prevList) => [...prevList, "따뜻한"]);
        } else if (characterTagArr[i] === 3) {
          setTag((prev) => [...prev, "리더십"]);
        } else if (characterTagArr[i] === 4) {
          setTag((prev) => [...prev, "계획형"]);
        }
      }
    }
  };

  return (
    <StWhiteCard onClick={() => navigate(`/profile/${id}`)}>
      <StImgDiv>
        <ProfileImgDiv imgSrc={imgSrc} />
      </StImgDiv>
      <StContentWrapper>
        <StTitle>
          {company} / {job} / {working}년
        </StTitle>
        <StDetailWrapper>
          <img src={icRecommend} alt="" />
          <p>추천순</p>
          <strong>- 위</strong>
          <img src={icMeet} alt="" />
          <p>미팅횟수</p>
          <strong>{meetingCnt}회</strong>
        </StDetailWrapper>
        <StTagWrapper>
          {tag.map((item) => (
            <li>#{item}</li>
          ))}
        </StTagWrapper>
      </StContentWrapper>
      <StBookMarkWrapper>
        <img
          src={isActive ? icBookMarkActive : icBookMark}
          alt="북마크"
          onClick={() => setIsActive((prev) => !prev)}
        />
      </StBookMarkWrapper>
    </StWhiteCard>
  );
};

export default WhiteCard;
const StWhiteCard = styled.div`
  display: flex;

  width: 324px;
  height: 86px;

  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;

  margin-left: 24px;
`;

const StImgDiv = styled.div`
  margin: 17px 0 0 11px;
`;

const StContentWrapper = styled.div`
  margin: 14px 0 4px 16px;
`;

const StTitle = styled.strong`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 18px;
  letter-spacing: -0.02em;

  color: #202e5f;
`;

const StDetailWrapper = styled.div`
  display: flex;

  font-family: Noto Sans KR;
  font-size: 8px;
  line-height: 11px;
  letter-spacing: -0.01em;
  text-align: left;

  & > img {
    height: 10px;
    width: 10px;
    border-radius: 0px;
    margin-right: 3px;
  }

  & > p {
    font-weight: 400;
    margin: 0px;
    margin-right: 3px;
  }

  & > strong {
    font-weight: 700;
    margin-right: 5px;
  }
`;

const StTagWrapper = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 9px;
  text-align: center;
  letter-spacing: -0.02em;

  color: #202e5f;

  gap: 6px;

  & > li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 16px;
    background: #e8e7fb;
    border-radius: 11.4286px;
    padding: 3px;
  }
`;

const StBookMarkWrapper = styled.div`
  position: absolute;

  right: 48px;
  margin: 18px 0 0 0;

  & > img {
    width: 14px;
    height: 14px;
  }
`;
