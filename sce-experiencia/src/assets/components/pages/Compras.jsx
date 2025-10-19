import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

import Graphicbar from "../utils/Graphicbar"

const Compras = () => {
    return (
        <div>
            <Graphicbar Título={"Compras"} importesoles={1700} importedolares={2300}/>           


        </div>
    )
}
export default Compras;