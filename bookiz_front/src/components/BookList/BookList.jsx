import React from "react";
import styled from "styled-components";
import { useState } from "react";
import BookListCard from "./BookListCard";
import Pagination from "./Pagination";
import { bookListApis, fetchData } from "../../utils/apis/api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BookCard from "../Main/Card";
import { keyframes } from "styled-components";

function BookList() {
  const [books, setBooks] = useState([]);
  const categoryid = useParams();
  console.log(categoryid.id);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  useEffect(() => {
    const getCateList = async (url) => {
      return await fetchData.get(url);
    };
    const res = getCateList(bookListApis.BOOK_CATEGORY_LIST(categoryid.id));
    res.then((catelist) => {
      console.log(catelist.data);
      setBooks(catelist.data);
    });
  }, []);

  return (
    <Container>
      <BG />
      <BG2 />
      <BG3 />
      <Label>
        페이지 당 카드 수:&nbsp;
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </Label>
      <Content>
        {books.slice(offset, offset + limit).map((newBook, index) => {
          return (
            <BookCard
              id={newBook.id}
              title={newBook.title}
              image={newBook.image}
              info={newBook.info}
              page={newBook.page}
              key={index}
            />
          );
        })}
      </Content>

      <footer>
        <Pagination
          total={books.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </Container>
  );
}

export default BookList;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const Content = styled.main`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  margin-bottom: 1rem;
  scroll-behavior: smooth;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  margin-bottom: 10px;
  display: flex;
  justify-content: end;
  align-items: center;
  > span {
    padding: 2px;
    background-color: ${(props) => props.theme.colors.mainYellow};
    border-radius: 5px;
    margin-right: 5px;
    padding-left: 9px;
    font-weight: bold;
    font-size: 20px;
    font-family: "Noto Sansf KR", sans-serif;
  }
  > select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: black;
    background-color: #fff;
    padding: 0.6em 1.4em 0.5em 0.8em;
    margin: 0;
    border: 1px solid #aaa;
    border-radius: 0.5em;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    font-weight: bold;
    padding: 4px;
    padding-left: 6px;
    padding-right: 6px;
    background-color: ${(props) => props.theme.colors.mainYellow};
  }
  > option {
    border-radius: 5px;
  }
`;

const slide = keyframes`
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }

`;

const BG = styled.div`
  animation: ${slide} 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.3;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;
  animation-duration: 5s;
`;

const BG2 = styled.div`
  animation: ${slide} 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.3;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;
  animation-direction: alternate-reverse;
  animation-duration: 8s;
`;

const BG3 = styled.div`
  animation: ${slide} 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;
  animation-duration: 8s;
`;
