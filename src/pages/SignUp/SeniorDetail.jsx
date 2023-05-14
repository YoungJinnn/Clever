import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import TopW from "components/Common/TopW";

const SeniorDetail = () => {
  const location = useLocation();
  const signupData = location.state;
  const id = signupData.id;
  const password = signupData.password;
  const name = signupData.name;
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    company: "",
    job: "",
  });
  const handleChangeSignUp = (event) => {
    let changeSignUp = { ...signup };
    changeSignUp[event.target.name] = event.target.value;
    setSignup(changeSignUp);
  };

  const handleClickSignUpMove = () => {
    const Company = [];
    let Category;
    switch (signup.company) {
      case "삼성전자":
        Company.push(1);
        break;
      case "LG전자":
        Company.push(2);
        break;
      case "애플":
        Company.push(3);
        break;
      case "구글":
        Company.push(4);
        break;
      default:
        break;
    }
    switch (signup.job) {
      case "개발자":
        Category = 1;
        break;
      case "UX/UI 디자이너":
        Category = 2;
        break;
      case "인사":
        Category = 3;
        break;
      case "마케터":
        Category = 4;
        break;
      default:
        break;
    }

    const data = {
      userInfo: {
        ID: id,
        Name: name,
        Password: password,
        Status: 1,
        Company: Company,
        Category: Category,
      },
    };
    if (signup.company !== "" && signup.job !== "") {
      axios
        .post("/api/register", data)
        .then((response) => {
          navigate("/senior", { state: response.data });
        })
        .catch((Error) => {
          console.log(Error);
        });
    }
  };

  return (
    <>
      <TopW />
      <div className="container">
        <div className="signup_title">회원가입</div>
        <br></br>
        <div className="name_text">회사</div>
        <Box
          className="login_box"
          component="form"
          sx={{ width: 500, maxWidth: "100%" }}
        >
          <TextField
            placeholder="근무했던 회사를 작성해주세요"
            value={signup.company}
            name="company"
            onChange={handleChangeSignUp}
            fullWidth
            id="standard-basic"
          />
        </Box>
        <br></br>
        <div className="name_text">직군</div>
        <Box
          className="login_box"
          component="form"
          sx={{ width: 500, maxWidth: "100%" }}
        >
          <TextField
            placeholder="근무했던 직군을 작성해주세요"
            value={signup.job}
            name="job"
            onChange={handleChangeSignUp}
            fullWidth
            id="standard-basic"
          />
        </Box>
        <div className="loginbutton">
          <button onClick={handleClickSignUpMove} className="login_button">
            다음
          </button>
        </div>
      </div>
    </>
  );
};

export default SeniorDetail;
