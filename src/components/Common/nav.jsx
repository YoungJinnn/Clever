import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import activeHome from "assets/ic_nav_home_active.png";
import inactiveHome from "assets/ic_nav_home_inactive.png";
import activeSchedule from "assets/ic_nav_schedule_active.png";
import inactiveSchedule from "assets/ic_nav_schedule_inactive.png";
import activeProfile from "assets/ic_nav_profile_active.png";
import inactiveProfile from "assets/ic_nav_profile_inactive.png";
import activeSetting from "assets/ic_nav_setting_active.png";
import inactiveSetting from "assets/ic_nav_setting_inactive.png";

const Nav = () => {
  const router = useLocation();
  const [currentPath, setcurrentPath] = useState("home");

  const getCurrentPath = () => {
    if (router.pathname.includes("/spload")) {
      setcurrentPath("upload");
    } else if (router.pathname.includes("/schedule")) {
      setcurrentPath("schedule");
    } else {
      setcurrentPath("home");
    }
  };

  const handleClick = (props) => {
    const baseRoute = "Main";
    const detailRoute = props;
    window.location.href = `/${baseRoute}/${detailRoute}`;
  };

  useEffect(() => {
    getCurrentPath();
  }, []);

  return (
    <StNav>
      <StIconWrapper>
        <div>
        <StIconBtn onClick={() => handleClick("home")}>
          <img
            src={currentPath === "home" ? activeHome : inactiveHome}
            alt="홈"
          />
          <div className="Nav_title">홈</div>  
        </StIconBtn>
        
        </div>
        <StIconBtn onClick={() => handleClick("upload")}>
          <img
            src={currentPath === "upload" ? activeProfile : inactiveProfile}
            alt="내 홍보물"
          />
          <div className="Nav_title">업로드</div> 
        </StIconBtn>
        <StIconBtn onClick={() => handleClick("schedule")}>
          <img
            src={currentPath === "schedule" ? activeSchedule : inactiveSchedule}
            alt="내 활동"
          />
          <div className="Nav_title">내 일정</div> 
        </StIconBtn>
      </StIconWrapper>
    </StNav>
  );
};

export default Nav;

const StNav = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  z-index: 3;

  width: 375px;
  hegiht: 73px;

  top: 751px;

  background-color: white;
`;
const StIconWrapper = styled.div`
  display: flex;

  gap: 80px;
  margin: 12px;
`;

const StIconBtn = styled.div`
  & > img {
    width: 22px;
    height: 22px;
    border-radius: 0px;
  }
`;
