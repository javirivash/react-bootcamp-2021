import React, { useContext } from "react";
import styled from "styled-components";
import AppContext from "../../../context/appContext";

const StyledButton = styled.button`
  color: ${(props) => props.theme.icon};
  background-color: ${(props) => props.theme.toggle};
  border: none;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  opacity: 0.7;

  :hover {
    color: #c0c0c0;
    background-color: transparent;
    opacity: 1;
  }
`;

const ThemeToggle = () => {
  const appContext = useContext(AppContext);
  const { toggleTheme } = appContext;

  const onClick = () => {
    toggleTheme();
  };

  return (
    <StyledButton onClick={onClick} className="material-icons">
      dark_mode
    </StyledButton>
  );
};

export default ThemeToggle;
