import React from "react";
import Header from "./components/Header";
import Spinner from "./components/layout/Spinner";
import HomeView from "./components/HomeView/HomeView";
import PlayerView from "./components/PlayerView";
import styled, { createGlobalStyle } from "styled-components";

import AppState from "./context/AppState";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Content = styled.div`
  padding: 0 30px;
  margin: 1px solid blue;
`;

const App = () => {
  return (
    <AppState>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Spinner />
        <Content>
          <HomeView />
          <PlayerView />
        </Content>
      </div>
    </AppState>
  );
};

export default App;
