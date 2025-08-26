import { Info, MoveUp } from "lucide-react";
import React from "react";
import { ChartPieStacked } from "./charts/Extras7";

const PieChart = () => {
  return (
    <div className="rounded-lg border-2 border-gray-300  p-4">
      <div className=" flex justify-between  mb-4 ">
        <div className=" flex-1">
          <div className=" flex items-center gap-1 text-neutral-600 text-sm font-medium">
            Total Visit <Info className=" w-4" />
          </div>
          <div className=" mt-3 text-xl font-medium ">191,886</div>
          <div className=" text-sm mt-2 flex flex-nowrap items-center gap-1 text-neutral-500">
            vs last month{" "}
            <span className="bg-green-200 text-green-800 p-1 rounded w-fit text-xs font-medium flex items-center">
              <MoveUp className=" h-3 " />
              {"8.5%"}
            </span>
          </div>
          <div className=" flex justify-between mt-8 font-medium mr-14">
            <div className=" flex items-center gap-2 text-neutral-600">
              <div className=" w-2 h-2 rounded-full bg-chart-1" />
              <div>Mobile</div>
            </div>
            <div>115,132</div>
          </div>
          <div className="h-0.5  mr-14 my-2 bg-gray-300 rounded-full" />
          <div className=" flex justify-between  font-medium mr-14">
            <div className=" flex items-center gap-2 text-neutral-600">
              <div className=" w-2 h-2 rounded-full bg-orange-300" />
              <div>Desktop</div>
            </div>
            <div>76,754</div>
          </div>
        </div>
        <ChartPieStacked />
      </div>
    </div>
  );
};

export default PieChart;
