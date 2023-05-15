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
import { useSnackbar } from 'notistack';

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
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

  const handleClickLogin = async () => {
    const formData = new FormData();
    formData.append('username', login.id);
    formData.append('password', login.password);
    const config = {
        headers: {
            "content-type": "multipart.form-data"
        }
    }
    await axios.post("/http://141.223.175.213:17000/auth/login", formData, config).then((res) => {
        if (res.data.login === false) {
            enqueueSnackbar(`아이디/비밀번호를 다시 확인해주세요`, { variant: 'error' });
        }
        else if (res.data.login === true) {
            enqueueSnackbar('로그인을 환영합니다', { variant: 'info' });
            setCookie("loginkey", res.data.Id, { path: '/' });
            navigate('/main/home')
        }
    }).catch((Error) => {
        console.log(Error);
    })
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
            placeholder="포비스 아이디를 입력해주세요"
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
            placeholder="비밀번호를 입력해주세요"
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
