import ButtonOption from "./utils/button";
import "../../css/slidebar.css";
import { IonIcon } from "@ionic/react";
import { clipboardOutline, timeOutline} from "ionicons/icons";

const Submenu  = () =>{
    return(
    <div>
    <div>
            
        <h1> Este es el componente submenu</h1>
        <div className="slidebar">
         <div>
        <button>
         <ButtonOption titulo={"Lista de Espera"} icono={timeOutline} ruta={""}></ButtonOption>
         </button>
         <button>
         <ButtonOption titulo={"Gestionar Pedidos"} icono={clipboardOutline} ruta={""}></ButtonOption>
         </button>
         </div>
         <div>Aca ira una u otra vista</div>
      
        </div>

    </div>
    </div>
    )

};
export default Submenu;


