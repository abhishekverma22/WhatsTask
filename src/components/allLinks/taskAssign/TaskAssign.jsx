import React, { useEffect, useState } from "react";
import { fetchAllUsers } from "../../../firebase/userServices";
import HeaderBar from "./HeaderBar";
import UserList from "./UserList";
import TaskModal from "./TaskModal";

const TaskAssign = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("");
  const [modalUser, setModalUser] = useState(null);

  useEffect(() => {
    const load = async () => {
      const all = await fetchAllUsers();
      setUsers(all);
    };
    load();
  }, []);

  const departments = [
    ...new Set(users.map((u) => u.department).filter(Boolean)),
  ];

  const filteredUsers = users.filter((u) => {
    const fullName = `${u.firstName || ""} ${u.lastName || ""}`.toLowerCase();
    const dept = u.department || "";
    return (
      fullName.includes(search.toLowerCase()) &&
      (deptFilter ? dept === deptFilter : true)
    );
  });

  return (
    <div className="relative  bg-gray-200">
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-gray-200 border-b border-gray-300 p-6">
        <HeaderBar
          search={search}
          setSearch={setSearch}
          deptFilter={deptFilter}
          setDeptFilter={setDeptFilter}
          departments={departments}
        />
      </div>

      {/* Scrollable Content */}
      <div className="p-6 space-y-4">
        <UserList users={filteredUsers} onAddTask={setModalUser} />
      </div>

      {modalUser && (
        <TaskModal user={modalUser} onClose={() => setModalUser(null)} />
      )}
    </div>
  );
};

export default TaskAssign;
