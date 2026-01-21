"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const WavyBackground = ({
    children,
    className,
    containerClassName,
    colors,
    waveWidth,
    backgroundFill,
    blur = 10,
    speed = "fast",
    waveOpacity = 0.5,
    ...props
}: {
    children?: any;
    className?: string;
    containerClassName?: string;
    colors?: string[];
    waveWidth?: number;
    backgroundFill?: string;
    blur?: number;
    speed?: "slow" | "fast";
    waveOpacity?: number;
    [key: string]: any;
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isSafari, setIsSafari] = useState(false);

    useEffect(() => {
        setIsSafari(
            typeof window !== "undefined" &&
            navigator.userAgent.includes("Safari") &&
            !navigator.userAgent.includes("Chrome")
        );
    }, []);

    const getSpeed = () => {
        switch (speed) {
            case "slow":
                return 0.001;
            case "fast":
                return 0.002;
            default:
                return 0.001;
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = (ctx.canvas.width = window.innerWidth);
        let h = (ctx.canvas.height = window.innerHeight);
        ctx.filter = `blur(${blur}px)`;

        const waveColors = colors ?? [
            "#38bdf8",
            "#818cf8",
            "#c084fc",
            "#e879f9",
            "#22d3ee",
        ];

        const drawWave = (n: number) => {
            const nt = (n * Math.PI) / 2;
            for (let i = 0; i < n; i++) {
                ctx.beginPath();
                ctx.lineWidth = waveWidth || 50;
                ctx.strokeStyle = waveColors[i % waveColors.length];
                for (let x = 0; x < w; x += 5) {
                    const y = noise(x / 800, 0.3 * i, nt) * 100;
                    ctx.lineTo(x, y + h * 0.5);
                }
                ctx.stroke();
                ctx.closePath();
            }
        };

        let nt = 0;
        const render = () => {
            ctx.fillStyle = backgroundFill || "black";
            ctx.globalAlpha = waveOpacity || 0.5;
            ctx.fillRect(0, 0, w, h);
            drawWave(5);
            nt += getSpeed();
            requestAnimationFrame(render);
        };

        render();

        const handleResize = () => {
            w = ctx.canvas.width = window.innerWidth;
            h = ctx.canvas.height = window.innerHeight;
            ctx.filter = `blur(${blur}px)`;
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [blur, colors, waveWidth, backgroundFill, waveOpacity, speed]);

    const noise = (x: number, y: number, t: number) => {
        return (
            Math.sin(x * 0.01 + t) +
            Math.sin(y * 0.01 + t) +
            Math.sin((x + y) * 0.01 + t)
        );
    };

    return (
        <div
            className={cn(
                "h-screen flex flex-col items-center justify-center",
                containerClassName
            )}
        >
            <canvas
                className="absolute inset-0 z-0"
                ref={canvasRef}
                id="canvas"
                style={{
                    ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
                }}
            ></canvas>
            <div className={cn("relative z-10", className)} {...props}>
                {children}
            </div>
        </div>
    );
};
