import React, { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { updateAuthCredentials, updateUserProfile } from "../../firebase/profileService";
import { X } from "lucide-react";
import toast from "react-hot-toast";

const UserProfile = () => {
  const { user, profile } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "", // use contact
    password: "",
    currentPassword: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (profile && user) {
      setUserData({
        firstName: profile.firstName || "",
        lastName: profile.lastName || "",
        email: user.email || "",
        contact: profile.contact || "", // use contact
        password: "",
        currentPassword: "",
      });
    }
  }, [profile, user]);

  const handleChange = (e) => setUserData({ ...userData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (userData.email !== user.email || userData.password) {
        await updateAuthCredentials({
          newEmail: userData.email,
          newPassword: userData.password,
          currentPassword: userData.currentPassword,
        });
      }

      await updateUserProfile(user.uid, {
        firstName: userData.firstName,
        lastName: userData.lastName,
        contact: userData.contact, // save as contact
      });

      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  if (!profile || !user) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <p className="text-lg text-gray-600">Loading user data...</p>
    </div>
  );

  return (
    <div className="min-h-full bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* User Info Card */}
        <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 sm:p-8 mb-8 border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                {profile.firstName} {profile.lastName}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
                <p><strong className="text-gray-800">Email:</strong> {user.email}</p>
                <p><strong className="text-gray-800">Contact:</strong> {profile.contact || 'N/A'}</p>
                <p><strong className="text-gray-800">Gender:</strong> {profile.gender || 'N/A'}</p>
                <p><strong className="text-gray-800">Department:</strong> {profile.department || 'N/A'}</p>
                <p><strong className="text-gray-800">Role:</strong> {profile.role || 'N/A'}</p>
                <p><strong className="text-gray-800">Joining Date:</strong> {profile.joiningDate || 'N/A'}</p>
                <p><strong className="text-gray-800">Created At:</strong> 
                  {profile.createdAt?.toDate 
                    ? profile.createdAt.toDate().toLocaleString() 
                    : profile.createdAt || 'N/A'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg shadow-md transition-all duration-300 font-medium"
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Edit Profile Modal */}
        {isEditing && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 relative transform transition-all">
              <button
                onClick={() => setIsEditing(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={28} />
              </button>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Update Profile</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="Last Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
                  <input
                    type="text"
                    name="contact"
                    value={userData.contact}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="Contact Number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                  <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="New Password (leave blank if unchanged)"
                  />
                </div>
                {(userData.email !== user.email || userData.password) && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={userData.currentPassword}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                      placeholder="Current Password"
                    />
                  </div>
                )}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className=" cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg shadow-md transition-all duration-300 font-medium disabled:bg-indigo-400 disabled:cursor-not-allowed"
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
