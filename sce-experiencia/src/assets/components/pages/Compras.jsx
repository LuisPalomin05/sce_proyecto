import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Compras_Listar from "../../vistas/Compras_Listar";
import Compras_Crear from "../../vistas/Compras_Crear";
import "../../../css/compras.css";

const Compras = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Compras_Listar />} />
        <Route path="/registrar" element={<Compras_Crear />} />
      </Routes>
    </div>
  );
};
export default Compras;
