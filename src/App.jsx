import React from "react";
import Header from "./components/Header";
import Spinner from "./components/layout/Spinner";
import HomeView from "./components/HomeView/HomeView";
import PlayerView from "./components/PlayerView";
import styled from "styled-components";
import { GlobalStyles } from "./context/themes";
import AppState from "./context/AppState";

const Content = styled.div`
  padding: 0 30px;
  background-color: ${(props) => props.theme.color};
`;

const App = () => {
  return (
    <AppState>
      <GlobalStyles />
      <div className="App">
        <Header />
        <Content>
          <Spinner />
          <HomeView />
          <PlayerView />
        </Content>
      </div>
    </AppState>
  );
};

export default App;
