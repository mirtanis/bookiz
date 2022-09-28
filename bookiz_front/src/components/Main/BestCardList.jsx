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
  width: 80%;
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
  display: flex;
  flex-direction: column;
`;

const ContentText = styled.p`
  font-size: 50px;
  margin-bottom: 20px;
  font-family: "KOTRAHOPE";
  font-weight: normal;
`;

const BestCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const More = styled.div`
  width: 100px;
  margin-top: 2.2222vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MoreText = styled.p`
  font-family: "KOTRAHOPE";
  font-weight: normal;
  font-size: 30px;
  margin: 0;
`;

const MoreImage = styled.img`
  width: 100%;
  height: 2.6667vh;
`;
