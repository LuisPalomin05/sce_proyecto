import "../../css/Inicio.css";
import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { notifications, notificationsOutline } from "ionicons/icons";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Componentes
import InputBuscador from "./utils/InputBuscador";
import Notificaciones from "./utils/bxNotificaciones";
import Cotizador from "./pages/Cotizar";
import Compras from "./pages/Compras";
import Pedidos from "./pages/Pedidos";
import Ventas from "./pages/Ventas";
import PaginaInicio from "./pages/PaginaInicio";

const Inicio = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showNotificacion, setShowNotificacion] = useState(false);

  return (
    <div className="body">
      <nav className="Navegacion">
        <p className="Titulo">Inicio</p>
        <div className="Controles">
          <div
            className={`NotificacionWrapper ${
              showNotificacion ? "activo" : ""
            }`}
          >
            <IonIcon
              className={`iconoNotificacion `}
              icon={showNotificacion ? notifications : notificationsOutline}
              onClick={() => setShowNotificacion(!showNotificacion)}
            />
            <div className="Notificacion">
              <Notificaciones
                titulo={"Notificaciones"}
                contenido={"No hay nuevas notificaciones"}
              />
            </div>
          </div>

          <InputBuscador
            placeholder="Buscar..."
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
        </div>
      </nav>

      <section className="Contentido">
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="cotizar" element={<Cotizador />} />
          <Route path="compras/*" element={<Compras />} />
          <Route path="ventas/*" element={<Ventas />} />
          <Route path="pedidos" element={<Pedidos />} />
          <Route
            path="administracion"
            element={<div>Página de Gestión Cliente/Proveedor</div>}
          />
        </Routes>
      </section>
    </div>
  );
};

export default Inicio;
