// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import { Toaster } from "react-hot-toast";

// Public components
import Login from "./components/Login";
import About from "./components/About";

// Dashboard components
import AdminDashboard from "./components/Dashboard/adminDashBoard/AdminDashboard";
import ClientDashboard from "./components/Dashboard/clientDashboard/ClientDashboard";
import DashboardContent from "./components/allLinks/dashboard-content/DashboardContent";
import AllUsers from "./components/allLinks/allUsers/AllUsers";
import TaskAssign from "./components/allLinks/taskAssign/TaskAssign";
import TaskStatus from "./components/allLinks/taskStatus/TaskStatus";
import CreateGroup from "./components/allLinks/createGroup/CreateGroup";
import NewNotification from "./components/allLinks/new-notification/NewNotification";
import TodayAlert from "./components/allLinks/today-alert/TodayAlert";
import AddUser from "./components/allLinks/AddUser";
import UserProfile from "./components/allLinks/UserProfile";

const App = () => {
  return (
    <UserProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<About />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            {/* Admin dashboard with nested routes */}
            <Route path="/admin-dashboard" element={<AdminDashboard />}>
              <Route index element={<DashboardContent />} />
              <Route path="dashboard-content" element={<DashboardContent />} />
              <Route path="all-users" element={<AllUsers />} />
              <Route path="task-assign" element={<TaskAssign />} />
              <Route path="task-status" element={<TaskStatus />} />
              <Route path="create-group" element={<CreateGroup />} />
              <Route path="new-notification" element={<NewNotification />} />
              <Route path="today-alert" element={<TodayAlert />} />
              <Route path="add-user" element={<AddUser />} />
              <Route path="user-profile" element={<UserProfile />} />
            </Route>

            {/* Client dashboard */}
            <Route path="/user-dashboard" element={<ClientDashboard />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
