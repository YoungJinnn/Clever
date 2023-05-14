import WhiteCard from "components/Common/WhiteCard";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const JuniorSearch = () => {
  const location = useLocation();
  const data = location.state; //post의 res.data
  console.log(data);

  return (
    <StJuniorSearch>
      <StHeader>
        <p>IT 계열 회사</p>
      </StHeader>
      {data.map(
        ({ UserNo, ImgSrc, Company, Category, Profile, ConnectCnt }) => (
          <WhiteCard
            id={UserNo}
            imgSrc={ImgSrc}
            companyArr={Company} //숫자배열 -> 0번째 사용
            job={Category} //직군 숫자
            working={Profile.WorkPeriod} //근속년수 숫자
            meetingCnt={ConnectCnt}
            workTagArr={Profile.WorkTag} //워크태그배열
            characterTagArr={Profile.CharacterTag} //캐릭터태그배열
          />
        )
      )}
    </StJuniorSearch>
  );
};
export default JuniorSearch;

const StJuniorSearch = styled.div`
  width: 375px;
`;

const StHeader = styled.div`
  width: 375px;
  height: 52px;

  & > p {
    margin: 29px 0 0 29px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;

    color: #202e5f;
  }
`;
