import { auth, db } from "./firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
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
