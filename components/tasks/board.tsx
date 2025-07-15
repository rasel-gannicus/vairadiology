"use client"

import { useTaskStore, type TaskStatus } from "@/lib/stores/task-store"
import { Column } from "./column"
import { DndContext, type DragEndEvent, DragOverlay, type DragStartEvent } from "@dnd-kit/core"
import { useState } from "react"
import { TaskCard } from "./task-card"

const columns: { id: TaskStatus; title: string; color: string }[] = [
  // হালকা স্লেট (গ্রে) – To Do
  { id: "todo", title: "To Do", color: "bg-red-500/50 dark:bg-slate-800/40" },

  // নরম ব্লু – In Progress
  { id: "in-progress", title: "In Progress", color: "bg-sky-50/50 dark:bg-sky-900/30" },

  // সফট গ্রীন – Done
  { id: "done", title: "Done", color: "bg-emerald-50/50 dark:bg-emerald-900/30" },
]


export function Board() {
  const { selectedDate, getTasksByStatus, moveTask, tasks } = useTaskStore()
  const [activeId, setActiveId] = useState<string | null>(null)

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over) return

    const taskId = active.id as string
    const newStatus = over.id as TaskStatus

    moveTask(taskId, newStatus)
    setActiveId(null)
  }

  const activeTask = activeId ? tasks.find((task) => task.id === activeId) : null

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((column) => (
          <Column
            key={column.id}
            id={column.id}
            title={column.title}
            color={column.color}
            tasks={getTasksByStatus(column.id, selectedDate)}
          />
        ))}
      </div>

      <DragOverlay>{activeTask ? <TaskCard task={activeTask} isDragging /> : null}</DragOverlay>
    </DndContext>
  )
}
