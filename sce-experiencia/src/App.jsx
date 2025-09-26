import "./css/App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import Login from "./assets/components/Login";
import Inicio from "./assets/components/Inicio";
import ButtonOption from "./assets/components/utils/button";
import Sidebar from "./assets/components/Sidebar";
function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (

  <Router>


    {isAuthenticated ? (
            <section className="layout">
          <Sidebar />

          <Inicio />
         </section>
      ) : (
        <Navigate to="/login" replace />
      )
    }


  </Router>

  );
}

export default App;
