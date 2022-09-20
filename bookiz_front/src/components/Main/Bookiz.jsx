import React from "react";
import styled from "styled-components";

function Bookiz() {
  return <BookizMain>BOOKIZ</BookizMain>;
}

export default Bookiz;

const BookizMain = styled.main`
  font-size: 80px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.subBlack};
  text-align: center;
`;
