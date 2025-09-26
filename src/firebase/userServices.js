import { auth, db } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";

export const registerUser = async (userData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );

    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      role: userData.role,
      contact: userData.contact,
      department: userData.department,
      joiningDate: userData.joiningDate,
      gender: userData.gender,
      createdAt: serverTimestamp(),
    });

    toast.success("✅ New User Created Successfully!");
    return user.uid;
  } catch (error) {
    toast.error(`${error.message}`);
    throw error; // optional but recommended
  }
};

export const loginWithRole = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const uid = userCredential.user.uid;

    // Fetch profile from Firestore
    const snap = await getDoc(doc(db, "users", uid));
    if (!snap.exists()) throw new Error("User profile not found");

    const profileData = snap.data();
    toast.success("Login Successful ✅");
    return { firebaseUser: userCredential.user, profileData };
  } catch (error) {
    let message = "Login failed. Please try again.";
    switch (error.code) {
      case "auth/user-not-found":
        message = "No account found with this email.";
        break;
      case "auth/wrong-password":
        message = "Incorrect password.";
        break;
      case "auth/invalid-email":
        message = "Invalid email format.";
        break;
      default:
        message = error.message;
    }
    toast.error(`❌ ${message}`);
    throw error;
  }
};


export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error.message);
  }
};


