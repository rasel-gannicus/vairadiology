"use client"

import { useTaskStore } from "@/lib/stores/task-store"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function TasksByTagChart() {
  const { tasks } = useTaskStore()

  // Count tags
  const tagCounts = tasks.reduce(
    (acc, task) => {
      task.tags.forEach((tag) => {
        acc[tag] = (acc[tag] || 0) + 1
      })
      return acc
    },
    {} as Record<string, number>,
  )

  // Convert to chart data and sort by count
  const data = Object.entries(tagCounts)
    .map(([tag, count]) => ({ tag, count, fill: "hsl(var(--chart-1))" }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10) // Top 10 tags

  const chartConfig = {
    count: {
      label: "Tasks",
      color: "hsl(var(--chart-1))",
    },
  }

  if (data.length === 0) {
    return (
      <div className="h-[300px] flex items-center justify-center text-muted-foreground">
        No tags found. Add some tags to your tasks to see the distribution.
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <BarChart data={data} layout="horizontal">
            <XAxis type="number" />
            <YAxis dataKey="tag" type="category" width={80} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="count" radius={4} />
          </BarChart>
      </ChartContainer>
    </ResponsiveContainer>

  )
}
