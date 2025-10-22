
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  trashBinOutline,
  pencilOutline,
  searchOutline,
  caretForwardOutline,
} from "ionicons/icons";

import "../../css/ventas.css";

import Graphicbar from "../components/utils/Graphicbar";

const Ventas_Listar =()=>{
    return(
<div className="VistaVenta" >
      <div className="encabezadoVenta">
        <Graphicbar
          Título={"Ventas"}
          importesoles={100}
          importedolares={5000}
        />
      </div>

      <div className="mainVentas">
        <div className="TablasVentas">
          {/* aqui iria una tabla */}
          <table>
            <thead>
              <tr>
                <th className="itemTableHead">N° item</th>
                <th className="itemTableHead">Nombre Cliente</th>
                <th className="itemTableHead">Ruc Cliente</th>
                <th className="itemTableHead">Fecha Emision</th>
                <th className="itemTableHead">N° cotizacion</th>
                <th className="itemTableHead">Importe Total</th>
                <th className="itemTableHead">Tipo de Moneda</th>
                <th className="itemTableHead">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>saludos</td>
                <td>saludos</td>
                <td>saludos</td>
                <td>saludos</td>
                <td>saludos</td>
                <td>saludos</td>
                <td>saludos</td>
                <td className="btnTablaAccion">
                  <IonIcon icon={pencilOutline} />
                  <IonIcon icon={trashBinOutline} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="BotonesVenta">
          <Link to={"/dashboard/ventas/registrar"} className="btnitems" type="button">
            Registrar Venta
          </Link>
          <Link className="btnitems" type="button">
            {" "}
            Refrescar Lista
          </Link>
        </div>
      </div>
    </div>

    );
};

export default Ventas_Listar;