import ButtonOption from "./utils/button";
import "../../css/slidebar.css";
import { IonIcon } from "@ionic/react";
import { clipboardOutline, timeOutline} from "ionicons/icons";

const Submenu  = () =>{

    const listaEspera = () =>{
    console.log('Vista Lista de Espera');   }

    const gestionarPedidos = () =>{
    console.log('Vista Gestionar Pedidos');   }

    return(
    <div>
    <div>
            
        <h1> Este es el componente submenu</h1>
        <div className="slidebar">
         <div>
        <button onClick={listaEspera}>
         <ButtonOption titulo={"Lista de Espera"} icono={timeOutline} ruta={""}></ButtonOption>
         </button>
         <button onClick={gestionarPedidos}>
         <ButtonOption titulo={"Gestionar Pedidos"} icono={clipboardOutline} ruta={""}></ButtonOption>
         </button>
         </div>

        <div> "Hola, aca iran las vistas" </div>
        </div>

    </div>
    </div>
    )

};
export default Submenu;


