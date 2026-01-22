import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: #c0c0c0;
  background-color: #101010;
  border-radius: 3px;
  margin-right: 90px;
  width: 34px;
  cursor: pointer;

  :hover {
    background-color: #202020;
  }

  :active {
    background-color: #080808;
  }

  @media only screen and (max-width: 580px) {
    margin-right: 10px;
  }
`;

const MenuButton = () => {
  return <StyledButton className="material-icons">menu</StyledButton>;
};

export default MenuButton;
