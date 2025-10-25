import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Submenu from "../Submenu";
import "../../../css/pedido.css";

const Pedidos = () => {
  return (
    <div>
      <div className="tituloPedido">
        <h1>Página de Pedidos</h1>
        <p>Aministre los pedidos en curso</p>
      </div>

      <Submenu />
    </div>
  );
};

export default Pedidos;
