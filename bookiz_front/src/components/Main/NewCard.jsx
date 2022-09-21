import React from 'react';
import styled from 'styled-components';
import NewLabel from '../../assets/images/newlabel.svg'

function NewCard(props) {
	return (
		<NewCardContainer>
			<Label src={NewLabel} />
			<Image src={props.image} />
			<Title>
				{props.title}
			</Title>
		</NewCardContainer>
	)
}

export default NewCard;

const NewCardContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 17.2917vw;
	height: 46.6667vh;
`;

const Label = styled.img`
	position: absolute;
	top: 0.2083vw;
	left: 0.4444vh;
	width: 5.2083vw !important;
	height: 6.1111vh !important;
	border-radius: 5px;
`;

const Image = styled.img`
	width: 100%;
	height: 36.8889vh !important;
`;

const Title = styled.div`
	display: flex;
	background-color: #D9D9D9;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 9.7778vh;
	font-size: 3.3333vh;
	text-align: center;
`;