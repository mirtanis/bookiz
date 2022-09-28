import React from "react";
import { useState } from "react";
import styled from "styled-components";
import BookModal from "./BookModal";

function BestCard(props) {
  const [isModal, setIsModal] = useState(false);

  const ModalHandler = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <div>
      <BestCardContainer onClick={ModalHandler}>
        <Crown src={props.crown} />
        <Image src={props.image} />
        <Title>{props.title}</Title>
      </BestCardContainer>
      <BookModal
        open={isModal}
        close={ModalHandler}
        title={props.title}
        info={props.info}
        image={props.image}
        page={props.page}
      ></BookModal>
    </div>
  );
}

export default BestCard;

const BestCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18.75vw;
  height: 60vh;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.8s;
  }
`;

const Crown = styled.img`
  width: 6.25vw;
  height: 13.3333vh;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: 3px 3px 3px 3px #999;
`;

const Title = styled.div`
  display: flex;
  background: linear-gradient(to bottom, rgba(1, 0, 0, 0), rgba(1, 1, 1, 1));
  justify-content: center;
  align-items: center;
  width: 18.75vw;
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
