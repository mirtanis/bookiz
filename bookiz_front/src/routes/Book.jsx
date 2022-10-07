import React from "react";
import styled from "styled-components";
import Content from "../components/Book/Content";

function BookPage() {

  return (
    <div>
      <Container>
        <Content />
      </Container>
    </div>
  );
}

export default BookPage;

const Container = styled.div`
  width: 100%;
  margin: auto;
`;
