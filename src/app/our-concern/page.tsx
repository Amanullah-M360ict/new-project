"use client";

import React from "react";
import "./_style/style.css";
import AnimatedText from "@/components/AnimatedText";

import { CONCERNS } from "@/data/concerns";

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
                            <div key={idx} className="Concern__card" style={{ backgroundImage: `url('${concern.bgImage}')` }}>
                                <div className="Concern__cardOverlay"></div>
                                <div className="Concern__cardContent">
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
