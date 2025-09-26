import React from "react";
import NewNotification from "../../allLinks/new-notification/NewNotification";
import TodayAlert from "../../allLinks/today-alert/TodayAlert";
import AddUser from "../../allLinks/AddUser";



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
