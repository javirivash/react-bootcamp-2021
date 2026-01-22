import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import VideoDetails from "./_children/VideoDetails";
import VideoThumbnail from "./_children/VideoThumbnail";
import { useAppContext } from "../../context/app/appContext";

const StyledItem = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.item};
  border-radius: 4px;
  margin: 0 20px 20px 0;
  padding: 15px;
  height: 180px;
  width: 100%;
  max-width: 430px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.itemHover};
  }

  @media only screen and (max-width: 530px) {
    margin: 0 0 20px 0;
  }
`;

const VideoItem = ({ video }) => {
  const { getRelatedVideos } = useAppContext();

  const onClick = () => {
    getRelatedVideos(video);
  };

  return (
    <StyledItem role="videoItem" onClick={onClick}>
      <VideoDetails video={video} />
      <VideoThumbnail thumbnail={video.thumbnail} />
    </StyledItem>
  );
};

VideoItem.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoItem;
