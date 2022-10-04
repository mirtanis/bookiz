import styled from "styled-components";
import BookModalPortal from "./Portal";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { bookApis, fetchData } from "../../utils/apis/api";
import BookImage from "../../assets/images/book.png"

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
          <main style={{ position: "relative" }}>
            <BackgroundImage src={BookImage} alt="책" />
            <BookDiv>
              <header style={{ marginTop: "15px" }}>
                <IoClose
                  className="closeicon"
                  size={25}
                  color="black"
                  onClick={close}
                  ></IoClose>
              </header>
              <Book>
                <div style={{ padding: "0 2% 0 1%", width: "45%", height: "100%" }}>
                  <img src={image} alt={image} style={{ width: "100%", height: "100%" }}/>
                </div>
                <BookInfo>
                  <Text>{title}</Text>
                  <Info>{info}</Info>
                </BookInfo>
              </Book>
              <Start>
                <StartDiv>
                  <Page>{page}p</Page>
                </StartDiv>
                <StartDiv>
                  <Link to={{pathname: `/book?id=${id}`}} style={{ textDecoration: "none", width: "30%", height: "70%"}}>
                    <StartBtn className="startbtn" onClick={onclick(id)}>시작하기</StartBtn>
                  </Link>
                </StartDiv>
              </Start>
            </BookDiv>
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
    width: 70%;
    height: 80%;
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
    }
  }
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1% 0 2%;
  width: 40%;
  height: 100%;
`;

const Book = styled.div`
  display: flex;
  width: 90%;
  height: 70%;
  justify-content: space-between;
  align-items: center;
  padding: 0 5% 0 5%;
`;

const Modal = styled.section`
  background-color: #D9D9D9;
`;

const BookDiv = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const Start = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  align-items: center;
  margin-bottom: 30px;
`;

const StartDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
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
  font-family: "KOTRAHOPE";
`;

const Info = styled.div`
  border-width: 100%;
  height: 80%;
  background-color: white;
  border-radius: 10px;
  font-size: 1.8vw;
  white-space: pre-line;
  word-break: keep-all;
  display: flex;
  text-align: center;
  word-break: break-all;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 10px;
  font-family: "KOTRAHOPE";
`;

const StartBtn = styled.button`
  width: 100%;
  background-color: #c47135;
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: 'BenchNine', Arial, sans-serif;
  font-size: 1em;
  font-size: 22px;
  line-height: 1em;
  margin: 0;
  outline: none;
  padding: 12px 10px 10px;
  position: relative;
  text-transform: uppercase;
  font-weight: 700;
  :before, :after {
    border-color: transparent;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
    border-style: solid;
    border-width: 0;
    content: "";
    height: 24px;
    position: absolute;
    width: 24px;
  }
  :before {
    border-color: #c47135;
    border-right-width: 2px;
    border-top-width: 2px;
    right: -5px;
    top: -5px;
  }
  :after {
    border-bottom-width: 2px;
    border-color: #c47135;
    border-left-width: 2px;
    bottom: -5px;
    left: -5px;
  }
  :hover,
  .hover {
    background-color: #c47135;
  }
  :hover:before,
  .hover:before,
  :hover:after,
  .hover:after {
    height: 100%;
    width: 100%;
  }
`;

const Page = styled.div`
  width: 25%;
  height: 50%;
  font-size: 2vw;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: "KOTRAHOPE";
`;