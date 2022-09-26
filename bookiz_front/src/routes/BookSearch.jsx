import React from "react";
import styled from "styled-components";
import Navbar from "../components/Main/Navbar";
import { useSearchParams } from "react-router-dom";
import BookList from "../components/BookList/BookList";
import { bookListApis, fetchData } from "../../utils/apis/api";
import { useEffect } from "react";
import { useState } from "react";

function BookSearchPage() {
  const [searchParams] = useSearchParams();
  const key = searchParams.get("keyword");
  const [bookSearchList, setBookSerachList] = useState([]);
  useEffect(() => {
    const getSearchList = async () => {
      return await fetchData.get(bookListApis.BOOK_SEARCH_LIST, key);
    };
    const res = getSearchList(bookListApis.BOOK_SEARCH_LIST, key);
    res.then((searchlist) => {
      setBookSerachList(searchlist.data);
    });
  }, []);
  
  return (
    <div>
      <Container>
        <Navbar />
        <KeywordContainer>'{key}' 검색 결과</KeywordContainer>
        <BookList />
      </Container>
    </div>
  );
}

export default BookSearchPage;

const Container = styled.div`
  width: 90%;
  margin: auto;
`;

const KeywordContainer = styled.h2`
  margin-top: 100px;
  height: 5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
`;
