import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AlertState from "./context/alert/AlertState";
import AppState from "./context/app/AppState";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Alert from "./components/layout/Alert";
import HomeView from "./pages/HomeView";
import PlayerView from "./pages/PlayerView";

const StyledContainer = styled.div`
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
        <Router>
          <div className="App">
            <Header />
            <Alert />
            <StyledContainer>
              <Switch>
                <Route exact path="/" component={HomeView} />
                <Route exact path="/player" component={PlayerView} />
              </Switch>
            </StyledContainer>
          </div>
        </Router>
      </AppState>
    </AlertState>
  );
};

export default App;
