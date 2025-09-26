// src/firebase/notificationServices.js
import { db } from "./firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const sendTaskNotification = async (userId, taskId, message, adminName) => {
  if (!message) return;

  try {
    await addDoc(
      collection(db, "users", userId, "tasks", taskId, "notifications"),
      {
        message,
        adminName: adminName || "Admin",
        createdAt: serverTimestamp(),
      }
    );
    console.log("Notification sent by:", adminName);
  } catch (err) {
    console.error("Failed to send notification:", err);
  }
};
