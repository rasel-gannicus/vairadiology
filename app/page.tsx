"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckSquare, BarChart3, ImageIcon, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import AboutHeroSection from "@/components/homepage_components/AboutHeroSection"
import { AboutSectionTwo, cardsData } from "@/components/homepage_components/AboutSectionTwo"
import CtaSection from "@/components/homepage_components/CtaSection"

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
    description: "A great annotation ahead! - Collaborate and provide feedback with our powerful annotation tools. Make comparison and contrast with ease.",
    icon: ImageIcon,
    href: "/annotate",
    color: "bg-purple-500",
  },
]


export default function HomePage() {
  return (
    <div className="space-y-20">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-medium tracking-tight mt-7">
          Welcome to <span className="text-primary">Vairadiology Creative App Drawer</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A comprehensive 3-in-1 frontend application combining task management, data visualization, and image
          annotation tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.15, type: "spring" }}
            >
              <Card className="relative flex flex-col justify-between overflow-hidden group hover:shadow-lg h-full transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-semibold">{feature.title}</CardTitle>
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
            </motion.div>
          )
        })}
      </div>


      {/* About Section */}
      <AboutHeroSection />

      <div className="">
        {cardsData.map((card, index) => (
          <AboutSectionTwo key={index} {...card} />
        ))}
      </div>

      {/* CTA Section */}
      <CtaSection />

      <div className="text-center">
        <p className="text-muted-foreground">Built with TypeScript, Next.js, and modern web technologies</p>
      </div>
    </div>
  )
}
