import React, { useContext } from "react";
import styled from "styled-components";
import AppContext from "../../../context/appContext";

const StyledButton = styled.button`
  color: #c0c0c0;
  background-color: transparent;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;

  :hover {
    color: #c0c0c0;
    background-color: #181818;
  }

  :active {
    color: #080808;
    background-color: #fda50f;
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
