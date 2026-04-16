"use client";

import React from "react";
import Link from "next/link";

export default function ModernHero() {
    return (
        <div className="ModernHero">
            <div className="container">
                <div className="ModernHero__content">

                    <div className="ModernHero__titleWrapper">
                        <p className="ModernHero__topText">AI‑powered ecosystem solutions</p>
                        <h1 className="ModernHero__title">
                            AI Based<br />Solutions
                        </h1>
                        <div className="ModernHero__badges">
                            <span className="ModernHero__badge ModernHero__badge--design">Design</span>
                            <span className="ModernHero__badge ModernHero__badge--software">Software</span>
                            <span className="ModernHero__badge ModernHero__badge--research">Research</span>
                        </div>
                    </div>

                    <div className="ModernHero__desc1Wrapper">
                        <p className="ModernHero__description1">
                            From WordPress to the wider web, M360ICT creates high-performance products
                            trusted by developers, designers, and businesses worldwide.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
