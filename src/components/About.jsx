import React from "react";
import logo from "../assets/myspace.png";
import { Sparkle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen w-full bg-amber-50 flex flex-col md:flex-row md:justify-evenly">
      {/* Left Section */}
      <div
        id="left"
        className="w-full md:w-[20%] min-h-[200px] flex flex-col md:justify-center p-5 items-center">
        {/* Logo + Name */}
        <div className="flex items-center justify-center gap-3 mb-6 md:mb-10">
          <img src={logo} alt="logo" className="w-12 md:w-10" />
          <h1 className="text-3xl md:text-4xl text-red-950 font-medium tracking-wider">
            WhatsTask
          </h1>
        </div>

        {/* ABOUT Vertical Letters */}
        <div
          id="about-heading"
          className="flex md:flex-col justify-center gap-4 md:h-[90%] text-5xl sm:text-7xl md:text-9xl px-2">
          <p className="font-extrabold text-stroke">A</p>
          <p className="font-extrabold text-stroke">B</p>
          <p className="font-extrabold text-stroke">O</p>
          <p className="font-extrabold text-stroke">U</p>
          <p className="font-extrabold text-stroke">T</p>
        </div>
      </div>

      {/* Right Section */}
      <div
        id="right"
        className="w-full md:w-[65%] px-6 sm:px-10 py-10 flex flex-col justify-center gap-6">
        {/* Intro */}
        <div>
          <p className="text-base sm:text-lg md:text-[20px] font-light leading-7 sm:leading-8">
            <strong className="font-bold">WhatsTask</strong> is a smart and
            modern{" "}
            <strong className="font-bold">task management application</strong>{" "}
            designed to help
            <strong className="font-bold"> individuals and teams</strong> stay
            organized, collaborate easily, and get more work done without
            stress.
          </p>

          <p className="mt-8 text-base sm:text-lg md:text-[20px] font-light leading-7 sm:leading-8">
            Whether you are managing personal tasks, running a small team, or
            leading a big project, WhatsTask gives you
            <strong className="font-bold"> all-in-one tools </strong>to plan,
            track, and complete tasks efficiently.
          </p>
        </div>

        <hr className="mt-5 text-gray-300" />

        {/* Key Highlights */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide mt-8 mb-4 flex items-center gap-2 text-gray-500 underline">
          <Sparkle className="text-amber-600" size={24} /> Key Highlights
        </h1>
        <ul className="pl-6 sm:pl-10 text-base sm:text-lg leading-7">
          <li>
            <strong>Chat-like Interface</strong> – Manage tasks in a familiar
            and simple chat-style layout.
          </li>
          <li className="mt-4">
            <strong>Role-Based Access</strong> – Create accounts as a{" "}
            <strong>User</strong> or <strong>Admin</strong> for secure and
            organized team management.
          </li>
          <li className="mt-4">
            <strong>Easy Collaboration</strong> – Share tasks, track progress,
            and stay updated with your team in real-time.
          </li>
          <li className="mt-4">
            <strong>Secure & Reliable</strong> – Your data is safe with strong
            authentication and privacy protection.
          </li>
        </ul>

        <hr className="mt-5 text-gray-300" />

        {/* Why Choose */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide mt-8 flex items-center gap-2 text-gray-500 underline">
          <Sparkle className="text-amber-600" size={24} /> Why Choose WhatsTask?
        </h1>
        <p className="mt-4 sm:mt-5 leading-6 sm:leading-7 text-base sm:text-lg md:text-[20px] pl-6 sm:pl-10">
          Unlike traditional task managers, WhatsTask is built to feel{" "}
          <strong>fun, fast, and interactive,</strong> making it easier for you
          to stay focused and productive. Whether you're working alone or with a
          team, WhatsTask adapts to your workflow and helps you get things done.
        </p>
      </div>
    </div>
  );
};

export default About;
