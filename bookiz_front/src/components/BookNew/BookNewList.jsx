import React from "react";
import styled from "styled-components";
import { useState } from "react";
import BookListCard from "../BookList/BookListCard";
import Pagination from "../BookList/Pagination";
import { bookListApis, fetchData } from "../../utils/apis/api";
import { useEffect } from "react";

function BookNewList() {
  const [books, setBooks] = useState([]);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  useEffect(() => {
    const getCateList = async (url) => {
      return await fetchData.get(url);
    };
    const res = getCateList(bookListApis.BOOK_NEW_LIST);
    res.then((newlist) => {
      setBooks(newlist.data);
    });
  }, []);

  return (
    <Container>
      <Label>
        페이지 당 표시할 게시물 수:&nbsp;
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
            <BookListCard
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

export default BookNewList;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10.6667vh;
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
`;
