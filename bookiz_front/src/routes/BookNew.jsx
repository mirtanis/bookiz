import React from "react";
import styled from "styled-components";
import Navbar from "../components/Main/Navbar";
import BookNewList from "../components/BookNew/BookNewList";

function BookNewPage() {
  return (
    <div>
      <Container>
        <Navbar />
        <MainContainer>
          <BookNewList />
        </MainContainer>
      </Container>
    </div>
  );
}

export default BookNewPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
`;

const MainContainer = styled.main`
  width: 90%;
  margin: auto;
`;
