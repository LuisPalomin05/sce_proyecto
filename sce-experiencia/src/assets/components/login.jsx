import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/login.css";

function Login({ validacion }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    validacion(true);   
    navigate("/dashboard"); 
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Bienvenido</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
