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
      <Wrapper>
        <BestContainer>
          {/* <BestCardList />              */}
          <BestCardListNew />
        </BestContainer>
        <ListContainer>
          <NewCardList />
          {/* <NewCardList/>  */}
          <CateCardList />
        </ListContainer>
      </Wrapper>
    </Container>
  );
}

export default MainPage;

const Container = styled.div`
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  /* background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f6089272864385.5bf5cfa6c0b3f.jpg");  */
  background-image: url(${bgimg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 55px;
`;

const BestContainer = styled.div`
  width: 40%;
  height: 100vh;
  padding: 0px 20px 0px 20px;
`;

const ListContainer = styled.div`
  width: 60%;
  padding: 0px 20px 0px 20px;
  height: 100vh;
`;
