import React, { useState, useEffect } from "react";
import Header from "./Header";
import UsersTable from "./UsersTable";
import UsersDetails from "./UsersDetails";
import { getAllUsers } from "../../../firebase/fetchAllUsers";
import { updateUserInFirestore } from "../../../firebase/profileService";
import toast from "react-hot-toast";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch users from Firestore on mount
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAllUsers();
      setUsers(data);
      setFiltered(data);
    };
    fetchUsers();
  }, []);

  // Apply search, filter, sort
  const applyFilters = ({
    searchText = "",
    department = "",
    role = "",
    sortBy = "",
  }) => {
    let result = [...users];
    if (searchText.trim()) {
      result = result.filter((u) =>
        `${u.firstName} ${u.lastName}`
          .toLowerCase()
          .includes(searchText.toLowerCase())
      );
    }
    if (department) result = result.filter((u) => u.department === department);
    if (role)
      result = result.filter(
        (u) => u.role.toLowerCase() === role.toLowerCase()
      );
    if (sortBy === "nameAsc")
      result.sort((a, b) => a.firstName.localeCompare(b.firstName));
    if (sortBy === "nameDesc")
      result.sort((a, b) => b.firstName.localeCompare(a.firstName));
    if (sortBy === "dateAsc")
      result.sort((a, b) => new Date(a.joiningDate) - new Date(b.joiningDate));
    if (sortBy === "dateDesc")
      result.sort((a, b) => new Date(b.joiningDate) - new Date(a.joiningDate));
    setFiltered(result);
  };

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  // 🔹 Update user in state + Firestore
  const handleUserUpdate = async (updatedUser) => {
    try {
      // Update Firestore first
      const { id, ...dataWithoutId } = updatedUser;
      await updateUserInFirestore(id, dataWithoutId);

      // Update local state instantly
      setUsers((prev) => prev.map((u) => (u.id === id ? updatedUser : u)));
      setFiltered((prev) => prev.map((u) => (u.id === id ? updatedUser : u)));

      toast.success("User updated successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update user!");
    }
  };

  return (
    <div className="flex h-full bg-[#F0E4D3]">
      {/* Left Panel: Users Table */}
      <div className="flex flex-col w-full md:w-3/4 border-r border-gray-300">
        {/* Header fixed at top of left panel */}
        <div className="sticky top-0 z-10 bg-[#F0E4D3] shadow-md">
          <Header onFilterChange={handleFilterChange} />
        </div>

        {/* Table scrollable */}
        <div className="flex-1 overflow-y-auto p-4">
          <UsersTable users={filtered} onUserClick={setSelectedUser} />
        </div>
      </div>

      {/* Right Panel: User Details fixed height */}
      <div className="hidden md:flex w-1/4 bg-white flex-col">
        <div className="p-4 flex-1 overflow-y-auto">
          {selectedUser ? (
            <UsersDetails user={selectedUser} onUpdate={handleUserUpdate} />
          ) : (
            <div className="m-auto text-gray-400">Select a user</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
