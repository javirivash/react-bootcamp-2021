import React, { useContext, useEffect } from "react";
import VideoList from "../VideoList";
import AppContext from "../../context/appContext";
import styled from "styled-components";

const MainTitle = styled.h1`
  font-family: "Oswald", sans-serif;
  font-size: 48px;
  text-align: center;
  margin: 90px auto 35px;
`;

const HomeView = () => {
  const appContext = useContext(AppContext);

  const { resultVideos, showPlayer, loading, handleInitGapi } = appContext;

  useEffect(() => {
    handleInitGapi();
  }, []);

  return (
    !showPlayer &&
    !loading && (
      <div>
        <MainTitle>Welcome to Youtubit</MainTitle>
        <VideoList videos={resultVideos}></VideoList>
      </div>
    )
  );
};

export default HomeView;
