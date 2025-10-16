import React, { useState } from 'react';
import ButtonOption from "./utils/button";
import "../../css/slidebar2.css";
import { clipboardOutline, timeOutline } from "ionicons/icons";

import ListaEspera from "../vistas/ListaEspera.jsx";
import GestionarPedidos from "../vistas/GestionarPedidos.jsx";

const Submenu = () => {
const [vistaActual, setVistaActual] = useState('listaEspera');
    const mostrarListaEspera = () => {
        setVistaActual('listaEspera');
    };

    const mostrarGestionarPedidos = () => {
        setVistaActual('gestionarPedidos');
    };

    const renderizarVista = () => {
        switch (vistaActual) {
            case 'listaEspera':
                return <ListaEspera />;    
            case 'gestionarPedidos':
                return <GestionarPedidos />;
                return 
                  <ListaEspera />;
        }
    };

    return (
        <div class="cuerpo">
            <div>
                <div className="slidebar">
                    <div>
                        <button onClick={mostrarListaEspera}>
                            <ButtonOption 
                                titulo="Lista de Espera" 
                                icono={timeOutline} 
                                ruta=""
                            />
                        </button>
                        <button onClick={mostrarGestionarPedidos}>
                            <ButtonOption 
                                titulo="Gestionar Pedidos" 
                                icono={clipboardOutline} 
                                ruta=""
                            />
                        </button>
                    </div>                  
                    <div style={{ marginTop: '20px' }}>
                        {renderizarVista()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Submenu;