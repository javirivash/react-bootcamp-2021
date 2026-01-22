import React, { useState, Fragment } from "react";
import Header from "./Header";
import Videos from "./Videos";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import data from "../mock/youtube-videos-mock.json";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Content = styled.div`
  padding: 30px;

  .mainTitle {
    font-family: "Oswald", sans-serif;
    font-size: 3rem;
    text-align: center;
    margin: 60px auto 35px;
  }
`;

function App() {
  const [theme, setTheme] = useState({ darkMode: false });

  const handleThemeToggle = () => {
    setTheme({ darkMode: theme.darkMode ? false : true });
  };

  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header handleThemeToggle={handleThemeToggle} />
          <Content>
            <h1 className="mainTitle">Welcome to YouTubit</h1>
            <Videos data={data} />
          </Content>
        </div>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
