import React, { useState } from 'react';
import styled from 'styled-components';
import NewCard from './NewCard';
import Arrow from '../../assets/images/arrow.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function NewCardList() {
	const [newBooks, setNewBooks] = useState([
    {title: "견우와 직녀", image: "http://image.kyobobook.co.kr/images/book/xlarge/813/x9788967000813.jpg"},
    {title: "먹어도 먹어도 줄지 않는 죽", image: "https://image.yes24.com/goods/72352412/XL"},
    {title: "다이너마이트 소동", image: "https://image.aladin.co.kr/product/4434/21/cover500/1185423192_1.jpg"},
    {title: "살려줘!", image: "https://image.yes24.com/goods/57883038/XL"},
    {title: "견우와 직녀", image: "http://image.kyobobook.co.kr/images/book/xlarge/813/x9788967000813.jpg"}
  ]);

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
					spaceBetween={0}
					allowTouchMove={false}
					modules={[Navigation]}
					className="mySwiper">
						{newBooks.map((newBook, index) => {
							return (
								<SwiperSlide key={index}>
									<NewCard title={newBook.title} image={newBook.image} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</SwiperContainer>
			</Content>
			<More href="#">
				<MoreText>더보기</MoreText>
				<MoreImage src={Arrow} />
			</More>
		</Container>
	)
}

export default NewCardList;

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

const SwiperContainer = styled.div`
	width: 100%;
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