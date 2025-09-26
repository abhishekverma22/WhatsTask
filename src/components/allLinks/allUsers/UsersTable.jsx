const UsersTable = ({ users, onUserClick }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-200 text-center bg-white shadow-md rounded-lg capitalize">
      <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
        <tr>
          <th className="px-4 py-3 border">Sl. No</th>
          <th className="px-4 py-3 border">Name</th>
          <th className="px-4 py-3 border">Role</th>
          <th className="px-4 py-3 border">Email</th>
          <th className="px-4 py-3 border">Department</th>
          <th className="px-4 py-3 border">Joining Date</th>
        </tr>
      </thead>
      <tbody className="text-gray-800 text-sm md:text-base">
        {users.length === 0 ? (
          <tr>
            <td colSpan="6" className="py-4 text-gray-500">
              No users found
            </td>
          </tr>
        ) : (
          users.map((u, i) => (
            <tr
              key={u.id}
              className="hover:bg-pink-50 cursor-pointer transition-colors"
              onClick={() => onUserClick(u)}
            >
              <td className="px-4 py-3 border">{i + 1}</td>
              <td className="px-4 py-3 border">{u.firstName} {u.lastName}</td>
              <td className="px-4 py-3 border">{u.role}</td>
              <td className="px-4 py-3 border break-words">{u.email}</td>
              <td className="px-4 py-3 border">{u.department}</td>
              <td className="px-4 py-3 border">{u.joiningDate}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

export default UsersTable