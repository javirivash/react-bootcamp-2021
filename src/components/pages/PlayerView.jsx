import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Player from '../Player/Player';
import PlayerDetails from '../Player/PlayerDetails';
import VideoList from '../VideoList/VideoList';
import { useAppContext } from '../../context/app/appContext';

const StyledContainer = styled.div`
  margin: 64px auto 0;
  width: 100%;
`;

const relatedTitle = <>More videos you may like</>;

const PlayerView = () => {
  const { videoId } = useParams();
  const { relatedVideos, loadPlayerById } = useAppContext();

  useEffect(() => {
    loadPlayerById({ videoId, includeRelated: true });
  }, [videoId]);

  return (
    <StyledContainer>
      <Player />
      <PlayerDetails />
      <VideoList listTitle={relatedTitle} videos={relatedVideos} />
    </StyledContainer>
  );
};

export default PlayerView;
