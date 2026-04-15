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
                                        src="https://ollyo.com/wp-content/uploads/2026/02/about-img-2-1-1024x576.webp"
                                        alt="Office space 2"
                                        data-reveal="left"
                                        data-delay="300"
                                    />
                                    <img
                                        className="About__heroImages__img2"
                                        src="https://ollyo.com/wp-content/uploads/2026/02/about-img-2-1-1024x576.webp"
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

            <div className="About__motivation">
                <div className="container">
                    <h2 className="About__motivation__h2" data-reveal="up">
                        <AnimatedText text={["We believe growth happens", "through real work. People here", "learn by building, experimenting,", "failing, and improving."]} />
                    </h2>
                    <p className="About__motivation__p" data-reveal="up" data-delay="200">
                        We support our team throughout their career — from eager
                        startups right to experienced leaders, providing steady support,
                        guidance, and stability on your journey.
                    </p>
                </div>
            </div>

            <div className="about_team_main">
                <div className="About__team">
                    <div className="">
                        <div className="About__team__grid">
                            {[
                                { name: "Dr. Mahbubul Joarder", title: "Founder & Chairman", img: "/images/teams/chairman.JPG" },
                                { name: "Fahim Shariar", title: "MD & CEO", img: "/images/teams/ceo.JPG" },
                                { name: "Monirul Islam", title: "Accounts & Admin", img: "/images/teams/monir.JPG" },
                            ].map((member, idx) => {
                                const isTextTop = idx % 2 === 0;
                                return (
                                    <div
                                        key={idx}
                                        className="About__team__member"
                                        data-reveal="up"
                                        data-delay={String(idx * 100 + 100)}
                                    >
                                        {isTextTop ? (
                                            <>
                                                <div className="About__team__info">
                                                    <h4 className="About__team__name"><AnimatedText text={[member.name]} /></h4>
                                                    <span className="About__team__title"><AnimatedText text={[member.title]} /></span>
                                                </div>
                                                <div className="About__team__imgWrapper">
                                                    <img src={member.img} alt={member.name} className="About__team__img" />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="About__team__imgWrapper">
                                                    <img src={member.img} alt={member.name} className="About__team__img" />
                                                </div>
                                                <div className="About__team__info">
                                                    <h4 className="About__team__name">{member.name}</h4>
                                                    <span className="About__team__title">{member.title}</span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="About__ctaWrapper">
                <div className="About__cta" data-reveal="scale">
                    <div className="About__cta__bgLeft">{'< />'}</div>
                    <div className="About__cta__content">
                        <h2 className="About__cta__h2">
                            Step inside the everyday<br />
                            moments that shape our people,<br />
                            their work, and world at M360 ICT.
                        </h2>
                        <Link href="/"><button className="About__cta__btn">Life at M360ICT</button></Link>
                    </div>
                    <div className="About__cta__bgRight">▲</div>
                </div>

                <div className="container">
                    <img
                        className="About__cta__largeImg"
                        src="/images/teams/group.jpeg"
                        alt="M360 ICT Workspace"
                        data-reveal="scale"
                        data-delay="200"
                    />
                </div>
            </div>
            <TechnologyPartner />
        </div>
    );
}
