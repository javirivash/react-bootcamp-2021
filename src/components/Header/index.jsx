import React from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton";
import Search from "./Search";
import LoginButton from "./LoginButton";
import ThemeToggle from "./ThemeToggle";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #101010;
  height: 64px;
  padding: 16px;

  * {
    text-align: center;
    border: none;
    height: 34px;
  }

  *:focus {
    outline: none;
  }
`;

const Header = () => {
  return (
    <Container>
      <MenuButton name="menu" />
      <Search />
      <LoginButton name="logIn" />
      <ThemeToggle name="themeToggle" />
    </Container>
  );
};

export default Header;
