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
                        Great technology is born from visionary thinking, rigorous craftsmanship, and a shared passion for solving the world's most complex challenges.
                    </h2>
                    <div className="About__vision__content">
                        <p className="About__vision__p" data-reveal="up" data-delay="100">
                            <AnimatedText text={["M360ICT was founded on a core principle:", "To bridge the gap between technical complexity and intuitive digital empowerment."]} />
                        </p>
                        <p className="About__vision__p" data-reveal="up" data-delay="200">
                            What evolved from a boutique team of problem-solvers into a globally recognized technology powerhouse is a testament to our unwavering commitment to quality. We don't just build software; we engineer sustainable digital ecosystems that scale with ambition. Through continuous learning and responsible innovation, we empower businesses across the globe to redefine what's possible.
                        </p>
                        <div className="About__vision__btnWrapper" data-reveal="scale" data-delay="300">
                            <Link href="/contact"><button className="About__vision__btn">Get in Touch</button></Link>
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
