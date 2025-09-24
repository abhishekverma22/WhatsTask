import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCC8_yJxRtMLRz9mIGPmNSEa5IDGYSmL4g",
  authDomain: "whatstask-f18db.firebaseapp.com",
  projectId: "whatstask-f18db",
  storageBucket: "whatstask-f18db.firebasestorage.app",
  messagingSenderId: "475104281758",
  appId: "1:475104281758:web:93f62703034eabfad2e78f",
  measurementId: "G-L510JCZGXE"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);