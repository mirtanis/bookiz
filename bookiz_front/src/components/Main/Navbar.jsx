import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import { HiSearch } from "react-icons/hi";
import { BsQuestionCircle } from "react-icons/bs";
import HelpModal from "./HelpModal";
import HelpSwiper from "./HelpSwiper";

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
    console.log("검색");
  };

  const ModalHandler = () => {
    console.log("modal");
    setIsModal((prev) => !prev);
  };

  return (
    <Container>
      <Logo />
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
        <BsQuestionCircle
          className="helpicon"
          size={50}
          onClick={ModalHandler}
        />
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
  position: fixed;
  margin: 0 auto;
  right: 0;
  left: 0;
  top: 0;
  z-index: 10;
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

const Help = styled.div`
  margin-right: 20px;
  .helpicon {
    background-color: white;
    border-radius: 50%;
    &:hover {
      cursor: pointer;
    }
  }
`;

const HelpContainer = styled.main`
  max-width: 1440px;
  max-height: 600px;
`;
