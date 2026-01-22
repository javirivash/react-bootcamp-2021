import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

const VideoTitle = (props) => {
  return <StyledTitle>{props.title}</StyledTitle>;
};

VideoTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default VideoTitle;
