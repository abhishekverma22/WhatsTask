import React, { useState } from "react";
import Pagination from "./Pagination";

const UsersTable = ({ users, onUserClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = users.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-col gap-2 relative h-full">
      {/* Table container with vertical scroll */}
      <div className="overflow-y-auto overflow-x-auto pr-2 pb-12"> 
        <table className="min-w-full border border-gray-200 text-center bg-white shadow-md rounded-lg capitalize">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 border">Sl. No</th>
              <th className="px-4 py-3 border">Name</th>
              <th className="px-4 py-3 border">Role</th>
              <th className="px-4 py-3 border">Department</th>
              <th className="px-4 py-3 border">Joining Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm md:text-base">
            {currentUsers.length === 0 ? (
              <tr>
                <td colSpan="6" className="py-4 text-gray-500">
                  No users found
                </td>
              </tr>
            ) : (
              currentUsers.map((u, i) => (
                <tr
                  key={u.id}
                  className="hover:bg-pink-50 cursor-pointer transition-colors"
                  onClick={() => onUserClick(u)}
                >
                  <td className="px-4 py-3 border">{startIndex + i + 1}</td>
                  <td className="px-4 py-3 border">
                    {u.firstName} {u.lastName}
                  </td>
                  <td className="px-4 py-3 border">{u.role}</td>
                  <td className="px-4 py-3 border">{u.department}</td>
                  <td className="px-4 py-3 border">{u.joiningDate}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination fixed at bottom */}
      {totalPages > 1 && (
        <div className="absolute bottom-2 left-0 w-full flex justify-center">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default UsersTable;
