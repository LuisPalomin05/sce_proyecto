import "./css/App.css"; 
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import "./css/login.css";
import Login from "./assets/components/Login";
import Dashboard from "./assets/components/pages/DashboardInicio";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const callAuth = (info) => {
    setIsAuthenticated(info);
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Login validacion={callAuth} />} 
        />

        <Route
          path="/dashboard/*"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
