"use client";

import React from "react";
import "./_style/style.css";
import AnimatedText from "@/components/AnimatedText";

const CONCERNS = [
    {
        name: "M360 ICT LTD.",
        logo: "/images/m360_ict_logo.jpg",
        placeholder: "M360",
    },
    {
        name: "M360 ICT LTD. (UK)",
        logo: "/images/ict-logo-modified.png",
        placeholder: "UK",
    },
    {
        name: "ON THE WAY LTD.",
        logo: "/images/concern/OIP.webp",
        placeholder: "OTW",
    },
    {
        name: "G360 TOURS AND TRAVEL PTY LTD (AUSTRALIA)",
        logo: "",
        placeholder: "G360",
    },
    {
        name: "T360 TOURS AND TRAVELS",
        logo: "/images/products/t360.svg",
        placeholder: "T360",
    },
    {
        name: "BOOKING EXPERT.US",
        logo: "/images/concern/image.webp",
        placeholder: "BE",
    },
    {
        name: "SOHI AIRPORT SERVICES",
        logo: "/images/concern/sohih.webp",
        placeholder: "SAS",
    },
    {
        name: "AMERICAN INSTITUTE OF BUSINESS & TECHNOLOGY",
        logo: "/images/concern/aibt.webp",
        placeholder: "AIBT",
    },
    {
        name: "JOBS360.AVIATION.COM.BD",
        logo: "/images/aviation.webp",
        placeholder: "JOBS",
    },
];

export default function OurConcern() {
    return (
        <div className="ConcernPage">
            <section className="Concern__hero">
                <div className="container">
                    <div className="Concern__hero__inner">
                        <h1 className="Concern__h1">
                            <AnimatedText text={["Our Concern", "Global Portfolio"]} />
                        </h1>
                        <p className="Concern__p">
                            A diverse network of companies working together to deliver excellence in ICT,
                            Travel, Education, and more across the globe.
                        </p>
                    </div>
                </div>
            </section>

            <section className="Concern__gridSection">
                <div className="container">
                    <div className="Concern__grid">
                        {CONCERNS.map((concern, idx) => (
                            <div key={idx} className="Concern__card">
                                <div className="Concern__logoWrapper">
                                    {concern.logo ? (
                                        <img
                                            src={concern.logo}
                                            alt={concern.name}
                                            className="Concern__logo"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement?.querySelector('.Concern__placeholder')?.classList.remove('hidden');
                                            }}
                                        />
                                    ) : null}
                                    <div className={`Concern__placeholder ${concern.logo ? 'hidden' : ''}`}>
                                        {concern.placeholder}
                                    </div>
                                </div>
                                <h3 className="Concern__name">{concern.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
