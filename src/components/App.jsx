import React, { Fragment } from "react";
import Header from "./Header";
import Videos from "./Videos";
import styled, { createGlobalStyle } from "styled-components";
import data from "../mock/youtube-videos-mock.json";

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
    font-size: 3rem;
    text-align: center;
    margin: 60px auto 35px;
  }
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Content>
          <h1 className="mainTitle">Welcome to YouTubit</h1>
          <Videos data={data} />
        </Content>
      </div>
    </Fragment>
  );
}

export default App;
