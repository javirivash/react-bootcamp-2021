/* global gapi*/

import { useState, useEffect } from "react";

const useApiSearch = (searchText, selectedVideo) => {
  const [isClientInit, setIsClientInit] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line no-undef
  const apiKey = process.env.REACT_APP_API_KEY;
  let discovery = {};

  const validateItems = (items) => {
    const validatedItems = items.filter((item) => {
      return item.snippet && item.id?.videoId;
    });
    return validatedItems.slice(0, 24);
  };

  const handleClientLoad = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
      );
      discovery = await response.json();
      gapi.load("client", () => {
        handleClientInit(searchText);
      });
    } catch (error) {
      setLoading(false);
      console.error("handleClientLoad: Something went wrong... ", error);
    }
  };

  const handleClientInit = async (query) => {
    try {
      await gapi.client.init({
        apiKey: apiKey,
        discoveryDocs: [discovery],
      });
      setIsClientInit(true);
      searchRequest(query);
    } catch (error) {
      setLoading(false);
      console.error("handleClientInit: Something went wrong... ", error);
    }
  };

  const searchRequest = async (query) => {
    try {
      setLoading(true);
      const response = await gapi.client.youtube.search.list({
        part: ["snippet"],
        maxResults: 50,
        q: query,
        type: ["video"],
      });
      setSearchResults(validateItems(response.result.items));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("searchRequest: Something went wrong... ", error);
    }
  };

  const searchRelated = async (selectedVideo) => {
    try {
      setLoading(true);
      const response = await gapi.client.youtube.search.list({
        part: ["snippet"],
        maxResults: 50,
        type: ["video"],
        relatedToVideoId: selectedVideo.id,
      });
      setRelatedVideos(validateItems(response.result.items));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("searchRelated: Something went wrong... ", error);
    }
  };

  useEffect(() => {
    if (isClientInit) {
      searchRequest(searchText);
    } else {
      handleClientLoad();
    }
  }, [searchText]);

  useEffect(() => {
    if (isClientInit) {
      searchRelated(selectedVideo);
    }
  }, [selectedVideo]);

  return [searchResults, relatedVideos, loading];
};

export default useApiSearch;
