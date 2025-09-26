import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const UsersDetails = ({ user, onUpdate }) => {
  const [form, setForm] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      setForm({ ...user });
      setIsEditing(false);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!onUpdate) return;

    onUpdate({
      ...user,
      role: form.role,
      department: form.department,
      gender: form.gender,
      joiningDate: form.joiningDate, // 🔹 Save updated joining date
    });

    setIsEditing(false);
    toast.success("User updated successfully!");
  };

  const handleCancel = () => {
    setForm({ ...user });
    setIsEditing(false);
  };

  if (!user) return null;

  return (
    <div className="flex flex-col gap-4 w-full p-4 capitalize">
      <h2 className="text-2xl text-center font-bold text-gray-700">
        Edit User Details
      </h2>

      {/* First Name, Last Name, Email, Contact - always read-only */}
      {["firstName", "lastName", "email", "contact"].map((field) => (
        <div key={field} className="flex flex-col">
          <label className="text-gray-500 font-medium mb-1">{field}:</label>
          <input
            type="text"
            value={form[field] || ""}
            readOnly
            className="border border-gray-300 rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
          />
        </div>
      ))}

      {/* Joining Date - editable in edit mode */}
      <div className="flex flex-col">
        <label className="text-gray-500 font-medium mb-1">Joining Date:</label>
        <input
          type="date"
          name="joiningDate"
          value={form.joiningDate || ""}
          onChange={handleChange}
          disabled={!isEditing}
          className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            !isEditing ? "bg-gray-100 cursor-not-allowed" : ""
          }`}
        />
      </div>

      {/* Gender */}
      <div className="flex flex-col">
        <label className="text-gray-500 font-medium mb-1">Gender:</label>
        <select
          name="gender"
          value={form.gender || ""}
          onChange={handleChange}
          disabled={!isEditing}
          className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            !isEditing ? "bg-gray-100 cursor-not-allowed" : ""
          }`}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Role */}
      <div className="flex flex-col">
        <label className="text-gray-500 font-medium mb-1">Role:</label>
        <select
          name="role"
          value={form.role || ""}
          onChange={handleChange}
          disabled={!isEditing}
          className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            !isEditing ? "bg-gray-100 cursor-not-allowed" : ""
          }`}
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
      </div>

      {/* Department */}
      <div className="flex flex-col">
        <label className="text-gray-500 font-medium mb-1">Department:</label>
        <select
          name="department"
          value={form.department || ""}
          onChange={handleChange}
          disabled={!isEditing}
          className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            !isEditing ? "bg-gray-100 cursor-not-allowed" : ""
          }`}
        >
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

      {/* Buttons */}
      <div className="flex gap-2 mt-4 w-full">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className=" w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold"
          >
            Edit
          </button>
        ) : (
          <>
            <button
              onClick={handleSave}
              className="w-1/2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="w-1/2 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold"
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UsersDetails;
