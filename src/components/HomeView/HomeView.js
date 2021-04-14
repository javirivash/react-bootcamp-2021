import React, { useContext, useEffect } from "react";
import VideoList from "../VideoList";
import AppContext from "../../context/appContext";
import styled from "styled-components";

const MainTitle = styled.h1`
  font-family: "Oswald", sans-serif;
  font-size: 48px;
  text-align: center;
  color: ${(props) => props.theme.primaryText};
  margin: 64px auto 35px;
  padding-top: 20px;

  @media only screen and (max-width: 420px) {
    font-size: 38px;
  }
`;

const HomeView = () => {
  const appContext = useContext(AppContext);
  const {
    searchText,
    resultVideos,
    showPlayer,
    loading,
    handleInitGapi,
  } = appContext;

  useEffect(() => {
    handleInitGapi();
  }, []);

  const listTitle = `Showing search results for "${searchText}"`;

  return (
    !showPlayer &&
    !loading && (
      <div>
        <MainTitle>Welcome to Youtubit</MainTitle>
        <VideoList listTitle={listTitle} videos={resultVideos}></VideoList>
      </div>
    )
  );
};

export default HomeView;
