import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: #c0c0c0;
  background-color: #101010;
  border-radius: 3px;
  width: 2.2rem;
  cursor: pointer;

  :hover {
    background-color: #202020;
  }

  :active {
    background-color: #080808;
  }
`;

const MenuButton = () => {
  return <StyledButton className="material-icons">menu</StyledButton>;
};

export default MenuButton;
