import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import Navbar from "../components/Main/Navbar";
import BestCardList from "../components/Main/BestCardList";
import NewCardList from "../components/Main/NewCardList";
import SleepCardList from "../components/Main/SleepCardList";

function MainPage() {
  return (
    <div>
      <Container>
        <Navbar />
        <Wrapper>
        <BestContainer>
          <BestCardList />             
        </BestContainer>
        <ListContainer>
          <NewCardList/> 
          <SleepCardList/>
        </ListContainer>
        </Wrapper>
          <BG />
          <BG2 />
          <BG3 /> 
      </Container>
    </div>
  );
}

export default MainPage;

const Container = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: center;
  height: calc(100vh - 70px);
`;

const Wrapper = styled.div `
  margin-top: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;

`

const BestContainer = styled.div`
  width: 40%;
  height: 100%;
  padding: 0px 20px 0px 20px;

`

const ListContainer = styled.div`
  width: 60%;
  height: 100%;
  padding: 0px 20px 0px 20px;      
`

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
