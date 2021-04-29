const updateLocalFavorites = (resultVideos, relatedVideos, favorites) => {
  const updatedLocalFavorites = {
    results: resultVideos,
    related: relatedVideos,
    favorites: favorites,
  };

  // UPDATE REMOVED FAVORITES FROM RESULTS
  updatedLocalFavorites.results = resultVideos.map((result) => {
    if (result.isFavorite) {
      const favoriteMatch = favorites.filter((favorite) => {
        return result.id === favorite.id;
      });
      if (favoriteMatch.length == 0) {
        result.isFavorite = false;
      }
    }
    return result;
  });

  // UPDATE REMOVED FAVORITES FROM RELATED
  updatedLocalFavorites.related = relatedVideos.map((related) => {
    if (related.isFavorite) {
      const favoriteMatch = favorites.filter((favorite) => {
        return related.id === favorite.id;
      });
      if (favoriteMatch.length == 0) {
        related.isFavorite = false;
      }
    }
    return related;
  });

  favorites.forEach((favorite) => {
    // ADD FAVORITES TO RESULTS
    updatedLocalFavorites.results = resultVideos.map((resultVideo) => {
      if (favorite.id == resultVideo.id) {
        resultVideo.isFavorite = true;
      }
      return resultVideo;
    });

    // ADD FAVORITES TO RELATED
    updatedLocalFavorites.related = relatedVideos.map((relatedVideo) => {
      if (favorite.id == relatedVideo.id) {
        relatedVideo.isFavorite = true;
      }
      return relatedVideo;
    });
  });
  return updatedLocalFavorites;
};

export default updateLocalFavorites;
