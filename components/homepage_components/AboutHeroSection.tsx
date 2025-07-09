"use client"
import { CheckCircle } from "lucide-react"

export default function AboutHeroSection() {
  return (
    <section className="bg-[#f2f8fd] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
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
        <button className="bg-[#222] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-[#264753] transition">
          ABOUT US
        </button>
      </div>
      {/* Center: Image */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative">
          <img
            src="/images/homepage/about.png"
            alt="Radiology"
            className=" w-4/5 object-cover mx-auto "
          />
          <div className="absolute inset-0 -top[50%] translate-y-[50%] bg-[#051f42] opacity-85 rounded-md pointer-events-none h-2/5" /> 
        </div>
      </div>
      {/* Right: Stats */}
      <div className="flex-1 flex flex-col gap-10">
        <div className="flex items-center gap-6">
          <div className="w-28 h-28 rounded-full border-4 border-blue-200 flex items-center justify-center bg-white">
            <span className="text-3xl font-bold text-blue-800">100%</span>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-[#222]">Report Efficiency</h4>
            <p className="text-gray-500 text-base">
              Vestibulum morbi blandit cursus risus.<br />Augue neque gravida.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="w-28 h-28 rounded-full border-4 border-blue-200 flex items-center justify-center bg-white">
            <span className="text-3xl font-bold text-blue-800">200k</span>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-[#222]">Complete Cases</h4>
            <p className="text-gray-500 text-base">
              Vestibulum morbi blandit cursus risus.<br />Augue neque gravida.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="w-28 h-28 rounded-full border-4 border-blue-200 flex items-center justify-center bg-white">
            <span className="text-3xl font-bold text-blue-800">650+</span>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-[#222]">Our Equipment</h4>
            <p className="text-gray-500 text-base">
              Vestibulum morbi blandit cursus risus.<br />Augue neque gravida.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}