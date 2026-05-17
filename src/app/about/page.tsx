"use client";

import AnimatedText from "@/components/AnimatedText";
import "./_style/about.css";
import Link from "next/link";
import GallerySection from "@/components/GallerySection";
import TechnologyPartner from "@/components/TechnologyPartner";
import AwardsSection from "@/components/AwardsSection";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import Review from "@/components/Review";

export default function About() {
    const pageRef = useScrollReveal("[data-reveal]");

    return (
        <div className="AboutPage" ref={pageRef}>
            <div className="About">
                <div className="Hero">
                    <div className="">
                        <div className="Hero__wrapper">
                            <div className="Hero__wrapper-inner container">
                                <h1 className="Hero__h1 Hero__h1--about" data-reveal="up">
                                    <AnimatedText text={["Company Value", "& Culture"]} />
                                </h1>
                                <p className="Hero__p" data-reveal="up" data-delay="200">
                                    About us
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="second_title">
                        <h2 className="second_title__h2">Who We Are</h2>
                        <p className="second_title__text">
                            M360 ICT is a premier global technology consulting and software
                            engineering firm dedicated to transforming businesses through
                            innovation and excellence. With over 15 years of experience in the
                            technology sector, we have established ourselves as a trusted partner for
                            companies seeking reliable, scalable, and future-ready digital solutions.

                        </p>
                    </div>
                </div>

            </div>

            <div className="About__vision">
                <div className="container About__vision__container">
                    <h2 className="About__vision__h2" data-reveal="up">
                        Where Vision Meets Engineering
                    </h2>
                    <div className="About__vision__content">
                        <p className="About__vision__p" data-reveal="up" data-delay="100">
                            Our mission is to bridge the gap between technical complexity and intuitive digital empowerment. We believe that great technology should be accessible, efficient, and transformative, allowing businesses to focus on what they do best.
                        </p>
                    </div>
                </div>
            </div>

            <GallerySection />
            <AwardsSection showExploreButton={true} />

            <TechnologyPartner />
            <Review />


            <div className="About__offices">
                <div className="container">
                    <h2 className="About__offices__h2" data-reveal="up">Global Offices</h2>
                    <div className="OfficesGrid">
                        <div className="OfficeCard" data-reveal="up" data-delay="100">
                            <div className="OfficeCard__header">
                                <img src="https://flagcdn.com/w40/us.png" alt="USA Flag" className="OfficeCard__flag" />
                                <h3 className="OfficeCard__country">United States</h3>
                            </div>
                            <div className="OfficeCard__body">
                                <p className="OfficeCard__address">447 Broadway, 2nd Floor, New York, NY 10013</p>
                            </div>
                        </div>

                        <div className="OfficeCard" data-reveal="up" data-delay="200">
                            <div className="OfficeCard__header">
                                <img src="https://flagcdn.com/w40/gb.png" alt="UK Flag" className="OfficeCard__flag" />
                                <h3 className="OfficeCard__country">United Kingdom</h3>
                            </div>
                            <div className="OfficeCard__body">
                                <p className="OfficeCard__address">71-75 Shelton Street, Covent Garden, London</p>
                            </div>
                        </div>

                        <div className="OfficeCard" data-reveal="up" data-delay="300">
                            <div className="OfficeCard__header">
                                <img src="https://flagcdn.com/w40/au.png" alt="Australia Flag" className="OfficeCard__flag" />
                                <h3 className="OfficeCard__country">Australia</h3>
                            </div>
                            <div className="OfficeCard__body">
                                <p className="OfficeCard__address">100 Harris Street, Pyrmont, NSW 2009</p>
                            </div>
                        </div>

                        <div className="OfficeCard" data-reveal="up" data-delay="400">
                            <div className="OfficeCard__header">
                                <img src="https://flagcdn.com/w40/bd.png" alt="Bangladesh Flag" className="OfficeCard__flag" />
                                <h3 className="OfficeCard__country">Bangladesh</h3>
                            </div>
                            <div className="OfficeCard__body">
                                <p className="OfficeCard__address">House 74, Road 7, Block H, Banani, Dhaka</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
