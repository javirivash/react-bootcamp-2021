import React, { Fragment } from "react";
import styled from "styled-components";
import Player from "../components/Player/Player";
import PlayerDetails from "../components/Player/PlayerDetails";
import VideoList from "../components/VideoList/VideoList";
import { useAppContext } from "../context/app/appContext";

const StyledContainer = styled.div`
  margin: 64px auto 0;
  width: 100%;
`;

const PlayerView = () => {
  const { relatedVideos } = useAppContext();

  const relatedTitle = <Fragment>More videos you may like</Fragment>;

  return (
    <StyledContainer>
      <Player />
      <PlayerDetails />
      <VideoList listTitle={relatedTitle} videos={relatedVideos} />
    </StyledContainer>
  );
};

export default PlayerView;
