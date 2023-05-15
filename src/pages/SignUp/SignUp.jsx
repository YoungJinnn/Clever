import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import TopW from "components/Common/TopW";
import axios from "axios";
import Alert from '@mui/material/Alert';

const SignUp = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    id: "",
    password: "",
    passwordCheck: "",
    name: "",
    studentNum: "",
    phoneNum: "",
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

  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const handleClickShowPasswordCheck = () => {
    setShowPasswordCheck(!showPasswordCheck);
  };

  const signupHandler = async() => {
    if (signup.id !== "" && signup.password !== "" && (signup.password === signup.passwordCheck) && signup.name !== "" && signup.studentNum !== "" && signup.phoneNum !== "") {
      await axios ({
        method: 'post',
        url: `http://141.223.175.213:17000/user`,
        data: {
          username: signup.id,
          password: signup.password,
          fullName: signup.name,
          studentId: signup.studentNum,
          phoneNumber: signup.phoneNum,
        }
      })
      .then((response)=>{
          console.log(response);
          navigate('/main/home');
      }).catch((Error)=>{
          console.log(Error);
      })
    }
    else {
      alert("입력 정보를 확인해주세요");
    }
  };


  return (
    <>
      <TopW />
      <div className="container">
        <div className="signup_title">회원가입</div>
        <br></br>
        <div className="name_text">ID</div>
        <Box
          className="login_box"
          component="form"
          sx={{ width: 500, maxWidth: "100%" }}
        >
          <TextField
            placeholder="포비스 ID를 입력해주세요"
            value={signup.id}
            name="id"
            onChange={handleChangeSignUp}
            fullWidth
            id="standard-basic"
          />
        </Box>
        <br></br>
        <div className="name_text">비밀번호</div>
        <Box
          className="login_box"
          component="form"
          sx={{ width: 500, maxWidth: "100%" }}
        >
          <TextField
            placeholder="비밀번호"
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
        <Box
          className="login_box"
          component="form"
          sx={{ width: 500, maxWidth: "100%" }}
        >
          <TextField
            placeholder="비밀번호 확인"
            type={showPasswordCheck ? "text" : "password"}
            value={signup.passwordCheck}
            name="passwordCheck"
            onChange={handleChangeSignUp}
            fullWidth
            id="standard-basic"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPasswordCheck}>
                    {showPasswordCheck ? <VisibilityOff /> : <Visibility />}
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
            placeholder="이름을 입력해주세요"
            value={signup.name}
            name="name"
            onChange={handleChangeSignUp}
            fullWidth
            id="standard-basic"
          />
        </Box>
        <br></br>
        <div className="name_text">학번</div>
        <Box
          className="login_box"
          component="form"
          sx={{ width: 500, maxWidth: "100%" }}
        >
          <TextField
            placeholder="학번을 입력해주세요"
            value={signup.studentNum}
            name="studentNum"
            onChange={handleChangeSignUp}
            fullWidth
            id="standard-basic"
          />
        </Box>
        <br></br>
        <div className="name_text">전화번호</div>
        <Box
          className="login_box"
          component="form"
          sx={{ width: 500, maxWidth: "100%" }}
        >
          <TextField
            placeholder="'-' 없이 번호 만 입력해주세요"
            value={signup.phoneNum}
            name="phoneNum"
            onChange={handleChangeSignUp}
            fullWidth
            id="standard-basic"
          />
        </Box>
        <div className="loginbutton">
          <button onClick={signupHandler} className="login_button">
            회원가입
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
