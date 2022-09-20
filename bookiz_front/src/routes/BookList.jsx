import React from "react";
import styled from "styled-components";
import Navbar from "../components/Main/Navbar";
import { useSearchParams } from "react-router-dom";

function BookListPage() {
  const [searchParams] = useSearchParams();
  const key = searchParams.get("keyword");

  return (
    <div>
      <Container>
        <Navbar />
        <KeywordContainer>'{key}' 검색 결과</KeywordContainer>
        동화 목록이 출력 됩니다.
      </Container>
    </div>
  );
}

export default BookListPage;

const Container = styled.div`
  width: 1440px;
  margin: auto;
`;

const KeywordContainer = styled.h2`
  margin-top: 100px;
  height: 5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
`;
