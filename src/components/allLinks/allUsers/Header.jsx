import React, { useState } from "react";
import { Search, Funnel, ArrowUpDown } from "lucide-react";

const Header = ({ onFilterChange }) => {
  const [searchText, setSearchText] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [sortBy, setSortBy] = useState(""); // nameAsc, nameDesc, dateAsc, dateDesc

  // 🔄 Notify parent whenever a filter changes
  const handleChange = (key, value) => {
    const updates = { searchText, department, role, sortBy, [key]: value };
    if (onFilterChange) onFilterChange(updates);
  };

  return (
    <header className="flex flex-wrap items-center justify-evenly gap-4 p-2 md:p-3 bg-red-300 text-base md:text-lg">
      {/* 🔍 Search Box */}
      <div className="flex items-center gap-2 border border-white pl-3 bg-gray-50 w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search by name"
          className="border-0 outline-0 w-full sm:w-[250px] md:w-[300px] lg:w-[400px] text-sm sm:text-base"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            handleChange("searchText", e.target.value);
          }}
        />
        <button className="p-2 text-white bg-red-400">
          <Search size={18} />
        </button>
      </div>

      {/* 🏢 Department Filter */}
      <div className="flex items-center gap-2 border border-white p-2 bg-gray-50">
        <Funnel size={18} />
        <select
          className="border-0 outline-0 bg-transparent text-sm sm:text-base cursor-pointer"
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value);
            handleChange("department", e.target.value);
          }}
        >
          <option value="">All Departments</option>
          <option value="accounts">Accounts</option>
          <option value="BackendDev">Backend Developer</option>
          <option value="cybersecurity">Cybersecurity</option>
          <option value="dataScience">Data Science</option>
          <option value="DevopsEng">DevOps</option>
          <option value="finance">Finance</option>
          <option value="frontendDev">Frontend Developer</option>
          <option value="fullStack">Full Stack</option>
          <option value="hr">Human Resources</option>
          <option value="it">IT</option>
          <option value="mobileDev">Mobile Development</option>
          <option value="sales">Sales</option>
          <option value="qA-Testing">QA/Testing</option>
          <option value="uiux">UI/UX</option>
        </select>
      </div>

      {/* 👤 Role Filter */}
      <div className="flex items-center gap-2 border border-white p-2 bg-gray-50">
        <Funnel size={18} />
        <label className="text-sm sm:text-base">Role:</label>
        <select
          className="border-0 outline-0 bg-transparent text-sm sm:text-base cursor-pointer"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
            handleChange("role", e.target.value);
          }}
        >
          <option value="">All</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

      {/* ↕ Sort By */}
      <div className="flex items-center gap-2 border border-white p-2 bg-gray-50">
        <ArrowUpDown size={18} />
        <select
          className="border-0 outline-0 bg-transparent text-sm sm:text-base cursor-pointer"
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            handleChange("sortBy", e.target.value);
          }}
        >
          <option value="">Sort By</option>
          <option value="nameAsc">Name (A-Z)</option>
          <option value="nameDesc">Name (Z-A)</option>
          <option value="dateAsc">Joining Date (Oldest)</option>
          <option value="dateDesc">Joining Date (Newest)</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
