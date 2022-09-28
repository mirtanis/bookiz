import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewCard from "./NewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { bookListApis, fetchData } from "../../utils/apis/api";

function NewCardList() {
  const [newBooks, setNewBooks] = useState([]);

  useEffect(() => {
    const getnewBookList = async (url) => {
      return await fetchData.get(url);
    };
    const res = getnewBookList(bookListApis.BOOK_NEW_LIST);
    res.then((newlist) => {
      setNewBooks(newlist.data);
    });
  }, []);

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
            spaceBetween={20}
            allowTouchMove={false}
            breakpoints={{
              10: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {newBooks.map((newBook, index) => {
              return (
                <div>
                  <SwiperSlide key={index}>
                    <NewCard
                      title={newBook.title}
                      image={newBook.image}
                      info={newBook.info}
                      page={newBook.page}
                    />
                  </SwiperSlide>
                </div>
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
  margin-bottom: 10px;
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
`;

const MoreText = styled.p`
  font-size: 2.2222vh;
  margin: 0;
`;

const MoreImage = styled.img`
  width: 100%;
  height: 2.6667vh;
`;
