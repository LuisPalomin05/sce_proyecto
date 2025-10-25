import React, { useState } from "react";
import ButtonOption from "./utils/button";
import "../../css/slidebar2.css";
import { clipboardOutline, timeOutline } from "ionicons/icons";

import ListaEspera from "../vistas/ListaEspera.jsx";
import GestionarPedidos from "../vistas/GestionarPedidos.jsx";

const Submenu = () => {
  const [vistaActual, setVistaActual] = useState("listaEspera");

  const mostrarListaEspera = () => {
    setVistaActual("listaEspera");
  };

  const mostrarGestionarPedidos = () => {
    setVistaActual("gestionarPedidos");
  };

  const renderizarVista = () => {
    switch (vistaActual) {
      case "listaEspera":
        return <ListaEspera />;
      case "gestionarPedidos":
        return <GestionarPedidos />;

      default:
        return <ListaEspera />;
    }
  };

 

  
  return (
<div className="cuerpo">
      <div>
        <div className="slidebar">
          <div>
            <button
               className={`padreBoton ${
              vistaActual === "listaEspera" ? "bSelected" : ""
            }`}
              onClick={mostrarListaEspera}
            >
              Lista de Espera
            </button>
            <button
              className={`padreBoton ${
              vistaActual === "gestionarPedidos" ? "bSelected" : ""
            }`}
              onClick={mostrarGestionarPedidos}
            >
              Pedidos Tramitados
            </button>
          </div>
          <div style={{ marginTop: "20px" }}>{renderizarVista()}</div>
        </div>
      </div>
    </div>
  );
};

export default Submenu;
