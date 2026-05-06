'use client';

import React from 'react';
import './awards-section.css';
import AnimatedText from './AnimatedText';
import Link from 'next/link';

const awards = [
    { id: 1, title: 'Commonwealth Business Excellence 2025', img: '/images/awards/Asset 19.png' },
    { id: 2, title: 'Basis National ICT Awards 2022', img: '/images/awards/Asset 25.png' },
    { id: 3, title: 'Global Changemakers Award 2024', img: '/images/awards/Asset 21.png' },
    { id: 4, title: 'South Asian Business Excellence 2025', img: '/images/awards/Asset 18.png' },
    { id: 5, title: 'ICT Awards 2022', img: '/images/awards/Asset 20.png' },
    { id: 6, title: 'Honors and Awards', img: '/images/awards/Asset 22.png' },
];

const AwardsSection = ({ showExploreButton, isFullList = false }: { showExploreButton?: boolean; isFullList?: boolean }) => {
    return (
        <section className={`AwardsSection ${isFullList ? 'AwardsSection--full' : ''}`}>
            <div className="container mx-auto px-4">
                <div className="AwardsSection__header">
                    <h2 className="AwardsSection__title">
                        <AnimatedText text={["Awards & Recognitions"]} />
                    </h2>
                    <p className="AwardsSection__subtitle">Recognized globally for our continuous innovation and excellence.</p>
                </div>

                {isFullList ? (
                    <div className="grid grid-cols-5 gap-2.5">
                        {awards.map((award) => (
                            <div key={award.id} className="InteractiveAwardCard">
                                <div className="InteractiveAwardCard__inner">
                                    <div className="InteractiveAwardCard__front">
                                        <img src={award.img} alt={award.title} className="InteractiveAwardCard__img" />
                                    </div>
                                    <div className="InteractiveAwardCard__back">
                                        <p>{award.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="AwardsSection__marqueeWrapper">
                        <div className="AwardsSection__marquee">
                            {[...awards, ...awards, ...awards].map((award, index) => (
                                <div key={`${award.id}-${index}`} className="InteractiveAwardCard">
                                    <div className="InteractiveAwardCard__inner">
                                        <div className="InteractiveAwardCard__front">
                                            <img src={award.img} alt={award.title} className="InteractiveAwardCard__img" />
                                        </div>
                                        <div className="InteractiveAwardCard__back">
                                            <p>{award.title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {showExploreButton && (
                    <div style={{ textAlign: "center", marginTop: "50px" }}>
                        <Link href="/awards" className="">
                            See All Awards <span className="arrow-right">→</span>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AwardsSection;
