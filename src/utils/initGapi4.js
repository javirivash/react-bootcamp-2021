/* global gapi */

const initGapi4 = async () => {
  // eslint-disable-next-line no-undef
  const apiKey = process.env.REACT_APP_API_KEY;
  let discovery = {};

  const handleClientLoad = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
      );
      discovery = await response.json();
      gapi.load("client", handleClientInit);
    } catch (error) {
      console.error("handleClientLoad: Something went wrong... ", error);
    }
  };

  const handleClientInit = async () => {
    try {
      await gapi.client.init({
        apiKey: apiKey,
        discoveryDocs: [discovery],
      });
    } catch (error) {
      console.error("handleClientInit: Something went wrong... ", error);
    }
  };

  handleClientLoad();
};

export default initGapi4;
