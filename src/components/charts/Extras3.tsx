"use client";

import { Pie, PieChart } from "recharts";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--chart-1)" },
  { browser: "safari", visitors: 200, fill: "var(--chart-11)" },
  { browser: "firefox", visitors: 187, fill: "var(--chart-1)" },
  { browser: "edge", visitors: 173, fill: "var(--chart-11)" },
  { browser: "other", visitors: 90, fill: "var(--chart-1)" },
];

export function ChartPieDonut() {
  return (
    <PieChart height={80} width={80}>
      <Pie
        data={chartData}
        dataKey="visitors"
        nameKey="browser"
        innerRadius={18}
      />
    </PieChart>
  );
}
