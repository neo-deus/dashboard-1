"use client";

import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Progress", value: 82 },
  { name: "Remaining", value: 18 },
];

const data2 = [
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Progress", value: 2 },
  { name: "Remaining", value: 2 },
  { name: "Remaining", value: 2 },
  { name: "Remaining", value: 2 },
  { name: "Remaining", value: 2 },
  { name: "Remaining", value: 2 },
  { name: "Remaining", value: 2 },
  { name: "Remaining", value: 2 },
  { name: "Remaining", value: 2 },
  { name: "Remaining", value: 2 },
  { name: "Remaining", value: 2 },
  { name: "Remaining", value: 2 },
  { name: "Remaining", value: 2 },
  { name: "Remaining", value: 2 },
  { name: "Remaining", value: 2 },
  { name: "Remaining", value: 2 },
  { name: "Remaining", value: 2 },
];

const COLORS = ["#FF5B2E", "#EDEDED"];

export function ChartRadialStacked() {
  return (
    <div className="flex flex-col items-center justify-center">
      <PieChart width={250} height={150}>
        <Pie
          data={data2}
          dataKey="value"
          startAngle={180}
          endAngle={0}
          cx="50%"
          cy="100%"
          innerRadius={95}
          outerRadius={105}
          paddingAngle={1}
          isAnimationActive={true}
          cornerRadius={15}
        >
          {data2.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.name === "Progress" ? "#FF5B2E" : "#EDEDED"}
              stroke="none"
            />
          ))}
        </Pie>
        <Pie
          data={data}
          dataKey="value"
          startAngle={180}
          endAngle={0}
          cx="50%"
          cy="100%"
          innerRadius={110}
          outerRadius={125}
          paddingAngle={1}
          isAnimationActive={true}
          cornerRadius={15}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="none"
            />
          ))}
        </Pie>
      </PieChart>
      <div className="text-center -mt-14">
        <p className="text-3xl font-bold flex items-center justify-center gap-1">
          82{" "}
          <span className="text-green-500 text-sm p-0.5 rounded bg-green-100">
            +1
          </span>
        </p>
        <p className="text-gray-500  text-sm">of 100 points</p>
      </div>
    </div>
  );
}
