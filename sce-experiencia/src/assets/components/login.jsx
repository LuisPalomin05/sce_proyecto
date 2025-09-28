import React, { useState } from "react";
import "../../css/login.css"; // ajusta la ruta según dónde tengas el archivo

function Login() {
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Bienvenido</h2>
        <form>
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

