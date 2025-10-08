import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  // Datos del gráfico
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio','Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre'],
    datasets: [
      {
        label: 'Ventas en Soles',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color de las barras
        borderColor: 'rgba(75, 192, 192, 1)', // Color del borde
        borderWidth: 1,
      },
         {
        label: 'Ventas en Dolares',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(89, 21, 0, 0.6)', // Color de las barras
        borderColor: 'rgba(0, 0, 0, 1)', // Color del borde
        borderWidth: 1,
      },
    ],
  };

  // Opciones de configuración del gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Posición de la leyenda
      },
      title: {
        display: true,
        text: 'Ventas por Mes en 2025',
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Iniciar el eje Y en 0
        title: {
          display: true,
          text: 'Cifras',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Meses',
        },
      },
    },
  };

  return (
    <div style={{ width: '600px', height: '400px', margin: '0 auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;