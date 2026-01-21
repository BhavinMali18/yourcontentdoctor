"use client";

import React, { useRef, useEffect } from "react";

export default function Cube3D() {
    const cubeRef = useRef<HTMLDivElement>(null);
    const rotateXRef = useRef(-15);
    const rotateYRef = useRef(20);
    const autoRotateRef = useRef(true);
    const startXRef = useRef<number | null>(null);
    const startYRef = useRef<number | null>(null);

    useEffect(() => {
        const cube = cubeRef.current;
        if (!cube) return;

        let animationId: number;

        function animate() {
            if (autoRotateRef.current && cube) {
                rotateYRef.current += 0.15;
                cube.style.transform = `rotateX(${rotateXRef.current}deg) rotateY(${rotateYRef.current}deg)`;
            }
            animationId = requestAnimationFrame(animate);
        }
        animate();

        function start(e: MouseEvent | TouchEvent) {
            autoRotateRef.current = false;
            startXRef.current = "touches" in e ? e.touches[0].clientX : e.clientX;
            startYRef.current = "touches" in e ? e.touches[0].clientY : e.clientY;
        }

        function move(e: MouseEvent | TouchEvent) {
            if (startXRef.current === null || !cube) return;
            const x = "touches" in e ? e.touches[0].clientX : e.clientX;
            const y = "touches" in e ? e.touches[0].clientY : e.clientY;

            rotateYRef.current += (x - startXRef.current) * 0.3;
            rotateXRef.current -= (y - startYRef.current!) * 0.3;

            cube.style.transform = `rotateX(${rotateXRef.current}deg) rotateY(${rotateYRef.current}deg)`;
            startXRef.current = x;
            startYRef.current = y;
        }

        function end() {
            startXRef.current = null;
            startYRef.current = null;
            setTimeout(() => (autoRotateRef.current = true), 1200);
        }

        cube.addEventListener("mousedown", start as EventListener);
        cube.addEventListener("mousemove", move as EventListener);
        cube.addEventListener("mouseup", end);
        cube.addEventListener("touchstart", start as EventListener);
        cube.addEventListener("touchmove", move as EventListener);
        cube.addEventListener("touchend", end);

        return () => {
            cancelAnimationFrame(animationId);
            cube.removeEventListener("mousedown", start as EventListener);
            cube.removeEventListener("mousemove", move as EventListener);
            cube.removeEventListener("mouseup", end);
            cube.removeEventListener("touchstart", start as EventListener);
            cube.removeEventListener("touchmove", move as EventListener);
            cube.removeEventListener("touchend", end);
        };
    }, []);

    return (
        <div className="scene" style={{ width: "260px", height: "260px", perspective: "1000px" }}>
            <div
                ref={cubeRef}
                className="cube"
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    transformStyle: "preserve-3d",
                    cursor: "grab",
                }}
            >
                <div
                    className="face front"
                    style={{
                        position: "absolute",
                        width: "260px",
                        height: "260px",
                        borderRadius: "16px",
                        backgroundImage: "url(/images/img1.jpeg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        boxShadow: "0 25px 40px rgba(0,0,0,0.4)",
                        transform: "translateZ(130px)",
                    }}
                />
                <div
                    className="face back"
                    style={{
                        position: "absolute",
                        width: "260px",
                        height: "260px",
                        borderRadius: "16px",
                        backgroundImage: "url(/images/img2.jpeg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        boxShadow: "0 25px 40px rgba(0,0,0,0.4)",
                        transform: "rotateY(180deg) translateZ(130px)",
                    }}
                />
                <div
                    className="face right"
                    style={{
                        position: "absolute",
                        width: "260px",
                        height: "260px",
                        borderRadius: "16px",
                        backgroundImage: "url(/images/img3.jpeg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        boxShadow: "0 25px 40px rgba(0,0,0,0.4)",
                        transform: "rotateY(90deg) translateZ(130px)",
                    }}
                />
                <div
                    className="face left"
                    style={{
                        position: "absolute",
                        width: "260px",
                        height: "260px",
                        borderRadius: "16px",
                        backgroundImage: "url(/images/img4.jpeg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        boxShadow: "0 25px 40px rgba(0,0,0,0.4)",
                        transform: "rotateY(-90deg) translateZ(130px)",
                    }}
                />
                <div
                    className="face top"
                    style={{
                        position: "absolute",
                        width: "260px",
                        height: "260px",
                        borderRadius: "16px",
                        backgroundImage: "url(/images/img5.jpeg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        boxShadow: "0 25px 40px rgba(0,0,0,0.4)",
                        transform: "rotateX(90deg) translateZ(130px)",
                    }}
                />
                <div
                    className="face bottom"
                    style={{
                        position: "absolute",
                        width: "260px",
                        height: "260px",
                        borderRadius: "16px",
                        backgroundImage: "url(/images/img6.jpeg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        boxShadow: "0 25px 40px rgba(0,0,0,0.4)",
                        transform: "rotateX(-90deg) translateZ(130px)",
                    }}
                />
            </div>
        </div>
    );
}
