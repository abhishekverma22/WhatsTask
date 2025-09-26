import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const useTaskNotifications = (userId, taskId) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (!userId || !taskId) return;

    const q = query(
      collection(db, "users", userId, "tasks", taskId, "notifications"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setNotifications(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [userId, taskId]);

  return notifications;
};
