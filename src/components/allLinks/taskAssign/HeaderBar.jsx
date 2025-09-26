import React from "react";

const HeaderBar = ({ search, setSearch, deptFilter, setDeptFilter, departments }) => {
  return (
    <div className="flex flex-row sm:flex-row gap-3  items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 shadow-lg rounded-lg border border-gray-200">
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full sm:w-150 px-4 py-2 text-sm sm:text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400"
      />

      <select
        value={deptFilter}
        onChange={(e) => setDeptFilter(e.target.value)}
        className="w-full sm:w-48 px-4 py-2 text-sm sm:text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
      >
        <option value="">All Departments</option>
        {departments.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HeaderBar;