/* global gapi */
/* eslint-disable no-undef */
const initGapi = async () => {
  let apiKey;
  let discovery = {};

  if (process.env.REACT_APP_API_KEY) {
    apiKey = process.env.REACT_APP_API_KEY;
  } else {
    apiKey = process.env.API_KEY;
  }

  console.log("process.env: ", process.env);
  console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
  console.log("process.env.REACT_APP_API_KEY: ", process.env.REACT_APP_API_KEY);
  console.log("process.env.API_KEY: ", process.env.API_KEY);
  console.log("apiKey: ", apiKey);

  const handleClientInit = async (resolve) => {
    try {
      await gapi.client.init({
        apiKey: apiKey,
        discoveryDocs: [discovery],
      });
      resolve();
    } catch (error) {
      console.error("handleClientInit: Something went wrong... ", error);
    }
  };

  try {
    const response = await fetch(
      "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
    );
    discovery = await response.json();
    return new Promise((resolve) => {
      gapi.load("client", () => {
        handleClientInit(resolve);
      });
    });
  } catch (error) {
    console.error("handleClientLoad: Something went wrong... ", error);
  }
};

export default initGapi;
