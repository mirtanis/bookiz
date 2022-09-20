import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Content() {
  return (
    <Container>
      <BookizMain>동화 내용</BookizMain>
      <Link to="/">
        <button>메인으로 돌아가기</button>
      </Link>
    </Container>
  );
}

export default Content;

const Container = styled.div`
  max-width: 100%;
`;

const BookizMain = styled.main`
  font-size: 80px;
  font-weight: bold;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.mainYellow};
  text-align: center;
`;
