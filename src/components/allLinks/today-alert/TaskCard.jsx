import React from "react";

const TaskCard = () => {
  return (
    <div className="border-2 border-amber-50 rounded-[10px] w-full min-h-40 hover:bg-[#c7f0e5] p-4 sm:p-6 cursor-pointer hover:shadow-lg transition">
      <h1 className="font-semibold text-[18px] sm:text-[20px] tracking-wide border-b-red-500 pb-1 inline text-gray-500 border-b">
        Abhishek Verma
      </h1>
      
      <h2 className="mt-4 sm:mt-8 text-[14px] sm:text-[16px]">
        <strong>Department : </strong>
        Full Stack
      </h2>
      <h2 className="mt-2 text-[14px] sm:text-[16px]">
        <strong>Task : </strong> Complete TypeScript
      </h2>
      <h2 className="mt-2 text-[14px] sm:text-[16px]">
        <strong>Priority : </strong>
        High
      </h2>
      <p className="mt-2 text-[12px] sm:text-[14px]">
        <strong>Description : </strong>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint assumenda
        voluptatem explicabo ullam. Praesentium illum saepe ex totam voluptates
        modi beatae! Aperiam quaerat quidem natus quas ea alias necessitatibus
        quibusdam?
      </p>

      <div className="flex flex-col sm:flex-row items-start sm:items-center mt-4 sm:mt-3 justify-between gap-3 sm:gap-0 pr-0 sm:pr-9">
        <h1 className="text-amber-700 text-[14px] sm:text-[16px]">
          <strong className="text-[14px] sm:text-[16px]">DeadLine :- </strong>
          <strong className="text-gray-400 text-[12px] sm:text-[14px]">
            24 Sep | 11:59 PM
          </strong>
        </h1>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto mt-2 sm:mt-0">
          <input
            type="text"
            placeholder="Type something to notify..."
            className="outline-0 border border-gray-400 rounded-[10px] w-full sm:w-[250px] px-3 sm:px-5 py-2 text-[14px] sm:text-[16px]"
          />
          <button className="px-5 py-2 border-2 border-white hover:shadow-md shadow-cyan-800 transition bg-[#66785F] text-white cursor-pointer rounded-2xl font-bold text-[14px] sm:text-[16px]">
            Send Notification
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
