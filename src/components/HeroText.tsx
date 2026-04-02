"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const COLORS = ["#1282ed", "#34b4eb", "#222222", "#1282ed"];

export default function HeroText() {
    const containerRef = useRef<HTMLHeadingElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    const playAnimation = () => {
        if (!containerRef.current) return;
        const chars = containerRef.current.querySelectorAll(".char");

        if (tlRef.current) {
            tlRef.current.kill();
        }

        gsap.set(chars, { opacity: 1, textShadow: "none", color: "#1a1a1a" });

        const tl = gsap.timeline();
        tlRef.current = tl;

        const animColors = ["#1282ed", "#34b4eb"];


        tl.to(chars, {
            duration: 0.1,
            opacity: () => Math.random() > 0.7 ? 1 : 1,
            color: () => animColors[Math.floor(Math.random() * animColors.length)],

            stagger: {
                amount: 0.2,
                from: "random"
            },
            yoyo: true,
            repeat: 1
        }).to(chars, {
            duration: 0.05,
            opacity: 1,
            color: "#1a1a1a",
            textShadow: "none"
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    playAnimation();
                }
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <h1
            className="Index__hero__h1"
            ref={containerRef}
            onMouseEnter={playAnimation}
            style={{ cursor: "pointer" }}
        >
            <span>
                {"The Science of".split("").map((char, index) => (
                    <span
                        key={`ts-${index}`}
                        className={char === " " ? "space" : "char"}
                        style={char === " " ? { whiteSpace: "pre" } : { display: "inline-block" }}
                    >
                        {char}
                    </span>
                ))}
                <br />
                {"Digital Innovation".split("").map((char, index) => (
                    <span
                        key={`di-${index}`}
                        className={char === " " ? "space" : "char"}
                        style={char === " " ? { whiteSpace: "pre" } : { display: "inline-block" }}
                    >
                        {char}
                    </span>
                ))}
            </span>
        </h1>
    );
}
