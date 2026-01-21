"use client";

import React, { useEffect, useRef } from "react";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-info", {
                x: -50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                }
            });

            gsap.from(".contact-card", {
                x: 50,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={containerRef} className="py-24 px-6 md:px-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
                <div className="w-full md:w-1/2 contact-info">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4">Contact Information</h2>
                    <h3 className="text-4xl font-bold mb-8">Let&apos;s Build Your Authority</h3>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/10 rounded-full">
                                <FaWhatsapp className="text-2xl text-green-400" />
                            </div>
                            <div>
                                <p className="text-lg font-bold">+91 99097 62162</p>
                                <p className="text-gray-400">Available on WhatsApp</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/10 rounded-full">
                                <FaEnvelope className="text-2xl text-yellow-400" />
                            </div>
                            <div>
                                <p className="text-lg font-bold">yourcontentdoctor8@gmail.com</p>
                                <p className="text-gray-400">Response within 4 hours</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/10 rounded-full">
                                <FaInstagram className="text-2xl text-pink-500" />
                            </div>
                            <div>
                                <p className="text-lg font-bold">@yourcontentdoctor</p>
                                <p className="text-gray-400">Instagram DM</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center contact-card">
                    <h4 className="text-2xl font-bold mb-4">Doctor Growth Blueprint</h4>
                    <p className="text-gray-300 mb-8 max-w-md">
                        Build Trust. Build Authority. Build Practice.
                        Your practice grows through authority, not luck.
                    </p>
                    <button className="w-full max-w-xs py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-colors">
                        Reserve Your Position
                    </button>
                </div>
            </div>
        </section>
    );
}
