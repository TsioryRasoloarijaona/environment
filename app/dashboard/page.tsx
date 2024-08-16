import React from "react";
import ChartOne from "./charts/chartStats/ChartOne";
import ChartThree from "./charts/chartStats/ChartThree";
import ChartFive from "./charts/chartStats/ChartFive";
import ChartSix from "./charts/chartStats/ChartSix";

import ChartTwo from "./charts/chartTypes/Donaught";
import ChartFour from "./charts/chartStats/ChartFour";

export default function page() {
  return (
    <div className="w-[95%] p-4">
      <div className="mb-4 flex gap-6">
        <div className="space-y-3">
          <ChartThree />
          <ChartOne />
          <ChartSix />
        </div>
        <div className="space-y-5">
          <ChartTwo />
          <ChartFour />
          <ChartTwo />
          <ChartFive />
        </div>
      </div>
    </div>
  );
}
