import React, { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Checkbox,
  IconButton,
  FormGroup,
  FormControlLabel,
  Button,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import TopW from "components/Common/TopW";

const Login = () => {
  const [cookies, setCookie] = useCookies(["loginkey"]);
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    id: "",
    password: "",
  });

  const handleChangeLogin = (event) => {
    let changeLogin = { ...login };
    changeLogin[event.target.name] = event.target.value;
    setLogin(changeLogin);
  };

  const handleClickLogin = () => {
    const data = {
      userInfo: {
        ID: "1",
        Password: "2",
      },
    };

    axios
      .post("api/login", data)
      .then((response) => {
        console.log(response);
        if (response.data.login === false) {
          alert("아이디와 비밀번호를 다시 확인해주세요");
        } else {
          if (response.data.Status) {
            navigate("/senior", { state: response.data });
          } else {
            navigate("/junior", { state: response.data });
          }
        }
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <TopW />
      <div className="container">
        <div className="login_title">로그인</div>
        <br></br>
        <Box
          className="login_box"
          component="form"
          sx={{ width: 500, maxWidth: "100%" }}
        >
          <TextField
            placeholder="이메일 주소 또는 아이디"
            value={login.id}
            name="id"
            onChange={handleChangeLogin}
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
            value={login.password}
            name="password"
            onChange={handleChangeLogin}
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

        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="로그인 상태 유지"
          />
        </FormGroup>
        <br></br>
        <div
          className="text1"
          onClick={() => {
            navigate("/signup");
          }}
        >
          아이디 찾기 | 비밀번호 재설정 | 회원가입
        </div>

        <div className="loginbutton">
          <button className="login_button" onClick={handleClickLogin}>
            로그인
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
