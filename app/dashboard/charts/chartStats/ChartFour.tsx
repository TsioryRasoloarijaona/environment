import { PieChart } from "../chartTypes/PieChart";
import { get } from "@/app/helper/fecth/get";
const ChartFour: React.FC =async () => {
    const list : [[string , number]] =await get('https://environment-pyv8.onrender.com/plants/by-category')
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
          label: "number",
          data: count,
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
          position: "right" as const,
        },
        title: {
          display: true,
          text: "plantation by categories",
        },
        
      },
    };
  
    return (
      <div style={{ width: "100%", height: "300px" }} className="bg-white p-4">
        <PieChart data={data} options={options} />
      </div>
    );
  };
  
  export default ChartFour;