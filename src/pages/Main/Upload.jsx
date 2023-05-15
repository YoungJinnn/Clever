import { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import Nav from "components/Common/nav";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import icBell from "assets/ic_home_bell.png";
import logo from "assets/logo.png";
import EssayQuestion from './EssayQuestion'
import { Grid, Button } from '@mui/material'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Upload = () => {
  const theme = createTheme({
    palette: {
      secondary: { main: '#A4A4A4'},
      warning: { main: '#6661E6'}
    },
  });
  
  const navigate = useNavigate();
  const scrollRef = useRef(null);


  const [programData, setProgramData] = useState({
      Program_title: '',       // Program 제목
      Program_org: '',         // Program 주최자
      Info: '',
      Image: '',           
  })

  const handleChangeProgramData = (event) => {
    let changeProgramData = { ...programData };
    changeProgramData[event.target.name] = event.target.value;
    setProgramData(changeProgramData);
  };

  const [startdate, setStartDate] = useState(new Date());

    const signupHandler = async() => {
    if (programData.Program_title !== "" 
        && programData.Program_org !== "" 
        && programData.Info !== "" 
        && programData.Image !== "") {
          
      await axios ({
        method: 'post',
        url: `/api/program`,
        data: {
          Program_title: programData.Program_title,
          Program_org: programData.Program_org,
          Info: programData.Info,
          Image: programData.Image,
          date: startdate,
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

  const onChangeImages = useCallback((e) => {
    const{ files } = e.target;
    const imageFormData = new FormData();
    [].forEach.call(files, (file) => {
      imageFormData.append('image', file);
    })

    for (const value of imageFormData.values()) {
      console.log(value);
    }
    }, []);


  return (
    <ThemeProvider theme={theme}>
    <StSeniorMain>
      <Nav />
      <StLogo>
        <img src={logo} alt="로고" />
      </StLogo>
      <StLogoHeader>
        <img src={icBell} alt="알림" />
      </StLogoHeader>
      <StTitleHeader>
        <StPurpleBox>
        </StPurpleBox>
      </StTitleHeader>
      <section className='mypageselfintro1'>
          <Grid container justifyContent='center' alignItems='center' spacing={2}>
            <Grid item xs={10} md={9} lg={8}>
              <h1 style={{ fontSize: '20px', fontWeight: '800', color: '#2B2627', margin: '0px' }}>
                새 홍보글 작성
              </h1>
            </Grid>
            <Grid item container xs={10} md={9} lg={8} style={{ display: 'flex', flexDirection: 'column'}}>
              <h2 style={{ fontSize: '15px', fontWeight: '800', color: '#2B2627', marginTop: '0px' }}>
                행사명을 입력해주세요
              </h2>
              <EssayQuestion 
                pname='place'
                question="행사명"
                changeEssayHandler={handleChangeProgramData}/>
            </Grid>
            <Grid item container xs={10} md={9} lg={8} style={{ display: 'flex', flexDirection: 'column'}}>
              <h2 style={{ fontSize: '15px', fontWeight: '800', color: '#2B2627', marginTop: '0px' }}>
                주최를 입력해주세요
              </h2>
              <EssayQuestion 
                pname='place'
                question="주최"
                changeEssayHandler={handleChangeProgramData}/>
            </Grid>
            <Grid item container xs={10} md={9} lg={8} style={{ display: 'flex', flexDirection: 'column'}}>
              <h2 style={{ fontSize: '15px', fontWeight: '800', color: '#2B2627', marginTop: '0px' }}>
                행사에 대한 상세 설명을 기록해주세요
              </h2>
              <EssayQuestion 
                pname='selfintro'
                question="자기소개서 입력"
                changeEssayHandler={handleChangeProgramData}/>
            </Grid>
            <Grid item container xs={10} md={9} lg={8} style={{ display: 'flex', flexDirection: 'column'}}>
              <h2 style={{ fontSize: '15px', fontWeight: '800', color: '#2B2627', marginTop: '0px' }}>
                접수 마감 기한을 선택해주세요
              </h2>
              <DatePicker 
                dateFormat="yyyy년 MM월 dd일"
                selected = {startdate} 
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startdate}
                // endDate={enddate}
              />
            </Grid>
            <Grid item container xs={10} md={9} lg={8} style={{ display: 'flex', flexDirection: 'column'}}>
              <h2 style={{ fontSize: '15px', fontWeight: '800', color: '#2B2627', marginTop: '0px' }}>
                사진을 업로드해주세요
              </h2>
                <input type="file" id="image" accept="image/*" multiple/>
              <div id="image_container"></div>
            </Grid>
            <Grid item container xs={10} md={9} lg={8} justifyContent='right'>
              <Button color='warning' variant="contained" style={{marginTop: '15px', height: '32px', width: '180px', fontWeight: '500', fontSize: '14px'}}>자기소개서 등록</Button>
            </Grid>
          </Grid>
      </section>
    </StSeniorMain>
    </ThemeProvider>
  )
}

export default Upload

const StLogo = styled.div`
  position: absolute;
  margin-left: 20px;
  margin-top: 30px;

  & > img {
    width: 120px;
    height: 40px;
  }
`;
const StIll = styled.div`
  position: absolute;
  margin: 47.57px 0 0 154px;

  & > img {
    width: 217.19px;
    height: 178px;
  }
`;
const StSeniorMain = styled.div`
  width: 375px;
  overflow-x: scroll;
`;
const StLogoHeader = styled.div`
  width: 375px;
  height: 37px;

  & > img {
    width: 19px;
    height: 19px;
    float: right;
    margin: 14px 18px 0 0;
  }

  background: rgba(102, 97, 230, 0.15);
`;
const StTitleHeader = styled.div`
  height: 100px;
  width: 375px;
`;
const StPurpleBox = styled.div`
  height: 50px;
  width: 375px;
  background: rgba(102, 97, 230, 0.15);
`;
const StTitleText = styled.h1`
  padding: 56px 0 0 30px;
  margin: 0px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.02em;

  color: #202e5f;
`;
const StReservationContainer = styled.section`
  & > div {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  margin-bottom: 30px;
`;
const StSimilarSeniorContainer = styled.section`
  & > div {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }
  margin-bottom: 30px;
`;
const StJuniorNeedsContainer = styled.section`
  overflow-x: scroll;
  margin-bottom: 100px;

  & > div {
    display: inline-flex;
    overflow-x: scroll;
    gap: 12px;
    margin: 0 30px 0 30px;
  }
`;
const StLabel = styled.h2`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;

  color: #202e5f;

  margin-left: 30px;
`;
