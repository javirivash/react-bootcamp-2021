import React from "react";
import styled from "styled-components";
import MenuButton from "./_children/MenuButton";
import Search from "./_children/Search";
import LoginButton from "./_children/LoginButton";
import ThemeToggle from "./_children/ThemeToggle";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
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

const Header = ({ handleSearch }) => {
  return (
    <Container role="header">
      <MenuButton name="menu" />
      <Search handleSearch={handleSearch} />
      <LoginButton name="logIn" />
      <ThemeToggle name="themeToggle" />
    </Container>
  );
};

Header.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
export default Header;
