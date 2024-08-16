import React from "react";
import ChartOne from "./charts/BarChart";
import ChartThree from "./charts/LineChart";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import ChartTwo from "./charts/Donaught";
import ChartFour from "./charts/PieChart";

export default function page() {
  return (
    <div className="w-[95%] p-4">
      <div className="mb-4 flex gap-6">
        <div className="space-y-3">
          <ChartThree />
          <ChartOne />
          <ChartThree />
        </div>
        <div className="space-y-5">
          <ChartTwo />
          <ChartFour />
          <ChartTwo />
          <ChartFour />
        </div>
      </div>
    </div>
  );
}
