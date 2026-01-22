import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../../context/appContext";

const StyledContainer = styled.div`
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

const Player = () => {
  const {
    selectedVideo: { id },
  } = useAppContext();

  return (
    <StyledContainer>
      <div className="wrapper">
        <iframe
          id="player"
          role="application"
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          allow="autoplay; fullscreen"
        ></iframe>
      </div>
    </StyledContainer>
  );
};

export default Player;
