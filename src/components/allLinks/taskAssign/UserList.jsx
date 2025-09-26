import React from "react";

const UserList = ({ users, onAddTask }) => {
  if (!users.length) {
    return <p className="text-gray-600 text-center">No users found.</p>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 capitalize">
      {users.map((user) => (
        <li
          key={user.uid}
          className="border border-white/10 hover:border-blue-400 p-4 rounded transition hover:shadow-lg flex flex-col gap-2 bg-white/70"
        >
          <h2 className="text-lg font-semibold text-gray-800">
            {user.firstName || "Unnamed User"} {user.lastName || ""}
          </h2>
          <p className="text-sm text-gray-600">
            Department: {user.department || "No Department"}
          </p>
          <p className="text-sm text-gray-600">
            Email: {user.email || "No Email"}
          </p>

          <button
            onClick={() => onAddTask(user)}
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded cursor-pointer"
          >
            Add Task
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
