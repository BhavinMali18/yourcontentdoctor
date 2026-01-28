"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaUserMd, FaChartLine, FaShieldAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: FaUserMd,
        title: "Patient Decision Confidence",
        description: "Patients who understand your expertise, trust your clinical authority, and approach consultations informed—without reliance on discounts or gimmicks."
    },
    {
        icon: FaChartLine,
        title: "Sustainable Practice Visibility",
        description: "Consistent professional visibility and recall built through ethical communication—independent of trends, competition, or short-term campaigns."
    },
    {
        icon: FaShieldAlt,
        title: "Ethical Authority",
        description: "Professional presence aligned with medical ethics, regulatory compliance, and responsible patient education."
    }
];

export default function Features() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".feature-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="results" ref={containerRef} className="py-24 px-6 md:px-20 bg-gray-50 dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">Results</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Practice Transformation</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Ethical, scalable communication systems that build professional authority, patient trust, and long-term practice sustainability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 dark:border-zinc-800">
                            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 text-2xl">
                                <feature.icon />
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
