"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
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

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data, options }) => {
  return <Doughnut data={data} options={options} />;
};

const ChartTwo: React.FC = () => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(178, 34, 34, 0.8)", // Firebrick (less dark red)
          "rgba(70, 130, 180, 0.8)", // Steel Blue
          "rgba(189, 183, 107, 0.8)", // Dark Khaki (less dark yellow)
          "rgba(60, 179, 113, 0.8)", // Medium Sea Green
          "rgba(123, 104, 238, 0.8)", // Medium Slate Blue
          "rgba(210, 105, 30, 0.8)",
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
        position: "bottom", 
        labels: {
          font: {
            size: 14, 
          },
          color: "#000", 
        },
      },
      title: {
        display: true,
        text: "Votes by Color",
      },
    },
  };

  return (
    <div style={{ width: "400px", height: "300px" }} className="bg-white p-4">
      <DoughnutChart data={data} options={options} />
    </div>
  );
};

export default ChartTwo;
