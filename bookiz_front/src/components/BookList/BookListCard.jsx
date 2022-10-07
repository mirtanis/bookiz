import React from "react";
import { useState } from "react";
import styled from "styled-components";
import BookModal from "../Main/BookModal";

function BookListCard(props) {
  const [isModal, setIsModal] = useState(false);

  const ModalHandler = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <div>
      <CardContainer onClick={ModalHandler}>
        <Image src={props.image} alt={props.image} />
        <Title>{props.title}</Title>
      </CardContainer>
      <BookModal
        open={isModal}
        close={ModalHandler}
        id={props.id}
        title={props.title}
        info={props.info}
        image={props.image}
        page={props.page}
      ></BookModal>
    </div>
  );
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
  height: 100%;
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
