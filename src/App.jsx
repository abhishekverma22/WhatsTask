// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import { Toaster } from "react-hot-toast";

// Public components
import Login from "./pages/Login";
import About from "./pages/About";

// Dashboard components
import AdminDashboard from "./components/Dashboard/adminDashBoard/AdminDashboard";

// Admin pages
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
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Router>
        <Routes>
          {/* ---------- Public routes ---------- */}
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<About />} />

          {/* ---------- Protected routes ---------- */}
          <Route element={<ProtectedRoute />}>
            {/* ===== Admin Dashboard ===== */}
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
          </Route>

          {/* ---------- Catch-all ---------- */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
