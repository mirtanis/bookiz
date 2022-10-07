import React from "react";
import styled from "styled-components";
import Navbar from "../components/Main/Navbar";
import { useSearchParams } from "react-router-dom";
import BookSearchList from "../components/BookSearchList.jsx/BookSearchList";

function BookSearchPage() {
  const [searchParams] = useSearchParams();
  const key = searchParams.get("keyword");

  return (
    <div>
      <Container>
        <Navbar />
        <MainContainer>
          <KeywordContainer>'{key}' 검색 결과</KeywordContainer>
          <BookSearchList />
        </MainContainer>
      </Container>
    </div>
  );
}

export default BookSearchPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
`;

const MainContainer = styled.main`
  width: 90%;
  margin: auto;
`;

const KeywordContainer = styled.h2`
  margin-top: 20px;
  height: 5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
`;
