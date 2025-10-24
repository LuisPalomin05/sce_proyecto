import React from "react";
import Inicio from "../Inicio";
import Sidebar from "../Sidebar";
import "../../../css/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <Inicio />
    </div>
  );
};

export default Dashboard;
