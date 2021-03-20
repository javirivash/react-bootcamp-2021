import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Description = styled.p`
  font-family: "DM Sans", sans-serif;
  font-size: 12px;
  line-height: 20px;
  color: #303030;
  height: 60px;
  overflow: hidden;
`;

const VideoDescription = (props) => {
  return <Description role="paragraph">{props.description}</Description>;
};

VideoDescription.propTypes = {
  description: PropTypes.string.isRequired,
};
export default VideoDescription;
