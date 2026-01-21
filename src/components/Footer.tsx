"use client";

import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <WavyBackground
            className="max-w-7xl mx-auto px-6"
            containerClassName="py-20"
            colors={["#0ea5e9", "#3b82f6", "#6366f1", "#8b5cf6", "#06b6d4"]}
            waveWidth={30}
            backgroundFill="#0a0a0a"
            blur={8}
            speed="slow"
            waveOpacity={0.3}
        >
            <div className="text-center space-y-8">
                {/* Main CTA */}
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Ready to Build Your Authority?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        Join thousands of doctors transforming their practice through ethical medical communication
                    </p>
                    <button className="mt-6 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                        Book Your Consultation
                    </button>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-6 pt-8">
                    <a
                        href="https://wa.me/919909762162"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                        <FaWhatsapp className="text-2xl" />
                    </a>
                    <a
                        href="https://instagram.com/yourcontentdoctor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                        <FaInstagram className="text-2xl" />
                    </a>
                    <a
                        href="mailto:yourcontentdoctor8@gmail.com"
                        className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                        <FaEnvelope className="text-2xl" />
                    </a>
                </div>

                {/* Footer Text */}
                <div className="pt-8 border-t border-white/10 space-y-2">
                    <p className="text-gray-400 text-sm">
                        Copyright © 2026 Your Content Doctor. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-xs">
                        · With collaboration <a href="https://xstudio.blog" className="text-blue-400 hover:text-blue-300 transition-colors">Xstudio.blog</a>
                    </p>
                </div>
            </div>
        </WavyBackground>
    );
}
