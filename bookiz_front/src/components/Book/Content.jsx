import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import BookPage from "./BookPage"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { bookApis, fetchData } from '../../utils/apis/api';
import { useSearchParams } from 'react-router-dom';

function Content() {
  const [bookContents, setBookContents] = useState([]);

  const [page, setPage] = useState(1);

  const [isPageChanged, setIsPageChanged] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const myRef = useRef();

  const getBookContents = async (url) => {
    return await fetchData.get(url);
  };
  const res = getBookContents(bookApis.BOOK_START(searchParams.get('id')));
  
  useEffect(() => {
    res.then((bookcontents) => {
      setBookContents(bookcontents.data);
    });
  }, []);

  if (bookContents.length <= 0) {
    res.then((bookcontents) => {
      setBookContents(bookcontents.data);
    });
    return (<Container></Container>);
  }

  return (
    <Container>
      <BookPage
        page={bookContents[page - 1].page}
        content={bookContents[page - 1].content}
        image={bookContents[page - 1].image}
        audio={bookContents[page - 1].audio}
        totalpage={bookContents.length}
        type={bookContents[page - 1].type}
        setPage={setPage}
        isPageChanged={isPageChanged}
        setIsPageChanged={setIsPageChanged}
        ref={myRef}
      />
      {page > 1 &&
        <LeftPageButton onClick={() => {
          setPage(page - 1)
          setIsPageChanged(true)
          myRef.current.setEndModalFalse(false)
          }}>
          <AiOutlineLeft size={50} color={"white"} />
        </LeftPageButton>
      }
      {page < bookContents.length &&
        <RightPageButton onClick={() => {
          setPage(page + 1)
          setIsPageChanged(true)
        }}>
          <AiOutlineRight size={50} color={"white"} />
        </RightPageButton>
      }
    </Container>
  );
}

export default Content;

const Container = styled.div`
  max-width: 100%;
  position: relative;
`;

const LeftPageButton = styled.div`
  position: absolute;
  top: 45vh;
  left: 5.4167vw;
  cursor: pointer;
`;

const RightPageButton = styled.div`
  position: absolute;
  top: 45vh;
  right: 5.4167vw;
  cursor: pointer;
`;