import React, { useState } from "react";
import styled from "styled-components";
import BestCard from "./BestCard";
import { bookListApis, fetchData } from "../../utils/apis/api";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function BestCardList() {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const getRankList = async () => {
      return await fetchData.get(bookListApis.BOOK_RANK_LIST);
    };
    const res = getRankList(bookListApis.BOOK_RANK_LIST);
    res.then((ranklist) => {
      setBestSellers(ranklist.data);
    });
  }, []);

  const getCrown = [
    "assets/images/금메달.png",
    "assets/images/은메달.png",
    "assets/images/동메달.png",
  ];

  return (
    <Container>
      <Head>
        <ContentText>베스트 셀러</ContentText>
        <More>
          <Link
            to="/booklist/all"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MoreText>전체보기</MoreText>
            <MoreImage src="assets/images/arrow.svg" />
          </Link>
        </More>
      </Head>
      <Content>
        <BestCards>
          {bestSellers.map((bestSeller, index) => {
            return (
              <BestCard
                key={index}
                crown={getCrown[index]}
                id={bestSeller.id}
                title={bestSeller.title}
                image={bestSeller.image}
                info={bestSeller.info}
                page={bestSeller.page}
              />
            );
          })}
        </BestCards>
      </Content>
    </Container>
  );
}

export default BestCardList;

const Container = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: center;
  flex-direction: column;
  margin-right: 0px;
`;

const Head = styled.head`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentText = styled.p`
  font-size: 50px;
  font-family: "KOTRAHOPE";
  font-weight: normal;
`;

const BestCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin-bottom: 1rem;
  scroll-behavior: smooth;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const More = styled.div`
  width: 100px;
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
  width: 80%;
  height: 10%;
`;
