import { LineChart } from "../chartTypes/LineChart";
const ChartThree: React.FC = () => {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June","july","august" , "september" , "october" , "november" , "december"],
      datasets: [
        {
          label: "Revenue",
          data: [0,0, 0, 0, 0, 0,0, 59, 0, 0, 0, 0],
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