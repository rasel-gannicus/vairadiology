"use client" ;
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { MdLocationOn, MdEmail, MdCall, MdFacebook,  MdPublic, MdArrowUpward } from "react-icons/md"

export function Footer() {
    const [showScroll, setShowScroll] = useState(false);

    // Dynamic link data
    const quickLinks = [
        { label: "About Us", href: "#" },
        { label: "Team Member", href: "#" },
        { label: "Our History", href: "#" },
        { label: "Faq", href: "#" },
        { label: "Contact", href: "#" },
    ];
    const services = [
        { label: "Sonogram", href: "#" },
        { label: "3D/4D USG", href: "#" },
        { label: "3T MRI Scans", href: "#" },
        { label: "CT Scan", href: "#" },
        { label: "X-Ray", href: "#" },
    ];
    const resources = [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms And Conditions", href: "#" },
        { label: "Career", href: "#" },
        { label: "How We Work", href: "#" },
        { label: "Knowledge Base", href: "#" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <footer className="bg-[#232222] text-white rounded-3xl mx-2 mt-8 mb-2 p-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
                {/* Logo and description */}
                <div className="flex-1">
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
                </div>

                {/* Newsletter */}
                <div className="flex-1 w-full">
                    <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
                    <form className="flex justify-start items-center w-full">
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="rounded-full px-4 py-2 w-full bg-[#e8eef7] text-black focus:outline-none "
                        />
                        <button
                            type="submit"
                            className="bg-[#3d5ab3] rounded-full w-8 h-8 -ml-10 flex items-center justify-center"
                        >
                            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                                <path d="M2 21l21-9-21-9v7l15 2-15 2z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
            {/* Links section */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 border-t border-gray-700 pt-8">
                {/* Contact Us */}
                <div>
                    <h4 className="font-semibold mb-4">Contact Us</h4>
                    <ul className="space-y-2 text-gray-300 text-sm font-light">
                        <li className="flex items-center gap-2">
                            <MdLocationOn />
                            5th Street, New York, USA
                        </li>
                        <li className="flex items-center gap-2">
                            <MdEmail />
                            vairadiology@gmail.com
                        </li>
                        <li className="flex items-center gap-2">
                            <MdCall />
                            +91–234–567–8900
                        </li>
                    </ul>
                    <div className="flex gap-4 mt-4">
                        <a href="#"><MdFacebook size={24} /></a>
                        {/* <a href="#"><MdInstagram size={24} /></a> */}
                        <a href="#"><MdPublic size={24} /></a>
                    </div>
                </div>
                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm font-light text-gray-300">
                        {quickLinks.map(link => (
                            <li key={link.label}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Services */}
                <div>
                    <h4 className="font-semibold mb-4">Services</h4>
                    <ul className="space-y-2 text-sm font-light text-gray-300">
                        {services.map(link => (
                            <li key={link.label}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Resource */}
                <div>
                    <h4 className="font-semibold mb-4">Resource</h4>
                    <ul className="space-y-2 text-gray-300 text-sm font-light">
                        {resources.map(link => (
                            <li key={link.label}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Copyright */}
            <div className="container mx-auto text-center text-gray-400 mt-8 border-t border-gray-700 pt-4 text-sm">
                Copyright © 2025 All Rights Reserved | Made By Shafiqul Hasan Rasel.
            </div>
            {/* Scroll to top button */}
            {showScroll && (
                <button
                    className="fixed bottom-6 right-6 bg-white text-black rounded-full p-3 shadow-lg hover:bg-gray-200 transition"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    aria-label="Scroll to top"
                >
                    <MdArrowUpward />
                </button>
            )}
        </footer>
    )
}