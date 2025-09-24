import React from "react";
import { useNavigate } from "react-router-dom";
import chating from "../assets/chating.svg";
import logo from "../assets/myspace.png";
import google from "../assets/google.png";
import { MoveUpRight } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate("/signup");
  };

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row px-5 lg:px-10 py-10 gap-8 bg-amber-50">
      {/* Left side: Image + About */}
      <div className="lg:w-1/2 flex flex-col ">
        <div className="">
          <img
            src={chating}
            alt="chating-svg"
            className="w-full max-h-[500px] object-contain mix-blend-multiply"
          />
        </div>

        <div className="mt-10 lg:mt-0 p-5 relative ">
          <p className="text-amber-950 font-light text-base lg:text-lg">
            <strong className="text-gray-800 font-sans font-medium tracking-wider border-b pb-1 text-2xl">
              WhatsTask
            </strong>
            <br />
            <br />
            WhatsTask is a modern, intuitive, and secure task management
            application designed to help individuals and teams stay organized,
            collaborate efficiently, and boost productivity. The app combines
            the simplicity of chat-based interfaces with advanced task
            management features, allowing users to create, track, and complete
            tasks seamlessly.
          </p>

          <button
            onClick={goToAbout}
            className=" cursor-pointer absolute lg:relative right-0 bottom-0 lg:mt-5  border px-6 py-2 flex gap-2 rounded-full justify-center items-center font-bold tracking-wider text-[16px] md:text-[18px] bg-blue-400 text-white hover:bg-blue-500 transition">
            Read more <MoveUpRight size={20} />
          </button>
        </div>
      </div>

      {/* Right side: Login Form */}
      <div className="lg:w-1/2 bg-white px-5 sm:px-10 py-10 flex flex-col justify-center rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="logo" className="w-24 sm:w-32" />
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-600">
            Login to your Account
          </h1>
          <p className="text-gray-500 font-medium mt-2">
            See what's going on with your team
          </p>
        </div>

        {/* Google Login */}
        <button className="w-full flex items-center justify-center gap-3 border border-gray-400 p-2  py-4 rounded text-gray-500 font-semibold mb-5 hover:bg-gray-100 transition">
          <img src={google} alt="google-logo" className="w-6 h-6" />
          Continue with Google
        </button>

        {/* OR Divider */}
        <p className="text-center text-gray-400 text-s my-4">
          ------------- or Sign in with Email -------------
        </p>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="example@whatstask.com"
              name="email"
              className="w-full border-b border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200 "
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
              className="w-full border-b border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          <div className="flex justify-between items-center text-sm mt-2 mb-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember-me"
                className="h-4 w-4 text-red-700 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="text-gray-600">
                Remember Me
              </label>
            </div>
            <a href="#" className="text-gray-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full  text-[20px] py-3 bg-green-600 text-white rounded text-base hover:bg-green-500 cursor-pointer transition">
            Login
          </button>
        </form>

        {/* Register Link */}
        <div className="mt-5 text-center text-md text-gray-500">
          Not Registered Yet?{" "}
          <span
            onClick={goToSignup}
            className="text-blue-600 font-medium hover:underline cursor-pointer ">
            Create an account
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
