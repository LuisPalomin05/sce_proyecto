import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { trashBinOutline, pencilOutline } from "ionicons/icons";
import "../../css/ventas.css";

import Graphicbar from "../components/utils/Graphicbar";

const Compras_Listar = () => {
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    const fetchCompras = async () => {
      try {
        const response = await axios.get("https://backendapi-6thn.onrender.com/api/compras");
        setCompras(response.data);
      } catch (error) {
        console.error("Error fetching compras:", error);
      }
    };

    fetchCompras();
  }, []);

  console.log(compras);

  return (
    <div className="VistaVenta">
      <div className="encabezadoVenta">
        <Graphicbar
          Título={"Compras"}
          importesoles={1700}
          importedolares={2300}
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
                <th className="itemTableHead">Importe Total</th>
                <th className="itemTableHead">Tipo de Moneda</th>
                <th className="itemTableHead">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {compras.map((compra, index) => (
                <tr key={compra.index}>
                  <td>{index + 1}</td>
                  <td>{compra.nombreCliente}</td>
                  <td>{compra.rucCliente}</td>
                  <td>{compra.fechaEmision.split("T")[0]}</td>
                  <td>{parseFloat(compra.importeTotal).toFixed(2)}</td>
                  <td>{compra.tipoMoneda}</td>
                  <td className="btnTablaAccion">
                    <IonIcon icon={pencilOutline} />
                    <IonIcon icon={trashBinOutline} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="BotonesVenta">
          <Link
            to={"/dashboard/compras/registrar"}
            className="btnitems"
            type="button"
          >
            Registrar Compra
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

export default Compras_Listar;
