"use client";

import * as React from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const desktopData = [
  { month: "january", desktop: 40, fill: "var(--chart-11)" },
  { month: "february", desktop: 60, fill: "var(--chart-1)" },
];

const mobileData = [
  { month: "january", mobile: 40, fill: "var(--chart-11)" },
  { month: "february", mobile: 60, fill: "var(--chart-1)" },
];

export function ChartPieStacked() {
  return (
    <PieChart width={192} height={192}>
      <Tooltip
        contentStyle={{
          backgroundColor: "black",
          color: "white",
          border: "none",
        }}
        itemStyle={{ color: "white" }}
        formatter={(value, _name, props) => {
          return [`${value}%`, props.payload.month];
        }}
      />
      <Pie
        data={desktopData}
        dataKey="desktop"
        outerRadius={78}
        stroke="none"
      />
      <Pie
        data={mobileData}
        dataKey="mobile"
        innerRadius={80}
        outerRadius={90}
        stroke="none"
      />
    </PieChart>
  );
}
