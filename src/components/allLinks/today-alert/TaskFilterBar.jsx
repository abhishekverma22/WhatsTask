import React from "react";
import { Funnel, ArrowDownUp } from "lucide-react";

const TaskFilterBar = ({ departments, filter, setFilter, sort, setSort, search, setSearch }) => {
  return (
    <div className="sticky top-0 z-10 bg-gray-50 rounded-xl border-b border-gray-300 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 p-4 shadow-md">
      
      {/* Filter */}
      <div className="border-2 border-gray-300 flex rounded-2xl pr-2 sm:pr-5 w-full sm:w-auto font-semibold text-sm sm:text-base">
        <h1 className="flex border-r-2 py-2 px-4 sm:px-6 items-center gap-2 border-gray-300">
          <Funnel size={20} /> Filter
        </h1>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="outline-0 ml-2 py-2 px-2 sm:px-3 w-full sm:w-auto cursor-pointer"
        >
          <option value="">All Departments</option>
          {departments.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      {/* Sort */}
      <div className="border-2 border-gray-300 flex rounded-2xl pr-2 sm:pr-5 w-full sm:w-auto font-semibold text-sm sm:text-base">
        <h1 className="flex border-r-2 py-2 px-4 sm:px-6 items-center gap-2 border-gray-300">
          <ArrowDownUp size={20} /> Sort
        </h1>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="outline-0 ml-2 py-2 px-2 sm:px-3 w-full sm:w-auto cursor-pointer"
        >
          <option value="">All Priorities</option>
          <option value="High">High</option>
          <option value="Moderate">Moderate</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {/* Search */}
      <div className="w-full sm:w-auto">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by task, title, description or priority..."
          className="w-full sm:w-150 px-4 py-2 outline-0 border-2 rounded-2xl border-gray-400 text-sm sm:text-base"
        />
      </div>
    </div>
  );
};

export default TaskFilterBar;
