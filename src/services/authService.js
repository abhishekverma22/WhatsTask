import { auth, googleProvider } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

// Email/Password Sign-up
export const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// Email/Password Sign-in
export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

// Google Sign-in
export const loginWithGoogle = () => signInWithPopup(auth, googleProvider);

// Sign-out
export const logout = () => signOut(auth);
