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
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const formattedDate = `${year}-${month}-${day}`
    
    setSelectedDate(formattedDate)
  }


  const getCurrentDate = () => {
    const [year, month, day] = selectedDate.split('-').map(Number)
    return new Date(year, month - 1, day) 
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Task Management</h1>
          <p className="text-muted-foreground">Organize your tasks with our Drag & Drop enabled Kanban board</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <DateSelector date={getCurrentDate()} onDateChange={handleDateChange} />
          <Button className="bg-teal-600" onClick={() => setIsDialogOpen(true)}>
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