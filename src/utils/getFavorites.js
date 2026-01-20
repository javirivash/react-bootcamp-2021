import { get, ref } from 'firebase/database';
import { db } from '../firebase/client';

const getFavorites = async (userId) => {
  try {
    const snapshot = await get(ref(db, `users/${userId}`));
    if (!snapshot.exists()) {
      return [];
    }
    const val = snapshot.val();
    return val ? Object.values(val) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getFavorites;
