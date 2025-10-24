import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  homeOutline,
  cartOutline,
  cashOutline,
  cubeOutline,
  peopleCircleOutline,
  bagCheckOutline,
  logOutOutline,
  menuOutline,
} from "ionicons/icons";
import ButtonOption from "./utils/button";
import CardUsuario from "./utils/cardUsuario";
import logo from "../img/torquelogo.jpg";
import "../../css/Sidebar.css";

const Sidebar = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <aside className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      {/* HEADER */}
      <div className="sidebar-header">
        {isOpen && <h2 className="sidebar-title">TorqueG-64</h2>}
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <IonIcon icon={menuOutline} />
        </button>
      </div>

      {/* USUARIO */}
      <div className="sidebar-user">
        <CardUsuario
          urlImagen={logo}
          nombre={"Luis Alfredo"}
          nombreUsuario={"@pmpalomi"}
          isOpen={isOpen}
        />
      </div>

      {/* MENÚ */}
      <nav className="sidebar-menu">
        <ButtonOption titulo="Inicio" icono={homeOutline} ruta="/dashboard" visible={isOpen} />
        <ButtonOption titulo="Cotizar" icono={cashOutline} ruta="/dashboard/cotizar" visible={isOpen} />
        <ButtonOption titulo="Compras" icono={cartOutline} ruta="/dashboard/compras" visible={isOpen} />
        <ButtonOption titulo="Ventas" icono={bagCheckOutline} ruta="/dashboard/ventas" visible={isOpen} />
        <ButtonOption titulo="Pedidos" icono={cubeOutline} ruta="/dashboard/pedidos" visible={isOpen} />
        <ButtonOption titulo="Cotizaciones" icono={peopleCircleOutline} ruta="/dashboard/cotizaciones" visible={isOpen} />
      </nav>
     
      {/* FOOTER */}
      <div className="sidebar-footer">
        <button className="logout-btn" onClick={onLogout}>
          <IonIcon icon={logOutOutline} />
          {isOpen && <span>Cerrar sesión</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;


