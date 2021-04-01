import React from "react";
import VideoItem from "./VideoItem/index.jsx";
import styled from "styled-components";
import PropTypes from "prop-types";

const ItemsContainer = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
`;

const VideoList = ({ data }) => {
  return (
    <ItemsContainer>
      {data.items.map((item) => (
        <VideoItem key={item.etag} snippet={item.snippet} />
      ))}
    </ItemsContainer>
  );
};

VideoList.propTypes = {
  data: PropTypes.object.isRequired,
};

export default VideoList;
