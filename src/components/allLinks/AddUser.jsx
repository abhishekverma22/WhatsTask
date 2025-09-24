import React from "react";
import { Sparkles } from "lucide-react";

const AddUser = () => {
  return (
    <div className="bg-[#f9e9ff] min-h-full p-4">
      <div
        id="container"
        className="flex flex-col md:flex-row gap-7 p-4 md:p-10">
        {/* left-side */}
        <div id="left" className="w-full md:w-1/2 flex flex-col gap-5">
          {/* top-side */}
          <div
            id="top-header"
            className="border-2 p-5 rounded-2xl bg-white/30 backdrop-blur-md border-white/100 shadow-lg">
            <h1 className="text-xl sm:text-2xl text-gray-500 border-b-red-300 inline border-b-2 font-semibold font-sans tracking-wide relative">
              Basic Details{" "}
              <span className="absolute ml-1">
                <Sparkles size={15} className="text-red-500" />
              </span>
            </h1>
            {/* all-inputs */}
            <div className="flex flex-col gap-3 md:gap-5 mt-5">
              <div
                id="name-deatails"
                className="flex flex-col md:flex-row items-center gap-3 md:gap-10">
                <div id="input-field" className="w-full">
                  <label
                    htmlFor=""
                    className="text-base sm:text-lg md:text-[23px] ml-3 text-cyan-800 font-semibold">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="w-full border-b-2 border-gray-300 rounded-2xl px-3 sm:px-5 py-2 text-sm sm:text-[20px] md:text-[20px] focus:outline-0 focus:shadow-md transition"
                  />
                </div>
                <div id="input-field" className="w-full">
                  <label
                    htmlFor=""
                    className="text-base sm:text-lg md:text-[23px] ml-3 text-cyan-800 font-semibold">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="w-full border-b-2 border-gray-300 rounded-2xl px-3 sm:px-5 py-2 text-sm sm:text-[20px] md:text-[20px] focus:outline-0 focus:shadow-md transition"
                  />
                </div>
              </div>

              <div id="input-field">
                <label
                  htmlFor=""
                  className="text-base sm:text-lg md:text-[23px] ml-3 text-cyan-800 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter user email"
                  className="w-full border-b-2 border-gray-300 rounded-2xl px-3 sm:px-5 py-2 text-sm sm:text-[20px] md:text-[20px] focus:outline-0 focus:shadow-md transition"
                />
              </div>

              <div id="input-field">
                <label
                  htmlFor=""
                  className="text-base sm:text-lg md:text-[23px] ml-3 text-cyan-800 font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter user password"
                  className="w-full border-b-2 border-gray-300 rounded-2xl px-3 sm:px-5 py-2 text-sm sm:text-[20px] md:text-[20px] focus:outline-0 focus:shadow-md transition"
                />
              </div>

              <div id="input-field">
                <label
                  htmlFor=""
                  className="text-base sm:text-lg md:text-[23px] ml-3 text-cyan-800 font-semibold">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Re-enter user password"
                  className="w-full border-b-2 border-gray-300 rounded-2xl px-3 sm:px-5 py-2 text-sm sm:text-[20px] md:text-[20px] focus:outline-0 focus:shadow-md transition"
                />
              </div>
            </div>
          </div>

          {/* bottom-side */}
          <div
            id="bottom-side"
            className="border-2 p-5 rounded-2xl bg-white/30 backdrop-blur-md border-white/100 shadow-lg">
            <h1 className="text-xl sm:text-2xl text-gray-500 border-b-red-300 inline border-b-2 font-semibold font-sans tracking-wide relative">
              Select Role{" "}
              <span className="absolute ml-1">
                <Sparkles size={15} className="text-red-500" />
              </span>
            </h1>
            <div className="mt-3 sm:mt-5">
              <label
                htmlFor="role"
                className="text-base sm:text-lg md:text-[23px] ml-3 text-cyan-800 font-semibold">
                Choose Role
              </label>
              <select
                name="role"
                className="w-full border border-gray-400 rounded px-3 py-2 text-sm sm:text-[20px] md:text-[20px] focus:outline-none focus:ring-2 focus:ring-gray-200">
                <option value=""> Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
        </div>

        {/* right-side */}
        <div
          id="right"
          className="border-2 p-5 rounded-2xl bg-white/30 backdrop-blur-md border-white/100 shadow-lg w-full md:w-1/2">
          <h1 className="text-xl sm:text-2xl text-gray-500 border-b-red-300 inline border-b-2 font-semibold font-sans tracking-wide ">
            Extra Information
          </h1>

          <div className="mt-3 sm:mt-5">
            <label
              htmlFor="role"
              className="text-base sm:text-lg md:text-[23px] ml-3 text-cyan-800 font-semibold ">
              Upload Image
            </label>
            <input
              type="file"
              name="userProfileImage"
              className="w-full border-b-2 border-gray-300 rounded-2xl px-3 sm:px-5 py-2 text-sm sm:text-[20px] md:text-[20px] focus:outline-0 focus:shadow-md transition mt-2"
            />
          </div>

          <div className="mt-3 sm:mt-5">
            <label
              htmlFor="role"
              className="text-base sm:text-lg md:text-[23px] ml-3 text-cyan-800 font-semibold ">
              Contact Number
            </label>
            <input
              type="tel"
              name="userContactNumber"
              placeholder="Enter user phone number"
              required
              pattern="[0-9]{10}"
              minLength={10}
              maxLength={10}
              className="w-full border-b-2 border-gray-300 rounded-2xl px-3 sm:px-5 py-2 text-sm sm:text-[20px] md:text-[20px] focus:outline-0 focus:shadow-md transition mt-2"
            />
          </div>

          <div className="mt-3 sm:mt-5">
            <label
              htmlFor="role"
              className="text-base sm:text-lg md:text-[23px] ml-3 text-cyan-800 font-semibold ">
              Department
            </label>
            <select
              name="role"
              className="w-full border border-gray-400 rounded px-3 py-2 text-sm sm:text-[20px] md:text-[20px] focus:outline-none focus:ring-2 focus:ring-gray-200">
              <option value="">Select Department</option>
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

          <div className="mt-3 sm:mt-5">
            <label className="text-base sm:text-lg md:text-[23px] ml-3 text-cyan-800 font-semibold ">
              Date of Joining
            </label>
            <input
              type="date"
              required
              className="w-full border-b-2 border-gray-300 rounded-2xl px-3 sm:px-5 py-2 text-sm sm:text-[20px] md:text-[20px] focus:outline-0 focus:shadow-md transition cursor-pointer"
            />
          </div>

          <div className="mt-3 sm:mt-4">
            <p className="mb-2 font-medium text-gray-700 text-sm sm:text-base md:text-[20px]">
              Gender<span className="text-red-500">*</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 border-2 border-gray-300 p-3 rounded-2xl px-3 sm:px-5 py-2 text-sm sm:text-[20px] md:text-[20px] focus:outline-0 focus:shadow-md transition">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  required
                  className="accent-blue-500 text-[18px] cursor-pointer sm:text-[20px]"
                />
                Male
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  required
                  className="accent-pink-500 text-[18px] cursor-pointer sm:text-[20px]"
                />
                Female
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  required
                  className="accent-purple-500 text-[18px] cursor-pointer sm:text-[20px]"
                />
                Other
              </label>
            </div>
          </div>
        </div>
      </div>

      <div
        id="button-div"
        className="border-2 p-4 md:p-5 rounded-2xl bg-gray-300 backdrop-blur-md border-white/100 shadow-lg flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
        <button className="border-2 w-full sm:w-auto px-6 sm:px-10 py-2 text-base sm:text-[20px] border-white/100 rounded-2xl bg-red-200 font-semibold tracking-wide text-gray-700 hover:cursor-pointer hover:shadow-md shadow-gray-500 transition hover:bg-red-300 hover:text-gray-900 ">
          Remove Changes
        </button>
        <button className="border-2 w-full sm:w-auto px-6 sm:px-10 py-2 text-base sm:text-[20px] border-white/100 rounded-2xl bg-green-200 font-semibold tracking-wide text-gray-700 hover:cursor-pointer hover:shadow-md shadow-gray-500 transition hover:bg-green-300 hover:text-gray-900">
          Add Member
        </button>
      </div>
    </div>
  );
};

export default AddUser;
