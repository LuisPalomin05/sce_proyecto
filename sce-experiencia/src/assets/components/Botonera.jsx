
import ButtonOption from "./utils/button";
import CardUsuario from "./utils/cardUsuario";
import "../../css/slidebar.css";
import { IonIcon } from "@ionic/react";
import { clipboardSharp, cartOutline} from "ionicons/icons";

const Botonera = () => {

  return (
    <div className="slidebar">
   
      <div>
        <ButtonOption titulo={"Revisar inventario"} icono={clipboardSharp} ruta={""}></ButtonOption>
        <ButtonOption titulo={"Ver registro de compras"} icono={cartOutline} ruta={""}></ButtonOption>
    
      </div>
    </div>
  );
};
export default Botonera;
