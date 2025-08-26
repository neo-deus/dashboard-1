import React from "react";
import SummaryCard from "./SummaryCard";
import { ChartBarStacked } from "./charts/Extras";
import { ChartLineMultiple } from "./charts/Extras2";
import { ChartPieDonut } from "./charts/Extras3";
import { ChartBarRange } from "./charts/Extras4";

const CardData = [
  {
    header: "Active Sales",
    data: "$24,064",
    comparison: 12,
    chart: ChartBarStacked,
  },
  {
    header: "Product Revenue",
    data: "$15,490",
    comparison: 9,
    chart: ChartLineMultiple,
  },
  {
    header: "Product Sold",
    data: "2,355",
    comparison: 7,
    chart: ChartPieDonut,
  },
  {
    header: "Conversion Rate",
    data: "12,5%",
    comparison: -2,
    chart: ChartBarRange,
  },
];

const Summary = () => {
  return (
    <div className=" px-4 mb-6">
      <div className="bg-white rounded-lg border-2 border-gray-300">
        <div className="grid grid-cols-4 divide-x-2 divide-gray-300">
          {CardData.map((stat, index) => (
            <SummaryCard key={index} {...CardData[index]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Summary;
