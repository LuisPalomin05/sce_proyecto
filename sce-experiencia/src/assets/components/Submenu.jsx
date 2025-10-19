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
    //cuando aplicas margin a los objetos, los distancias uno de otro. por lo que no siempre es la mejor opcion si quieres
    //que los elementos dentro de ese objeto se separen del padre. es mejor usar la propiedad padding
    // que le da algo de separacion dentro de los elementos de la clase cuerpo. puedes eliminar los comentarios luego
    <div className="cuerpo">
      <div>
        <div className="slidebar">
          <div>
            {/* recuerda que puedes aplicar estilos a una clase css (className) padreBoton*/}
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
              Gestionar Pedidos
            </button>
          </div>
          <div style={{ marginTop: "20px" }}>{renderizarVista()}</div>
        </div>
      </div>
    </div>
  );
};

export default Submenu;
