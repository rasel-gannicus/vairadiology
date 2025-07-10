"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CheckSquare, BarChart3, ImageIcon, Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const navItems = [
  {
    href: "/tasks",
    label: "Tasks",
    icon: CheckSquare,
    description: "Kanban Board",
  },
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: BarChart3,
    description: "Analytics",
  },
  {
    href: "/annotate",
    label: "Annotate",
    icon: ImageIcon,
    description: "Image Annotation",
  },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Image 
                  src="https://media.licdn.com/dms/image/v2/D560BAQEI5gsHkT8ywQ/company-logo_200_200/company-logo_200_200/0/1686715308987/vairadiology_logo?e=1756944000&v=beta&t=gnmt4rz0qN6Hl1nJW-M_2dVIhUFtwmvloO2HWnJ939c"
                  width={40}
                  height={40}
                  alt="Vairadiology Logo"
                />
              </div>
              <span className="font-bold text-xl">Vairadiology</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Button
                  key={item.href}
                  asChild
                  variant={isActive ? "default" : "ghost"}
                  className={cn("flex items-center space-x-2", isActive && "bg-gradient-to-br from-gray-900 to-blue-900  hover:bg-[#264753] text-primary-foreground")}
                >
                  <Link href={item.href}>
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Link>
                </Button>
              )
            })}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <Button
                    key={item.href}
                    asChild
                    variant={isActive ? "default" : "ghost"}
                    className={cn("flex items-center space-x-2 w-full justify-start", isActive && "bg-[#264753] text-primary-foreground")}
                    onClick={() => setMobileOpen(false)}
                  >
                    <Link href={item.href}>
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </Button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
