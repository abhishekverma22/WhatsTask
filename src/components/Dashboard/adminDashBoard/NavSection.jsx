import React, { useState, useEffect } from "react";
import moment from "moment";
import userImage from "../../../assets/user.png";

const NavSection = () => {
  const [currentTime, setTime] = useState(moment().format("D MMM | h:mm a"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("D MMM | h:mm a"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between w-full">
      {/* Empty left side for center alignment */}
      <div className="w-0 md:w-10"></div>

      {/* Center Time */}
      <div className="text-gray-800 font-medium text-base sm:text-lg text-center flex-1">
        {currentTime}
      </div>

      {/* User Image - Right side */}
      <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden border border-white/30 flex-shrink-0 cursor-pointer">
        <img
          src={userImage}
          alt="user"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default NavSection;
