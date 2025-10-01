import "../../css/Inicio.css";
import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { notifications, notificationsOutline } from "ionicons/icons";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Componentes
import InputBuscador from "./utils/InputBuscador";
import Notificaciones from "./utils/bxNotificaciones";
import Cotizador from "./pages/Cotizar";

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
          <Route path="cotizar" element={<Cotizador/>} />
          <Route path="compras" element={<div>Página de Compras</div>} />
          <Route path="ventas" element={<div>Página de Ventas</div>} />
          <Route path="pedidos" element={<div>Página de Pedidos</div>} />
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
