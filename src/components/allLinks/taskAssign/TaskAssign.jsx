import React, { useState } from "react";
import { assignTask } from "./taskServices";
import toast from "react-hot-toast";

const TaskAssign = ({ allUsers }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !dueDate) return toast.error("Fill all fields");

    const assignedTo = allUsers.map(u => u.uid); // assign to all users

    const response = await assignTask({
      title,
      description,
      dueDate: new Date(dueDate),
      priority,
      status,
      assignedTo,
    });

    if (response.success) {
      toast.success("Task assigned!");
      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("Medium");
      setStatus("Pending");
    } else {
      toast.error("Error assigning task");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border p-2 rounded"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white py-2 rounded">
        Assign Task
      </button>
    </form>
  );
};

export default TaskAssign;
