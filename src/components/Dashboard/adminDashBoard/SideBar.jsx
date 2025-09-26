import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/myspace.png";
import {
  LayoutDashboard,
  Users,
  ClipboardCheck,
  Activity,
  MessageSquareMore,
  Bell,
  Calendar,
  UserPlus,
  LogOut,
  User,
} from "lucide-react";
import { logoutUser } from "../../../firebase/userServices";
import { toast } from "react-hot-toast";

export const SideBar = ({ toggleSidebar }) => {
  const SideBarLinks = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/admin-dashboard" },
    { name: "All Users", icon: Users, path: "/admin-dashboard/all-users" },
    { name: "Task Assign", icon: ClipboardCheck, path: "/admin-dashboard/task-assign" },
    { name: "Task Status", icon: Activity, path: "/admin-dashboard/task-status" },
    { name: "Create Group", icon: MessageSquareMore, path: "/admin-dashboard/create-group" },
    { name: "Show New Notification", icon: Bell, path: "/admin-dashboard/new-notification", badge: 8 },
    { name: "Today Alert", icon: Calendar, path: "/admin-dashboard/today-alert", badge: 3 },
    { name: "Add New User", icon: UserPlus, path: "/admin-dashboard/add-user" },
    { name: "My Profile", icon: User, path: "/admin-dashboard/user-profile" },
  ];

  const navigate = useNavigate();

  const handleLogout = () => {
    // Dismiss any existing logout toast
    toast.dismiss("logout-toast");

    // Show logout confirmation toast in center
    toast(
      (t) => (
        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-lg w-80">
          <p className="text-gray-800 font-medium text-center">
            Are you sure you want to logout?
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <button
              onClick={async () => {
                toast.dismiss(t.id); // dismiss this toast
                try {
                  await logoutUser(); // firebase logout
                  toast.success("Logged out successfully!");
                  navigate("/login"); // redirect to login page
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
        id: "logout-toast",               // unique ID to prevent duplicates
        duration: Infinity,               // stays until user clicks Yes/Cancel
        position: "top-center",           // base position
        style: {
          top: "50%",                     // vertical center
          left: "50%",                    // horizontal center
          transform: "translate(-50%, -50%)", // exact center
        },
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

              {link.badge && (
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
