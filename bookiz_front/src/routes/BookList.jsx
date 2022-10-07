import React from "react";
import styled from "styled-components";
import Navbar from "../components/Main/Navbar";
import BookList from "../components/BookList/BookList";

function BookListPage() {
  return (
    <div>
      <Container>
        <Navbar />
        <MainContainer>
          <BookList />
        </MainContainer>
      </Container>
    </div>
  );
}

export default BookListPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
`;

const MainContainer = styled.main`
  width: 90%;
  margin: auto;
`;
