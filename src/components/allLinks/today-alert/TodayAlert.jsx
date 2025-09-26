// src/components/tasks/TodayTaskAlert.jsx
import React, { useEffect, useState } from "react";
import { fetchTodayTasks } from "../../../firebase/taskServices";
import TaskCard from "./TaskCard";
import TaskFilterBar from "./TaskFilterBar";

const TodayTaskAlert = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadTasks = async () => {
      const todayTasks = await fetchTodayTasks();
      setTasks(todayTasks);
    };
    loadTasks();
  }, []);

  // Apply filters, sort, search
  const filteredTasks = tasks
    .filter((t) => (filter ? t.department === filter : true))
    .filter((t) => {
      const searchStr = `${t.userName} ${t.title} ${t.description} ${t.priority}`.toLowerCase();
      return searchStr.includes(search.toLowerCase());
    })
    .sort((a, b) => {
      if (!sort) return 0;
      if (sort === "High") return b.priority === "High" ? 1 : -1;
      if (sort === "Moderate") return b.priority === "Moderate" ? 1 : -1;
      if (sort === "Low") return b.priority === "Low" ? 1 : -1;
      return 0;
    });

  return (
    <div className="min-h-full p-4 bg-green-50">
      <TaskFilterBar
        departments={[...new Set(tasks.map((t) => t.department).filter(Boolean))]}
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
        search={search}
        setSearch={setSearch}
      />

      <div className="p-4 flex flex-col gap-4 mt-4">
        {filteredTasks.length ? (
          filteredTasks.map((task) => <TaskCard key={task.id} task={task} />)
        ) : (
          <p className="text-gray-600 text-center">No tasks due today.</p>
        )}
      </div>
    </div>
  );
};

export default TodayTaskAlert;
