"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CtaSection() {
    return (
        <div className="">
            <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
            >
                <Card className="bg-gradient-to-r from-[#4f8cfb] to-[#38f9d7]  rounded-3xl shadow-lg border-0 text-black">
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
            </motion.div>
        </div>
    );
}