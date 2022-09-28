import React from "react";
import styled from "styled-components";
import Bookiz from "../components/Main/Bookiz";
import Navbar from "../components/Main/Navbar";
import BestCardList from "../components/Main/BestCardList";
import NewCardList from "../components/Main/NewCardList";
import { keyframes } from "styled-components";
function MainPage() {
  return (
    <div>
      <Container>
        <Navbar />
        <Bookiz />
        <BestCardList />
        <NewCardList />
        <BG />
        <BG2 />
        <BG3 />
      </Container>
    </div>
  );
}

export default MainPage;

const Container = styled.div`
  width: 100%;
  margin: auto;
`;

const slide = keyframes`
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }

`;

const BG = styled.div`
  animation: ${slide} 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;
`;

const BG2 = styled.div`
  animation: ${slide} 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;
  animation-direction: alternate-reverse;
  animation-duration: 4s;
`;

const BG3 = styled.div`
  animation: ${slide} 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;
  animation-duration: 5s;
`;
