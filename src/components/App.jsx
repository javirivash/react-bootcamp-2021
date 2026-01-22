import React, { Fragment, useState } from "react";
import Header from "./Header";
import Videos from "./Videos";
import VideoDetailsView from "./VideoDetailsView";
import Spinner from "./Spinner";
import useApiSearch from "../hooks/useApiSearch";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const MainTitle = styled.h1`
  font-family: "Oswald", sans-serif;
  font-size: 48px;
  text-align: center;
  margin: 90px auto 35px;
`;

const Content = styled.main`
  padding: 0 30px;
`;

const App = () => {
  const [searchText, setSearchText] = useState("Wizeline Academy");
  const [resultVideos, loading] = useApiSearch(searchText);
  const [shouldShowSearch, setShouldShowSearch] = useState(true);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handleShowSearch = (shouldShow) => {
    setShouldShowSearch(shouldShow);
  };

  return (
    <Fragment>
      <GlobalStyle />
      <div className="App">
        <Header
          handleShowSearch={handleShowSearch}
          handleSearch={handleSearch}
        />
        <MainTitle>Welcome to YouTubit</MainTitle>
        {loading ? (
          <Spinner />
        ) : (
          <Content>
            {shouldShowSearch ? (
              <Fragment>
                <Videos
                  handleShowSearch={handleShowSearch}
                  resultVideos={resultVideos}
                />
              </Fragment>
            ) : (
              <VideoDetailsView name={"javier"} />
            )}
          </Content>
        )}
      </div>
    </Fragment>
  );
};

export default App;
