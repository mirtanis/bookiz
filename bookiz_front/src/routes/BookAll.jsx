import React from "react";
import styled from "styled-components";
import Navbar from "../components/Main/Navbar";
import BookAllList from "../components/BookAllList/BookAllList";

function BookAllPage() {
  return (
    <div>
      <Container>
        <Navbar />
        <MainContainer>
          <BookAllList />
        </MainContainer>
      </Container>
    </div>
  );
}

export default BookAllPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
`;

const MainContainer = styled.main`
  width: 90%;
  margin: auto;
`;
