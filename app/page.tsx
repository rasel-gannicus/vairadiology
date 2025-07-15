"use client"
import HeroSection from "@/components/homepage_components/hero/HeroSection"
import AboutHeroSection from "@/components/homepage_components/AboutHeroSection"
import { AboutSectionTwo, cardsData } from "@/components/homepage_components/AboutSectionTwo"
import { AppGrid } from "@/components/homepage_components/AppGrid"
import CtaSection from "@/components/homepage_components/CtaSection"
import MovingBanner from "@/components/homepage_components/MovingBanner"



export default function HomePage() {
  return (
    <div className="space-y-20 ">
      <div className="min-h-[50vh]">
        <HeroSection />
      </div>
      <div className="text-center space-y-4 pt-36 lg:pt-16  ">
        <h1 className="text-4xl font-medium tracking-tight mt-7">
          Welcome to <span className="text-primary">Vairadiology Creative App Drawer</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A comprehensive 3-in-1 frontend application combining task management, data visualization, and image
          annotation tools.
        </p>
      </div>

      {/* --- app navigation card section --- */}
      <AppGrid />

      {/* About Section */}
      <AboutHeroSection />

      {/* About Section Two */}
      <div className=" pt-28 pb-28 ">
        {cardsData.map((card, index) => (
          <AboutSectionTwo key={index} {...card} />
        ))}
      </div>

      {/* CTA Section */}
      <CtaSection />

      <MovingBanner />
      <div className="text-center">
        <p className="text-muted-foreground">Built with TypeScript, Next.js, and modern web technologies</p>
      </div>
    </div>
  )
}
