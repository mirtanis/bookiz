import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdReplay } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

function EndModal() {
  return (
    <Container>
      <Modal>
        <FirstPageButton onClick={() => window.location.reload()}>
          <MdReplay size={100} />
          <ButtonText>
            처음부터
          </ButtonText>
        </FirstPageButton>
        <StyledLink to="/">
          <AiOutlineHome size={100} />
          <ButtonText>
            홈페이지
          </ButtonText>
        </StyledLink>
      </Modal>
    </Container>
  )
}

export default EndModal;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(13, 12, 15, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const FirstPageButton = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0080FF;
  :hover {
    transform: scale(1.2);
  }
`;

const StyledLink = styled(Link)`
  width: 250px;
  height: 250px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FA5858;
  border-radius: 50%;
  :hover {
    transform: scale(1.2);
  }
`;

const ButtonText = styled.p`
  margin: 0;
  font-size: 4.5556vh;
  margin-bottom: 20px;
`;