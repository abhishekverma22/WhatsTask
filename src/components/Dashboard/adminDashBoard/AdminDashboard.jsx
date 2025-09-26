import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavSection from "./NavSection";
import { SideBar } from "./SideBar";
import { Menu, X } from "lucide-react";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="h-screen w-full bg-[#F6F6F6] flex">
      {/* Sidebar */}
      <aside
        className={`
          fixed md:relative top-0 left-0 z-50
          w-64 bg-white shadow-md h-full
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        <SideBar toggleSidebar={toggleSidebar} />
      </aside>

      {/* Overlay for small devices */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Right Side */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="h-[70px] flex items-center justify-between px-3 sm:px-5 bg-white border-b border-gray-300 shadow-sm">
          {/* Left: Hamburger */}
          <div className="flex items-center">
            <button
              className="md:hidden p-2 rounded-md bg-white/30 backdrop-blur-md shadow-md flex items-center justify-center"
              onClick={toggleSidebar}
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Center: NavSection */}
          <div className="flex-1 flex justify-center">
            <NavSection />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
