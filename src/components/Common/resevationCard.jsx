import styled from "styled-components";
import { useEffect, useState } from "react";

const ReservationCard = (props) => {
  const { name, starNo, job, timeStampRaw, comment } = props;

  const month = timeStampRaw.substr(4, 2); //월
  const date = timeStampRaw.substr(6, 2); //월
  const hour = timeStampRaw.substr(8, 2); //월
  const minute = timeStampRaw.substr(10, 2); //월
  const endHour = +hour + 1;

  const timeStamp =
    month +
    "월 " +
    date +
    "일 " +
    hour +
    ":" +
    minute +
    "-" +
    endHour +
    ":" +
    minute;

  const [jobraw, setJob] = useState("");
  const star = Math.round(starNo); //별점 반올림
  console.log(starNo);
  const starString = "★".repeat(star) + "☆".repeat(5 - star);
  useEffect(() => {
    getJobName();
  }, []);

  const getJobName = () => {
    if (job === 1) {
      setJob("개발자");
    } else if (job === 2) {
      setJob("UX/UI 디자이너");
    } else if (job === 3) {
      setJob("인사");
    } else if (job === 4) {
      setJob("마케터");
    }
    console.log(job);
  };
  return (
    <StReservationCard>
      <div>
        <StName>{name}</StName>
        <StStar>{starString}</StStar>
      </div>
      <StDetail>- {jobraw}</StDetail>
      <StDetail>- {timeStamp}</StDetail>
      <StDetail>- {comment}</StDetail>
      <StEnterBtn>입장하기</StEnterBtn>
    </StReservationCard>
  );
};

export default ReservationCard;

const StReservationCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 318px;
  height: 94px;

  background: #f3f3f3;
  border-radius: 8px;

  margin-left: 27px;

  & > div:first-child {
    display: flex;
  }
`;

const StName = styled.strong`
  padding: 10px 0 7px 9px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.01em;

  color: #202e5f;
`;
const StStar = styled.strong`
  margin-left: 5px;
  margin-top: 12px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 11px;
  line-height: 12px;
  letter-spacing: -0.02em;

  color: #202e5f;
`;
const StDetail = styled.p`
  margin: 6px 0 0 6px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 11.4146px;
  line-height: 11px;
  letter-spacing: -0.01em;

  color: rgba(32, 46, 95, 0.7);
`;

const StEnterBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  margin: 29px 0 0 228px;

  width: 71px;
  height: 36.81px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 11px;
  letter-spacing: -0.02em;
  color: white;

  background: #6661e6;
  border-radius: 17.5309px;

  cursor: pointer;
`;
