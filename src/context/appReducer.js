import { GET_RESULT_VIDEOS, GET_RELATED_VIDEOS, SET_LOADING } from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_RESULT_VIDEOS:
      return {
        ...state,
        searchText: action.payload.query,
        resultVideos: action.payload.items,
        showPlayer: false,
        loading: false,
      };
    case GET_RELATED_VIDEOS:
      return {
        ...state,
        selectedVideo: action.payload.video,
        relatedVideos: action.payload.items,
        showPlayer: true,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
