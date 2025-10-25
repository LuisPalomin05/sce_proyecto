import "../../../css/Graphicbar.css";
import { IonIcon } from "@ionic/react";
import { storefrontOutline } from "ionicons/icons";
import { useVentasTorque, useComprasTorque } from "../utils/ConsultaTotales";

const Graphicbar = ({ Título }) => {
  const { ventaSolesTorque, ventaDolaresTorque } = useVentasTorque();
  const { compraSolesTorque, compraDolaresTorque } = useComprasTorque();

  const esCompra = Título === "Compras";

console.log(ventaSolesTorque, ventaDolaresTorque, compraSolesTorque, compraDolaresTorque);



  // Según el tipo, elige qué mostrar
  const totalSoles = esCompra ? compraSolesTorque : ventaSolesTorque;
  const totalDolares = esCompra ? compraDolaresTorque : ventaDolaresTorque;
  
  return (
    <div className="graphicbar">
      <div className="graphicbar-title">
        <IonIcon icon={storefrontOutline} />
        <p>{Título}</p>
      </div>
      <div className="graphicbar-container">
        <section className="importes-container">
          <div className="importes">
            <p>Total en Soles</p>
            <p className="moneda">S/. {totalSoles}</p>
          </div>
          <div className="importes">
            <p>Total en Dólares</p>
            <p className="moneda">$. {totalDolares}</p>
          </div>
        </section>
        <section className="leyenda">
          <div className="graphic">a</div>
        </section>
      </div>
    </div>
  );
};

export default Graphicbar;
