import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import VideoDetails from "./_children/VideoDetails";
import VideoThumbnail from "./_children/VideoThumbnail";

const StyledItem = styled.div`
  display: flex;
  background-color: #f5f5f5;
  border-radius: 4px;
  margin: 0 20px 20px 0;
  padding: 15px;
  height: 180px;
  max-width: 430px;
  cursor: pointer;

  :hover {
    background-color: #f0f0f0;
  }
`;

const VideoItem = ({ snippet }) => {
  return (
    <StyledItem>
      <VideoDetails snippet={snippet} />
      <VideoThumbnail thumbnails={snippet.thumbnails} />
    </StyledItem>
  );
};

VideoItem.propTypes = {
  snippet: PropTypes.object.isRequired,
};

export default VideoItem;
