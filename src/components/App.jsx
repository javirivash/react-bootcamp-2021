/* global gapi*/
/*eslint no-undef: "error"*/

import React, { Fragment, useState, useEffect } from "react";
import Header from "./Header";
import Videos from "./Videos";
import styled, { createGlobalStyle } from "styled-components";
// import data from "../mock/youtube-videos-mock.json";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Content = styled.main`
  padding: 30px;

  .mainTitle {
    font-family: "Oswald", sans-serif;
    font-size: 48px;
    text-align: center;
    margin: 60px auto 35px;
  }
`;

const App = () => {
  const [searchText, setSearchText] = useState("Wizeline");
  const [fetchedVideos, setFetchedVideos] = useState([]);

  // eslint-disable-next-line no-undef
  const apiKey = process.env.REACT_APP_API_KEY;
  let discovery = {};

  const handleClientLoad = async () => {
    try {
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
    } catch (error) {
      console.error("handleClientInit: Something went wrong... ", error);
    }
  };

  const searchRequest = async (searchText) => {
    try {
      const response = await gapi.client.youtube.search.list({
        part: ["snippet"],
        maxResults: 24,
        q: searchText,
        type: ["video"],
      });
      setFetchedVideos(response.result.items);
    } catch (error) {
      console.error("searchRequest: Something went wrong... ", error);
    }
  };

  useEffect(() => {
    handleClientLoad();
  }, []);

  useEffect(() => {
    // fetch only when text is not empty && youtube api is loaded
    searchRequest(searchText);
  }, [searchText]);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  console.log("App fetched: ", fetchedVideos);

  return (
    <Fragment>
      <GlobalStyle />
      <div className="App">
        <Header handleSearch={handleSearch} />
        <Content>
          <h1 className="mainTitle">Welcome to YouTubit</h1>
          <Videos fetchedVideos={fetchedVideos} />
        </Content>
      </div>
    </Fragment>
  );
};

export default App;
