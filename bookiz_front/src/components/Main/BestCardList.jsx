import React, { useState } from 'react';
import styled from 'styled-components';
import BestCard from './BestCard';
import { Link } from 'react-router-dom';

function BestCardList() {
	const [bestSellers, setBestSellers] = useState([
    {crown: "assets/images/goldcrown.svg", title: "토끼와 거북이", image: "https://www.dasobook.com/shop/data/editor/bef9d99d4de10797.jpg"},
    {crown: "assets/images/silvercrown.svg", title: "금도끼 은도끼", image: "http://image.kyobobook.co.kr/images/book/xlarge/705/x9788915102705.jpg"},
    {crown: "assets/images/bronzecrown.svg", title: "선녀와 나무꾼", image: "https://image.aladin.co.kr/product/184/92/cover500/8901073420_1.jpg"}
  ]);

	return (
		<Container>
			<Empty />
			<Content>
				<ContentText>베스트 셀러</ContentText>
				<BestCards>
					{bestSellers.map((bestSeller, index) => {
						return (<BestCard key={index} crown={bestSeller.crown} title={bestSeller.title} image={bestSeller.image} />)
					})}
				</BestCards>
			</Content>
			<More>
				<Link to="/">
					<MoreText>전체보기</MoreText>
					<MoreImage src="assets/images/arrow.svg" />
				</Link>
			</More>
		</Container>
	)
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
`;

const MoreText = styled.p`
	font-size: 2.2222vh;
	margin: 0;
`;

const MoreImage = styled.img`
	width: 100%;
	height: 2.6667vh;
`;