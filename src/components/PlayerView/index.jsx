import React, { useContext } from "react";
import styled from "styled-components";
import Player from "./_children/Player";
import PlayerDetails from "./_children/PlayerDetails";
import VideoList from "../VideoList";
import AppContext from "../../context/appContext";

const StyledContainer = styled.div`
  margin: 64px auto 0;
  width: 100%;
`;

const PlayerView = () => {
  const appContext = useContext(AppContext);
  const { showPlayer, loading, relatedVideos } = appContext;

  const listTitle = "More videos you may like";

  return (
    showPlayer &&
    !loading && (
      <StyledContainer>
        <Player />
        <PlayerDetails />
        <VideoList listTitle={listTitle} videos={relatedVideos} />
      </StyledContainer>
    )
  );
};

export default PlayerView;
