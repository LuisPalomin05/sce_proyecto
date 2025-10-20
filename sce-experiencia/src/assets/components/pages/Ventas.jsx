import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Ventas_Listar from "../../vistas/Ventas_Listar";
import Ventas_Crear from "../../vistas/Ventas_Crear";

const Ventas = () => {
  return (
    <div>
      <Routes >
        <Route path="/*" element={<Ventas_Listar />} />
        <Route path="/registrar" element={<Ventas_Crear />} />
      </Routes>
    </div>
  );
};

export default Ventas;
