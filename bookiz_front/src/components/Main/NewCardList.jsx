import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewCard from "./NewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { bookListApis, fetchData } from "../../utils/apis/api";
import { Link } from "react-router-dom";

function NewCardList() {
  const [newBooks, setNewBooks] = useState([]);
  useEffect(() => {
    const getRankList = async () => {
      return await fetchData.get(bookListApis.BOOK_NEW_LIST);
    };
    const res = getRankList(bookListApis.BOOK_NEW_LIST);
    res.then((newlist) => {
      setNewBooks(newlist.data);
    });
  }, []);
  console.log(newBooks);

  return (
    <Container>
      <Empty />
      <Content>
        <ContentText>신간 동화</ContentText>
        <SwiperContainer>
          <Swiper
            watchOverflow={true}
            navigation={true}
            centeredSlides={false}
            initialSlide={0}
            slidesPerView={4}
            spaceBetween={0}
            allowTouchMove={false}
            modules={[Navigation]}
            className="mySwiper"
          >
            {newBooks.map((newBook, index) => {
              return (
                <SwiperSlide key={index}>
                  <NewCard title={newBook.title} image={newBook.image} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </SwiperContainer>
      </Content>
      <More>
        <Link
          to="/booklist/new"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MoreText>더보기</MoreText>
          <MoreImage src="assets/images/arrow.svg" />
        </Link>
      </More>
    </Container>
  );
}

export default NewCardList;

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10.6667vh;
`;

const Empty = styled.div`
  width: 13.5417vw;
`;

const Content = styled.div`
  width: 72.9167vw;
  display: flex;
  flex-direction: column;
`;

const ContentText = styled.p`
  font-size: 6.6667vh;
  margin: 0;
`;

const SwiperContainer = styled.div`
  width: 100%;
`;

const More = styled.div`
  width: 4.4792vw;
  margin-top: 2.2222vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;
`;

const MoreText = styled.p`
  font-size: 2.2222vh;
  margin: 0;
`;

const MoreImage = styled.img`
  width: 100%;
  height: 2.6667vh;
`;
