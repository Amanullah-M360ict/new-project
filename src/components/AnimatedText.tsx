"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface AnimatedTextProps {
    text: string | string[];
    className?: string;
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
    const containerRef = useRef<HTMLSpanElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    const playAnimation = () => {
        if (!containerRef.current) return;
        const chars = containerRef.current.querySelectorAll(".char");

        if (tlRef.current) {
            tlRef.current.kill();
        }

        gsap.set(chars, { opacity: 1, textShadow: "none", clearProps: "color" });

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
            clearProps: "color,textShadow"
        });
    };

    useEffect(() => {
        const currentContainer = containerRef.current;
        if (!currentContainer) return;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setTimeout(() => {
                    playAnimation();
                }, 100);
            }
        }, { threshold: 0.3 });

        observer.observe(currentContainer);

        return () => {
            observer.disconnect();
        };
    }, []);

    const renderText = (str: string, lineIndex: number) => {
        return str.split("").map((char, index) => (
            <span
                key={`${lineIndex}-${index}`}
                className={char === " " ? "space" : "char"}
                style={{
                    ...(char === " " ? { whiteSpace: "pre" } : { display: "inline-block" }),
                    lineHeight: "inherit"
                }}
            >
                {char}
            </span>
        ));
    };

    return (
        <span
            ref={containerRef}
            className={className}
            onMouseEnter={playAnimation}
            style={{ display: "inline-block", lineHeight: "inherit" }}
        >
            {Array.isArray(text) ? (
                text.map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                        {renderText(line, lineIndex)}
                        {lineIndex < text.length - 1 && <br />}
                    </React.Fragment>
                ))
            ) : (
                renderText(text, 0)
            )}
        </span>
    );
}
