import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import Navbar from "../components/Main/Navbar";
import BestCardList from "../components/Main/BestCardList";
import NewCardList from "../components/Main/NewCardList";
import BestCardListNew from "../components/Main/BestCardNew";
import bgimg from "../assets/images/oakwoodimg.jpg";
import CateCardList from "../components/Main/CateCardList";

function MainPage() {
  return (
    <Container>
      <Navbar />
      <MainContainer>
        <Wrapper>
          <BestContainer>
            {/* <BestCardList /> */}
            <BestCardListNew />
          </BestContainer>
          <ListContainer>
            <NewCardList />
            <CateCardList />
          </ListContainer>
        </Wrapper>
      </MainContainer>
    </Container>
  );
}

export default MainPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${bgimg});
  background-repeat: repeat;
  background-size: cover;
  min-height: 100vh;
`;

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  height: 100%;
  /* background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f6089272864385.5bf5cfa6c0b3f.jpg");  */
  
`;

const Wrapper = styled.div`
  margin-top: 30px;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const BestContainer = styled.div`
  width: 40%;
  padding: 0px 20px 0px 20px;
`;

const ListContainer = styled.div`
  width: 60%;
  padding: 0px 20px 0px 20px;
`;
