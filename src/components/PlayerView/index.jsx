import React, { useContext } from "react";
import styled from "styled-components";
import Player from "./_children/Player";
import VideoList from "../VideoList";
import AppContext from "../../context/appContext";

const Container = styled.div`
  margin: 64px auto;
  padding: 20px 0;
  width: 100%;

  .title {
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    color: #101010;
    margin-bottom: 24px;
  }
`;

const DetailsContainer = styled.div`
  font-family: "DM Sans", sans-serif;
  margin: auto;
  max-width: 950px;
  padding: 24px 0 70px;

  .description {
    font-size: 16px;
    color: #303030;
    max-height: 170px;
    overflow: hidden;
  }
  .channelTitle {
    font-size: 16px;
    color: #303030;
    margin-top: 24px;
  }
`;

const PlayerView = () => {
  const appContext = useContext(AppContext);
  const {
    showPlayer,
    loading,
    relatedVideos,
    selectedVideo: { title, description, channelTitle },
  } = appContext;

  return (
    showPlayer &&
    !loading && (
      <Container>
        <Player />
        <DetailsContainer>
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
          <h1 className="channelTitle">Posted by {channelTitle}</h1>
        </DetailsContainer>
        <h1 className="title">Related Videos</h1>
        <VideoList videos={relatedVideos} />
      </Container>
    )
  );
};

export default PlayerView;
