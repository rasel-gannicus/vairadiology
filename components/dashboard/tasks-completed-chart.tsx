"use client"

import { useTaskStore } from "@/lib/stores/task-store"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { format, subDays, eachDayOfInterval } from "date-fns"

export function TasksCompletedChart() {
  const { tasks } = useTaskStore()

  // Get last 7 days
  const endDate = new Date()
  const startDate = subDays(endDate, 6)
  const days = eachDayOfInterval({ start: startDate, end: endDate })

  const data = days.map((day) => {
    const dayString = day.toISOString().split("T")[0]
    const completedTasks = tasks.filter((task) => task.status === "done" && task.dueDate === dayString).length

    return {
      date: format(day, "MMM dd"),
      completed: completedTasks,
    }
  })

  const chartConfig = {
    completed: {
      label: "Completed Tasks",
      color: "hsl(var(--chart-1))",
    },
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
          <ChartContainer config={chartConfig} className="h-[300px]">
              <LineChart data={data}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="completed"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--chart-1))" }}
                  />
              </LineChart>
        </ChartContainer>
    </ResponsiveContainer>

  )
}
