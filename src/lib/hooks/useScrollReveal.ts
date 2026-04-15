"use client";

import { useEffect, useRef } from "react";

/**
 * Attach an IntersectionObserver to elements matching `selector` inside `rootRef`.
 * When visible, the class `visibleClass` is added (default: "is-visible").
 */
export function useScrollReveal(
    selector: string = "[data-reveal]",
    options?: IntersectionObserverInit
) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const root = ref.current;
        if (!root) return;

        const elements = root.querySelectorAll<HTMLElement>(selector);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target); // animate once
                    }
                });
            },
            { threshold: 0.15, ...options }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [selector, options]);

    return ref;
}
