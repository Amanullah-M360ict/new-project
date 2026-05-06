"use client";

import AnimatedText from "@/components/AnimatedText";
import "./_style/about.css";
import Link from "next/link";
import GallerySection from "@/components/GallerySection";
import TechnologyPartner from "@/components/TechnologyPartner";
import AwardsSection from "@/components/AwardsSection";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

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
                            <div className="About__heroImages">
                                <div className="About__heroImages__grid">
                                    <img
                                        className="About__heroImages__img1"
                                        src="/images/teams/about.png"
                                        alt="Office space 2"
                                        data-reveal="left"
                                        data-delay="300"
                                    />
                                    <img
                                        className="About__heroImages__img2"
                                        src="/images/teams/about-home.png"
                                        alt="Office space 2"
                                        data-reveal="right"
                                        data-delay="400"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="About__vision">
                <div className="container About__vision__container">
                    <h2 className="About__vision__h2" data-reveal="up">
                        We believe good tools<br />
                        come from good thinking,<br />
                        honest work, and teams<br />
                        that enjoy building<br />
                        together.
                    </h2>
                    <div className="About__vision__content">
                        <p className="About__vision__p" data-reveal="up" data-delay="100">
                            <AnimatedText text={["M360 ICT started with a simple idea.", "Build software that solves real problems without making work harder."]} />
                        </p>
                        <p className="About__vision__p" data-reveal="up" data-delay="200">
                            What began as a small team working on web tools has grown into a portfolio of products used by millions of people worldwide. Along the way, one thing never changed. We build carefully, we learn constantly, and we ship with responsibility.
                        </p>
                        <div className="About__vision__btnWrapper" data-reveal="scale" data-delay="300">
                            <Link href="/contact"><button className="About__vision__btn">Contact Us</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <GallerySection />
            <AwardsSection showExploreButton={true} />
            <TechnologyPartner />
        </div>
    );
}
