import React from "react";
import styled from "styled-components";

function Content() {
  return <BookizMain>동화 내용</BookizMain>;
}

export default Content;

const BookizMain = styled.main`
  font-size: 80px;
  font-weight: bold;
  margin-top: 10px;
  color: rebeccapurple;
  text-align: center;
`;
