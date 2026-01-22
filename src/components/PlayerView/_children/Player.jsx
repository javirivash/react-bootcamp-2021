import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  max-width: 950px;
  max-height: 534px;
  margin: auto;

  .wrapper {
    position: relative;
    z-index: 0;
    overflow: hidden;
    padding-top: 56.25%;
  }

  #player {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Player = ({ selectedVideo }) => {
  return (
    <Container>
      <div className="wrapper">
        <iframe
          id="player"
          role="application"
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
          allow="autoplay; fullscreen"
        ></iframe>
      </div>
    </Container>
  );
};

Player.propTypes = {
  selectedVideo: PropTypes.object.isRequired,
};

export default Player;
