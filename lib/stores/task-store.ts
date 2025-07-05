import { create } from "zustand"
import { persist } from "zustand/middleware"

export type TaskStatus = "todo" | "in-progress" | "done"
export type TaskPriority = "low" | "medium" | "high"

export interface Task {
  id: string
  title: string
  description?: string
  status: TaskStatus
  priority: TaskPriority
  dueDate: string // ISO date string
  tags: string[]
  createdAt: string
  updatedAt: string
}

interface TaskStore {
  tasks: Task[]
  selectedDate: string
  addTask: (task: Omit<Task, "id" | "createdAt" | "updatedAt">) => void
  updateTask: (id: string, updates: Partial<Task>) => void
  deleteTask: (id: string) => void
  moveTask: (id: string, status: TaskStatus) => void
  setSelectedDate: (date: string) => void
  getTasksForDate: (date: string) => Task[]
  getTasksByStatus: (status: TaskStatus, date?: string) => Task[]
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      selectedDate: new Date().toISOString().split("T")[0],

      addTask: (taskData) => {
        const now = new Date().toISOString()
        const newTask: Task = {
          ...taskData,
          id: crypto.randomUUID(),
          createdAt: now,
          updatedAt: now,
        }
        set((state) => ({ tasks: [...state.tasks, newTask] }))
      },

      updateTask: (id, updates) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, ...updates, updatedAt: new Date().toISOString() } : task,
          ),
        }))
      },

      deleteTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }))
      },

      moveTask: (id, status) => {
        get().updateTask(id, { status })
      },

      setSelectedDate: (date) => {
        set({ selectedDate: date })
      },

      getTasksForDate: (date) => {
        return get().tasks.filter((task) => task.dueDate === date)
      },

      getTasksByStatus: (status, date) => {
        const tasks = date ? get().getTasksForDate(date) : get().tasks
        return tasks.filter((task) => task.status === status)
      },
    }),
    {
      name: "task-storage",
    },
  ),
)
