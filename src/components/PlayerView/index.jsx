import React from "react";
import styled from "styled-components";
import Player from "./_children/Player";
import PlayerDetails from "./_children/PlayerDetails";
import VideoList from "../VideoList";
import { useAppContext } from "../../context/app/appContext";

const StyledContainer = styled.div`
  margin: 64px auto 0;
  width: 100%;
`;

const PlayerView = () => {
  const { showPlayer, loading, relatedVideos } = useAppContext();

  const relatedTitle = "More videos you may like";

  return (
    showPlayer &&
    !loading && (
      <StyledContainer>
        <Player />
        <PlayerDetails />
        <VideoList listTitle={relatedTitle} videos={relatedVideos} />
      </StyledContainer>
    )
  );
};

export default PlayerView;
