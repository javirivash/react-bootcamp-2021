import React, { Fragment, useEffect } from "react";
import VideoList from "../VideoList";
import { useAppContext } from "../../context/app/appContext";
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
  const {
    searchText,
    resultVideos,
    showPlayer,
    loading,
    handleInitGapi,
  } = useAppContext();

  useEffect(() => {
    handleInitGapi();
  }, []);

  const searchTitle = `Showing search results for "${searchText}"`;

  return (
    !showPlayer &&
    !loading && (
      <Fragment>
        <MainTitle>Welcome to Youtubit</MainTitle>
        <VideoList listTitle={searchTitle} videos={resultVideos}></VideoList>
      </Fragment>
    )
  );
};

export default HomeView;
