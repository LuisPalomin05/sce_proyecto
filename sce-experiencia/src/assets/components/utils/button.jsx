import "../../../css/buttons.css";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";

const ButtonOption = ({ titulo, icono, ruta }) => {
  return (
    <Link to={ruta} className="btnsidebar">
      <div className="icono">
        <IonIcon icon={icono}></IonIcon>
      </div>

      {titulo}
    </Link>
  );
};
export default ButtonOption;
