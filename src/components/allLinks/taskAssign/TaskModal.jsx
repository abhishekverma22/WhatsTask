import React, { useState } from "react";
import { db } from "../../../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";

const TaskModal = ({ user, onClose }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDateTime: "", // changed key to include both date & time
    priority: "Medium",
    status: "Pending",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.title || !task.description || !task.dueDateTime)
      return toast.error("Please fill all fields");

    try {
      await addDoc(collection(db, "users", user.uid, "tasks"), {
        ...task,
        dueDateTime: new Date(task.dueDateTime), // store as Firestore Timestamp
        createdAt: serverTimestamp(),
      });
      toast.success(`Task assigned to ${user.firstName || "User"}`);
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Error assigning task");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-3">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-bold mb-4 text-center">
          Assign Task to {user.firstName || "User"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Task Title"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <textarea
            placeholder="Task Description"
            value={task.description}
            onChange={(e) =>
              setTask({ ...task, description: e.target.value })
            }
            className="border p-2 rounded w-full min-h-[80px]"
          />
          <label className="text-gray-600 font-medium">Deadline Date & Time</label>
          <input
            type="datetime-local"
            value={task.dueDateTime}
            onChange={(e) =>
              setTask({ ...task, dueDateTime: e.target.value })
            }
            className="border p-2 rounded w-full"
          />
          <select
            value={task.priority}
            onChange={(e) => setTask({ ...task, priority: e.target.value })}
            className="border p-2 rounded w-full"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <div className="flex justify-end gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border w-full sm:w-auto"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded w-full sm:w-auto"
            >
              Assign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
