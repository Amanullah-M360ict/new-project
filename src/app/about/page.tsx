"use client";

import AnimatedText from "@/components/AnimatedText";
import "./_style/about.css";
import Link from "next/link";
import PDFViewer from "@/components/common/PDFViewer";
import StatsSection from "@/components/StatsSection";
import GallerySection from "@/components/GallerySection";

export default function About() {
    return (
        <div className="AboutPage">

            <div className="About">
                <div className="Hero">
                    <div className="">
                        <div className="Hero__wrapper">
                            <div className="Hero__wrapper-inner container">
                                <h1 className="Hero__h1 Hero__h1--about">
                                    <AnimatedText text={["Company Value", "& Culture"]} />
                                </h1>
                                <p className="Hero__p"  >
                                    About us
                                </p>
                            </div>
                            <div className="About__heroImages">

                                <div className="About__heroImages__grid">
                                    <img
                                        className="About__heroImages__img1"
                                        src="https://ollyo.com/wp-content/uploads/2026/02/about-img-2-1-1024x576.webp"
                                        alt="Office space 1"
                                    />
                                    <img
                                        className="About__heroImages__img2"
                                        src="https://ollyo.com/wp-content/uploads/2026/02/about-img-2-1-1024x576.webp"
                                        alt="Office space 2"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>









            <div className="About__vision">
                <div className="container About__vision__container">
                    <h2 className="About__vision__h2">
                        We believe good tools<br />
                        come from good thinking,<br />
                        honest work, and teams<br />
                        that enjoy building<br />
                        together.
                    </h2>
                    <div className="About__vision__content">
                        <p className="About__vision__p">
                            M360 ICT started with a simple idea.<br />
                            Build software that solves real problems without making work harder.
                        </p>
                        <p className="About__vision__p">
                            What began as a small team working on web tools has grown into a portfolio of products used by millions of people worldwide. Along the way, one thing never changed. We build carefully, we learn constantly, and we ship with responsibility.
                        </p>
                        <div className="About__vision__btnWrapper">
                            <Link href="/contact">       <button className="About__vision__btn">Contact Us</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <GallerySection />
            <div className="About__ctaWrapper">
                <div className="About__cta">
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
                        src="https://img.freepik.com/free-photo/coworkings-interior-with-workspace_23-2149176766.jpg?semt=ais_hybrid"
                        alt="M360 ICT Workspace"
                    />
                </div>
            </div>

            <div className="About__motivation">
                <div className="container">

                    <h2 className="About__motivation__h2">
                        We believe growth happens<br />
                        through real work. People here<br />
                        learn by building, experimenting,<br />
                        failing, and improving.
                    </h2>
                    <p className="About__motivation__p">
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
                                    <div key={idx} className="About__team__member">
                                        {isTextTop ? (
                                            <>
                                                <div className="About__team__info">
                                                    <h4 className="About__team__name">{member.name}</h4>
                                                    <span className="About__team__title">{member.title}</span>
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
            {/* <div className="About__access">
                <div className="container">
                    <div className="About__access__wrapper">
                        <div className="About__access__image">
                            <img
                                className="About__access__img"
                                src="https://img.freepik.com/premium-photo/modern-business-office-interior-3d-rendering_651547-1296.jpg"

                            />
                        </div>
                        <div
                            className="About__access__right"
                            style={{ opacity: 1, transform: "translateX(0px) translateY(0px)" }}
                        >
                            <h2 className="About__access__right__h2">
                                <AnimatedText text="Access" />
                            </h2>
                            <p
                                className="About__access__right__p"


                            >
                                M360 ICT Ltd. <br />
                                House# 74 Road# 7, Block# H, Banani, Dhaka-1213 <br />
                                <small>Phone: +8809638336699 | +8801888798798 | +8802226603136</small> <br />
                                <small>Email: info@m360ict.com</small>
                            </p>

                            <iframe
                                className="About__access__right__map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.839238197431!2d90.40625977600666!3d23.788738378644354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7834bbfbc75%3A0x3fcb6c647c404905!2sM360%20ICT!5e0!3m2!1sen!2sbd!4v1774783464216!5m2!1sen!2sbd"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            <div className="About__access__right__buttons">
                                <a
                                    className="Button"
                                    href="https://maps.app.goo.gl/ZzQ82E5U7qzeK6L68"
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"


                                >
                                    Open in Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    );
}
