import React from "react";
import styled from "styled-components";

const Button = styled.button`
  justify-self: end;
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
  return <Button>Log in</Button>;
};

export default LoginButton;
