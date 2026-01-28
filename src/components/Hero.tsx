"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Cube3D from "./Cube3D";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const subRef = useRef(null);
    const statsRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(
            ".hero-stat",
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 0.5 }
        )
            .fromTo(
                textRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2 },
                "-=0.8"
            )
            .fromTo(
                subRef.current,
                { x: -20, opacity: 0 },
                { x: 0, opacity: 1, duration: 1 },
                "-=0.8"
            )
            .fromTo(
                imageRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5 },
                "-=1"
            )
            .fromTo(
                ".vertical-text",
                { opacity: 0 },
                { opacity: 1, duration: 1 },
                "-=0.5"
            );
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full flex flex-col md:flex-row bg-white dark:bg-zinc-950 overflow-hidden pt-16 md:pt-20"
        >
            {/* Vertical Text - Hidden on mobile */}
            <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden lg:block z-10">
                <span className="vertical-text text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-400 font-medium">
                    Medical Strategist — 2025
                </span>
            </div>

            {/* Left Content */}
            <div className="w-full md:w-1/2 min-h-[60vh] md:h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:pl-32 relative z-20 pb-8 md:pb-0">

                {/* Stats */}
                <div className="flex gap-8 md:gap-12 mb-12 md:mb-16" ref={statsRef}>
                    <div className="hero-stat">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 dark:text-white">+15</h3>
                        <p className="text-[9px] md:text-[10px] lg:text-xs text-gray-500 uppercase tracking-wider mt-1 font-semibold">Years Exp.</p>
                    </div>
                    <div className="hero-stat">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 dark:text-white">+5k</h3>
                        <p className="text-[9px] md:text-[10px] lg:text-xs text-gray-500 uppercase tracking-wider mt-1 font-semibold">Doctors Trained</p>
                    </div>
                </div>

                <div className="relative z-30 mb-6 md:mb-8">
                    <h1
                        ref={textRef}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] font-medium tracking-tight text-gray-900 dark:text-white mb-6 max-w-4xl"
                    >
                        India’s pioneer in ethical medical communication and authority-based practice positioning.
                    </h1>
                </div>

                <p
                    ref={subRef}
                    className="text-base sm:text-lg md:text-xl text-white font-light max-w-2xl mb-10"
                >
                    Building long-term trust for doctors, clinics, and hospitals.
                </p>

                <div className="opacity-0" ref={el => { if (el) { gsap.to(el, { opacity: 1, duration: 1, delay: 1.5 }); } }}>
                    <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-base md:text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Medical Authority Blueprint
                    </button>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 md:bottom-12 flex items-center gap-3 text-sm text-gray-400 animate-bounce">
                    <span className="uppercase tracking-widest text-[9px] md:text-[10px]">Scroll down</span>
                    <FaArrowRight className="rotate-90 text-xs" />
                </div>
            </div>

            {/* Right Image Container */}
            <div className="w-full md:w-1/2 min-h-[40vh] md:h-screen relative z-10 flex items-end md:items-center">
                <div
                    ref={imageRef}
                    className="w-full h-full flex items-end justify-center md:justify-end md:pr-10 lg:pr-20 xl:pr-32 pb-4 md:pb-0"
                >
                    <div className="relative w-[220px] xs:w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px] xl:w-[500px] h-[35vh] xs:h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-[70vh] xl:h-[80vh]">
                        <Image
                            src="/doctor.png"
                            alt="Dr. Krupali Chudasama"
                            fill
                            className="object-contain object-bottom drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}
