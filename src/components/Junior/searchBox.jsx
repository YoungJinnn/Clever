import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import icSearch from "assets/ic_search.png";

const SearchBox = (props) => {
  const { searchOption } = props;
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    let valuePost = 5;
    dataPost();
    if (searchOption === "Company") {
      switch (inputRef.current.value) {
        case "삼성전자":
          valuePost = 1;
          break;
        case "LG전자":
          valuePost = 2;
          break;
        case "애플":
          valuePost = 3;
          break;
        case "구글":
          valuePost = 4;
          break;
        default:
          break;
      }
    } else if (searchOption === "Category") {
      switch (inputRef.current.value) {
        case "개발자":
          valuePost = 1;
          break;
        case "UX/UI 디자이너":
          valuePost = 2;
          break;
        case "인사":
          valuePost = 3;
          break;
        case "마케터":
          valuePost = 4;
          break;
        default:
          break;
      }
    }
    dataPost(valuePost);
  };

  const dataPost = (props) => {
    const valuePost = props;
    let opt = 0;
    if (searchOption === "Company") {
      opt = 1;
    } else if (searchOption === "Category") {
      opt = 2;
    }
    axios
      .post("api/senior/search", {
        opt: valuePost,
      })
      .then((res) => {
        console.log("응답결과", res);
        // navigate("/junior/search", { state: res });
      })
      .catch((e) => console.log("error catch :(", e));
  };

  return (
    <StSearchBox>
      <input
        type="text"
        placeholder={
          searchOption === "Company"
            ? "궁금한 회사를 검색해보세요"
            : "궁금한 직무를 검색해보세요"
        }
        ref={inputRef}
      />
      <img src={icSearch} alt="검색" onClick={handleSearch} />
    </StSearchBox>
  );
};

export default SearchBox;
const StSearchBox = styled.div`
  width: 323px;
  height: 37px;

  background: #e8e7fb;
  border-radius: 5px;

  & > input {
    height: 18px;
    width: 280px;
    margin: 7px;
    background: #e8e7fb;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
  }
  & > input:active {
    outline: none;
    box-shadow: none;
    border: none;
  }
  & > input:focus {
    outline: none;
  }

  & > img {
    width: 12px;
    height: 12px;
    margin-top: 11px;
  }
`;
