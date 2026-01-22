import React from "react";
import VideoItem from "../VideoItem";
import styled from "styled-components";
import PropTypes from "prop-types";

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
`;

const VideoList = ({ resultVideos, handleSelectedVideo }) => {
  return (
    <ItemsContainer role="videoList">
      {resultVideos.map((item) => (
        <VideoItem
          key={item.id.videoId}
          id={item.id.videoId}
          snippet={item.snippet}
          handleSelectedVideo={handleSelectedVideo}
        />
      ))}
    </ItemsContainer>
  );
};

VideoList.propTypes = {
  resultVideos: PropTypes.array.isRequired,
  handleSelectedVideo: PropTypes.func.isRequired,
};

export default VideoList;
