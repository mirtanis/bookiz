import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/icons/BOOKIZ-removebg.png";

function Logo() {
  return (
    <LogoContainer>
      <Link to="/" aria-label="메인페이지로 이동">
        <img src={logo} alt="북키즈 로고" width="200" height="200" />
      </Link>
    </LogoContainer>
  );
}

export default Logo;

const LogoContainer = styled.div`
  height: 80px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    &:hover {
      cursor: pointer;
    }
  }
`;
