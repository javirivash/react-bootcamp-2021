import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Thumbnail = styled.img`
  border-radius: 4px;
  max-width: 150px;
  object-fit: cover;
`;

const VideoThumbnail = (props) => {
  return <Thumbnail src={props.thumbnails.medium.url} alt="thumbnail" />;
};

VideoThumbnail.propTypes = {
  thumbnails: PropTypes.object.isRequired,
};
export default VideoThumbnail;
