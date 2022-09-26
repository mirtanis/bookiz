import React from 'react';
import styled from 'styled-components';

function BookListCard(props) {
	return (
		<CardContainer>
			<Image src={props.image} />
			<Title>
				{props.title}
			</Title>
		</CardContainer>
	)
}

export default BookListCard;

const CardContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const Image = styled.img`
	width: 100%;
	height: 36.8889vh;
`;

const Title = styled.div`
	display: flex;
	background-color: ${(props) => props.theme.colors.mainGrey};
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 9.7778vh;
	font-size: 3.3333vh;
	text-align: center;
`;

