/* global YT*/

import React, { useEffect } from "react";
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
  }
`;

const Player = (selectedVideo) => {
  let player;

  const onYouTubeIframeAPIReady = () => {
    // eslint-disable-next-line no-unused-vars
    player = new YT.Player("player", {
      height: "534",
      width: "950",
      videoId: selectedVideo.id,
      events: {
        onReady: onPlayerReady,
      },
    });
  };

  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  useEffect(() => {
    onYouTubeIframeAPIReady();
  }, [selectedVideo]);

  return (
    <Container>
      <div className="wrapper">
        <div role="player" id="player" />
      </div>
    </Container>
  );
};

Player.propTypes = {
  selectedVideo: PropTypes.object.isRequired,
  onYouTubeIframeAPIReady: PropTypes.func.isRequired,
};

export default Player;
