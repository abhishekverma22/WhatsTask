import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const getAllUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
