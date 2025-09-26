// src/context/UserContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);       // firebase auth user
  const [profile, setProfile] = useState(null); // logged-in user profile
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribeProfile = null;

    const unsubscribeAuth = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);

        // Only subscribe to logged-in user's Firestore document
        const docRef = doc(db, "users", firebaseUser.uid);
        unsubscribeProfile = onSnapshot(docRef, (snap) => {
          if (snap.exists()) {
            setProfile(snap.data()); // only update logged-in user profile
          } else {
            setProfile(null);
          }
        });
      } else {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeProfile) unsubscribeProfile();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, profile, setProfile, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
