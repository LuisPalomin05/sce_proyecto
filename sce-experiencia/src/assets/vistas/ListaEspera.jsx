import React, { useState, useEffect } from "react";
import "../../css/listaEspera.css";

const ListaEspera = () => {
  const [pedidos, setPedidos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Simulación de datos mientras no haya backend conectado
    const dataSimulada = [
      {
        id: 1,
        cliente: "Juan Pérez",
        ruc: "10456789231",
        fecha: "2025-10-15",
        total: 780.5,
        estado: "Pendiente",
      },
      {
        id: 2,
        cliente: "Tienda Don Julio",
        ruc: "10785693212",
        fecha: "2025-10-16",
        total: 1280.75,
        estado: "Pendiente",
      },
    ];

    setTimeout(() => {
      setPedidos(dataSimulada);
      setCargando(false);
    }, 700);
  }, []);

  return (
    <div className="lista-espera">
      <h3>Lista de Espera</h3>

      {cargando ? (
        <p className="mensaje">Cargando pedidos...</p>
      ) : pedidos.length === 0 ? (
        <p className="mensaje">No hay pedidos en espera.</p>
      ) : (
        <table className="tabla-espera">
          <thead>
            <tr>
              <th>N°</th>
              <th>Cliente</th>
              <th>RUC</th>
              <th>Fecha</th>
              <th>Total (S/)</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((p, index) => (
              <tr key={p.id}>
                <td>{index + 1}</td>
                <td>{p.cliente}</td>
                <td>{p.ruc}</td>
                <td>{p.fecha}</td>
                <td>{p.total.toFixed(2)}</td>
                <td>{p.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListaEspera;
