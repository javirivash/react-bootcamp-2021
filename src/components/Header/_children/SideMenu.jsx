import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../context/app/appContext";
import styled from "styled-components";

const StyledMenu = styled.div`
  position: fixed;
  z-index: 2;
  top: 64px;
  left: 0;
  background-color: rgb(28, 28, 28, 0.99);
  color: #c0c0c0;
  width: 150px;

  a {
    display: block;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    text-align: center;
    color: #c0c0c0;
    background-color: transparent;
    border: none;
    width: 100%;
    padding: 14px;
    opacity: 0.7;
    :hover {
      opacity: 1;
      opacity: 1;
      background-color: rgb(30, 30, 30, 0.99);
    }
    :focus {
      background-color: rgb(30, 30, 30, 0.99);
    }
  }
`;

const SideMenu = () => {
  const { currentUser, shouldShowMenu, toggleMenu } = useAppContext();

  if (!shouldShowMenu) return null;
  return ReactDom.createPortal(
    <StyledMenu onClick={toggleMenu}>
      <Link to={"/"} replace>
        Home
      </Link>
      {currentUser.id && (
        <Link to={"/favorites"} replace>
          Favorites
        </Link>
      )}
    </StyledMenu>,
    document.getElementById("menuPortal")
  );
};

export default SideMenu;
