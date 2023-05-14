import styled from "styled-components";
import ProfileImgDiv from "./profileImgDiv";

const PurpleCard = (props) => {
  const { imgsrc, title, comment } = props;

  return (
    <StPurpleCard>
      <StImgDiv>
        <ProfileImgDiv src={imgsrc} />
      </StImgDiv>
      <StTitle>'{title}'</StTitle>
      <StComment>'{comment}'</StComment>
    </StPurpleCard>
  );
};

export default PurpleCard;

const StPurpleCard = styled.div`
  width: 152px;
  height: 161px;

  background: rgba(102, 97, 230, 0.15);
  border-radius: 8px;
`;
const StImgDiv = styled.div`
  margin: 14px 0 9px 11px;
`;
const StTitle = styled.p`
  width: 129px;

  margin-left: 11px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 18px;
  letter-spacing: -0.02em;

  color: #202e5f;
`;
const StComment = styled.p`
  width: 129px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 11px;
  letter-spacing: -0.01em;

  color: rgba(32, 46, 95, 0.7);
  margin: 9px 0 25px 11px;
`;
