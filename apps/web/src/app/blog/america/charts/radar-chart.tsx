"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
]

const chartConfig = {
  A: {
    label: "Student A",
    color: "hsl(var(--chart-1))",
  },
  B: {
    label: "Student B",
    color: "hsl(var(--chart-2))",
  },
}

export function RadarChartExample() {
  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar
          name="A"
          dataKey="A"
          stroke="var(--color-A)"
          fill="var(--color-A)"
          fillOpacity={0.6}
        />
        <Radar
          name="B"
          dataKey="B"
          stroke="var(--color-B)"
          fill="var(--color-B)"
          fillOpacity={0.6}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
      </RadarChart>
    </ChartContainer>
  )
}
