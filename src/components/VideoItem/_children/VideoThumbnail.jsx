import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledThumbnail = styled.img`
  border-radius: 4px;
  max-width: 150px;
  object-fit: cover;
`;

const VideoThumbnail = ({ thumbnail }) => {
  return <StyledThumbnail src={thumbnail} alt="thumbnail" />;
};

VideoThumbnail.propTypes = {
  thumbnail: PropTypes.string.isRequired,
};
export default VideoThumbnail;
