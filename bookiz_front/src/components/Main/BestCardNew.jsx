import React, { useState } from "react";
import styled from "styled-components";
import BestCard from "./BestCard";
import { bookListApis, fetchData } from "../../utils/apis/api";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function BestCardListNew() {
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

  console.log(bestSellers);

  const getCrown = [
    "assets/images/금메달.png",
    "assets/images/은메달.png",
    "assets/images/동메달.png",
    "assets/images/goldcrown.svg",
    "assets/images/silvercrown.svg",
    "assets/images/bronzecrown.svg",
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
        <GoldCard>
          {bestSellers
            .filter((bestSeller, i) => i === 0)
            .map((bestSeller, index) => {
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
        </GoldCard>
        <SilverBronzeCard>
          {bestSellers
            .filter((bestSeller, i) => i > 0)
            .map((bestSeller, index) => {
              return (
                <BestCard
                  key={index}
                  crown={getCrown[index + 1]}
                  id={bestSeller.id}
                  title={bestSeller.title}
                  image={bestSeller.image}
                  info={bestSeller.info}
                  page={bestSeller.page}
                />
              );
            })}
        </SilverBronzeCard>
      </Content>
    </Container>
  );
}

export default BestCardListNew;

const Container = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: center;
  flex-direction: column;
  margin-right: 0px;
  margin-bottom: 30px;
`;

const Head = styled.head`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GoldCard = styled.div`
  display: flex;
  justify-content: center;
  height: 43vh;
`;

const SilverBronzeCard = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ContentText = styled.p`
  font-size: 50px;
  font-family: "KOTRAHOPE";
  font-weight: normal;
  color: black;
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
  color: black;
`;

const MoreImage = styled.img`
  width: 80%;
  height: 10%;
`;
