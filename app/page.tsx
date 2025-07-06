import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckSquare, BarChart3, ImageIcon, ArrowRight } from "lucide-react"

const features = [
  {
    title: "Task Management",
    description: "Nobody does the task - Create, manage, and track your tasks efficiently with our intuitive task management system.",
    icon: CheckSquare,
    href: "/tasks",
    color: "bg-blue-500",
  },
  {
    title: "Dashboard Analytics",
    description: "Because graphs make it look COOL! - Visualize your data with beautiful charts and comprehensive analytics",
    icon: BarChart3,
    href: "/dashboard",
    color: "bg-green-500",
  },
  {
    title: "Image Annotation",
    description: "A great annotation ahead! - Collaborate and provide feedback with our powerful annotation tools",
    icon: ImageIcon,
    href: "/annotate",
    color: "bg-purple-500",
  },
]

export default function HomePage() {
  return (
    <div className="space-y-20">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight mt-7">
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
                <Button asChild className="w-full bg-[#264753] group-hover:translate-x-1 transition-transform">
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

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-[#4f8cfb] to-[#38f9d7] text-white rounded-3xl shadow-lg border-0">
        <CardContent className="text-center p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 mb-8">
            Explore our features and see what modern frontend engineering can achieve.
          </p>
          <Link href="/tasks">
            <Button variant="secondary" size="lg" className="bg-white text-[#2a4b7c] hover:bg-gray-100 font-semibold rounded-xl px-8">
              Start with Tasks
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </CardContent>
      </Card>

      <div className="text-center">
        <p className="text-muted-foreground">Built with TypeScript, Next.js, and modern web technologies</p>
      </div>
    </div>
  )
}
