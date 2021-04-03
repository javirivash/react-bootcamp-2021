/* global gapi*/

import { useState, useEffect } from "react";

const useApiSearch = (searchText, selectedVideo) => {
  const [isClientInit, setIsClientInit] = useState(false);
  const [resultVideos, setResultVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line no-undef
  const apiKey = process.env.REACT_APP_API_KEY;
  let discovery = {};

  const handleClientState = (initBoolean) => {
    setIsClientInit(initBoolean);
  };

  const handleClientLoad = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
      );
      discovery = await response.json();
      gapi.load("client", handleClientInit);
    } catch (error) {
      console.error("handleClientLoad: Something went wrong... ", error);
    }
  };

  const handleClientInit = async () => {
    try {
      await gapi.client.init({
        apiKey: apiKey,
        discoveryDocs: [discovery],
      });
      handleClientState(true);
    } catch (error) {
      console.error("handleClientInit: Something went wrong... ", error);
    }
  };

  const searchRequest = async () => {
    try {
      const response = await gapi.client.youtube.search.list({
        part: ["snippet"],
        maxResults: 24,
        q: searchText,
        type: ["video"],
      });
      setResultVideos(response.result.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("searchRequest: Something went wrong... ", error);
    }
  };

  const searchRelated = async () => {
    try {
      console.log("searchRelated called with video: ", selectedVideo);
      setLoading(true);
      const response = await gapi.client.youtube.search.list({
        part: ["snippet"],
        maxResults: 24,
        type: ["video"],
        relatedToVideoId: selectedVideo.id,
      });
      setResultVideos(response.result.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("searchRelated: Something went wrong... ", error);
    }
  };

  useEffect(() => {
    isClientInit
      ? searchRequest()
      : async () => {
          await handleClientLoad();
          searchRequest();
        };
  }, [searchText]);

  useEffect(() => {
    isClientInit
      ? searchRelated()
      : async () => {
          await handleClientLoad();
          searchRelated();
        };
  }, [selectedVideo]);

  return [resultVideos, loading];
};

export default useApiSearch;
