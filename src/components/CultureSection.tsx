'use client';

import React from 'react';
import './culture-section.css';

const CultureSection = () => {
    const values = [
        {
            title: "EXCELLENCE AND INNOVATION",
            desc: "We strive to build products that set new standards and continuously improve how we work."
        },
        {
            title: "EMPATHY AND RESPECT",
            desc: "We offer a space where everyone feels safe to speak up and be themselves."
        },
        {
            title: "INTEGRITY AND ACCOUNTABILITY",
            desc: "We move with integrity, learn from mistakes, and hold ourselves to high ethical standards."
        },
        {
            title: "GROWTH & LEARNING",
            desc: "We invest in our people and help each other grow into better professionals and better humans."
        }
    ];

    return (
        <section className="CultureSection">
            <div className="CultureSection__grid">
                {/* Top Left: Text Content - Wrapped in a partial container or logic */}
                <div className="CultureSection__item CultureSection__item--text">
                    <div className="CultureSection__textContainer">
                        <h2 className="CultureSection__headline">
                            We give you the freedom to explore new ideas, the trust to take ownership, and the support to grow into your best self.
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
                    <img src="/images/culture/amphi.png" alt="Office Amphitheatre" className="CultureSection__img" />
                </div>

                {/* Middle: Meeting */}
                <div className="CultureSection__item CultureSection__item--meeting">
                    <img src="/images/culture/meeting.png" alt="Office Meeting Room" className="CultureSection__img" />
                </div>

                {/* Middle Bottom: Hallway */}
                <div className="CultureSection__item CultureSection__item--hallway">
                    <img src="/images/culture/hallway.png" alt="Office Hallway" className="CultureSection__img" />
                </div>

                {/* Middle: Pods */}
                <div className="CultureSection__item CultureSection__item--pods">
                    <img src="/images/culture/pods.png" alt="Office Pods" className="CultureSection__img" />
                </div>


            </div>
        </section>
    );
};

export default CultureSection;
