// components/SpinningBanner.tsx
"use client"

import { motion } from "framer-motion"
import { Code, Figma, Github, Chrome } from "lucide-react"

const items = [
    { icon: <Code className="w-6 h-6" />, name: "Code" },
    { icon: <Figma className="w-6 h-6" />, name: "Figma" },
    { icon: <Github className="w-6 h-6" />, name: "GitHub" },
    { icon: <Chrome className="w-6 h-6" />, name: "Chrome" },
]

export default function SpinningBanner() {
    const repeatedItems = [...items, ...items, ...items] 

    return (
        <div className="w-full overflow-hidden bg-gray-900 rounded-full py-4">
            <motion.div
                className="flex gap-10 w-max"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 60, 
                    ease: "linear",
                }}
            >
                {/* Repeat the entire chunk twice for seamless loop */}
                {[...repeatedItems, ...repeatedItems].map((item, idx) => (
                    <div key={idx} className="flex gap-5 items-center text-white min-w-[100px]">

                        <motion.span
                            className="mt-1 text-sm"
                            animate={{ rotate: [0, 360] }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                ease: "linear",
                            }}
                        >
                            {item.icon}
                        </motion.span>
                        {item.name}
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
