
import ButtonOption from "./utils/button";
import "../../css/slidebar2.css"
import { IonIcon } from "@ionic/react";
import { clipboardSharp, cartOutline} from "ionicons/icons";

const Botonera = () => {

  return (
    
    <div className="slidebar">
   <p>Hola mundo</p>
      <div class="contenedor">
        <ButtonOption titulo={"Revisar inventario"} icono={clipboardSharp} ruta={""}></ButtonOption>
        <ButtonOption titulo={"Ver registro de compras"} icono={cartOutline} ruta={""}></ButtonOption>
    
      </div>
    </div>
  );
};
export default Botonera;

