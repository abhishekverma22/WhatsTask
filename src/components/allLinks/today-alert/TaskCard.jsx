import React, { useState } from "react";
import { sendTaskNotification } from "../../../firebase/notificationServices";
import { useUser } from "../../../context/UserContext";
import toast from "react-hot-toast";

const TaskCard = ({ task }) => {
  const [message, setMessage] = useState("");
  const { currentUser } = useUser(); // admin info
  const adminName = currentUser?.firstName || "Admin";

  const deadline = task.dueDateTime?.toDate
    ? task.dueDateTime.toDate()
    : task.dueDateTime instanceof Date
    ? task.dueDateTime
    : null;

  const handleSendNotification = async () => {
    if (!message) return;
    await sendTaskNotification(task.userId, task.id, message, adminName);
    setMessage("");
    toast.success("Notification sent!");
  };

  return (
    <div className="border-2 border-gray-200 rounded-xl w-full min-h-40 hover:bg-green-100 p-4 sm:p-6 cursor-pointer hover:shadow-lg capitalize transition">
      <h1 className="font-semibold text-lg sm:text-xl tracking-wide border-b border-gray-300 pb-1 text-gray-700">
        {task.userName || "Unknown User"}
      </h1>
      <h2 className="mt-4 sm:mt-6 text-sm sm:text-base">
        <strong>Department:</strong> {task.department || "No Department"}
      </h2>
      <h2 className="mt-2 text-sm sm:text-base">
        <strong>Task:</strong> {task.title}
      </h2>
      <h2 className="mt-2 text-sm sm:text-base">
        <strong>Priority:</strong> {task.priority}
      </h2>
      <p className="mt-2 text-xs sm:text-sm">
        <strong>Description:</strong> {task.description || "No Description"}
      </p>

      <div className="flex flex-col sm:flex-row items-start sm:items-center mt-4 sm:mt-3 justify-between gap-3 sm:gap-0">
        <h1 className="text-amber-700 text-sm sm:text-base">
          <strong>Deadline:</strong>{" "}
          <span className="text-gray-500 text-xs sm:text-sm">
            {deadline ? deadline.toLocaleString() : "Invalid Date"}
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto mt-2 sm:mt-0">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type something to notify..."
            className="outline-0 border border-gray-400 rounded-xl w-full sm:w-60 px-3 sm:px-5 py-2 text-sm sm:text-base"
          />
          <button
            onClick={handleSendNotification}
            className="px-5 py-2 border-2 border-white hover:shadow-md transition bg-gray-600 text-white rounded-xl font-bold text-sm sm:text-base"
          >
            Send Notification
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
