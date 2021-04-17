import React from "react";
import { useAlertContext } from "../../context/alert/alertContext";
import styled from "styled-components";

const StyledAlert = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 1;
  top: 64px;
  background-color: rgb(24, 24, 24, 0.99);
  border-top: solid 1px #101010;
  width: 100%;
  padding: 8px 10px;

  * {
    font-size: 14px;
    color: #c0c0c0;
  }
`;

const StyledIcon = styled.span`
  margin-right: 10px;
`;
const StyledMessage = styled.h1`
  font-family: "Roboto", sans-serif;
  margin-right: auto;
`;
const StyledButton = styled.span`
  cursor: pointer;
`;

const Alert = () => {
  const { alert, removeAlert } = useAlertContext();
  const onClick = () => {
    removeAlert();
  };

  return (
    alert !== null && (
      <StyledAlert>
        <StyledIcon className="material-icons">error</StyledIcon>
        <StyledMessage>{alert}</StyledMessage>
        <StyledButton onClick={onClick} className="material-icons">
          close
        </StyledButton>
      </StyledAlert>
    )
  );
};

export default Alert;
