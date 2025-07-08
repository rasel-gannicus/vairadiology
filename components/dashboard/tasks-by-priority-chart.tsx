"use client"

import { useTaskStore } from "@/lib/stores/task-store"
import { Pie, PieChart, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function TasksByPriorityChart() {
  const { tasks } = useTaskStore()

  const data = [
    {
      priority: "High",
      count: tasks.filter((task) => task.priority === "high").length,
      fill: "hsl(var(--chart-1))",
    },
    {
      priority: "Medium",
      count: tasks.filter((task) => task.priority === "medium").length,
      fill: "hsl(var(--chart-2))",
    },
    {
      priority: "Low",
      count: tasks.filter((task) => task.priority === "low").length,
      fill: "hsl(var(--chart-3))",
    },
  ]

  const chartConfig = {
    count: {
      label: "Tasks",
    },
    high: {
      label: "High",
      color: "hsl(var(--chart-1))",
    },
    medium: {
      label: "Medium",
      color: "hsl(var(--chart-2))",
    },
    low: {
      label: "Low",
      color: "hsl(var(--chart-3))",
    },
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
        <ChartContainer config={chartConfig}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="count"
              label={({ priority, count }) => `${priority}: ${count}`}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ChartContainer>
    </ResponsiveContainer>

  )
}
