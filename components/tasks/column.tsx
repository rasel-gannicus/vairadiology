"use client"

import type { Task, TaskStatus } from "@/lib/stores/task-store"
import { TaskCard } from "./task-card"
import { useDroppable } from "@dnd-kit/core"
import { cn } from "@/lib/utils"

interface ColumnProps {
  id: TaskStatus
  title: string
  color: string
  tasks: Task[]
}

export function Column({ id, title, color, tasks }: ColumnProps) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  })

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "rounded-lg p-4 min-h-[500px] transition-colors",
        color,
        isOver && "ring-2 ring-primary ring-offset-2",
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <span className="bg-background text-foreground px-2 py-1 rounded-full text-sm font-medium">{tasks.length}</span>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}

        {tasks.length === 0 && (
          <div className="text-center text-muted-foreground py-8">
            <p>No tasks yet</p>
            <p className="text-sm">Drag tasks here or add new ones</p>
          </div>
        )}
      </div>
    </div>
  )
}
