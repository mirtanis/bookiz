import React from "react";
import styled from "styled-components";
import Navbar from "../components/Main/Navbar";

function BookListPage() {
  return (
    <div>
      <Container>
        <Navbar />
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
