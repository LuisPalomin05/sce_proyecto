import { useState, useEffect } from "react";
import axios from "axios";

const urlUri = "https://backendapi-6thn.onrender.com/api";

export const useVentasTorque = () => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${urlUri}/ventas`);
      setVentas(response.data);
      
      } catch (error) {
        console.error("Error fetching ventas data:", error);
      }
    };

    fetchData();
  }, []);

  const ventaSolesTorque = ventas
    .filter((venta) => venta.tipoMoneda === "PEN")
    .reduce((acc, venta) => acc + (venta.importeTotal || 0), 0);

  const ventaDolaresTorque = ventas
    .filter((venta) => venta.tipoMoneda === "USD")
    .reduce((acc, venta) => acc + (venta.importeTotal || 0), 0);

  return { ventaSolesTorque, ventaDolaresTorque };
};

export const useComprasTorque = () => {
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${urlUri}/compras`);
        setCompras(response.data);
      } catch (error) {
        console.error("Error fetching compras data:", error);
      }
    };
    fetchData();
  }, []);

  const compraSolesTorque = compras
    .filter((compra) => compra.tipoMoneda === "PEN")
    .reduce((acc, compra) => acc + (compra.importeTotal || 0), 0);

  const compraDolaresTorque = compras
    .filter((compra) => compra.tipoMoneda === "USD")
    .reduce((acc, compra) => acc + (compra.importeTotal || 0), 0);

  return { compraSolesTorque, compraDolaresTorque };
};
