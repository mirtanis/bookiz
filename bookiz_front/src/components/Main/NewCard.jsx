import React from "react";
import { useState } from "react";
import styled from "styled-components";
import BookModal from "./BookModal";

function NewCard(props) {
  const [isModal, setIsModal] = useState(false);

  const ModalHandler = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <div>
      <Container>
        <NewCardContainer onClick={ModalHandler}>
          <Label>
            <p>NEW</p>
          </Label>
          <Image src={props.image} />
          <Title>{props.title}</Title>
        </NewCardContainer>
      </Container>
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

export default NewCard;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 46.6667vh;
`;

const NewCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 91%;
  border-radius: 20px;
  box-shadow: 3px 3px 3px 3px #999;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.8s;
  }
`;

const Label = styled.div`
  position: absolute;
  top: 0px;
  left: -0px;
  width: 100px !important;
  height: 50px !important;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #03c75a;
  display: flex;
  justify-content: center;
  align-items: center;
  > p {
    color: white;
    font-size: 40px;
    font-family: "KOTRAHOPE";
    font-weight: normal;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: fill !important;
  border-radius: 20px;
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
