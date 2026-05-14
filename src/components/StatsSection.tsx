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
                        <AnimatedText text={["A Legacy of", "Innovation &", "Excellence"]} />
                    </h2>

                </div>


            </div>
            <div className="stats-section__right">




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
                            <CountUp end="2500+" />
                        </div>
                        <div className="stats-card__label"> Users</div>
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
                            <CountUp end="150+" />
                        </div>
                        <div className="stats-card__label">Tech Members</div>
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
                            <CountUp end="350+" />
                        </div>
                        <div className="stats-card__label">Products</div>
                    </div>
                </div>

                <div className="stats-card stats-card--white card-5">
                    <div className="stats-card__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                    </div>
                    <div>
                        <div className="stats-card__value">
                            <CountUp end="21" />
                        </div>
                        <div className="stats-card__label">Export Countries</div>
                    </div>
                </div>

                <div className="stats-card stats-card--green card-6">
                    <div className="stats-card__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 21h18"></path>
                            <path d="M9 8h1"></path>
                            <path d="M9 12h1"></path>
                            <path d="M9 16h1"></path>
                            <path d="M14 8h1"></path>
                            <path d="M14 12h1"></path>
                            <path d="M14 16h1"></path>
                            <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path>
                        </svg>
                    </div>
                    <div>
                        <div className="stats-card__value">
                            <CountUp end="9" />
                        </div>
                        <div className="stats-card__label">Sister Concern</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
