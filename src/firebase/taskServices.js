// src/firebase/taskServices.js
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const fetchTodayTasks = async () => {
  const today = new Date();
  const todayStr = today.toISOString().split("T")[0]; // e.g., "2025-09-26"

  const usersSnapshot = await getDocs(collection(db, "users"));
  const tasksToday = [];

  for (const userDoc of usersSnapshot.docs) {
    const userData = userDoc.data();
    const tasksRef = collection(db, "users", userDoc.id, "tasks");
    const tasksSnapshot = await getDocs(tasksRef);

    tasksSnapshot.docs.forEach((taskDoc) => {
      const taskData = taskDoc.data();
      
      // Convert dueDateTime to string for comparison
      const taskDateStr = taskData.dueDateTime?.toDate
        ? taskData.dueDateTime.toDate().toISOString().split("T")[0]
        : taskData.dueDateTime instanceof Date
        ? taskData.dueDateTime.toISOString().split("T")[0]
        : null;

      if (taskDateStr === todayStr) {
        tasksToday.push({
          id: taskDoc.id,
          userId: userDoc.id,
          userName: `${userData.firstName || ""} ${userData.lastName || ""}`,
          department: userData.department || "No Department",

          ...taskData,
        });
      }
    });
  }

  return tasksToday;
};
