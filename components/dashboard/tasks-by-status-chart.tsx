"use client"

import { useTaskStore } from "@/lib/stores/task-store"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function TasksByStatusChart() {
  const { tasks } = useTaskStore()

  const data = [
    {
      status: "To Do",
      count: tasks.filter((task) => task.status === "todo").length,
      fill: "hsl(var(--chart-1))",
    },
    {
      status: "In Progress",
      count: tasks.filter((task) => task.status === "in-progress").length,
      fill: "hsl(var(--chart-2))",
    },
    {
      status: "Done",
      count: tasks.filter((task) => task.status === "done").length,
      fill: "hsl(var(--chart-3))",
    },
  ]

  const chartConfig = {
    count: {
      label: "Tasks",
    },
    todo: {
      label: "To Do",
      color: "hsl(var(--chart-1))",
    },
    "in-progress": {
      label: "In Progress",
      color: "hsl(var(--chart-2))",
    },
    done: {
      label: "Done",
      color: "hsl(var(--chart-3))",
    },
  }

  return (
    <ChartContainer config={chartConfig} className="h-[300px]">
      <BarChart data={data}>
        <XAxis dataKey="status" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="count" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
