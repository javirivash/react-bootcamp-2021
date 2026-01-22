import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import VideoTitle from "./VideoTitle";
import VideoChannel from "./VideoChannel";
import VideoDescription from "./VideoDescription";

const Details = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-right: 12px;
`;

const VideoDetails = ({ video: { title, channelTitle, description } }) => {
  return (
    <Details>
      <VideoTitle title={title} />
      <VideoDescription description={description} />
      <VideoChannel channelTitle={channelTitle} />
    </Details>
  );
};

VideoDetails.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoDetails;
