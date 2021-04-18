import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-right: 12px;
`;

const StyledTitle = styled.h1`
  display: inline-block;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => props.theme.primaryText};
  height: 42px;
  overflow-wrap: anywhere;
  overflow-y: hidden;
`;

const StyledDescription = styled.p`
  font-family: "DM Sans", sans-serif;
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => props.theme.secondaryText};
  height: 60px;
  overflow-wrap: anywhere;
  overflow: hidden;
`;

const StyledChannel = styled.h1`
  align-self: flex-end;
  font-family: "DM Sans", sans-serif;
  font-size: 12px;
  color: ${(props) => props.theme.secondaryText};
  height: 20px;
  overflow-wrap: anywhere;
  overflow: hidden;
`;

const VideoItemDetails = ({ video: { title, description, channelTitle } }) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledChannel>{channelTitle}</StyledChannel>
    </StyledContainer>
  );
};

VideoItemDetails.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoItemDetails;
