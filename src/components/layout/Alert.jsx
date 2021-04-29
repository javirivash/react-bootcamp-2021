import React from "react";
import { useAlertContext } from "../../context/alert/alertContext";
import styled from "styled-components";

const StyledAlert = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
  bottom: 0px;
  background-color: ${(props) => props.theme.alert};
  border-radius: 5px;
  margin: 10px 2%;
  width: 96%;
  padding: 18px;
  box-shadow: ${(props) => props.theme.shadow};

  * {
    font-size: 14px;
    color: ${(props) => props.theme.primaryText};
  }
`;

const StyledIcon = styled.i`
  margin-right: 10px;
`;
const StyledMessage = styled.h1`
  font-family: "Roboto", sans-serif;
  margin-right: auto;
`;
const StyledButton = styled.i`
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
