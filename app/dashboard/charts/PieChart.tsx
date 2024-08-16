'use client'
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface PieChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
      borderWidth: number;
    }[];
  };
  options?: any;
}

const PieChart: React.FC<PieChartProps> = ({ data, options }) => {
  return <Pie data={data} options={options} />;
};



const ChartFour: React.FC = () => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 1)", // Soft Red
          "rgba(54, 162, 235, 1)", // Soft Blue
          "rgba(255, 206, 86, 1)", // Soft Yellow
          "rgba(75, 192, 192, 1)", // Soft Green
          "rgba(153, 102, 255, 1)", // Soft Purple
          "rgba(255, 159, 64, 1)", // Soft Orange
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Votes by Color",
      },
    },
  };

  return (
    <div style={{ width: "400px", height: "300px" }} className="bg-white p-4">
      <PieChart data={data} options={options} />
    </div>
  );
};

export default ChartFour;

