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

const Videos = ({ fetchedVideos }) => {
  console.log("Videos fetched: ", fetchedVideos);
  return (
    <ItemsContainer>
      {fetchedVideos.map((item) => (
        <VideoItem key={item.etag} snippet={item.snippet} />
      ))}
    </ItemsContainer>
  );
};

Videos.propTypes = {
  fetchedVideos: PropTypes.array.isRequired,
};

export default Videos;
