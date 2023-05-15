import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Nav from "components/Common/nav";
import icBell from "assets/ic_home_bell.png";
import logo from "assets/logo.png";
import juniorill from "assets/juniorill.png";
import { Grid, ImageList, ImageListItem, ImageListItemBar, IconButton } from '@mui/material';
import { Search, Info } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

import poster_1 from "img/poster_1.jpg";
import poster_2 from "img/poster_2.jpg";
import poster_3 from "img/poster_3.jpg";
import poster_4 from "img/poster_4.jpg";
import poster_5 from "img/poster_5.jpg";
import poster_6 from "img/poster_6.jpg";

const SeniorMain = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const [ProgramDatas, setProgramDatas] = useState([
    {
      Program_id: '영진',         // Program id
      Program_title: 'Founders 모집',       // Program 제목
      Program_org: 'Founders',         // Program 주최자
      Info: '',
      Image: poster_1,           
      Date: '',              //신청마감날짜
    },
    {
      Program_id: '영진',         // Program ide
      Program_title: '산경과 주점',       // Program 제목
      Program_org: '산경과',         // Program 주최자
      Info: '',
      Image: poster_2,           
      Date: '',              //신청마감날짜
    },
    {
      Program_id: '영진',         // Program id
      Program_title: 'IDAHOT',       // Program 제목
      Program_org: '모담',         // Program 주최자
      Info: '',
      Image: poster_3,           
      Date: '',              //신청마감날짜
    },
    {
      Program_id: '영진',         // Program id
      Program_title: 'Tech-Review 4차',       // Program 제목
      Program_org: '테크리뷰 운영진',         // Program 주최자
      Info: '',
      Image: poster_4,           
      Date: '',              //신청마감날짜
    },
    {
      Program_id: '영진',         // Program id
      Program_title: '생각나눔 모집',       // Program 제목
      Program_org: '생각나눔',         // Program 주최자
      Info: '',
      Image: poster_5,           
      Date: '',              //신청마감날짜
    },
    {
      Program_id: '영진',         // Program id
      Program_title: '사랑이 담긴 요리',       // Program 제목
      Program_org: '물리학과',         // Program 주최자
      Info: '',
      Image: poster_6,           
      Date: '',              //신청마감날짜
    }
  ])
  
  const loadProgram = async () => {
    await axios.get('/api/program')
      .then(res => {
        console.log(res.data.programs);
        setProgramDatas(res.data.programs);
      })
      .catch(e => console.log(e));
  }
  
  useEffect(()=>{
      loadProgram();
  }, []);

  return (
    <StSeniorMain>
      <Nav />
      <StLogo>
        <img src={logo} alt="로고" />
      </StLogo>
      <StIll>
        <img src={juniorill} alt="" />
      </StIll>
      <StLogoHeader>
        <img src={icBell} alt="알림" />
      </StLogoHeader>
      <StTitleHeader>
        <StPurpleBox>
          <StTitleText>
            postech 내부 활동을 <br />
            한자리에서 신청해보아요!
          </StTitleText>
        </StPurpleBox>
      </StTitleHeader>
      <Grid item xs={10} md={9} lg={8}>
        <ImageList sx={{ width: '100%', height: '100%'}} cols={2}>
          {ProgramDatas.map((item, index) => (
            <ImageListItem key={index} onClick={()=>navigate(`/main/${item.Program_id}`)}>
              <img
                // style={{margin: '10px'}}
                src={item.Image}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                id={item.CopyrightHolder_id}
                title={item.Program_title}
                subtitle={item.Program_org}
                // title={`${item.NFTtitle} by ${item.CopyrightHolderName}`}
                // subtitle={`${item.NFTprice} ETH`}
                actionIcon={
                  <div>
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                      type="button" 
                    >
                      <Info />
                    </IconButton>               
                  </div>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </StSeniorMain>
  );
};
export default SeniorMain;
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
  height: 190px;
  width: 375px;
`;
const StPurpleBox = styled.div`
  height: 123px;
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
