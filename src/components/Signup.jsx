import React from "react";
import chating from "../assets/chating.svg";
import logo from "../assets/myspace.png";
import google from "../assets/google.png";
import { MoveUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  const goToAbout = () => {
    navigate("/about");
  };
  return (
    <div className="min-h-screen flex flex-col lg:flex-row px-5 lg:px-10 py-10 gap-8 bg-amber-50">
      {/* Left side: Image + About */}
      <div className="lg:w-1/2 flex flex-col ">
        <div>
          <img
            src={chating}
            alt="chating-svg"
            className="w-full max-h-[500px] object-contain mix-blend-multiply"
          />
        </div>

        <div className="mt-10 lg:mt-0 p-5 relative bg-amber-50">
          <p className="text-amber-950 font-light text-base lg:text-lg">
            <strong className="text-gray-800 font-sans font-medium tracking-wider border-b pb-1 text-2xl">
              WhatsTask
            </strong>
            <br />
            <br />
            WhatsTask is a modern, intuitive, and secure task management
            application designed to help individuals and teams stay organized,
            collaborate efficiently, and boost productivity. Create your account
            and start managing tasks seamlessly.
          </p>

          <button onClick={goToAbout} className="cursor-pointer absolute lg:relative right-0 bottom-0 lg:mt-5 border px-6 py-2 flex gap-2 rounded-full justify-center items-center font-bold tracking-wider text-[16px] md:text-[18px] bg-blue-400 text-white hover:bg-blue-500 transition">
            Read more <MoveUpRight size={20} />
          </button>
        </div>
      </div>

      {/* Right side: Signup Form */}
      <div className="lg:w-1/2 bg-white px-5 sm:px-10 py-10 flex flex-col justify-center rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="logo" className="w-24 sm:w-32" />
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-600">
            Get Started with WhatsTask
          </h1>
          <p className="text-gray-500 font-medium mt-2">
            Join WhatsTask and start organizing your tasks
          </p>
        </div>

        {/* Google Signup */}
        <button className="w-full flex items-center justify-center gap-3 border border-gray-400 p-2 rounded text-gray-500 font-semibold mb-5 hover:bg-gray-100 transition">
          <img src={google} alt="google-logo" className="w-6 h-6" />
          Continue with Google
        </button>

        {/* OR Divider */}
        <p className="text-center text-gray-400 text-xs my-4">
          ------------- or Sign up with Email -------------
        </p>

        {/* Signup Form UI */}
        <form className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label
                htmlFor="firstName"
                className="mb-1 text-gray-700 font-medium">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                name="firstName"
                className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>

            <div className="flex flex-col w-full">
              <label
                htmlFor="lastName"
                className="mb-1 text-gray-700 font-medium">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                name="lastName"
                className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="example@whatstask.com"
              name="email"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="mb-1 text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="confirmPassword"
              className="mb-1 text-gray-700 font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter your password"
              name="confirmPassword"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="role" className="mb-1 text-gray-700 font-medium">
              Select Role
            </label>
            <select
              name="role"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Optional additional info */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-1 text-gray-700 font-medium">
              Phone (optional)
            </label>
            <input
              type="text"
              placeholder="+91 1234567890"
              name="phone"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="team" className="mb-1 text-gray-700 font-medium">
              Team / Company Name (optional)
            </label>
            <input
              type="text"
              placeholder="Team / Company"
              name="team"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          <button
            type="submit"
            className="w-full  text-[20px] py-3 bg-green-600 text-white rounded text-base hover:bg-green-500 cursor-pointer transition">
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-5 text-center text-md text-gray-500">
          Already have an account?{" "}
          <span
            onClick={goToLogin}
            className="text-blue-600 font-medium hover:underline cursor-pointer">
            Log in here
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
