import React from "react";
import NewNotification from "../../allLinks/new-notification/NewNotification";
import TodayAlert from "../../allLinks/today-alert/TodayAlert";
import AddUser from "../../allLinks/AddUser";

// Dummy components for each section
const Dashboard = () => <div className="p-4">Dashboard Content</div>;
const AllUsers = () => <div className="p-4">All Users Content</div>;
const TaskAssign = () => <div className="p-4">Task Assign Content</div>;
const TaskStatus = () => <div className="p-4">Task Status Content</div>;
const CreateGroup = () => <div className="p-4">Create Group Content</div>;


const MainSection = ({ activeComponent }) => {
  switch (activeComponent) {
    case "Dashboard":
      return <Dashboard />;
    case "All Users":
      return <AllUsers />;
    case "Task Assign":
      return <TaskAssign />;
    case "Task Status":
      return <TaskStatus />;
    case "Create Group":
      return <CreateGroup />;
    case "Show New Notification":
      return <NewNotification />;
    case "Today Alert":
      return <TodayAlert />;
    case "Add New User":
      return <AddUser />;
    default:
      return <Dashboard />;
  }
};

export default MainSection;
