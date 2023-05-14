import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SignUp_Junior from "assets/SignUp_Junior.png";
import SignUp_Senior from "assets/SignUp_Senior.png";
import SignUp_JuniorP from "assets/SignUp_JuniorP.png";
import SignUp_SeniorP from "assets/SignUp_SeniorP.png";
import TopW from "components/Common/TopW";

const SignUpNext = () => {
  const [cookies, setCookie] = useCookies(["loginkey"]);
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.signup;
  console.log("next", data);

  const [ColoredSenior, setColoredSenior] = useState(true);
  const handleClickColoredSenior = () => {
    if (ColoredJunior === false) {
      setColoredJunior(!ColoredJunior);
      setColoredSenior(!ColoredSenior);
    } else {
      setColoredSenior(!ColoredSenior);
    }
  };

  const [ColoredJunior, setColoredJunior] = useState(true);
  const handleClickColoredJunior = () => {
    if (ColoredSenior === false) {
      setColoredSenior(!ColoredSenior);
      setColoredJunior(!ColoredJunior);
    } else {
      setColoredJunior(!ColoredJunior);
    }
  };

  const handleClickSignUpMove = () => {
    if (ColoredJunior === false) {
      navigate("/signup/junior", { state: data });
    } else if (ColoredSenior === false) {
      navigate("/signup/senior", { state: data });
    } else {
      // alert('형태를 선택해주세요');
    }
  };

  return (
    <>
      <TopW />
      <div className="container">
        <div className="signup_title">회원가입</div>
        <div className="signup_text">
          현재 "<span>나에게 해당하는 형태</span>"를 선택해주세요
        </div>
        <br></br>
        <div className="signup_button">
          <div onClick={handleClickColoredJunior}>
            {ColoredJunior ? (
              <img className="signup_img" src={SignUp_Junior} alt="React" />
            ) : (
              <img className="signup_img" src={SignUp_JuniorP} alt="React" />
            )}
          </div>
          <div onClick={handleClickColoredSenior}>
            {ColoredSenior ? (
              <img className="signup_img" src={SignUp_Senior} alt="React" />
            ) : (
              <img className="signup_img" src={SignUp_SeniorP} alt="React" />
            )}
          </div>
        </div>

        <br></br>
        <div className="loginbutton">
          <button onClick={handleClickSignUpMove} className="login_button">
            다음
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUpNext;
