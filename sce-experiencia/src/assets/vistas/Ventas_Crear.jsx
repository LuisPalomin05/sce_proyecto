import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import "../../css/_Crear.css";

const Ventas_Crear = () => {
  const localhost = "https://backendapi-6thn.onrender.com/api/cotizacion";

  const [rucCliente, setRucCliente] = useState("");
  const [nombreCliente, setNombreCliente] = useState("");
  const [fechaEmision, setFechaEmision] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [numeroFactura, setNumeroFactura] = useState("");
  const [tipoMoneda, setTipoMoneda] = useState("");
  const [importeTotal, setImporteTotal] = useState("");
  const [metodoPago, setMetodoPago] = useState("");
  const [guiaRemision, setGuiaRemision] = useState("");
  const [ordenCompra, setOrdenCompra] = useState("");

  const formData = {
    rucCliente,
    nombreCliente,
      fechaEmision,
    numeroFactura,
    tipoMoneda,
    importeTotal,
    metodoPago,
    guiaRemision,
    ordenCompra,
  };

  const formatMoney = (value) =>
    Number(value).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const nuevaFactura ={}



    } catch (error) {
      console.error("Error al crear la cotización:", error);
    }
  };

  const handleImporteChange = (e) => {
    const value = e.target.value;

    if (/^\d*\.?\d*$/.test(value)) {
      setImporteTotal(value);
    }
  };

  const handleKeyDown = (e) => {
    if (["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="Crear">
      <section className="CrearEncabezado">
        <h1>Registar Venta</h1>
      </section>
      <section className="CrearForm">
        <form onSubmit={handleSubmit} method="post" >
          <div className="formGroup">
            <div className="formInputGroup">
              <label htmlFor="">R.U.C del Cliente</label>
              <input
                type="text"
                required
                onChange={(e) => setRucCliente(e.target.value)}
              />
            </div>
            <div className="formInputGroup">
              <label htmlFor="">Nombre del Cliente</label>
              <input
                type="text"
                required
                onChange={(e) => setNombreCliente(e.target.value)}
              />
            </div>
            <div className="formInputGroup">
              <label htmlFor="">Numero factura</label>
              <input
                type="text"
                onChange={(e) => setNumeroFactura(e.target.value)}
              />
            </div>
          </div>

          <div className="formGroup">
            <div className="formInputGroup">
              <label htmlFor="">Fecha de Emision</label>
              <input
                type="date"
                onChange={(e) => {
                  setFechaEmision(e.target.value);
                }}
              />
            </div>
            <div className="formInputGroup">
              <label htmlFor="">Guia de Remision</label>
              <input
                type="text"
                onChange={(e) => {
                  setGuiaRemision(e.target.value);
                }}
              />
            </div>
            <div className="formInputGroup">
              <label htmlFor="">Orden de Compra</label>
              <input
                type="text"
                onChange={(e) => {
                  setOrdenCompra(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="formGroup">
            <div className="formInputGroup">
              <label htmlFor="metodoPago">Metodo de Pago</label>
              <select
                name="metodoPago"
                id="metodoPago"
                onChange={(e) => setMetodoPago(e.target.value)}
              >
                <option value="PEN">S/. Soles</option>
                <option value="USD">$ Dólares</option>
              </select>
            </div>
            <div className="formInputGroup">
              <label htmlFor="tipoMoneda">Tipo de Moneda</label>
              <select
                name="tipoMoneda"
                id="tipoMoneda"
                onChange={(e) => setTipoMoneda(e.target.value)}
              >
                <option value="PEN">S/. Soles</option>
                <option value="USD">$ Dólares</option>
              </select>
            </div>
            <div className="formInputGroup">
              <label htmlFor="">Importe Total</label>
              <input
                type="number"
                value={importeTotal}
                onChange={handleImporteChange}
                onKeyDown={handleKeyDown}
                step="0.01"
                min="0"
              />
            </div>
          </div>

          {/* botonera */}
          <div className="botonesForm">
            <button type="submit" className="btnCrearForm btnGuardar">
              Guardar
            </button>
            <button type="reset" className="btnCrearForm btnLimpiar">
              Limpiar
            </button>
            <button type="button" className="btnCrearForm btnCancelar">
              Cancelar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Ventas_Crear;
