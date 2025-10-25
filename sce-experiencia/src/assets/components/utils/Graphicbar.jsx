import "../../../css/Graphicbar.css";
import { IonIcon } from "@ionic/react";
import { storefrontOutline } from "ionicons/icons";
import { useVentasTorque, useComprasTorque } from "../utils/ConsultaTotales";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { mes: "Enero", ventas: 4000, compras: 2400 },
  { mes: "Febrero", ventas: 3000, compras: 1398 },
  { mes: "Marzo", ventas: 2000, compras: 2000 },
  { mes: "Abril", ventas: 2780, compras: 3908 },
  { mes: "Junio", ventas: 4000, compras: 2400 },
  { mes: "Julio", ventas: 3000, compras: 1398 },
  { mes: "Agosto", ventas: 2000, compras: 3000 },
  { mes: "Septiembre", ventas: 2780, compras: 3908 },
  { mes: "Octubre", ventas: 1890, compras: 4800 },
];


const Graphicbar = ({ Título }) => {
  const { ventaSolesTorque, ventaDolaresTorque } = useVentasTorque();
  const { compraSolesTorque, compraDolaresTorque } = useComprasTorque();

  const esCompra = Título === "Compras";

  
  console.log("Es compra:", esCompra);
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
          <div className="graphic">
            
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  {/* <Legend /> */}
                  <Line
                    type="monotone"
                    dataKey="ventas"
                    stroke="#4caf50"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="compras"
                    stroke="#2196f3"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default Graphicbar;
