"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const isVisible = entries[0].isIntersecting;
                if (iframe.contentWindow) {
                    iframe.contentWindow.postMessage(
                        JSON.stringify({
                            event: "command",
                            func: isVisible ? "playVideo" : "pauseVideo",
                            args: [],
                        }),
                        "*"
                    );
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(iframe);
        return () => observer.disconnect();
    }, []);

    return (
        <iframe
            ref={iframeRef}
            className="About__heroImages__img1"
            src="https://www.youtube.com/embed/9YBfczA7p4I?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=9YBfczA7p4I&controls=0&modestbranding=1&rel=0&fs=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
        />
    );
}
