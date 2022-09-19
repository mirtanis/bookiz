import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import { HiSearch } from "react-icons/hi";

function Navbar() {
  const [key, setKey] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    let word = key.trim();
    if (!word) return;
    setKey(word);
    navigate({
      pathname: "/booklist",
      search: `?&keyword=${word}`,
    });
    console.log("검색");
  };

  return (
    <Container>
      <Logo />
      <NavSearch onSubmit={onSubmit}>
        <Button type="submit" aria-label="search">
          <HiSearch />
        </Button>
        <SearchBox
          type="text"
          value={key}
          placeholder="검색하기"
          inputProps={{ "aria-label": "검색하기" }}
          onChange={(e) => setKey(e.target.value)}
        />
      </NavSearch>
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
  border-radius: 5px;
  align-items: center;
  margin: 0 auto;
`;

const SearchBox = styled.input`
  background-color: ${(props) => props.theme.colors.mainYellow};
  height: 35px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.pointBlack};
  width: 380px;
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
