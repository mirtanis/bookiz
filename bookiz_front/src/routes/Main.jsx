import React from "react";
import HelloMain from "../components/Main/HelloMain";
import styled from "styled-components";
import Bookiz from "../components/Main/Bookiz";

function MainPage() {
  return (
    <div>
      <Container>
        <HelloMain />
        <Bookiz />
      </Container>
    </div>
  );
}

export default MainPage;

const Container = styled.div`
  width: 1440px;
  margin: auto;
`;
