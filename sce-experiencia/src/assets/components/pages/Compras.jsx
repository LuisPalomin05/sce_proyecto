import React from "react";
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import "../../../css/compras.css";

import Graphicbar from "../utils/Graphicbar";
import fondo from "../../img/fondo.jpg";


const Compras = () => {
  return (
    <div>
      <Graphicbar
        Título={"Compras"}
        importesoles={1700}
        importedolares={2300}
      />
      <img className="pruebas" src={fondo} alt="hola" />
    </div>
  );
};
export default Compras;
