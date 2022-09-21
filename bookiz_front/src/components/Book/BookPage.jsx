import React from "react";
import styled from "styled-components";

function BookPage(props) {
	return (
		<Container>
			<PageInfo>
				<PageText>
					{props.page}/{props.totalpage}
				</PageText>
			</PageInfo>
			<BookImageDiv>
				<BookImage src={props.image} />
			</BookImageDiv>
			<BookContentDiv>
				
			</BookContentDiv>
		</Container>
	)
	
}

export default BookPage;

const Container = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

const BookImageDiv = styled.div`
	width: 100%;
	height: 88.8889vh;
`;

const BookImage = styled.img`
	height:100%;
`;

const BookContentDiv = styled.div`
	width: 100%;
	height: 11.1111vh;
`;

const PageInfo = styled.div`
	width: 8.3333vw;
	height: 8.8889vh;
	border-radius: 5px;
	background-color: ${(props) => props.theme.colors.pointGray};
	position: absolute;
	top: 2.7778vh;
	left: 1.3021vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PageText = styled.p`
	font-size: 4vh;
`;