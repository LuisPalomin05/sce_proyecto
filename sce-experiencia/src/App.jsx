import "./css/App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import "./css/login.css";
import Login from "./assets/components/Login";
import Inicio from "./assets/components/Inicio";
import ButtonOption from "./assets/components/utils/button";
import Sidebar from "./assets/components/Sidebar";

function App() {
  return (
    <section className="layout">

      <Login/>

       <Login nombre="Invitado" />

       <Sidebar />

      <Inicio />

    </section>
  );
}

export default App;
