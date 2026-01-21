"use client";

import React, { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { gsap } from "gsap";

export default function WhatsAppButton() {
    const buttonRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            buttonRef.current,
            { scale: 0, rotation: 180 },
            { scale: 1, rotation: 0, duration: 0.8, delay: 2, ease: "elastic.out(1, 0.5)" }
        );
    }, []);

    return (
        <a
            ref={buttonRef}
            href="https://wa.me/919909762162"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors hover:scale-110"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="text-4xl" />
        </a>
    );
}
