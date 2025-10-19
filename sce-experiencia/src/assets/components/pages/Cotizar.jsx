import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { searchOutline, caretForwardOutline } from "ionicons/icons";

import "../../../css/inicio_cotizador.css";

import LabelInputs from "../utils/LabelInputs";
import OptionInputs from "../utils/OptionInputs";

import Importes from "../utils/casillaImportes";

import { crearPdf } from "../utils/crearPdf";

const Cotizador = () => {
  const MetodoPagoArr = [
    "Contado",
    "Crédito",
    "Credito 7 dias",
    "Credito 15 dias",
    "Credito 30 dias",
    "Credito 60 dias",
    "Credito 90 dias",
  ];

  const MonedaArr = ["Soles (S/)", "Dólares (USD)"];

  const [nombreCliente, setNombreCliente] = useState("");
  const [rucCliente, setRucCliente] = useState("");
  const [direccion, setDireccion] = useState("");
  const [fechaEmision, setFechaEmision] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [tipoMoneda, setTipoMoneda] = useState(MonedaArr[0]);
  const [metodoPago, setMetodoPago] = useState(MetodoPagoArr[0]);

  // Inputs temporales para crear un producto
  const [descripcion, setDescripcion] = useState("");
  const [codigo, setCodigo] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precioUnitario, setPrecioUnitario] = useState("");

  // Lista de productos agregados
  const [producto, setProducto] = useState([]);

  const [numeroCotizacion, setNumeroCotizacion] = useState("");
  const [observaciones, setObservaciones] = useState("");

  // Datos que pasan al PDF / guardar
  const formData = {
    nombreCliente,
    rucCliente,
    direccion,
    fechaEmision,
    tipoMoneda,
    metodoPago,
    producto,
    numeroCotizacion,
    observaciones,
  };

  // --- Helpers ---
  const formatMoney = (value) =>
    Number(value).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  // Cálculos
  const subtotal = producto.reduce((acc, p) => acc + Number(p.total), 0);
  const igv = +(subtotal * 0.18).toFixed(2);
  const total = +(subtotal + igv).toFixed(2);
  const simbolo = tipoMoneda.startsWith("Soles") ? "S/" : "$";

  // --- Manejo de productos ---
  const handleAgregarProducto = () => {
    // Validaciones básicas
    const desc = descripcion.trim();
    if (!desc) {
      alert("Ingresa una descripción del producto.");
      return;
    }

    const qty = parseFloat(cantidad);
    const price = parseFloat(precioUnitario);

    if (isNaN(qty) || qty <= 0) {
      alert("La cantidad debe ser mayor a 0.");
      return;
    }
    if (isNaN(price) || price < 0) {
      alert("El precio unitario debe ser un número válido.");
      return;
    }

    const totalProducto = parseFloat((qty * price).toFixed(2));

    const nuevoProducto = {
      id: Date.now(), // id simple
      descripcion: desc,
      codigo: codigo.trim(),
      cantidad: qty,
      precioUnitario: parseFloat(price.toFixed(2)),
      total: totalProducto,
    };

    setProducto((prev) => [...prev, nuevoProducto]);

    console.log(producto)

    // Limpiar inputs de producto
    setDescripcion("");
    setCodigo("");
    setCantidad("");
    setPrecioUnitario("");
  };

  const handleEliminarProducto = (id) => {
    setProducto((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="Cotizador">
      <div className="formulario">
        <div className="Completar">
          <section
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <LabelInputs
              nombre="Nombre"
              value={nombreCliente}
              onChange={(e) => setNombreCliente(e.target.value)}
            />
            <LabelInputs
              nombre="RUC"
              value={rucCliente}
              onChange={(e) => setRucCliente(e.target.value)}
            >
              <IonIcon className="Buscar" icon={searchOutline} />
            </LabelInputs>
          </section>

          <section
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <LabelInputs
              nombre="Descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
            <LabelInputs
              nombre="Codigo"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            >
              <IonIcon className="Buscar" icon={searchOutline} />
            </LabelInputs>
          </section>

          <section
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <LabelInputs
              nombre="Cantidad"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
            />
            <LabelInputs
              nombre="Precio Unitario"
              value={precioUnitario}
              onChange={(e) => setPrecioUnitario(e.target.value)}
            >
              <p>$.</p>
            </LabelInputs>
            <div>
              <button
                type="button"
                className="btnAgregar"
                onClick={() => handleAgregarProducto()}
              >
                Agregar
              </button>
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
              {producto.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center", opacity: 0.7 }}>
                    No hay productos agregados
                  </td>
                </tr>
              ) : (
                producto.map((p, idx) => (
                  <tr key={p.id}>
                    <td>{idx + 1}</td>
                    <td>{p.descripcion}</td>
                    <td>{p.codigo}</td>
                    <td>{p.cantidad}</td>
                    <td>
                      {simbolo} {formatMoney(p.precioUnitario)}
                    </td>
                    <td>
                      {simbolo} {formatMoney(p.total)}
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleEliminarProducto(p.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              )}
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
            <OptionInputs
              nombre="Tipo de Moneda"
              value={tipoMoneda}
              options={MonedaArr}
              onChange={(e) => setTipoMoneda(e.target.value)}
            />
            <OptionInputs
              nombre="Metodo de Pago"
              value={metodoPago}
              options={MetodoPagoArr}
              onChange={(e) => setMetodoPago(e.target.value)}
            />
          </div>

          <div className="FechaPanel">
            <LabelInputs
              nombre="Fecha de Emision"
              types="date"
              value={fechaEmision}
              onChange={(e) => setFechaEmision(e.target.value)}
            />
          </div>

          <div className="NCotizacionPanel">
            <LabelInputs
              nombre="Numero Cotizacion"
              value={numeroCotizacion}
              onChange={(e) => setNumeroCotizacion(e.target.value)}
            />
          </div>

          <div className="ResumenPanel">
            <section>Resumen de Cotizacion</section>
            <section>
              <Importes
                titulo="SUBTOTAL "
                valorMonto={formatMoney(subtotal)}
                simboloMoneda={simbolo}
              />
              <Importes
                titulo="IGV 18% "
                valorMonto={formatMoney(igv)}
                simboloMoneda={simbolo}
              />
              <Importes
                titulo="IMPORTE TOTAL "
                valorMonto={formatMoney(total)}
                simboloMoneda={simbolo}
              />
            </section>
          </div>

          <div className="observaciones">
            <label htmlFor="observaciones">Observaciones:</label>
            <textarea
              name="observaciones"
              rows="6"
              value={observaciones}
              onChange={(e) => setObservaciones(e.target.value)}
            ></textarea>
          </div>

          <div className="accionesPanel">
            <button className="btnPanel">Guardar Cotización</button>
            <button
              className="btnPanel"
              onClick={() => {
                // el formData ya contiene la lista de productos actual (estado)
                crearPdf(formData);
              }}
            >
              Generar Factura
            </button>
            <button className="btnPanel">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cotizador;
