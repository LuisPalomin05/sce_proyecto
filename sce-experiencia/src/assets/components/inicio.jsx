import "../../css/Inicio.css";
import { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { notifications, notificationsOutline } from "ionicons/icons";
import { Routes, Route } from "react-router-dom";

// Componentes
import InputBuscador from "./utils/InputBuscador";
import Notificaciones from "./utils/bxNotificaciones";
import Cotizador from "./pages/Cotizar";
import Compras from "./pages/Compras";
import Pedidos from "./pages/Pedidos";
import Cotizaciones from "./pages/Cotizaciones";
import Ventas from "./pages/Ventas";
import PaginaInicio from "./pages/PaginaInicio";



// para boton de whatsapp
import { FaWhatsapp } from "react-icons/fa";
import WhatsAppButton from "../components/WhatsAppButton"; // ajusta la ruta




const Inicio = () => {

    const [showNotificacion, setShowNotificacion] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="inicio-container">


      {/* <div className="inicio-content"> */}
        <nav className="navbar">
          <p className="navbar-title">CALLE HOLANDA 2250 URB. CHACRA RIOS NORTE - LIMA</p>
          <div className="navbar-controls">
            <div className={`notification-wrapper ${showNotificacion ? "active" : ""}`}>
              <IonIcon
                className="notification-icon"
                icon={showNotificacion ? notifications : notificationsOutline}
                onClick={() => setShowNotificacion(!showNotificacion)}
              />
              {showNotificacion && (
                <div className="notification-box">
                  <Notificaciones titulo={"Notificaciones"} contenido={"No hay nuevas notificaciones"} />
                </div>
              )}
            </div>

            <InputBuscador
              placeholder="Buscar..."
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
          </div>
        </nav>


        <section className="main-content">
          <Routes>
            <Route path="/" element={<PaginaInicio />} />
            <Route path="cotizar" element={<Cotizador />} />
            <Route path="compras/*" element={<Compras />} />
            <Route path="ventas/*" element={<Ventas />} />
            <Route path="pedidos" element={<Pedidos />} />
            <Route path="cotizaciones" element={<Cotizaciones/>} />
          </Routes>
        </section>
      {/* </div> */}
       <WhatsAppButton />
    </div>
  );
};

export default Inicio;
