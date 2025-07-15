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
  const { isOver, setNodeRef } = useDroppable({ id })

  return (
    <div
      ref={setNodeRef}
      className={cn(
        // glassmorphism + gradient-border
        "relative rounded-2xl p-6 min-h-[500px] overflow-hidden",
        "before:absolute before:inset-0 before:rounded-2xl",
        // subtle gradient outline
        "before:bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 before:opacity-50 before:blur-md",
        // actual content card
        "bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg transition-transform duration-300",
        isOver && "ring-2 ring-primary/70 ring-offset-2",
        // // hover lift
        // "hover:-translate-y-1 hover:shadow-xl"
      )}
    >
      {/* ensure content is above the ::before */}
      <div className="relative z-10 flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm font-medium">
          {tasks.length}
        </span>
      </div>

      <div className="relative z-10 space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}

        {tasks.length === 0 && (
          <div className="text-center text-white/60 py-12">
            <p className="mb-2">No tasks yet</p>
            <p className="text-sm">Drag tasks here or add new ones</p>
          </div>
        )}
      </div>
    </div>
  )
}
