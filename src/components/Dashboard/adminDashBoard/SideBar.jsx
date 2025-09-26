import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/myspace.png";
import {
  LayoutDashboard,
  Users,
  ClipboardCheck,
  Bell,
  Calendar,
  UserPlus,
  LogOut,
  User,
} from "lucide-react";
import { fetchTodayTasks } from "../../../firebase/taskServices";
import { logoutUser } from "../../../firebase/userServices";
import { toast } from "react-hot-toast";

export const SideBar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [todayCount, setTodayCount] = useState(0);

  // Fetch today's tasks when sidebar mounts
  useEffect(() => {
    const loadTodayTasks = async () => {
      try {
        const todayTasks = await fetchTodayTasks();
        setTodayCount(todayTasks.length);
      } catch (err) {
        console.error("Failed to fetch today's tasks:", err);
      }
    };
    loadTodayTasks();
  }, []);

  const SideBarLinks = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/admin-dashboard" },
    { name: "Task Assign To User", icon: ClipboardCheck, path: "/admin-dashboard/task-assign" },
    { name: "All Users", icon: Users, path: "/admin-dashboard/all-users" },
    { name: "Show New Notification", icon: Bell, path: "/admin-dashboard/new-notification", badge: 8 },
    { name: "Today Alert", icon: Calendar, path: "/admin-dashboard/today-alert", badge: todayCount },
    { name: "Add New User", icon: UserPlus, path: "/admin-dashboard/add-user" },
    { name: "My Profile", icon: User, path: "/admin-dashboard/user-profile" },
  ];

  const handleLogout = () => {
    toast.dismiss("logout-toast");
    toast(
      (t) => (
        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-lg w-80">
          <p className="text-gray-800 font-medium text-center">Are you sure you want to logout?</p>
          <div className="flex justify-center gap-4 mt-2">
            <button
              onClick={async () => {
                toast.dismiss(t.id);
                try {
                  await logoutUser();
                  toast.success("Logged out successfully!");
                  navigate("/login");
                } catch (err) {
                  toast.error(err.message || "Logout failed");
                }
              }}
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
            >
              Yes
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-300 px-4 py-1 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        id: "logout-toast",
        duration: Infinity,
        position: "top-center",
        style: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 p-4 w-64">
      {/* Logo */}
      <div className="flex items-center justify-center gap-5 shadow py-2 bg-gray-200 rounded">
        <img src={logo} alt="logo" className="w-8" />
        <h1 className="text-[20px] tracking-wider">WhatsTask</h1>
      </div>

      {/* Links */}
      <div className="mt-10 flex-1 flex flex-col gap-2 overflow-y-auto">
        {SideBarLinks.map((link, i) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={i}
              to={link.path}
              onClick={toggleSidebar}
              className={({ isActive }) =>
                `flex items-center justify-between p-2 lg:my-3 rounded cursor-pointer ${
                  isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-200"
                }`
              }
            >
              <div className="flex items-center gap-4">
                <Icon size={24} />
                <span>{link.name}</span>
              </div>
              {link.badge > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {link.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Logout */}
      <div className="mt-4">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 p-2 bg-red-500 text-white rounded hover:bg-red-600 w-full justify-center"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
};
