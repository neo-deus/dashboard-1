"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, value: 1200 },
  { month: "February", desktop: 305, value: 2500 },
  { month: "March", desktop: 237, value: 3100 },
  { month: "April", desktop: 73, value: 1800 },
  { month: "May", desktop: 209, value: 2900 },
  { month: "June", desktop: 214, value: 3400 },
  { month: "July", desktop: 190, value: 2200 },
  { month: "August", desktop: 275, value: 3600 },
  { month: "September", desktop: 240, value: 1500 },
  { month: "October", desktop: 300, value: 3500 },
  { month: "November", desktop: 260, value: 3200 },
  { month: "December", desktop: 280, value: 3700 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartBarDefault() {
  return (
    <ChartContainer config={chartConfig} className="w-full h-[45vh] relative">
      <BarChart data={chartData}>
        <defs>
          <pattern
            id="diagonal-stripes"
            patternUnits="userSpaceOnUse"
            width={10}
            height={10}
            patternTransform="rotate(45)"
          >
            <rect width="3" height="10" fill="var(--pattern-fg)" />
          </pattern>
        </defs>

        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          dataKey="value"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => `$${value / 1000}K`}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

        <Bar
          dataKey="value"
          fill="url(#diagonal-stripes)"
          radius={30}
          activeBar={{
            fill: "var(--chart-1)",
            radius: 30,
          }}
        />
      </BarChart>
    </ChartContainer>
  );
}
