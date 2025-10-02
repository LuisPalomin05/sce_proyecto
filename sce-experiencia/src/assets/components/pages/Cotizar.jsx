import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";

import "../../../css/inicio_cotizador.css";

import LabelInputs from "../utils/LabelInputs";
import { d } from "../../../../dist/assets/index-DecGNGCe";

const Cotizador = () => {
  return (
    <div className="Cotizador">
      <div className="formulario">
        <div>
          <section style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <LabelInputs nombre="Nombre" s/>
            <LabelInputs nombre="RUC">
              <IonIcon className="Buscar" icon={searchOutline} />
            </LabelInputs>
          </section>
          <section style={{ display: "flex", gap: "10px" , alignItems: "center"}}>
            <LabelInputs nombre="Producto" />
            <LabelInputs nombre="Codigo">
              <IonIcon className="Buscar" icon={searchOutline} />
            </LabelInputs>
          </section>
          <section style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <LabelInputs nombre="Cantidad" />
            <LabelInputs nombre="Codigo">
              <p>$.</p>
            </LabelInputs>
            <div>
              <button>Agregar</button>
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
        <div></div>
        <div>
          <LabelInputs nombre="Moneda" />

          <section>
            <label htmlFor="metodoPago">Metodo de Pago:</label>
            <input type="text" name="metodoPago" />
          </section>
        </div>
        <div>
          <section>
            <label htmlFor="emision">Fecha de Emision:</label>
            <input type="date" name="emision" id="emision" />
          </section>
        </div>
        <div>
          <LabelInputs nombre="Numero Cotizacion" />
        </div>
        <div>
          <section>Resumen de Cotizacion</section>
          <section>
            <div>
              <p>SUBTOTAL:</p>
              <div>
                <p>$</p>
                <p>$20.00</p>
              </div>
            </div>
            <div>
              <p>IGV 18% :</p>
              <div>
                <p>$</p>
                <p>$3.60</p>
              </div>
            </div>
            <div>
              <p>IMPORTE TOTAL:</p>
              <div>
                <p>$</p>
                <p>$23.60</p>
              </div>
            </div>
          </section>
        </div>
        <div>
          <label htmlFor="observaciones">Observaciones:</label>
          <textarea name="observaciones" rows="4"></textarea>
        </div>
        <div>
          <button>Guardar Cotización</button>
          <button>Generar Factura</button>
          <button>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default Cotizador;
