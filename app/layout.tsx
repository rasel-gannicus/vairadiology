import type React from "react"
import type { Metadata } from "next"
import { Ubuntu } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Toaster } from "@/components/ui/toaster"

const ubuntu = Ubuntu({ 
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Vairadiology",
  description: "A 3-in-1 frontend app: Task Management, Dashboard, and Image Annotation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <div className="min-h-screen bg-background bg-[#f2f8fd]">
          <Navigation />
          <main className="container mx-auto px-4 py-8 ">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  )
}
