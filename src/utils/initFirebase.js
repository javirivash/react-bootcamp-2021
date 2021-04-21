/*global firebase */
/* eslint-disable no-undef */

const initFirebase = () => {
  const firebaseApiKey = process.env.REACT_APP_FIREBASE_API_KEY;
  const firebaseProjectId = process.env.REACT_APP_FIREBASE_PROJECT_ID;
  const firebaseAppId = process.env.REACT_APP_FIREBASE_APP_ID;

  const firebaseConfig = {
    apiKey: firebaseApiKey,
    authDomain: `${firebaseProjectId}.firebaseapp.com`,
    databaseURL: `https://${firebaseProjectId}-default-rtdb.firebaseio.com`,
    projectId: `${firebaseProjectId}`,
    storageBucket: `${firebaseProjectId}.appspot.com`,
    messagingSenderId: "941718889832",
    appId: firebaseAppId,
    measurementId: "G-Q29WYTQKD1",
  };
  firebase.initializeApp(firebaseConfig);
};

export default initFirebase;

// const firebaseConfig = {
//   apiKey: firebaseKey,
//   authDomain: `youtubit-1adf4.firebaseapp.com`,
//   databaseURL: `https://youtubit-1adf4-default-rtdb.firebaseio.com`,
//   projectId: `youtubit-1adf4`,
//   storageBucket: `youtubit-1adf4.appspot.com`,
//   messagingSenderId: `941718889832`,
//   appId: firebaseAppId,
//   measurementId: `G-Q29WYTQKD1`,
// };

// var firebaseConfig = {
//   apiKey: `API_KEY`,
//   authDomain: `PROJECT_ID.firebaseapp.com`,
//   databaseURL: `https://PROJECT_ID.firebaseio.com`,
//   projectId: `PROJECT_ID`,
//   storageBucket: `PROJECT_ID.appspot.com`,
//   messagingSenderId: `SENDER_ID`,
//   appId: `APP_ID`,
//   measurementId: `G-MEASUREMENT_ID`,
// };
