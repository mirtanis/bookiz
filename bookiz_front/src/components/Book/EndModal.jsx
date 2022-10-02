import React from "react";
import styled from "styled-components";
import BOOKIZ from "../../assets/icons/BOOKIZ-removebg.png"
import { Link } from "react-router-dom";

function EndModal() {
  return (
    <Container>
      <Modal>
        <Title>
          <TitleText>
            다음에 만나요!
          </TitleText>
        </Title>
        <Content>
          <ModalImage src={BOOKIZ} />
        </Content>
        <Buttons>
          <FirstPageButton onClick={() => window.location.reload()}>
            <ButtonText>
              처음부터 다시
            </ButtonText>
          </FirstPageButton>
          <Link to="/" style={{ width: '30%', height: '50%', borderRadius: '20px', textDecoration: 'none', color: 'black' }}>
            <HomeButton>
              <ButtonText>
                홈페이지로
              </ButtonText>
            </HomeButton>
          </Link>
        </Buttons>
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
  width: 90%;
  height: 90%;
  background-color: white;
  border-radius: 20px;
`;

const Title = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.p`
  margin : 0;
  font-size : 5.5556vh;
`

const Content = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  height: 100%;
`;

const Buttons = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const FirstPageButton = styled.div`
  width: 30%;
  height: 50%;
  border-radius: 20px;
  background-color: blue;
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const HomeButton = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: red;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ButtonText = styled.p`
  margin: 0;
  font-size: 4.5556vh;
`;