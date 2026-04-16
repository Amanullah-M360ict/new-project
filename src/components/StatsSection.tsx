"use client";

import React from 'react';
import AnimatedText from './AnimatedText';
import CountUp from './common/CountUp';
import './stats.css';

const StatsSection = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-section__left">
                    <h2 className="stats-section__title">
                        <AnimatedText text={["We've Been", "Around for a", "While"]} />
                    </h2>
                    <p className="stats-section__subtitle">
                        Every number tells a story of growth, collaboration, and the products that shape digital experiences worldwide.
                    </p>
                </div>


            </div>
            <div className="stats-section__right">

                {/* <div className="stats-card stats-card--empty card-top-left-empty"></div> */}



                <div className="stats-card stats-card--green card-1">
                    <div className="stats-card__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </div>
                    <div>
                        <div className="stats-card__value">
                            <CountUp end="450+" />
                        </div>
                        <div className="stats-card__label">B2B User</div>
                    </div>
                </div>



                <div className="stats-card stats-card--white card-2">
                    <div className="stats-card__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 20v-6M6 20V10M18 20V4M6 20h12"></path>
                        </svg>
                    </div>
                    <div>
                        <div className="stats-card__value">
                            <CountUp end="15+" />
                        </div>
                        <div className="stats-card__label">Years of Excellence</div>
                    </div>
                </div>


                <div className="stats-card stats-card--image card-image-bg"></div>

                <div className="stats-card stats-card--green card-3">
                    <div className="stats-card__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                    <div>
                        <div className="stats-card__value">
                            <CountUp end="100+" />
                        </div>
                        <div className="stats-card__label">Team Members</div>
                    </div>
                </div>

                {/* Bottom Right - 450+ Products */}
                <div className="stats-card stats-card--green card-4">
                    <div className="stats-card__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                            <line x1="12" y1="22.08" x2="12" y2="12"></line>
                        </svg>
                    </div>
                    <div>
                        <div className="stats-card__value">
                            <CountUp end="500+" />
                        </div>
                        <div className="stats-card__label">Products</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
