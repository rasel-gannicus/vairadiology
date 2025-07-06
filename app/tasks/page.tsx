"use client"

import { useState } from "react"
import { useTaskStore } from "@/lib/stores/task-store"
import { DateSelector } from "@/components/date-selector"
import { Board } from "@/components/tasks/board"
import { TaskDialog } from "@/components/tasks/task-dialog"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { motion } from "framer-motion"

export default function TasksPage() {
  const { selectedDate, setSelectedDate } = useTaskStore()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleDateChange = (date: Date) => {
    setSelectedDate(date.toISOString().split("T")[0])
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Task Management</h1>
          <p className="text-muted-foreground">Organize your tasks with our Drag & Drop enabled Kanban board</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <DateSelector date={new Date(selectedDate)} onDateChange={handleDateChange} />
          <Button className="bg-[#264753]" onClick={() => setIsDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Task
          </Button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <Board />
      </motion.div>

      <TaskDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  )
}
