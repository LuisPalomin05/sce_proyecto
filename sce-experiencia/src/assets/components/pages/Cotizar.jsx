import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { searchOutline, caretForwardOutline } from "ionicons/icons";

import "../../../css/inicio_cotizador.css";

import LabelInputs from "../utils/LabelInputs";
import Importes from "../utils/casillaImportes";

import { crearPdf } from "../utils/crearPdf";

const Cotizador = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    ruc: "",
    producto: "",
    codigo: "",
    cantidad: "",
    precioUnitario: "",
    fechaEmision: "",
    numeroCotizacion: "",
    observaciones: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="Cotizador">
      <div className="formulario">
        <div className="Completar">
          <section
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <LabelInputs nombre="Nombre" value={formData.nombre} onChange={handleChange}/>
            <LabelInputs nombre="RUC" value={formData.ruc} onChange={handleChange}>
              <IonIcon className="Buscar" icon={searchOutline} />
            </LabelInputs>
          </section>
          <section
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <LabelInputs nombre="Producto" value={formData.producto} onChange={handleChange} />
            <LabelInputs nombre="Codigo" value={formData.codigo} onChange={handleChange}>
              <IonIcon className="Buscar" icon={searchOutline} />
            </LabelInputs>
          </section>
          <section
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <LabelInputs nombre="Cantidad" value={formData.cantidad} onChange={handleChange} />
            <LabelInputs nombre="Precio Unitario" value={formData.precioUnitario} onChange={handleChange}>
              <p>$.</p>
            </LabelInputs>
            <div>
              <button className="btnAgregar">Agregar</button>
            </div>
          </section>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>N°</th>
                <th>Producto</th>
                <th>Código</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Precio Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Producto 1</td>
                <td>001</td>
                <td>2</td>
                <td>$10.00</td>
                <td>$20.00</td>
                <td>
                  <button>Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="panel">
        <div className="lateralPanel">
          <div className="desplegarPanel">
            <IonIcon icon={caretForwardOutline} />
          </div>
        </div>
        <div className="contenidoPanel">
          <div className="MonedaPago">
            <LabelInputs nombre="Moneda" value={formData.moneda} onChange={handleChange} />
            <LabelInputs nombre="Metodo de Pago" value={formData.metodoPago} onChange={handleChange} />
          </div>

          <div className="FechaPanel">
            <LabelInputs nombre="Fecha de Emision" types="date" value={formData.fechaEmision} onChange={handleChange} />
          </div>

          <div className="NCotizacionPanel">
            <LabelInputs nombre="Numero Cotizacion" value={formData.numeroCotizacion} onChange={handleChange} />
          </div>

          <div className="ResumenPanel">
            <section>Resumen de Cotizacion</section>
            <section>
              <Importes
                titulo="SUBTOTAL "
                valorMonto="20.00"
                simboloMoneda="$"
              />
              <Importes
                titulo="IGV 18% "
                valorMonto="3.60"
                simboloMoneda="$"
              />
              <Importes
                titulo="IMPORTE TOTAL "
                valorMonto="23.60"
                simboloMoneda="$"
              />
            </section>
          </div>

          <div className="observaciones">
            <label htmlFor="observaciones">Observaciones:</label>
            <textarea name="observaciones" rows="6" ></textarea>
          </div>

          <div className="accionesPanel">
          
            <button className="btnPanel">Guardar Cotización</button>
            <button className="btnPanel" onClick={() => crearPdf(formData)}>Generar Factura</button>
            <button className="btnPanel" >Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cotizador;
