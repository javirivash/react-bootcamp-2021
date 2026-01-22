/* global gapi */
const initGapi2 = async () => {
  // eslint-disable-next-line no-undef
  const apiKey = process.env.REACT_APP_API_KEY;
  let discovery = {};
  console.log("1 Gapi at call: ", gapi);
  try {
    const response = await fetch(
      "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
    );
    discovery = await response.json();
    console.log("2 Gapi after discovery fetched: ", gapi, discovery);
    await gapi.load("client", async () => {
      console.log("3 Gapi after client load: ", gapi);
      await gapi.client.init({
        apiKey: apiKey,
        discoveryDocs: [discovery],
      });
      console.log("4 Gapi during init: ", gapi);
    });
  } catch (error) {
    console.error("handleClientLoad: Something went wrong... ", error);
  }
};

export default initGapi2;
