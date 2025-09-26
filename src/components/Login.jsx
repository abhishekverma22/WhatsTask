import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import chating from "../assets/chating.svg";
import logo from "../assets/myspace.png";
import google from "../assets/google.png";
import { MoveUpRight } from "lucide-react";
import { loginWithRole } from "../firebase/userServices";
import { useUser } from "../context/UserContext";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { setUser, setProfile } = useUser();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      // loginWithRole should return firebaseUser and profileData with role
      const { firebaseUser, profileData } = await loginWithRole(form.email, form.password);

      setUser(firebaseUser);
      setProfile(profileData);

      // Redirect based on role
      const role = (profileData.role || "").toLowerCase();
      if (role === "admin") navigate("/admin-dashboard");
      else if (role === "user") navigate("/user-dashboard");
      else navigate("/login", { replace: true }); // unknown role, back to login

    } catch (err) {
      console.error(err);
      toast.error(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const goToSignup = () => navigate("/signup");
  const goToAbout = () => navigate("/about");

  return (
    <div className="min-h-screen flex flex-col lg:flex-row px-5 lg:px-10 py-10 gap-8 bg-amber-50">
      {/* Left section */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center">
        <img
          src={chating}
          alt="chating"
          className="w-full max-h-[500px] object-contain mix-blend-multiply"
        />
        <div className="mt-10 lg:mt-5 p-5 relative text-center lg:text-left">
          <p className="text-amber-950 font-light text-base lg:text-lg">
            <strong className="text-gray-800 font-sans font-medium tracking-wider border-b pb-1 text-2xl">
              WhatsTask
            </strong>
            <br /><br />
            WhatsTask is a modern, intuitive, and secure task management application.
          </p>
          <button
            onClick={goToAbout}
            className="mt-5 lg:mt-0 absolute lg:relative right-0 bottom-0 border px-6 py-2 flex gap-2 rounded-full justify-center items-center font-bold tracking-wider text-[16px] md:text-[18px] bg-gray-700 text-white hover:bg-gray-800 transition"
          >
            Read more <MoveUpRight size={20} />
          </button>
        </div>
      </div>

      {/* Right section */}
      <div className="lg:w-1/2 bg-white px-5 sm:px-10 py-10 flex flex-col justify-center rounded-lg shadow-lg">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="logo" className="w-24 sm:w-32" />
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold text-gray-600 text-center mb-2">
          Login to your Account
        </h1>
        <p className="text-gray-500 font-medium text-center mb-6">
          See what's going on with your team
        </p>

        {/* Google Login Button */}
        <button className="w-full flex items-center justify-center gap-3 border border-gray-400 py-4 rounded text-gray-500 font-semibold mb-5 hover:bg-gray-100 transition">
          <img src={google} alt="google-logo" className="w-6 h-6" />
          Continue with Google
        </button>

        <p className="text-center text-gray-400 text-sm my-4">
          ------------- or Sign in with Email -------------
        </p>

        {/* Email Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="example@whatstask.com"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full text-[20px] py-3 bg-green-600 text-white rounded hover:bg-green-500 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>


      </div>
    </div>
  );
};

export default Login;
