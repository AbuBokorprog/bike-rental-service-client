import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../component/dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />

      {/* Main Content */}
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
