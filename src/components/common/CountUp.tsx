"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
    end: string | number;
    duration?: number;
    delay?: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2, delay = 0 }) => {
    const [displayValue, setDisplayValue] = useState("0");
    const containerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const endStr = String(end);
        const match = endStr.match(/^(\d+)(.*)$/);

        if (!match) {
            setDisplayValue(endStr);
            return;
        }

        const targetNumber = parseInt(match[1], 10);
        const suffix = match[2];

        const obj = { value: 0 };

        gsap.to(obj, {
            value: targetNumber,
            duration: duration,
            delay: delay,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                once: true,
            },
            onUpdate: () => {
                setDisplayValue(Math.floor(obj.value) + suffix);
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [end, duration, delay]);

    return (
        <span ref={containerRef} style={{ display: 'inline-block', minWidth: '1ch' }}>
            {displayValue}
        </span>
    );
};

export default CountUp;
