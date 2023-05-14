import styled from "styled-components";

const ProfileImgDiv = (props) => {
  const imgsrc = props;
  return (
    <StProfileImgDiv>
      <img src={imgsrc} alt="profile" />
    </StProfileImgDiv>
  );
};

export default ProfileImgDiv;

const StProfileImgDiv = styled.div`
  width: 51px;
  height: 51px;

  background-color: purple;

  border-radius: 50%;

  filter: drop-shadow(0px 3.51724px 3.51724px rgba(102, 97, 230, 0.15));
`;
