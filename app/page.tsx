import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckSquare, BarChart3, ImageIcon, ArrowRight } from "lucide-react"

const features = [
  {
    title: "Task Management",
    description: "Kanban board with date-based task organization, drag & drop, and priority management",
    icon: CheckSquare,
    href: "/tasks",
    color: "bg-blue-500",
  },
  {
    title: "Dashboard Analytics",
    description: "Visualize your productivity with interactive charts and task statistics",
    icon: BarChart3,
    href: "/dashboard",
    color: "bg-green-500",
  },
  {
    title: "Image Annotation",
    description: "Draw and annotate images with polygon tools for precise marking",
    icon: ImageIcon,
    href: "/annotate",
    color: "bg-purple-500",
  },
]

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to <span className="text-primary">Vairadiology Creative App Drawer</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A comprehensive 3-in-1 frontend application combining task management, data visualization, and image
          annotation tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <Card key={feature.title} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full group-hover:translate-x-1 transition-transform">
                  <Link href={feature.href}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="text-center">
        <p className="text-muted-foreground">Built with TypeScript, Next.js, and modern web technologies</p>
      </div>
    </div>
  )
}
