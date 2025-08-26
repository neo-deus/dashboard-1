"use client";

import { Line, LineChart } from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 200, mobile: 390 },
];

export function ChartLineMultiple() {
  return (
    <LineChart data={chartData} height={70} width={80}>
      <Line
        dataKey="desktop"
        type="monotone"
        stroke="var(--chart-1)"
        strokeWidth={2}
        dot={false}
      />
      <Line
        dataKey="mobile"
        type="monotone"
        stroke="var(--chart-11)"
        strokeWidth={2}
        dot={false}
      />
    </LineChart>
    // </ChartContainer>
  );
}
