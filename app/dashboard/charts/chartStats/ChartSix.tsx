import { get } from "@/app/helper/fecth/get";
import BarChart from "../chartTypes/BarChart";
export const ChartSix: React.FC =async () => {
    const list : [[string , number]] = await get('https://environment-pyv8.onrender.com/plants/by-location')
    const labels : string[] = [];
    const count : number[]= [];
    for(let i = 0 ; i< list.length ; i++){
        labels.push(list[i][0])
        count.push(list[i][1])
    }
    const data = {
      labels: labels,
      datasets: [
        {
          label: "total plantation",
          data: count,
          backgroundColor: [
            "rgba(8,168,15, 0.5)",
          ],
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
          text: "plantation by region",
        },
        scales: {
          x: {
            grid: {
              display: false, 
            },
          },
          y: {
            grid: {
              display: false, 
            },
          },
        },
      },
    };
  
    return (
      <div className="w-[800px]  bg-white p-4">
        <BarChart data={data} options={options} />
      </div>
    );
  };
  
  export default ChartSix;