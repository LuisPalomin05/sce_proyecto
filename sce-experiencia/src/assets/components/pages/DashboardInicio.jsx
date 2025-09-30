//dependencias
import { useState } from "react";

//Componentes
import Inicio from "../Inicio";
import Sidebar from "../Sidebar";

const Dashboard = () => {
  return (
        <section className="layout">
          <Sidebar />

          <Inicio />
        </section>
  );
};

export default Dashboard;