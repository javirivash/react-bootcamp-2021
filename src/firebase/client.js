import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseApiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const firebaseProjectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const firebaseAppId = import.meta.env.VITE_FIREBASE_APP_ID;

const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: `${firebaseProjectId}.firebaseapp.com`,
  databaseURL: `https://${firebaseProjectId}-default-rtdb.firebaseio.com`,
  projectId: `${firebaseProjectId}`,
  storageBucket: `${firebaseProjectId}.appspot.com`,
  messagingSenderId: '941718889832',
  appId: firebaseAppId,
  measurementId: 'G-Q29WYTQKD1',
};
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
