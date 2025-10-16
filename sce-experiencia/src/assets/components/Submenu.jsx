import React, { useState } from 'react';
import ButtonOption from "./utils/button";
import "../../css/slidebar.css";
import { IonIcon } from "@ionic/react";
import { clipboardOutline, timeOutline} from "ionicons/icons";

const Submenu  = () =>{

    const [greeting, setGreeting] = useState("Vista de Lista de Espera");

    const listaEspera = () => {
        setGreeting("Vista de Lista de Espera");
    };

    const gestionarPedidos = () => {
        setGreeting("Vista de Gestionar Pedidos");
    };

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

        <div>  {greeting} </div>
        </div>

    </div>
    </div>
    )

};
export default Submenu;


