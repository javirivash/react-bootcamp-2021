import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledChannel = styled.h1`
  align-self: flex-end;
  font-family: "DM Sans", sans-serif;
  font-size: 12px;
  color: ${(props) => props.theme.secondaryText};
  height: 20px;
  overflow-wrap: anywhere;
  overflow: hidden;
`;

const VideoChannel = (props) => {
  return <StyledChannel>{props.channelTitle}</StyledChannel>;
};

VideoChannel.propTypes = {
  channelTitle: PropTypes.string.isRequired,
};
export default VideoChannel;
