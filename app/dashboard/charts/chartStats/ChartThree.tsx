import { LineChart } from "../chartTypes/LineChart";
const ChartThree: React.FC = () => {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Revenue",
          data: [65, 59, 80, 81, 56, 55],
          borderColor: "rgba(8,168,15, 0.5)",
          backgroundColor: "rgba(8,168,15, 0.5)",
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