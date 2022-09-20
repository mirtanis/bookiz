import { useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { BsMic } from "react-icons/bs";
import { BsMicMute } from "react-icons/bs";

function BookModal(props) {
  const { open, close, title, info, image, page } = props;

  const [mic, setMic] = useState(false);
  const handleMic = () => {
    setMic(!mic);
  }
  return (
    <div>
      {open ? (
      <Background onClick={close}>
        <section onClick={(e) => e.stopPropagation()}>
          <header>
            <IoClose
              className="closeicon"
              size={20}
              color="#ffffff"
              onClick={close}
              ></IoClose>
          </header>
          <main>
          <img src={image} alt="" />
          <Text>{title}</Text>
          <Text>{info}</Text>
          <Page>총 {page} 페이지</Page>
          <div className="micIcon" onClick={handleMic}>
            {mic ? (
              <BsMic className="micicon" size={20} color="#ffffff"/>
            ) : (
              <BsMicMute className="micmuteicon" size={20} color="#ffffff"/>
            )}
          </div>
          <StartBtn>시작하기</StartBtn>
          </main>
        </section>
      </Background>
      ) : null}
    </div>
  );
}

export default BookModal;

const Background = styled.div`
  background-color: rgba(13, 12, 15, 0.7);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  & section {
    width: 90%;
    max-width: 1440px;
    background-color: ${(props) => props.theme.colors.subBlack};
    & header {
      display: flex;
      justify-content: space-between;
      padding-left: 30px;
      padding-right: 30px;
      align-items: center;
      color: ${(props) => props.theme.colors.white};
      & p {
        font-size: 24px;
        font-weight: 700;
      }
      & .closeicon {
        cursor: pointer;
      }
    }
    & main {
      padding: 0 20px 20px;
    }
  }
`;

const Text = styled.p`
  color: white;
`;

const StartBtn = styled.button`
  border-radius: 30px;
  background-color: skyblue;
`;

const Page = styled.div`
  width: 298px;
  border-radius: 30px;
  background-color: #c99999;
`;