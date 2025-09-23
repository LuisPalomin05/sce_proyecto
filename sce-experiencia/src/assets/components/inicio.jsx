import "../../css/Inicio.css";
import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { notifications,notificationsOutline } from "ionicons/icons";

// Componentes
import InputBuscador from "./utils/InputBuscador";
import Notificaciones from "./utils/bxNotificaciones";

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

      <section className="Contentido">pagina de inicio</section>
    </div>
  );
};

export default Inicio;
