// import { useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
// import { BsMic } from "react-icons/bs";
// import { BsMicMute } from "react-icons/bs";
import { Link } from "react-router-dom";

function BookModal(props) {
  const { open, close, title, info, image, page } = props;
  // const [mic, setMic] = useState(false);
  // const handleMic = () => {
  //   setMic(!mic);
  // }

  return (
    <div>
      {open ? (
      <Background onClick={close}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <header>
            <IoClose
              className="closeicon"
              size={40}
              color="#ffffff"
              onClick={close}
              ></IoClose>
          </header>
          <main>
            <Book>
              <div>
              <img src={image} alt="" style={{ width: "565px", height: "363px" }}/>
              </div>
              <div style={{ padding: "0 20px 0 20px", height: "363px" }}>
                <Text>{title}</Text>
                <Info>{info}</Info>
              </div>
            </Book>
            <Start>
              {/* <div className="micIcon" onClick={handleMic}>
                {mic ? (
                  <BsMic className="micicon" size={40} color="#000000"/>
                ) : (
                  <BsMicMute className="micmuteicon" size={40} color="#000000"/>
                )}
              </div> */}
              <Link to="/booklist" style={{ textDecoration: 'none' }}>
                <StartBtn className="startbtn">시작하기</StartBtn>
              </Link>
              <Page>총 {page} 페이지</Page>
            </Start>
          </main>
        </Modal>
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
    display: flex;
    flex-direction: column;
    width: 1400px;
    height: 600px;
    max-width: 1440px;
    background-color: ${(props) => props.theme.colors.gray};
    & header {
      display: flex;
      justify-content: flex-end;
      padding-left: 30px;
      padding-right: 30px;
      align-items: end;
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

const Start = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 200px 0 200px;
`;

const Book = styled.div`
  display: flex;
  height: 363px;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px 0 100px;
  margin: 0 0 30px 0;
`;

const Modal = styled.section`
  background-color: #D9D9D9;
`;

const Text = styled.p`
  color: black;
  font-size: 80px;
  display: flex;
  font-weight: bold;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 0 0 30px 0;
`;

const Info = styled.div`
  border-width: 597px;
  height: 216px;
  background-color: white;
  border-radius: 10px;
  font-size: 40px;
  display: flex;
  text-align: center;
  word-break:break-all;
  justify-content: center;
  align-items: center;
  padding: 0 10px 0 10px;
`;

const StartBtn = styled.button`
  width: 350px;
  height: 130px;
  border-radius: 50px;
  border: 0;
  background-color: skyblue;
  font-size: 60px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Page = styled.div`
  width: 298px;
  height: 86px;
  border-radius: 10px;
  background-color: #c99999;
  font-size: 50px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;