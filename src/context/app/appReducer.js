import {
  GET_RESULT_VIDEOS,
  GET_RELATED_VIDEOS,
  SET_LOADING,
  TOGGLE_THEME,
  ACTIVATE_LOGIN,
  DEACTIVATE_LOGIN,
  SIGN_UP_USER,
  LOG_IN_USER,
  LOG_OUT_USER,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_RESULT_VIDEOS:
      return {
        ...state,
        searchText: action.payload.query,
        resultVideos: action.payload.items,
        loading: false,
      };
    case GET_RELATED_VIDEOS:
      return {
        ...state,
        selectedVideo: action.payload.video,
        relatedVideos: action.payload.items,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TOGGLE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case ACTIVATE_LOGIN:
      return {
        ...state,
        shouldShowLogin: true,
      };
    case DEACTIVATE_LOGIN:
      return {
        ...state,
        shouldShowLogin: false,
      };
    case SIGN_UP_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case LOG_IN_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case LOG_OUT_USER:
      return {
        ...state,
        currentUser: {},
      };
    default:
      return state;
  }
};
