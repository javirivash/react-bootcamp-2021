import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../context/app/appContext";
import styled from "styled-components";
import AriaModal from "react-aria-modal";

const StyledMenu = styled.div`
  position: fixed;
  z-index: 2;
  top: 64px;
  left: 0;
  background-color: rgb(28, 28, 28, 0.99);
  color: #c0c0c0;
  border-radius: 0 0 5px 5px;
  width: 66px;

  a {
    display: block;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    line-height: 38px;
    text-align: center;
    color: #c0c0c0;
    background-color: transparent;
    border: none;
    width: 100%;
    height: 66px;
    padding: 21px;
    opacity: 0.7;
    :hover {
      background-color: rgb(30, 30, 30, 0.99);
      border-radius: 0 0 5px 5px;
    }
    :focus {
      border-radius: 0 0 5px 5px;
      opacity: 1;
      outline: none;
    }
  }
`;

const SideMenu = () => {
  const { currentUser, shouldShowMenu, toggleMenu } = useAppContext();
  const onClick = () => {
    window.scrollTo(0, 0);
  };

  if (!shouldShowMenu) return null;
  return (
    <AriaModal
      titleText="menuModal"
      scrollDisabled={false}
      underlayColor={false}
      focusTrapPaused={true}
      onExit={toggleMenu}
    >
      <StyledMenu onClick={toggleMenu}>
        <Link to={"/"} onClick={onClick} replace>
          <span className="material-icons">home</span>
        </Link>
        {currentUser.id && (
          <Link to={"/favorites"} onClick={onClick} replace>
            <span className="material-icons">favorite</span>
          </Link>
        )}
      </StyledMenu>
    </AriaModal>
  );
};

export default SideMenu;
