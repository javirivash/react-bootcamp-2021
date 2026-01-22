import React from "react";
import styled from "styled-components";

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
  return (
    <div>
      <StyledButton className="material-icons">dark_mode</StyledButton>
    </div>
  );
};

export default ThemeToggle;
