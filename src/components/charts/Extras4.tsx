"use client";

import { Bar, BarChart } from "recharts";

const data = [
  { day: "05-01", temperature: [-1, 10], fill: "var(--chart-1)" },
  { day: "05-02", temperature: [2, 10], fill: "var(--chart-1)" },
  { day: "05-03", temperature: [3, 12], fill: "var(--chart-1)" },
  { day: "05-03", temperature: [-3, 7], fill: "var(--chart-11)" },
  { day: "05-03", temperature: [3, 12], fill: "var(--chart-11)" },
  { day: "05-09", temperature: [-3, 5], fill: "var(--chart-11)" },
];

export function ChartBarRange() {
  return (
    <BarChart width={80} height={80} data={data} barCategoryGap={2}>
      <Bar dataKey="temperature" radius={[3, 3, 3, 3]} />
    </BarChart>
  );
}
