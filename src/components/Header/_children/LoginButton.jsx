import React from "react";
import { useAppContext } from "../../../context/app/appContext";
import Modal from "../../layout/Modal";
import styled from "styled-components";

const StyledButton = styled.button`
  justify-self: end;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #c0c0c0;
  background-color: transparent;
  border: solid 1px #c0c0c0;
  border-radius: 14px;
  margin: 0 10px;
  padding: 8px 12px;
  min-width: 70px;
  cursor: pointer;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }
`;

const LoginButton = () => {
  const {
    currentUser,
    shouldShowLogin,
    activateLogin,
    logOutUser,
  } = useAppContext();

  const onClick = () => {
    if (!currentUser.id) {
      activateLogin();
    } else {
      logOutUser();
    }
  };

  return (
    <div>
      <StyledButton onClick={onClick}>
        {!currentUser.id ? "Sign up" : "Log out"}
      </StyledButton>
      {shouldShowLogin && <Modal />}
    </div>
  );
};

export default LoginButton;
