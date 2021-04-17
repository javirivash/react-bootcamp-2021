import React from "react";
import Header from "./components/Header";
import Spinner from "./components/layout/Spinner";
import HomeView from "./components/HomeView/HomeView";
import PlayerView from "./components/PlayerView";
import styled from "styled-components";
import AppState from "./context/app/AppState";
import AlertState from "./context/alert/AlertState";
import Alert from "./components/layout/Alert";

const Content = styled.div`
  background-color: ${(props) => props.theme.background};
  min-height: 100vh;
  padding: 0 30px;

  @media only screen and (max-width: 530px) {
    padding: 0 20px;
  }
`;

const App = () => {
  return (
    <AlertState>
      <AppState>
        <div className="App">
          <Header />
          <Alert />
          <Content>
            <Spinner />
            <HomeView />
            <PlayerView />
          </Content>
        </div>
      </AppState>
    </AlertState>
  );
};

export default App;
