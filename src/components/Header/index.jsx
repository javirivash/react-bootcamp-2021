import React from "react";
import styled from "styled-components";
import MenuButton from "./_children/MenuButton";
import Search from "./_children/Search";
import LoginButton from "./_children/LoginButton";
import ThemeToggle from "./_children/ThemeToggle";

const Container = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #101010;
  height: 4rem;
  padding: 1rem;

  * {
    border: none;
    height: 2.2rem;
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
