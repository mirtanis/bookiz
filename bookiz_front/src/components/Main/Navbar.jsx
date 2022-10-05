import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Logo from "./Logo";
import { HiSearch } from "react-icons/hi";
import { TbQuestionMark } from "react-icons/tb";
import { BsQuestionCircle } from "react-icons/bs";
import HelpModal from "./HelpModal";
import HelpSwiper from "./HelpSwiper";
import Bookiz from "./Bookiz";

function Navbar() {
  const [key, setKey] = useState("");
  const navigate = useNavigate();

  //모달
  const [isModal, setIsModal] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    let word = key.trim();
    if (!word) return;
    setKey(word);
    navigate({
      pathname: "/search",
      search: `?&keyword=${word}`,
    });
  };

  const ModalHandler = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <Container>
      <Logo />
      <Bookiz />
      <NavSearch onSubmit={onSubmit}>
        <Button type="submit" aria-label="search">
          <HiSearch size={25} />
        </Button>
        <SearchBox
          type="text"
          value={key}
          placeholder="검색하기"
          inputProps={{ "aria-label": "검색하기" }}
          onChange={(e) => setKey(e.target.value)}
        />
      </NavSearch>
      <Help>
        <TbQuestionMark className="helpicon" size={50} onClick={ModalHandler} />
      </Help>
      <HelpModal open={isModal} close={ModalHandler} title="도움 모달">
        <HelpContainer>
          <HelpSwiper />
        </HelpContainer>
      </HelpModal>
    </Container>
  );
}

export default Navbar;

const Container = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.subYellow};
  width: 100%;
  position: sticky;
  margin: 0 auto;
  right: 0;
  left: 0;
  top: 0;
  z-index: 10;
  > p {
    font-size: 50px;
    font-family: "KOTRAHOPE";
    font-weight: normal;
    > span {
      color: red;
    }
  }
`;

const NavSearch = styled.form`
  display: flex;
  background-color: ${(props) => props.theme.colors.mainYellow};
  border: none;
  border-radius: 20px;
  align-items: center;
  margin: 0 auto;
`;

const SearchBox = styled.input`
  background-color: ${(props) => props.theme.colors.mainYellow};
  height: 40px;
  border: none;
  margin-left: 10px;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.pointBlack};
  width: 600px;
  &:focus {
    outline: none;
    border: 1px solid #ccc;
    padding: 7px 14px 9px;
    transition: 0.4s;
  }
`;

const Button = styled.button`
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }  
`;

const Help = styled.div`
  margin-right: 20px;
  .helpicon {
    background-color: white;
    border-radius: 50%;
    box-shadow: 5px 5px 13px 1px black;
    &:hover {
      cursor: pointer;
      animation: ${pulse} 1s infinite;
      animation-timing-function: linear;
    }
  }
`;

const HelpContainer = styled.main`
  max-width: 1440px;
  max-height: 600px;
`;
