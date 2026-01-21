"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
    { question: "Are programs delivered online or offline?", answer: "Our programs are designed for flexibility and impact, primarily delivered online with live interactive sessions." },
    { question: "What if I miss a live session?", answer: "All live sessions are recorded and available for replay in your learning portal." },
    { question: "Unable to complete entire program?", answer: "You have lifetime access to the course materials, so you can learn at your own pace." },
    { question: "Refund policy details?", answer: "We offer a satisfaction guarantee. Please refer to our detailed refund policy on the registration page." },
    { question: "Do you guarantee patient numbers, OPD growth, or revenue outcomes?", answer: "We guarantee the system and the strategy. Patient outcomes depend on consistent implementation and clinical factors." }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".faq-item", {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            });

            gsap.from(".faq-header", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="faqs" ref={containerRef} className="py-24 px-6 md:px-20 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 faq-header">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">FAQs</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h3>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left bg-gray-50 dark:bg-zinc-900 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                            >
                                <span className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                                <span className="text-blue-600 dark:text-blue-400">
                                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-6 bg-white dark:bg-black text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-zinc-800">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
