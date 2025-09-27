import React from "react";

const DashboardContent = () => {
  return (
    <div className="h-full w-full bg-amber-50 p-8">
      {/* ===== Admin Dashboard Title ===== */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Admin Dashboard Overview
        </h1>
        <p className="text-gray-700 mt-2">
          This dashboard allows administrators to manage users, tasks, notifications, and alerts efficiently. Below is a detailed guide of all available features and how to use them.
        </p>
      </div>

      {/* ===== Features Grid ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Dashboard Content */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-gray-800">
            Dashboard Content (Kanban Board)
          </h2>
          <p className="text-gray-700 mb-2">
            Displays all tasks in a <strong>Kanban-style board</strong> with columns: <em>New, Pending, Completed</em>.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Drag tasks between columns to automatically update their status.</li>
            <li>Provides a visual overview of task progress for all users.</li>
            <li>Optional: Show task stats (total tasks, pending, completed).</li>
          </ul>
        </div>

        {/* Task Assign */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-gray-800">Task Assign</h2>
          <p className="text-gray-700 mb-2">
            Assign new or existing tasks to registered users.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Provide task details: title, description, due date, and priority.</li>
            <li>Task appears in assigned user’s dashboard under <em>New</em>.</li>
            <li>Supports assigning tasks to multiple users (optional).</li>
          </ul>
        </div>

        {/* Task Status */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-gray-800">Task Status</h2>
          <p className="text-gray-700 mb-2">
            Monitor and manage all tasks in one place.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>View task details: user, due date, priority, and current status.</li>
            <li>Filter or sort tasks by user, status, or due date.</li>
            <li>Option to manually update task status if needed.</li>
          </ul>
        </div>

        {/* All Users */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-gray-800">All Users</h2>
          <p className="text-gray-700 mb-2">
            Manage all registered users efficiently.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>View user details: name, email, role, and assigned tasks.</li>
            <li>Search, filter, and sort users by any criteria.</li>
            <li>Access user profile for detailed information.</li>
          </ul>
        </div>

        {/* New Notifications */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-gray-800">New Notifications</h2>
          <p className="text-gray-700 mb-2">
            Send messages or alerts to users or groups.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Create notifications with title, message, and target audience.</li>
            <li>Mark notifications as urgent or normal priority.</li>
            <li>Users receive notifications directly in their dashboard.</li>
          </ul>
        </div>

        {/* Today Alert */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-gray-800">Today Alert</h2>
          <p className="text-gray-700 mb-2">
            Quickly see tasks or notifications that are due today.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Provides urgent alerts for immediate action.</li>
            <li>Option to mark tasks as completed directly from the alert view.</li>
            <li>Filter by priority or user to focus on critical items.</li>
          </ul>
        </div>

        {/* Add New User */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-gray-800">Add New User</h2>
          <p className="text-gray-700 mb-2">
            Create new user accounts with essential information.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Enter name, email, role, and password for new users.</li>
            <li>New users are stored in Firebase and ready for task assignment.</li>
            <li>Access user details from <strong>All Users</strong> section.</li>
          </ul>
        </div>

        {/* My Profile */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-gray-800">My Profile</h2>
          <p className="text-gray-700 mb-2">
            Manage your admin account information.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Update name, email, and password.</li>
            <li>Change profile picture if needed.</li>
            <li>All changes are reflected in Firebase authentication and Firestore.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
