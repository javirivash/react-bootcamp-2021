import React from "react";
import { useAppContext } from "../../../context/app/appContext";
import styled from "styled-components";
import { StyledTitle } from "../../VideoList";

const StyledContainer = styled.div`
  font-family: "DM Sans", sans-serif;
  margin: auto;
  max-width: 950px;
  padding: 24px 0 70px;
`;

const StyledDescription = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.secondaryText};
  max-height: 170px;
  overflow: hidden;
`;

const StyledChannel = styled.h1`
  font-size: 16px;
  color: ${(props) => props.theme.secondaryText};
  margin-top: 24px;
`;

const PlayerDetails = () => {
  const {
    selectedVideo: { title, description, channelTitle },
  } = useAppContext();

  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledChannel>Posted by {channelTitle}</StyledChannel>
    </StyledContainer>
  );
};

export default PlayerDetails;
