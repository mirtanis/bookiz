import React from "react";
import styled from "styled-components";

function HelloMain() {
  return <MainHead>Hello Main</MainHead>;
}

export default HelloMain;

const MainHead = styled.header`
  font-size: 50px;
  font-weight: bold;
  margin-top: 50px;
  text-align: center;
`;
