import React from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton";
import Search from "./Search";
import LoginButton from "./LoginButton";
import ThemeToggle from "./ThemeToggle";
import PropTypes from "prop-types";

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

const Header = ({ handleSearch, handleShowSearch }) => {
  return (
    <Container>
      <MenuButton name="menu" />
      <Search handleSearch={handleSearch} handleShowSearch={handleShowSearch} />
      <LoginButton name="logIn" />
      <ThemeToggle name="themeToggle" />
    </Container>
  );
};

Header.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleShowSearch: PropTypes.func.isRequired,
};
export default Header;
