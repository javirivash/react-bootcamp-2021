import React, { useContext } from "react";
import styled from "styled-components";
import Player from "./_children/Player";
import PlayerDetails from "./_children/PlayerDetails";
import VideoList from "../VideoList";
import AppContext from "../../context/appContext";

const Container = styled.div`
  margin: 64px auto 0;
  width: 100%;
`;

const PlayerView = () => {
  const appContext = useContext(AppContext);
  const { showPlayer, loading, relatedVideos } = appContext;

  const title = "More videos you may like";

  return (
    showPlayer &&
    !loading && (
      <Container>
        <Player />
        <PlayerDetails />
        <VideoList title={title} videos={relatedVideos} />
      </Container>
    )
  );
};

export default PlayerView;
