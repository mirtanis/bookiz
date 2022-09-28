import React from 'react';
import { useState } from "react";
import styled from 'styled-components';
import BookModal from './BookModal';

function NewCard(props) {
	const [isModal, setIsModal] = useState(false);

  const ModalHandler = () => {
    setIsModal((prev) => !prev);
  };

	return (
		<div>
		<NewCardContainer onClick={ModalHandler}>
			<Label src="assets/images/newlabel.svg"/>
			<Image src={props.image}/>
			<Title>
				{props.title}
			</Title>
		</NewCardContainer>
		<BookModal open={isModal} close={ModalHandler} title={props.title} info={props.info} image={props.image} page={props.page}></BookModal>
		</div>
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
	object-fit: fill !important;
`;

const Image = styled.img`
	width: 100%;
	height: 36.8889vh !important;
	object-fit: fill !important;
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