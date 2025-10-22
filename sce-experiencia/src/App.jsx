import "./css/App.css";
import axios from "axios";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./css/login.css";
import Login from "./assets/components/Login";
import Dashboard from "./assets/components/pages/DashboardInicio";

function App() {

  axios.get("https://backendapi-6thn.onrender.com/").then((response) => {
    console.log("Conexión con backend exitosa:", response.data);
  }).catch((error) => {
    console.error("Error al conectar con el backend:", error);
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const callAuth = (info) => {
    setIsAuthenticated(info);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login validacion={callAuth} />} />

        <Route
          path="/dashboard/*"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
