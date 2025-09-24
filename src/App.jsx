import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import AdminDashboard from "./components/Dashboard/adminDashBoard/AdminDashboard";
import ClientDashboard from "./components/Dashboard/clientDashboard/ClientDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<ClientDashboard/>} />
        <Route />
      </Routes>
    </Router>
  );
};

export default App;
