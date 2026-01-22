import React, { Fragment, useEffect } from 'react';
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

const PlayerView = () => {
  const { currentFavorites, loadPlayerById } = useAppContext();
  const { videoId } = useParams();

  useEffect(() => {
    loadPlayerById({ videoId, includeRelated: false });
  }, [videoId]);

  const notPlayingFavorites = currentFavorites.filter((video) => {
    return video.id !== videoId;
  });

  const moreFavoritesTitle = (
    <Fragment>
      {notPlayingFavorites.length > 0
        ? 'More of your favorites'
        : 'Add more favorites to watch'}
    </Fragment>
  );

  return (
    <StyledContainer>
      <Player />
      <PlayerDetails />
      <VideoList listTitle={moreFavoritesTitle} videos={notPlayingFavorites} />
    </StyledContainer>
  );
};

export default PlayerView;
