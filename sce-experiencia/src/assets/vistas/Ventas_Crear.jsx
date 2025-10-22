import { Link } from "react-router-dom";
import { useState } from "react";

import "../../css/_Crear.css";

const Ventas_Crear = () => {
  const [rucCliente, setRucCliente] = useState("");
  const [nombreCliente, setNombreCliente] = useState("");
  const [fechaEmision, setFechaEmision] = useState("");
  const [numeroFactura, setNumeroFactura] = useState("");
  const [tipoMoneda, setTipoMoneda] = useState("");
  const [importeTotal, setImporteTotal] = useState("");

  const formData = {
    rucCliente: "",
    nombreCliente: "",
    fechaEmision: "",
    numeroFactura: "",
    tipoMoneda: "",
    importeTotal: "",
  };

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Crear">
      <section className="CrearEncabezado">
        <h1>Registar Venta</h1>
      </section>
      <section className="CrearForm">
        <form action="">
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
              <label htmlFor="">Numero factura</label>
              <input
                type="text"
                onChange={(e) => setNumeroFactura(e.target.value)}
              />
            </div>
          </div>

          <div className="formGroup">
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
                type="text"
                onChange={(e) => setImporteTotal(e.target.value)}
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
