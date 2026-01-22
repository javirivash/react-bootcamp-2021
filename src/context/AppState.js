/* global gapi*/
/* eslint-disable react/prop-types */
import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import validateItems from "../utils/validateItems";
import initGapi from "../utils/initGapi";
import { GET_RESULT_VIDEOS, GET_RELATED_VIDEOS, SET_LOADING } from "./types";

const AppState = (props) => {
  const initialState = {
    searchText: "Moonwalk",
    resultVideos: [],
    selectedVideo: {},
    relatedVideos: [],
    showPlayer: false,
    loading: true,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  // HANDLE INIT GAPI
  const handleInitGapi = async () => {
    initGapi();
    setTimeout(() => {
      getResultVideos(state.searchText);
    }, 1000);
  };

  // GET RESULT VIDEOS
  const getResultVideos = async (query) => {
    setLoading();
    let items;

    try {
      const response = await gapi.client.youtube.search.list({
        part: ["snippet"],
        maxResults: 50,
        q: query,
        type: ["video"],
      });
      items = validateItems(response.result.items);
    } catch (error) {
      console.error("getResultVideos: Something went wrong... ", error);
    }

    dispatch({
      type: GET_RESULT_VIDEOS,
      payload: { query, items },
    });
  };

  // GET RELATED VIDEOS
  const getRelatedVideos = async (video) => {
    setLoading();
    let items;

    try {
      const response = await gapi.client.youtube.search.list({
        part: ["snippet"],
        maxResults: 50,
        type: ["video"],
        relatedToVideoId: video.id,
      });
      items = validateItems(response.result.items);
    } catch (error) {
      console.error("getRelatedVideos: Something went wrong... ", error);
    }

    dispatch({
      type: GET_RELATED_VIDEOS,
      payload: { video, items },
    });
  };

  // SET LOADING
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <AppContext.Provider
      value={{
        searchText: state.searchText,
        resultVideos: state.resultVideos,
        selectedVideo: state.selectedVideo,
        relatedVideos: state.relatedVideos,
        showPlayer: state.showPlayer,
        loading: state.loading,
        handleInitGapi,
        getResultVideos,
        getRelatedVideos,
        setLoading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
