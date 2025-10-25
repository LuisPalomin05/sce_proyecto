import { useState, useEffect } from "react";
import axios from "axios";

import "../../../css/Cotizaciones.css";

const Cotizaciones = () => {
  const [cotizaciones, setCotizaciones] = useState([]);

  const fetchCotizaciones = async () => {
    try {
      const response = await axios.get("https://backendapi-6thn.onrender.com/api/cotizacion");
      setCotizaciones(response.data);
    } catch (error) {
      console.error("Error fetching cotizaciones:", error);
    }
  };

  useEffect(() => {
    fetchCotizaciones();
  }, []);

  console.log(cotizaciones);

  return (
    <div className="cotizaciones-container">
      <div className="headercotizaciones">
        <h1>Cotizaciones</h1>
        <p>Listado de las ultimas cotizaciones realizadas</p>
      </div>

      <div className="table-container">
        <table className="table-cotizaciones">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre Cliente</th>
              <th>RUC Cliente</th>
              <th>N° Cotizacion</th>
              <th>Fecha Cotizacion</th>
              <th>Importe</th>
              <th>Tipo de moneda</th>
              <th>Metodo de Pago</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cotizaciones.map((cotizacion, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{cotizacion.nombreCliente}</td>
                <td>{cotizacion.rucCliente}</td>
                <td>{cotizacion.numeroCotizacion}</td>
                <td>{ cotizacion.fechaEmision.split("T")[0]}</td>
                <td>{cotizacion.totalPago}</td>
                <td>{cotizacion.tipoMoneda}</td>
                <td>{cotizacion.metodoPago}</td>
                <td className="acciones">
                  <button className="btn-accion">Ver</button>
                  <button className="btn-accion">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cotizaciones;
