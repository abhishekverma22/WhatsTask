import React, { useState, useEffect } from "react";
import moment from "moment";
import userImage from "../../../assets/user.png";
import { useUser } from "../../../context/UserContext";

const NavSection = () => {
  const [currentTime, setTime] = useState(moment().format("D MMM | h:mm a"));

  const { user, profile, loading } = useUser();

  if (loading) return <p>Loading user info...</p>;
  if (!user) return <p>No user logged in.</p>;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("D MMM | h:mm a"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between w-full px-2 sm:px-6 py-1 sm:py-2">
      {/* Left side - User Info */}
      <div className="ml-2 sm:ml-6 text-sm sm:text-base">
        <p className="capitalize">
          <strong className="hidden sm:inline">USER: </strong>
          {profile?.firstName} {profile?.lastName} ({profile?.role})
        </p>
      </div>

      {/* Center - Time */}
      <div className="text-gray-800 font-medium text-xs sm:text-base text-center flex-1">
        {currentTime}
      </div>

      {/* Right side - User Image */}
      <div className="h-6 w-6 sm:h-10 sm:w-10 rounded-full overflow-hidden border border-white/30 flex-shrink-0 cursor-pointer">
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
