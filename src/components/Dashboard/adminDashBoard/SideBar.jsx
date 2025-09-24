import React from "react";
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
} from "lucide-react";

export const SideBar = ({ setActiveComponent, activeComponent }) => {
  const SideBarLinks = [
    { name: "Dashboard", icon: LayoutDashboard, size: 24 },
    { name: "All Users", icon: Users, size: 24 },
    { name: "Task Assign", icon: ClipboardCheck, size: 24 },
    { name: "Task Status", icon: Activity, size: 24 },
    { name: "Create Group", icon: MessageSquareMore, size: 24 },
    { name: "Show New Notification", icon: Bell, size: 24 },
    { name: "Today Alert", icon: Calendar, size: 24 },
    { name: "Add New User", icon: UserPlus, size: 24 },
  ];

  return (
    <aside className="min-h-screen flex flex-col justify-between bg-gray-100 p-4 w-64">
      {/* Logo */}
      <div className="flex items-center justify-center gap-5 shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-2 bg-gray-200 rounded">
        <img src={logo} alt="logo" className="w-8" />
        <h1 className="text-[20px] tracking-wider">WhatsTask</h1>
      </div>

      {/* Links */}
      <div className="mt-10 flex-1 flex flex-col gap-2 overflow-y-auto">
        {SideBarLinks.map((link, i) => {
          const Icon = link.icon;
          const isActive = activeComponent === link.name;
          return (
            <div
              key={i}
              onClick={() => setActiveComponent(link.name)}
              className={`flex items-center justify-between p-2 lg:my-3 rounded cursor-pointer ${
                isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-200"
              }`}>
              <div className="flex items-center gap-4">
                <Icon size={link.size} />
                <span>{link.name}</span>
              </div>

              {link.name === "Today Alert" && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  3
                </span>
              )}

              {link.name === "Show New Notification" && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  8
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Logout */}
      <div className="mt-4">
        <button className="flex items-center gap-2 p-2 bg-red-500 text-white rounded hover:bg-red-600 w-full justify-center">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};
