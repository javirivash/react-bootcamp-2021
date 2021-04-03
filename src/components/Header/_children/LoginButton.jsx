import React from "react";
import styled from "styled-components";

const Button = styled.button`
  justify-self: end;
  border-radius: 3px;
  font-size: 14px;
  color: #101010;
  background-color: #c0c0c0;
  border-radius: 14px;
  margin: 0 10px;
  padding: 8px 12px;
  min-width: 70px;
  cursor: pointer;

  :hover {
    background-color: #a0a0a0;
  }

  :active {
    background-color: #808080;
  }
`;

const LoginButton = () => {
  return <Button>Log in</Button>;
};

export default LoginButton;
