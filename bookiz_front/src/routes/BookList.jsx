import React from "react";
import styled from "styled-components";
import Navbar from "../components/Main/Navbar";
import { useSearchParams } from "react-router-dom";
import BookList from "../components/BookList/BookList";

function BookListPage() {
  const [searchParams] = useSearchParams();
  const key = searchParams.get("keyword");

  return (
    <div>
      <Container>
        <Navbar />
        <KeywordContainer>'{key}' 검색 결과</KeywordContainer>
        <BookList/>
      </Container>
    </div>
  );
}

export default BookListPage;

const Container = styled.div`
  width: 90%;
  margin: auto;
`;

const KeywordContainer = styled.h2`
  margin-top: 100px;
  height: 5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
`;
