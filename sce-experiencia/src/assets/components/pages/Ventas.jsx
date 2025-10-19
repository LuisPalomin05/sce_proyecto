import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { searchOutline, caretForwardOutline } from "ionicons/icons";

import "../../../css/ventas.css";

import Graphicbar from "../utils/Graphicbar"

const Ventas = () => {
  return (
    <div>

    <Graphicbar Título={"Ventas"} importesoles={100} importedolares={5000}/> 

    <p>Hola mundo</p>


      <div>
        <table>
          <thead>
            <tr>
              <th>N° Factura</th>
              <th>Señor(es)</th>
              <th>RUC</th>
              <th>Direccion</th>
              <th>Emision</th>
              <th>Tipo de moneda</th>
              <th>Metodo de Pago</th>
              <th>Guia de Remision</th>
              <th>Total</th>
              <th>Ver detalle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0001524</td>
              <td>Juan Perez</td>
              <td>1122338948</td>
              <td>Calle Las Rosas 234</td>
              <td></td>
              <td>Dolar americano ($)</td>
              <td>Tarjeta de Credito</td>
              <td>
                Nº2020202020<ion-icon name="document-text-outline"></ion-icon>
              </td>
              <td>$20.00</td>
              <td>
                <ion-icon name="document-text-outline"></ion-icon>
              </td>
            </tr>
            <tr>
              <td>0001524</td>
              <td>Juan Perez</td>
              <td>1122338948</td>
              <td>Calle Las Rosas 234</td>
              <td></td>
              <td>Dolar americano ($)</td>
              <td>Tarjeta de Credito</td>
              <td>
                Nº2020202020<ion-icon name="document-text-outline"></ion-icon>
              </td>
              <td>$20.00</td>
              <td>
                <ion-icon name="document-text-outline"></ion-icon>
              </td>
            </tr>
            <tr>
              <td>0001524</td>
              <td>Juan Perez</td>
              <td>1122338948</td>
              <td>Calle Las Rosas 234</td>
              <td></td>
              <td>Dolar americano ($)</td>
              <td>Tarjeta de Credito</td>
              <td>
                Nº2020202020<ion-icon name="document-text-outline"></ion-icon>
              </td>
              <td>$20.00</td>
              <td>
                <ion-icon name="document-text-outline"></ion-icon>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ventas;
