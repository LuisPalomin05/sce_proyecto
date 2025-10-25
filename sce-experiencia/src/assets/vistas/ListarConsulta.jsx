import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { trashBinOutline, pencilOutline } from "ionicons/icons";

const ListarConsulta = ({ httpTitle }) => {
  const [elementos, setElementos] = useState([]);
    useEffect(() => {
      fetchElementos();
    }, []);

const fetchElementos = async () => {
  try {
    const response = await axios.get(`https://backendapi-6thn.onrender.com/api/${httpTitle}`);
    setElementos(response.data);
  } catch (error) {
    console.error(`Error fetching ${httpTitle}:`, error);
  }
};

const handleDelete = async (id) => { 
  try {
    await axios.delete(`https://backendapi-6thn.onrender.com/api/${httpTitle}/${id}`);
    fetchElementos(); 
  } catch (error) {
    console.error(`no se pudo eliminar ${httpTitle} con id ${id}:`, error);
  }
};

  return (
      <div className="mainVentas">
        <div className="TablasVentas">
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
              {elementos.map((element, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{element.nombreCliente}</td>
                  <td>{element.rucCliente}</td>
                  <td>{element.fechaEmision.split("T")[0]}</td>
                  <td>{parseFloat(element.importeTotal).toFixed(2)}</td>
                  <td>{element.tipoMoneda}</td>
                  <td className="btnTablaAccion">
                    <p className="pencilOutline" >☑️</p>
                    <p className="trashBinOutline" onClick={() => handleDelete(element._id)}>❌</p>
              
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="BotonesVenta">
          <Link
            to={`/dashboard/${httpTitle}/registrar`}
            className="btnitems"
            type="button"
          >
            Registrar {httpTitle}
          </Link>
          <Link className="btnitems" type="button"   onClick={() => fetchElementos()}>
            Refrescar Lista
          </Link>
        </div>
      </div>
  );
};

export default ListarConsulta;
