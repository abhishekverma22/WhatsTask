import React from "react";
import { Funnel, ArrowDownUp } from "lucide-react";
import NotificationCard from "./NotificationCard";

const NewNotification = () => {
  return (
    <div className="min-h-full p-4 bg-[#f5ffe0]">
      {/* Sticky Header: filter, sort, search */}
      <div className="sticky top-0 z-10 rounded-[10px] items-center justify-center bg-[#c0cf9f] border-b-2 border-white/40 py-4 p-2 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 shadow-md">
        {/* Filter */}
        <div className="border-white text-[16px] sm:text-[18px] font-semibold border-2 flex rounded-2xl pr-2 sm:pr-5 w-full sm:w-auto">
          <h1 className="flex border-r-2 py-2 px-4 sm:px-6 items-center gap-2 border-white">
            <Funnel size={20} /> Filter
          </h1>
          <select className="outline-0 cursor-pointer ml-2 py-2 px-2 sm:px-3 w-full sm:w-auto">
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

        {/* Sort */}
        <div className="border-white text-[16px] sm:text-[18px] font-semibold border-2 flex rounded-2xl pr-2 sm:pr-5 w-full sm:w-auto">
          <h1 className="flex border-r-2 py-2 px-4 sm:px-6 items-center gap-2 border-white">
            <ArrowDownUp size={20} /> Sort
          </h1>
          <select className="outline-0 cursor-pointer ml-2 py-2 px-2 sm:px-3 w-full sm:w-auto">
            <option value="">All Priorities</option>
            <option value="High">High</option>
            <option value="Moderate">Moderate</option>
            <option value="Low">Low</option>
          </select>
        </div>
        {/* Sort by date and time*/}
        <div className="border-white text-[16px] sm:text-[18px] font-semibold border-2 flex rounded-2xl pr-2 sm:pr-5 w-full sm:w-auto">
          <h1 className="flex border-r-2 py-2 px-4 sm:px-6 items-center gap-2 border-white">
            <ArrowDownUp size={20} /> Sort by date
          </h1>
          <select className="outline-0 cursor-pointer ml-2 py-2 px-2 sm:px-3 w-full sm:w-auto">
            <option value="">All </option>
            <option value="High">New First</option>
            <option value="Moderate">Old First</option>
          </select>
        </div>

        {/* Search Box */}
        <div className="w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search by task, department, title, description or priority..."
            className="w-full sm:w-[400px] px-4 py-2 outline-0 border-2 rounded-2xl border-gray-200 text-[14px] sm:text-[16px]"
          />
        </div>
      </div>

      {/* Task cards */}
      <div id="task-container" className="p-4 flex flex-col gap-4">
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </div>
    </div>
  );
};

export default NewNotification;
