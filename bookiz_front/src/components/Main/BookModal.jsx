import styled from "styled-components";
import BookModalPortal from "./Portal";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import { bookApis, fetchData } from "../../utils/apis/api";

function BookModal(props) {
  const { id, open, close, title, info, image, page } = props;

  const getPlusCnt = async (url) => {
    return await fetchData.patch(url)
  }

  const onclick = (id) => getPlusCnt(bookApis.BOOK_CNTUP(id))

  return (
    <BookModalPortal>
      {open ? (
      <Background onClick={close}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <main>
            <header>
              <IoClose
                className="closeicon"
                size={20}
                color="#ffffff"
                onClick={close}
                ></IoClose>
            </header>
            <Book>
              <div style={{ padding: "0 2% 0 1%", width: "60%", height: "100%"}}>
                <img src={image} alt={image} style={{ width: "100%", height: "100%", objectFit: "contain" }}/>
              </div>
              <BookInfo>
                <Text>{title}</Text>
                <Info>{info}</Info>
              </BookInfo>
            </Book>
            <Start>
              <Link to={{pathname: `/book?id=${id}`}} style={{ textDecoration: "none", width: "30%", height: "70%"}}>
                <StartBtn className="startbtn" onClick={onclick(id)}>시작하기</StartBtn>
              </Link>
              <Page>총 {page} 페이지</Page>
            </Start>
          </main>
        </Modal>
      </Background>
      ) : null}
    </BookModalPortal>
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
    width: 80%;
    height: 70%;
    // width: 80vw;
    // height: 70vh;
    // max-width: 1400px;
    background-color: ${(props) => props.theme.colors.gray};
    & header {
      display: flex;
      border-width: 100%;
      height: 5%;
      justify-content: flex-end;
      padding-left: 2%;
      padding-right: 2%;
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
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      // padding: 0 20px 20px;
    }
  }
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 1% 0 2%;
  width: 40%;
  height: 100%;
`;

const Start = styled.div`
  display: flex;
  width: 73%;
  height: 23%;
  justify-content: space-between;
  align-items: center;
  padding: 0 12% 0 15%;
`;

const Book = styled.div`
  display: flex;
  // height: 363px;
  width: 90%;
  height: 70%;
  justify-content: space-between;
  align-items: center;
  padding: 0 5% 0 5%;
  // margin: 0 0 10px 0;
`;

const Modal = styled.section`
  background-color: #D9D9D9;
`;

const Text = styled.p`
  color: black;
  font-size: 4vw;
  white-space: pre-line;
  word-break: keep-all;
  display: flex;
  font-weight: bold;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 10% 0 10% 0;
`;

const Info = styled.div`
  border-width: 100%;
  height: 50%;
  background-color: white;
  border-radius: 10px;
  // font-size: 1.8vw;
  // font-size: 3.5vh;
  white-space: pre-line;
  word-break: keep-all;
  display: flex;
  text-align: center;
  word-break:break-all;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 10px;
`;

const StartBtn = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  border: 0;
  background-color: skyblue;
  font-size: 2vw;
  white-space: pre-line;
  word-break: keep-all;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Page = styled.div`
  width: 20%;
  height: 50%;
  border-radius: 10px;
  background-color: #c99999;
  font-size: 1.5vw;
  white-space: pre-line;
  word-break: keep-all;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;