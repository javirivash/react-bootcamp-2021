import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import VideoDetails from "./_children/VideoDetails";
import VideoThumbnail from "./_children/VideoThumbnail";
import AppContext from "../../context/appContext";

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

const VideoItem = ({ id, snippet }) => {
  const appContext = useContext(AppContext);
  const { getRelatedVideos } = appContext;

  const onClick = () => {
    getRelatedVideos({ id, ...snippet });
  };

  return (
    <div role="videoItem" onClick={onClick}>
      <StyledItem>
        <VideoDetails snippet={snippet} />
        <VideoThumbnail thumbnails={snippet.thumbnails} />
      </StyledItem>
    </div>
  );
};

VideoItem.propTypes = {
  id: PropTypes.string.isRequired,
  snippet: PropTypes.object.isRequired,
};

export default VideoItem;
