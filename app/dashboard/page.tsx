"use client"

import { useTaskStore } from "@/lib/stores/task-store"
import { ChartCard } from "@/components/dashboard/chart-card"
import { TasksByStatusChart } from "@/components/dashboard/tasks-by-status-chart"
import { TasksCompletedChart } from "@/components/dashboard/tasks-completed-chart"
import { TasksByPriorityChart } from "@/components/dashboard/tasks-by-priority-chart"
import { TasksByTagChart } from "@/components/dashboard/tasks-by-tag-chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckSquare, Clock, Target, TrendingUp } from "lucide-react"
import { motion } from "framer-motion" 

export default function DashboardPage() {
  const { tasks } = useTaskStore()

  const totalTasks = tasks.length
  const completedTasks = tasks.filter((task) => task.status === "done").length
  const inProgressTasks = tasks.filter((task) => task.status === "in-progress").length
  const todoTasks = tasks.filter((task) => task.status === "todo").length

  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  const stats = [
    {
      title: "Total Tasks",
      value: totalTasks,
      icon: CheckSquare,
      color: "text-blue-600",
    },
    {
      title: "Completed",
      value: completedTasks,
      icon: Target,
      color: "text-green-600",
    },
    {
      title: "In Progress",
      value: inProgressTasks,
      icon: Clock,
      color: "text-yellow-600",
    },
    {
      title: "Completion Rate",
      value: `${completionRate}%`,
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Visualize your productivity and task analytics</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.12, type: "spring" }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Charts */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <ChartCard title="Tasks by Status" description="Distribution of tasks across different statuses">
          <TasksByStatusChart />
        </ChartCard>

        <ChartCard title="Tasks by Priority" description="Breakdown of tasks by priority level">
          <TasksByPriorityChart />
        </ChartCard>

        <ChartCard
          title="Tasks Completed Over Time"
          description="Daily task completion trend"
          className="lg:col-span-2"
        >
          <TasksCompletedChart />
        </ChartCard>

        <ChartCard title="Tasks by Tags" description="Most frequently used tags" className="lg:col-span-2">
          <TasksByTagChart />
        </ChartCard>
      </motion.div>


      {/* Performance Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Card className="bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Performance Insights</h3>
                <p className="opacity-90">Your productivity is trending upward</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm opacity-90">
              <li>• Best performance on Thursdays</li>
              <li>• Peak activity between 10-11 AM</li>
              <li>• {completionRate}% task completion rate</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <Clock className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Time Management</h3>
                <p className="opacity-90">Optimization suggestions</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm opacity-90">
              <li>• Focus on high-priority tasks first</li>
              <li>• Schedule breaks between 12-1 PM</li>
              <li>• Consider time-blocking for better focus</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
