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
        <div className="w-full max-w-4xl mx-auto space-y-6">
            <div className="bg-black dark:bg-zinc-900 overflow-hidden rounded-3xl shadow-2xl relative aspect-video">
                <video
                    src={url}
                    title={title}
                    className="w-full h-full object-contain"
                    loop
                    muted
                    autoPlay
                    playsInline
                    controls
                />
            </div>
            <div className="flex items-center gap-2 justify-center text-sm text-gray-500">
                <FaPlay className="text-xs" />
                <span>Auto-playing in loop</span>
            </div>
        </div>
    );
};

const data = [
    {
        category: "Diabetes Awareness",
        title: "Diabetic Retinopathy",
        src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        videoSrc: "/video/diabetic-retinopathy.mp4",
        content: <VideoContent url="/video/diabetic-retinopathy.mp4" title="Diabetic Retinopathy" />,
    },
    {
        category: "Doctor's Guide",
        title: "Starting a Podcast",
        src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2031&auto=format&fit=crop",
        videoSrc: "/video/podcast-guide.mp4",
        content: <VideoContent url="/video/podcast-guide.mp4" title="Starting a Podcast" />,
    },
    {
        category: "Perspective",
        title: "Disease as a Teacher",
        src: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2064&auto=format&fit=crop",
        videoSrc: "/video/disease-perspective.mp4",
        content: <VideoContent url="/video/disease-perspective.mp4" title="Disease as a Teacher" />,
    },
    {
        category: "Community",
        title: "Meetup Highlights",
        src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
        videoSrc: "/video/meetup-highlights.mp4",
        content: <VideoContent url="/video/meetup-highlights.mp4" title="Meetup Highlights" />,
    },
    {
        category: "Keynote Speech",
        title: "IMA NATCON 2025 Speech",
        src: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop",
        videoSrc: "/video/ima-natcon-speech.mp4",
        content: <VideoContent url="/video/ima-natcon-speech.mp4" title="IMA NATCON 2025 Speech" />,
    },
    {
        category: "Event Summary",
        title: "IMA NATCON 2025 Summary",
        src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop",
        videoSrc: "/video/ima-natcon-summary.mp4",
        content: <VideoContent url="/video/ima-natcon-summary.mp4" title="IMA NATCON 2025 Summary" />,
    },
];
