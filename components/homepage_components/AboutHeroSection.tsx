"use client"
import { CheckCircle } from "lucide-react"
import './AboutHeroSection.css'

export default function AboutHeroSection() {
  const statsData = [
    {
      value: "100%",
      title: "Report Efficiency",
      description: "Vestibulum morbi blandit cursus risus.<br />Augue neque gravida."
    },
    {
      value: "200k",
      title: "Complete Cases",
      description: "Vestibulum morbi blandit cursus risus.<br />Augue neque gravida."
    },
    {
      value: "650+",
      title: "Our Equipment",
      description: "Vestibulum morbi blandit cursus risus.<br />Augue neque gravida."
    }
  ];

  return (
    <section className="bg-[#f2f8fd] rounded-3xl z-50  flex flex-col lg:flex-row items-center justify-between gap-10 mb-16">
      {/* Left: Text */}
      <div className="flex-1 max-w-xl">
        <span className="inline-block bg-white text-[#264753] font-semibold px-5 py-2 rounded-full mb-6 text-sm tracking-widest shadow">
          ABOUT US
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#222]">
          Exceptional<br />Radiology Care for<br />Patients
        </h2>
        <p className="text-lg text-gray-500 mb-6">
          Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin.
        </p>
        <ul className="space-y-2 mb-8">
          <li className="flex items-center gap-2 text-[#264753] text-base">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            Accurate and speedy reports
          </li>
          <li className="flex items-center gap-2 text-[#264753] text-base">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            Panoramic Dental X-ray.
          </li>
        </ul>
        <div className=" w-full flex lg:justify-start lg:items-start">
          <button className="bg-[#222] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-[#264753] transition mx-auto lg:ms-0">
            ABOUT US
          </button>
        </div>
      </div>
      {/* Center: Image */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative">
          <img
            src="/images/homepage/about.png"
            alt="Radiology"
            className=" w-full object-cover "
          />
          <div className="about-hero-anim pointer-events-none" />
        </div>
      </div>
      {/* Right: Stats */}
      <div className="flex-1 flex flex-col gap-7 items-center lg:items-start  w-full">
        {statsData.map((stat, index) => (
          <div key={index} className="flex flex-col items-center lg:items-start gap-3">
            <div className="w-16 h-16 rounded-full border-4 border-blue-200 flex items-center justify-center bg-white">
              <span className="text-lg font-bold text-blue-800">
                {stat.value}
              </span>
            </div>
            <div className="text-center lg:text-left">
              <h4 className="text-md font-semibold text-[#222]">{stat.title}</h4>
              <p
                className="text-gray-500 text-sm"
                dangerouslySetInnerHTML={{ __html: stat.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}