import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewCard from "./NewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { bookListApis, fetchData } from "../../utils/apis/api";
import bookshelf from "../../assets/images/bookshelf.png";

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
      <Head>
        <ContentText>신간 동화</ContentText>
        <More>
          <Link
            to="/booklist/new"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MoreText>더보기</MoreText>
            <MoreImage src="assets/images/arrow.svg" />
          </Link>
        </More>
      </Head>
      <Content>
        <SwiperContainer>
          <Swiper
            watchOverflow={true}
            navigation={true}
            centeredSlides={false}
            initialSlide={0}
            slidesPerView={4}
            spaceBetween={20}
            space
            allowTouchMove={false}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
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
                      id={newBook.id}
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
    </Container>
  );
}

export default NewCardList;

const Container = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: center;
  flex-direction: column;
`;

const Head = styled.head`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 70px;
`;

const Content = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
`;

const ContentText = styled.p`
  font-size: 36px;
  color: black;
  font-family: "KOTRAHOPE";
  font-weight: normal;
`;

const SwiperContainer = styled.div`
  width: 100%;
  background-image: url(${bookshelf});
  border-radius: 10px;
  border: 10px solid #361f16;
  border-width: 5px 5px 20px 5px;
`;

const More = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MoreText = styled.p`
  font-family: "KOTRAHOPE";
  font-weight: normal;
  color: black;
  font-size: 26px;
  margin: 0;
`;

const MoreImage = styled.img`
  width: 70%;
`;
