import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import TopW from "components/Common/TopW";

const SignUpMain = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    id: "",
    password: "",
    name: "",
  });
  const handleChangeSignUp = (event) => {
    let changeSignUp = { ...signup };
    changeSignUp[event.target.name] = event.target.value;
    setSignup(changeSignUp);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickSignUpMove = () => {
    if (signup.id != "" && signup.password != "" && signup.name != "") {
      navigate("/signup/next", {
        state: {
          signup: {
            id: signup.id,
            password: signup.password,
            name: signup.name,
          },
        },
      });
    }
  };

  return (
    <>
      <TopW />
      <div className="container">
        <div className="signup_title">회원가입</div>
        <br></br>
        <Box
          className="login_box"
          component="form"
          sx={{ width: 500, maxWidth: "100%" }}
        >
          <TextField
            placeholder="이메일 주소 또는 아이디"
            value={signup.id}
            name="id"
            onChange={handleChangeSignUp}
            fullWidth
            id="standard-basic"
          />
        </Box>
        <br></br>
        <Box
          className="login_box"
          component="form"
          sx={{ width: 500, maxWidth: "100%" }}
        >
          <TextField
            placeholder="패쓰워드"
            type={showPassword ? "text" : "password"}
            value={signup.password}
            name="password"
            onChange={handleChangeSignUp}
            fullWidth
            id="standard-basic"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <br></br>
        <div className="name_text">이름</div>
        <Box
          className="login_box"
          component="form"
          sx={{ width: 500, maxWidth: "100%" }}
        >
          <TextField
            value={signup.name}
            name="name"
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

export default SignUpMain;
