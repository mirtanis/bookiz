import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BookPage from "./BookPage"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function Content() {
  const [bookContents, setBookContents] = useState([
    {page: 1, content: "옛날 어느 마을에 가난하지만 정직하고 마음씨 착한 나무꾼이 살고 있었어요.", image: "assets/images/금도끼 은도끼/1.jpg", audio: "", type: 1},
    {page: 2, content: "아이쿠, 이런! 내 도끼", image: "assets/images/금도끼 은도끼/2.jpg", audio: "", type: 0 },
    {page: 3, content: "그때였어요. 연못에서 갑자기 하얀 연기가 일더니 하얀 옷을 입은 산신령이 나타났어요.", image: "assets/images/금도끼 은도끼/3.jpg", audio: "", type: 1}
  ]);

  const [page, setPage] = useState(1);

  return (
    <Container>
      {/* <BookizMain>nowbook[setPage]</BookizMain> */}
      <BookPage page={bookContents[page - 1].page} content={bookContents[page - 1].content} image={bookContents[page - 1].image} totalpage={bookContents.length} />
      {page > 1 &&
        <LeftPageButton onClick={() => setPage(page - 1)}>
          <AiOutlineLeft size={50} />
        </LeftPageButton>
      }
      {page < bookContents.length &&
        <RightPageButton onClick={() => setPage(page + 1)}>
          <AiOutlineRight size={50} />
        </RightPageButton>
      }
      {/* <Link to="/">
        <button>메인으로 돌아가기</button>
      </Link> */}
    </Container>
  );
}

export default Content;

const Container = styled.div`
  max-width: 100%;
  position: relative;
`;

const BookizMain = styled.main`
  font-size: 80px;
  font-weight: bold;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.mainYellow};
  text-align: center;
`;

const LeftPageButton = styled.a`
  position: absolute;
  top: 35.5556vh;
  left: 5.4167vw;
  cursor: pointer;
`;

const RightPageButton = styled.a`
  position: absolute;
  top: 35.5556vh;
  right: 5.4167vw;
  cursor: pointer;
`;