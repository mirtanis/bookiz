import React, { useState } from "react";
import styled from "styled-components";
import BestCard from "./BestCard";
import { bookListApis, fetchData } from "../../utils/apis/api";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

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
		"assets/images/bronzecrown.svg"
	]

	return (
		<Container>
			<Empty />
			<Content>
				<ContentText>베스트 셀러</ContentText>
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
      <More>
        <Link
          to="/booklist/all"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MoreText>전체보기</MoreText>
          <MoreImage src="assets/images/arrow.svg" />
        </Link>
      </More>
    </Container>
  );
}

export default BestCardList;

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

const BestCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
