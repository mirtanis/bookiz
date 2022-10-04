import React from "react";
import styled from "styled-components";
import Navbar from "../components/Main/Navbar";
import BookNewList from "../components/BookNew/BookNewList";

function BookNewPage() {
  return (
    <div>
      <Container>
        <Navbar />
        <BookNewList />
      </Container>
    </div>
  );
}

export default BookNewPage;

const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 70px;
`;
