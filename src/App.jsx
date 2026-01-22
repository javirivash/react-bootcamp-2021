import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlertState from './context/alert/AlertState';
import AppState from './context/app/AppState';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Alert from './components/layout/Alert';
import HomeView from './components/pages/HomeView';
import PlayerView from './components/pages/PlayerView';
import FavoritesView from './components/pages/FavoritesView';
import FavoritesPlayer from './components/pages/FavoritesPlayer';
import PrivateRoute from './components/pages/PrivateRoute';
import NotFound from './components/pages/NotFound';
import Modal from 'react-modal';

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  min-height: 100vh;
  padding: 0 30px;

  @media only screen and (max-width: 530px) {
    padding: 0 20px;
  }
`;

Modal.setAppElement('#root');

const App = () => {
  return (
    <AlertState>
      <AppState>
        <Router>
          <div id='App'>
            <Header />
            <Alert />
            <StyledContainer>
              <Routes>
                <Route
                  path='/favorites/player/:videoId'
                  element={
                    <PrivateRoute>
                      <FavoritesPlayer />
                    </PrivateRoute>
                  }
                />
                <Route
                  path='/favorites'
                  element={
                    <PrivateRoute>
                      <FavoritesView />
                    </PrivateRoute>
                  }
                />
                <Route path='/player/:videoId' element={<PlayerView />} />
                <Route path='/' element={<HomeView />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </StyledContainer>
          </div>
        </Router>
      </AppState>
    </AlertState>
  );
};

export default App;
