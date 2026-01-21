"use client";

import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import { FaInstagram, FaPlay } from "react-icons/fa";

export default function ResultsCarousel() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <section className="w-full py-12 md:py-20 bg-gray-50 dark:bg-zinc-950">
            <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 mb-2 md:mb-4">
                Real Results from Real Doctors
            </h2>
            <p className="max-w-7xl pl-4 mx-auto text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 md:mb-8">
                See how doctors are transforming their practice with ethical medical communication
            </p>
            <Carousel items={cards} />
        </section>
    );
}

const VideoContent = ({ url, title }: { url: string; title: string }) => {
    return (
        <div className="w-full max-w-2xl mx-auto space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-3xl">
                <div className="flex items-center gap-4 mb-6">
                    <FaInstagram className="text-4xl text-pink-600" />
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Watch on Instagram</p>
                    </div>
                </div>

                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
                >
                    <FaPlay className="text-xl" />
                    <span>Watch Reel</span>
                </a>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                    Click to view the full video on Instagram
                </p>
            </div>
        </div>
    );
};

const data = [
    {
        category: "Success Story",
        title: "Dr. Krupali's Medical Authority",
        src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        content: <VideoContent url="https://www.instagram.com/reel/DTUcBkyCCK5/" title="Medical Authority Building" />,
    },
    {
        category: "Patient Trust",
        title: "Building Ethical Practice",
        src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2031&auto=format&fit=crop",
        content: <VideoContent url="https://www.instagram.com/reel/DTmd4LggQ-5/" title="Ethical Practice Growth" />,
    },
    {
        category: "Authority Building",
        title: "Medical Communication Excellence",
        src: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2064&auto=format&fit=crop",
        content: <VideoContent url="https://www.instagram.com/reel/DQD3AeaDGk5/" title="Communication Excellence" />,
    },
    {
        category: "Practice Growth",
        title: "Transforming Healthcare Communication",
        src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
        content: <VideoContent url="https://www.instagram.com/reel/DTIqUFsDWlh/" title="Healthcare Transformation" />,
    },
    {
        category: "Doctor Success",
        title: "Ethical Marketing Strategies",
        src: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop",
        content: <VideoContent url="https://www.instagram.com/reel/DOOP2e1jDlw/" title="Marketing Success" />,
    },
    {
        category: "Medical Branding",
        title: "Professional Authority Positioning",
        src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop",
        content: <VideoContent url="https://www.instagram.com/reel/DOxMc70iIlp/" title="Authority Positioning" />,
    },
];
