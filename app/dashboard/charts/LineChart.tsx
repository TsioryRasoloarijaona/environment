'use client'
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LineChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
  options?: any;
}

const LineChart: React.FC<LineChartProps> = ({ data, options }) => {
  return <Line data={data} options={options} />;
};



const ChartThree: React.FC = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [65, 59, 80, 81, 56, 55],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Monthly Revenue Data",
      },
      scales: {
        x: {
          grid: {
            display: false, // Désactiver la grille sur l'axe X
          },
        },
        y: {
          grid: {
            display: false, // Désactiver la grille sur l'axe Y
          },
        },
      },
    },
  };

  return (
    <div className="w-[800px]  bg-white p-4">
      <LineChart data={data} options={options} />
    </div>
  );
};

export default ChartThree;

