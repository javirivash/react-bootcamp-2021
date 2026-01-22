import React from "react";
import styled from "styled-components";
import { StyledTitle } from "../VideoList/VideoList";
const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.primaryText};
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100vw;
  width: 100vh;
  opacity: 0.6;
`;
const StyledParagraph = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: ${(props) => props.theme.primaryText};
  margin-bottom: 24px;
`;
const NotFound = () => {
  return (
    <StyledContainer>
      <StyledTitle>Not Found</StyledTitle>
      <StyledParagraph>
        The page you are looking for does not exist...
      </StyledParagraph>
    </StyledContainer>
  );
};

export default NotFound;
