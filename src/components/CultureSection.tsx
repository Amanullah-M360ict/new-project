"use client";

import React from 'react';
import './culture-section.css';

const CultureSection = () => {
    const values = [
        {
            title: "ARCHITECTURAL EXCELLENCE",
            desc: "We engineer scalable, robust digital ecosystems that redefine industry standards and stand the test of time."
        },
        {
            title: "RADICAL TRUST",
            desc: "We foster extreme ownership and open communication, where every voice drives our strategic direction."
        },
        {
            title: "RESPONSIBLE INNOVATION",
            desc: "We innovate with purpose, ensuring our technology serves a greater good while maintaining high ethical standards."
        },
        {
            title: "CONTINUOUS GROWTH",
            desc: "We invest in our people, providing the resources and freedom to master new technologies and lead global trends."
        }
    ];

    return (
        <section className="CultureSection">
            <div className="CultureSection__grid">
                {/* Top Left: Text Content */}
                <div className="CultureSection__item CultureSection__item--text">
                    <div className="CultureSection__textContainer">
                        <h2 className="CultureSection__headline">
                            We empower visionaries with autonomy, trust, and the creative freedom to solve global challenges.
                        </h2>
                        <div className="CultureSection__values">
                            {values.map((v, i) => (
                                <div key={i} className="CultureSection__value">
                                    <h3 className="CultureSection__valueTitle">
                                        <span className="CultureSection__slash">/</span>
                                        {v.title}
                                    </h3>
                                    <p className="CultureSection__valueDesc">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Top Right: Amphi */}
                <div className="CultureSection__item CultureSection__item--amphi">
                    <img src="/images/culture/amphi.png" alt="M360ICT Collaborative Space" className="CultureSection__img" />
                </div>

                {/* Middle: Meeting */}
                <div className="CultureSection__item CultureSection__item--meeting">
                    <img src="/images/culture/meeting.png" alt="High-Performance Strategy Room" className="CultureSection__img" />
                </div>

                {/* Middle Bottom: Hallway */}
                <div className="CultureSection__item CultureSection__item--hallway">
                    <img src="/images/culture/hallway.png" alt="Modern Workspace" className="CultureSection__img" />
                </div>

                {/* Middle: Pods */}
                <div className="CultureSection__item CultureSection__item--pods">
                    <img src="/images/culture/pods.png" alt="Deep Focus Work Pods" className="CultureSection__img" />
                </div>
            </div>
        </section>
    );
};

export default CultureSection;
