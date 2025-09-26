
import { auth, db } from "./firebaseConfig";
import {
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";

// Update Auth (email/password)
export const updateAuthCredentials = async ({ newEmail, newPassword, currentPassword }) => {
  if (!auth.currentUser) throw new Error("No user logged in");

  try {
    if (newEmail !== auth.currentUser.email || newPassword) {
      const credential = EmailAuthProvider.credential(auth.currentUser.email, currentPassword);
      await reauthenticateWithCredential(auth.currentUser, credential);
    }

    if (newEmail !== auth.currentUser.email) {
      await updateEmail(auth.currentUser, newEmail);
    }

    if (newPassword) {
      await updatePassword(auth.currentUser, newPassword);
    }

    toast.success("Authentication info updated successfully!");
  } catch (error) {
    console.error(error);
    toast.error(error.message || "Failed to update authentication info");
    throw error;
  }
};

// Update Firestore profile
export const updateUserProfile = async (uid, profileData) => {
  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, profileData);
    toast.success("Profile updated successfully!");
  } catch (error) {
    console.error(error);
    toast.error(error.message || "Failed to update profile");
    throw error;
  }
};
