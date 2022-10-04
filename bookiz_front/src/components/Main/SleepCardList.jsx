import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewCard from "./NewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { bookListApis, fetchData } from "../../utils/apis/api";

function SleepCardList() {
  const [sleepBooks, setSleepBooks] = useState([]);

  useEffect(() => {
    const getnewBookList = async (url) => {
      return await fetchData.get(url);
    };
    const res = getnewBookList(bookListApis.BOOK_CATEGORY_LIST(3));
    res.then((sleeplist) => {
      setSleepBooks(sleeplist.data);
    });
  }, []);

  return (
    <Container>
      <Head>
        <ContentText>러블리 공주 명작 동화</ContentText>
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
            {sleepBooks.map((newBook, index) => {
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
    </Container>
  );
}

export default  SleepCardList;

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  margin: auto;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;

  
`;

const Head = styled.head`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Content = styled.div`
  width: 100%;  
  border: 10px solid #a87328;
  background-color: #281C0A;
`;

const ContentText = styled.p`
  font-size: 36px;
  margin-bottom: 20px;
  font-family: "KOTRAHOPE";
  font-weight: normal;
`;

const SwiperContainer = styled.div`
  width: 100%;
`;

const More = styled.div`
  width: 100px;
  margin-top: 2.2222vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const MoreText = styled.p`
  font-family: "KOTRAHOPE";
  font-weight: normal;
  font-size: 26px;
  margin: 0;
`;

const MoreImage = styled.img`
  width: 70%;
  height: 2.6667vh;
`;
