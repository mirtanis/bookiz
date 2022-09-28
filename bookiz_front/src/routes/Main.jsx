import React from "react";
// import { useState } from "react";
import HelloMain from "../components/Main/HelloMain";
import styled from "styled-components";
import Bookiz from "../components/Main/Bookiz";
import Navbar from "../components/Main/Navbar";
import BestCardList from "../components/Main/BestCardList";
import NewCardList from "../components/Main/NewCardList";
// import BookModal from "../components/Main/BookModal";

function MainPage() {
  return (
    <div>
      <Container>
        <Navbar />
        <Bookiz />
        <BestCardList />
        <NewCardList />
      </Container>
    </div>
  );
}

export default MainPage;

const Container = styled.div`
  width: 100%;
  margin: auto;
`;
