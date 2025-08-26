"use client";

import { Bar, BarChart } from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
];

export function ChartBarStacked() {
  return (
    <BarChart barCategoryGap={2} height={70} width={80} data={chartData}>
      <Bar
        dataKey="desktop"
        stackId="a"
        fill="var(--chart-1)"
        radius={[3, 3, 3, 3]}
      />
      <Bar
        dataKey="mobile"
        stackId="a"
        fill="var(--chart-11)"
        radius={[3, 3, 3, 3]}
      />
    </BarChart>
  );
}
