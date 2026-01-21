"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cube3D from "./Cube3D";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;

        gsap.fromTo(
            textRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        gsap.fromTo(
            imageRef.current,
            { scale: 0.9, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-12 md:py-20 px-4 md:px-6 lg:px-20 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div ref={imageRef} className="w-full md:w-1/2 flex items-center justify-center py-8 md:py-0">
                    <Cube3D />
                </div>

                <div ref={textRef} className="w-full md:w-1/2">
                    <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-600 mb-3 md:mb-4">Mentor</h2>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                        Dr. Krupali Chudasama
                    </h3>
                    <p className="text-lg md:text-xl text-gray-500 mb-2 font-medium">Doctor • Medical Strategist • Founder</p>
                    <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        <p>
                            One of India&apos;s leading voices in ethical healthcare communication and authority-led practice positioning.
                        </p>
                        <p>
                            "Doctors don&apos;t need viral tricks. They need ethical authority patients can trust."
                        </p>
                        <p>
                            From a confused content freelancer to one of India&apos;s most trusted medical branding specialists — Dr. Krupali Chudasama built Your Content Doctor with one mission: to help doctors communicate ethically, scientifically and with authority.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
