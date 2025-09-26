import React from "react";

const UserCard = ({ user, onAddTask }) => (
  <li className="flex justify-between items-center border  p-3 rounded shadow-sm">
    <div>
      <p className="font-semibold">{user.name}</p>
      <p className="text-sm text-gray-600">{user.department || "No Dept"}</p>
    </div>
    <button
      onClick={() => onAddTask(user)}
      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
    >
      Add Task
    </button>
  </li>
);

export default UserCard;
