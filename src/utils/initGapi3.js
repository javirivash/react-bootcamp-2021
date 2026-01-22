/* global gapi */
// eslint-disable-next-line no-undef
const apiKey = process.env.REACT_APP_API_KEY;
let discovery = {};

export const handleClientLoad = async () => {
  try {
    const response = await fetch(
      "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
    );
    discovery = await response.json();
    gapi.load("client", () => {
      handleClientInit();
    });
  } catch (error) {
    console.error("handleClientLoad: Something went wrong... ", error);
  }
};

export const handleClientInit = async () => {
  try {
    await gapi.client.init({
      apiKey: apiKey,
      discoveryDocs: [discovery],
    });
  } catch (error) {
    console.error("handleClientInit: Something went wrong... ", error);
  }
};
