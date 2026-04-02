"use client";

import React from 'react';
import AnimatedText from './AnimatedText';
import './services.css';

const ServicesSection = () => {
    return (
        <section className="services-section">
            <div className="services-container">


                <div className="services-header">
                    <h2 className="services-title">
                        <AnimatedText text={["What Value", "Mean To Us"]} />
                    </h2>
                    <div className="services-values">
                        <div className="value-item">
                            <div className="value-header">/ HARVESTING FOUND IT PATTERNS</div>
                            <div className="value-desc">
                                Our products eliminate repetitive work and unnecessary steps, helping teams focus on outcomes, not processes.
                            </div>
                        </div>

                        <div className="value-item">
                            <div className="value-header">/ REDUCING OPERATIONAL COMPLEXITY</div>
                            <div className="value-desc">
                                Clear interfaces. Logical flows. Fewer decisions. This leads to faster onboarding and fewer errors.
                            </div>
                        </div>

                        <div className="value-item">
                            <div className="value-header">/ SUPPORTING LONG-TERM USE</div>
                            <div className="value-desc">
                                Our tools are built to remain stable as teams and businesses grow without constant relearning or redesign.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="capabilities-wrapper">
                    <div className="capabilities-title">/ Core Capabilities</div>
                    <div className="capabilities-list">
                        <span className="cap-item"><AnimatedText text={["Software Engineering"]} /></span> <span className="cap-sep">/</span>
                        <span className="cap-item"><AnimatedText text={["Design & UX"]} /></span> <span className="cap-sep">/</span>
                        <span className="cap-item"><AnimatedText text={["Sales"]} /></span> <span className="cap-sep">/</span>
                        <span className="cap-item"><AnimatedText text={["Research"]} /></span> <span className="cap-sep">/</span>
                        <span className="cap-item"><AnimatedText text={["Security"]} /></span> <span className="cap-sep">/</span>
                        <span className="cap-item"><AnimatedText text={["Artificial Intelligence (AI)"]} /></span> <span className="cap-sep">/</span>
                        <span className="cap-item">Project Management</span> <span className="cap-sep">/</span>
                        <span className="cap-item">Marketing</span>
                    </div>
                </div>
            </div>

            <div className="blocks-wrapper">
                <div className="block block--green block-gears">
                    <svg width="200" height="200" viewBox="0 0 100 100" fill="rgba(255,255,255,0.2)">
                        <path d="M50 35c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm37.3 11l-7.7-1.3c-.6-2.5-1.6-4.9-3-7.1l4.4-6.5c.8-1.2.6-2.8-.5-3.8l-5.7-5.7c-1.1-1.1-2.7-1.2-3.8-.5l-6.5 4.4c-2.2-1.4-4.6-2.4-7.1-3l-1.3-7.7c-.2-1.4-1.4-2.5-2.9-2.5h-8c-1.4 0-2.6 1.1-2.9 2.5l-1.3 7.7c-2.5.6-4.9 1.6-7.1 3l-6.5-4.4c-1.2-.8-2.8-.6-3.8.5l-5.7 5.7c-1.1 1.1-1.2 2.7-.5 3.8l4.4 6.5c-1.4 2.2-2.4 4.6-3 7.1l-7.7 1.3c-1.4.2-2.5 1.4-2.5 2.9v8c0 1.4 1.1 2.6 2.5 2.9l7.7 1.3c.6 2.5 1.6 4.9 3 7.1l-4.4 6.5c-.8 1.2-.6 2.8.5 3.8l5.7 5.7c1.1 1.1 2.7 1.2 3.8.5l6.5-4.4c2.2 1.4 4.6 2.4 7.1 3l1.3 7.7c.2 1.4 1.4 2.5 2.9 2.5h8c1.4 0 2.6-1.1 2.9-2.5l1.3-7.7c2.5-.6 4.9-1.6 7.1-3l6.5 4.4c1.2.8 2.8.6 3.8-.5l5.7-5.7c1.1-1.1 1.2-2.7.5-3.8l-4.4-6.5c1.4-2.2 2.4-4.6 3-7.1l7.7-1.3c1.4-.2 2.5-1.4 2.5-2.9v-8c0-1.4-1.1-2.6-2.5-2.9z" />
                    </svg>
                </div>

                <div className="block block-binary">
                    <div>01</div>
                    <div>10</div>
                </div>

                <div className="block block-code">
                    <span>{"<"}</span><span>{"/"}</span><span>{">"}</span>
                </div>

                <div className="block block--dark block-terminal">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                        <polyline points="4 17 10 11 4 5"></polyline>
                        <line x1="12" y1="19" x2="20" y2="19"></line>
                    </svg>
                </div>




            </div>
        </section>
    );
};

export default ServicesSection;
