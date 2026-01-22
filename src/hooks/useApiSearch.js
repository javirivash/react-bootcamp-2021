/* global gapi*/

import { useState, useEffect } from "react";

const useApiSearch = (searchText) => {
  const [loading, setLoading] = useState(false);
  const [isClientInit, setIsClientInit] = useState(false);
  const [resultVideos, setResultVideos] = useState([]);

  useEffect(() => {
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
        await searchRequest();
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
        console.error("searchRequest: Something went wrong... ", error);
      }
    };

    if (searchText !== "") {
      isClientInit ? searchRequest() : handleClientLoad();
    }
  }, [searchText]);

  return [resultVideos, loading];
};

export default useApiSearch;
