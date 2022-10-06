import React from "react";
import { useState } from "react";
import styled from "styled-components";
import BookModal from "./BookModal";

function BookCard(props) {
  const [isModal, setIsModal] = useState(false);

  const ModalHandler = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <div>
      <Container>
        <BestCardContainer onClick={ModalHandler}>
          <Image src={props.image} />
          <Title>{props.title}</Title>
        </BestCardContainer>
      </Container>
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

export default BookCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
`;

const BestCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 91%;
  border-radius: 20px;
  box-shadow: 5px 5px 15px 1px black;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.8s;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover !important;
`;

const Title = styled.div`
  display: flex;
  background: linear-gradient(to bottom, rgba(1, 0, 0, 0), rgba(1, 1, 1, 1));
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 30px;
  font-family: "KOTRAHOPE";
  font-weight: normal;
  font-style: normal;
  color: ${(props) => props.theme.colors.mainYellow};
  text-align: center;
  padding-top: 30px;
  padding-bottom: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: absolute;
  bottom: 0px;
`;
