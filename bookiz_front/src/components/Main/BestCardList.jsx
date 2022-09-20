import React, { useState } from 'react';
import styled from 'styled-components';
import BestCard from './BestCard';
import GoldCrown from '../../assets/images/goldcrown.svg';
import SilverCrown from '../../assets/images/silvercrown.svg';
import BronzeCrown from '../../assets/images/bronzecrown.svg';
import Arrow from '../../assets/images/arrow.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Navigation, EffectCoverflow } from 'swiper';

function BestCardList() {
	const [bestSellers, setBestSellers] = useState([
    {crown: GoldCrown, title: "토끼와 거북이", image: "https://www.dasobook.com/shop/data/editor/bef9d99d4de10797.jpg"},
    {crown: SilverCrown, title: "금도끼 은도끼", image: "http://image.kyobobook.co.kr/images/book/xlarge/705/x9788915102705.jpg"},
    {crown: BronzeCrown, title: "선녀와 나무꾼", image: "https://image.aladin.co.kr/product/184/92/cover500/8901073420_1.jpg"}
  ]);

	return (
		<Container>
			<Empty />
			<Content>
				<ContentText>베스트 셀러</ContentText>
				<BestCards>
					{bestSellers.map((bestSeller, index) => {
						return <BestCard key={index} crown={bestSeller.crown} title={bestSeller.title} image={bestSeller.image} />;
					})}
				</BestCards>
			</Content>
			<More href="#">
				<MoreText>전체보기</MoreText>
				<MoreImage src={Arrow} />
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

const More = styled.a`
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