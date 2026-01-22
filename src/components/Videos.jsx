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

const Videos = ({ handleShowSearch, resultVideos }) => {
  return (
    <ItemsContainer>
      {resultVideos.map((item) => (
        <VideoItem
          handleShowSearch={handleShowSearch}
          key={item.etag}
          snippet={item.snippet}
        />
      ))}
    </ItemsContainer>
  );
};

Videos.propTypes = {
  handleShowSearch: PropTypes.func.isRequired,
  resultVideos: PropTypes.array.isRequired,
};

export default Videos;
