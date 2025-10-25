import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/listaEspera.css";

const ListaEspera = () => {
  const [pedidos, setPedidos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await axios.get(
          `https://backendapi-6thn.onrender.com/api/pedidos`
        );
        setPedidos(response.data);
      } catch (error) {
        console.error("Error al obtener los pedidos:", error);
      }
    };

    fetchPedidos();

    setTimeout(() => {
      fetchPedidos();
      setCargando(false);
    }, 700);
  }, []);


const EliminarPedido = async (id) => {


  
}

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
              <th>#</th>
              <th>Cliente</th>
              <th>RUC</th>
              <th>Numero de Cotizacion</th>
              <th>Fecha Pedido</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((p, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{p.nombreCliente}</td>
                <td>{p.rucCliente}</td>
                <td>{p.numeroCotizacion}</td>
                <td>{p.fechaPedido}</td>
                <td>
                  {/* <button className="btn-accion">Ver</button> */}
                  <button className="btn-accion">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListaEspera;
