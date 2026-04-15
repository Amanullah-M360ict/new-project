'use client';

import React from 'react';
import './awards-section.css';
import AnimatedText from './AnimatedText';
import Link from 'next/link';

const AwardsSection = ({ showExploreButton }: { showExploreButton?: boolean }) => {


    return (
        <section className="AwardsSection">
            <div className="container">
                <div className="AwardsSection__header">
                    <h2 className="AwardsSection__title">
                        <AnimatedText text="Leading Travel Tech Expert with Prestigious Awards" />
                    </h2>
                </div>

                <div className="AwardsSection__grid">

                    <div className="AwardCard AwardCard--rocket">
                        <div className="AwardCard__imgWrapper">
                            <img src="/images/awards/Asset 19.png" alt="Performance" className="AwardCard__img" />
                        </div>
                        <p className="AwardCard__text">Commonwealth Business Excellence Awards 2025</p>
                    </div>

                    {/* Card 2: Main SaaS (Big) */}
                    <div className="AwardCard AwardCard--main">
                        <div className="AwardCard__imgWrapper">
                            <img src="/images/awards/Asset 27.png" alt="Main" className="AwardCard__img" />
                        </div>


                    </div>


                    <div className="AwardCard AwardCard--sale">
                        <img src="/images/awards/Asset 25.png" alt="Main" className="AwardCard__img" />
                        <p className="AwardCard__text">Basis National ICT Awards 2022</p>
                    </div>


                    <div className="AwardCard AwardCard--collage">
                        <div className="AwardCard__imgWrapper">
                            <img src="/images/awards/Asset 20.png" alt="Design Collection" className="AwardCard__img" />
                        </div>
                        <div className="AwardCard__overlay">
                            <p className="AwardCard__text"> ICT Awards 2022</p>
                        </div>
                    </div>

                    {/* Card 5: Import */}
                    <div className="AwardCard AwardCard--import">
                        <div className="AwardCard__imgWrapper">
                            <img src="/images/awards/Asset 21.png" alt="One-Click Import" className="AwardCard__img" />
                        </div>
                        <p className="AwardCard__text">Global Changemakers Award 2024</p>
                    </div>

                    {/* Card 6: Creative Demos */}
                    <div className="AwardCard AwardCard--demos">
                        <div className="AwardCard__imgWrapper">
                            <img src="/images/awards/Asset 22.png" alt="Creative Demos" className="AwardCard__img" />
                        </div>
                        <p className="AwardCard__text">Honors and <br /> Awards</p>
                    </div>

                    {/* Card 7: Google Font */}
                    <div className="AwardCard AwardCard--font">
                        <div className="AwardCard__imgWrapper">
                            <img src="/images/awards/Asset 18.png" alt="Google Font" className="AwardCard__img" />
                        </div>
                        <div className="AwardCard__fontContent">

                            <p className="AwardCard__text">South Asian Business Excellence Awards 2025</p>
                        </div>
                    </div>
                </div>
            </div>

            {showExploreButton && (
                <div style={{ textAlign: "center", marginTop: "50px" }}>
                    {/* button with right arrow icon */}
                    <Link href="/awards" style={{ display: "inline-block", fontWeight: "bold", fontSize: "15px" }}>
                        See All Awards <span className="arrow-right">→</span>
                    </Link>
                </div>
            )}
        </section>
    );
};

export default AwardsSection;
