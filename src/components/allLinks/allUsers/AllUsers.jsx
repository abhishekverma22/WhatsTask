import React, { useState, useEffect } from "react";
import Header from "./Header";
import UsersTable from "./UsersTable";
import UsersDetails from "./UsersDetails";
import { getAllUsers } from "../../../firebase/fetchAllUsers";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAllUsers();
      setUsers(data);
      setFiltered(data);
    };
    fetchUsers();
  }, []);

  // 🔎 Apply search, filter & sort
  const applyFilters = (list, { searchText = "", department = "", role = "", sortBy = "" }) => {
    let result = [...list];

    if (searchText.trim()) {
      result = result.filter((u) =>
        `${u.firstName} ${u.lastName}`.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    if (department) result = result.filter((u) => u.department === department);
    if (role) result = result.filter((u) => u.role.toLowerCase() === role);

    if (sortBy === "nameAsc") result.sort((a, b) => a.firstName.localeCompare(b.firstName));
    if (sortBy === "nameDesc") result.sort((a, b) => b.firstName.localeCompare(a.firstName));
    if (sortBy === "dateAsc") result.sort((a, b) => new Date(a.joiningDate) - new Date(b.joiningDate));
    if (sortBy === "dateDesc") result.sort((a, b) => new Date(b.joiningDate) - new Date(a.joiningDate));

    return result;
  };

  const handleFilterChange = (updated) => {
    setFilters(updated);
    setFiltered(applyFilters(users, updated));
  };

  return (
    <div className="flex h-screen bg-[#F0E4D3]">
      <div className="flex flex-col w-full md:w-3/4 border-r border-gray-300">
        <div className="sticky top-0 z-10 bg-[#F0E4D3] shadow-md">
          <Header onFilterChange={handleFilterChange} />
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <UsersTable users={filtered} onUserClick={setSelectedUser} />
        </div>
      </div>

      {/* Fixed User Details */}
      <div className="hidden md:flex w-1/4 p-4 bg-white">
        {selectedUser ? (
          <UsersDetails user={selectedUser} />
        ) : (
          <div className="m-auto text-gray-400">Select a user</div>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
