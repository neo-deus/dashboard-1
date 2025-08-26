import { Info, MoveDown, MoveRight, MoveUp } from "lucide-react";
import React from "react";

type CardData = {
  header: string;
  data: string;
  comparison: number;
  chart: React.ComponentType;
};

const SummaryCard = ({ header, data, comparison, chart: Chart }: CardData) => {
  return (
    <div className="flex flex-col">
      <div className="p-4  flex-1">
        <div className=" flex justify-between items-end">
          <div>
            <div className=" flex gap-1 items-center text-sm font-medium text-neutral-600">
              {header} <Info className=" w-4" />
            </div>
            <div className=" mt-3 text-xl font-medium">{data}</div>
            <div className=" text-sm mt-2 flex flex-nowrap items-center gap-1 text-neutral-500">
              vs last month{" "}
              <span
                className={`${
                  comparison > 0
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-700"
                } p-1 rounded w-fit text-xs font-medium flex items-center`}
              >
                {comparison > 0 ? (
                  <MoveUp className=" h-3" />
                ) : (
                  <MoveDown className=" h-3" />
                )}
                {Math.abs(comparison)}
                {"%"}
              </span>
            </div>
          </div>
          <div className=" w-20">
            <Chart />
          </div>
        </div>
      </div>
      <div className="px-6 py-1.5 gap-3 flex border-t-2 border-gray-300 items-center  justify-center font-medium">
        See Details <MoveRight />
      </div>
    </div>
  );
};

export default SummaryCard;
