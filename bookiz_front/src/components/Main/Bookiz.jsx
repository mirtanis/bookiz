import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { keyframes } from "styled-components";

function Bookiz() {
  return (
    <Link to="/" aria-label="메인페이지로 이동">
      <BookizMain>
        <span>B</span>
        <span>O</span>
        <span>O</span>
        <span>K</span>
        <span>I</span>
        <span>Z</span>
      </BookizMain>
    </Link>
  );
}

export default Bookiz;

const depth = keyframes`
0% {
    transform: translatex(0) translatey(0);
  }
  100% {
    font-variation-settings: "EDPT" 200;
    transform: translatex(0.15em) translatey(0.1em);
  }`;

const BookizMain = styled.main`
  font-family: "KOTRAHOPE";
  font-weight: normal;
  font-size: 60px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.subBlack};
  text-align: center;
  > span {
    animation: ${depth} 1s ease-in-out alternate infinite;
    position: relative;
    display: inline-block;
    font-variation-settings: "EDPT" 30;
  }
  span:nth-child(1) {
    animation-delay: 0.1s;
    color: red;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
    color: blue;
  }
  span:nth-child(3) {
    animation-delay: 0.3s;
    color: pink;
  }
  span:nth-child(4) {
    animation-delay: 0.4s;
    color: green;
  }
  span:nth-child(5) {
    animation-delay: 0.5s;
    color: purple;
  }
  span:nth-child(6) {
    animation-delay: 0.6s;
  }
  span:nth-child(7) {
    animation-delay: 0.7s;
  }
  span:nth-child(8) {
    animation-delay: 0.8s;
  }
  span:nth-child(9) {
    animation-delay: 0.9s;
  }
  span:nth-child(10) {
    animation-delay: 1s;
  }
  span:nth-child(11) {
    animation-delay: 1.1s;
  }
  span:nth-child(12) {
    animation-delay: 1.2s;
  }
`;
