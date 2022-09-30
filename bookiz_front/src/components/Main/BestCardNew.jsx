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

  console.log(bestSellers)

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
        {/* <GoldCard>
        <BestCard
                crown={getCrown[0]}
                // id={bestSellers[0].id}
                title={bestSellers[0].title}
                image={bestSellers[0].image}
                info={bestSellers[0].info}
                page={bestSellers[0].page}
              />
        </GoldCard> */}
       {/* <SilverBronzeCard>
       <BestCard
                crown={getCrown[1]}
                // id={bestSellers[1].id}
                title={bestSellers[1].title}
                image={bestSellers[1].image}
                info={bestSellers[1].info}
                page={bestSellers[1].page}
              />
               <BestCard
                crown={getCrown[2]}
                // id={bestSellers[2].id}
                title={bestSellers[2].title}
                image={bestSellers[2].image}
                info={bestSellers[2].info}
                page={bestSellers[2].page}
              />
       </SilverBronzeCard> */}
      </Content>
    </Container>
  );
}

export default BestCardListNew;

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  margin: auto;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
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

const GoldCard = styled.div`
  
`

const SilverBronzeCard = styled.div`
  
`

const ContentText = styled.p`
  font-size: 50px;
  margin-bottom: 20px;
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
  width: 80%;
  height: 10%;
`;

