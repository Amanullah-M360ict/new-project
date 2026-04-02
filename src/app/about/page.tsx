"use client"

import PDFViewer from "@/components/common/PDFViewer";
import AnimatedText from "@/components/AnimatedText";
import "./_style/about.css";

export default function About() {
    const faoLink = "https://coosy.co.jp/recruit/"
    return (
        <div>
            <div className="About">
                <div className="Hero">
                    <div className="container">
                        <div className="Hero__wrapper">
                            <div className="Hero__wrapper-inner">
                                <h1 className="Hero__h1 Hero__h1--about">
                                    <AnimatedText text={["Company", "Value &", "Culture"]} />
                                </h1>
                                <p className="Hero__p"  >
                                    About us
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="About__value">
                    <div className="container">
                        <div
                            className="About__value__image"
                        >
                            <img
                                className="About__value__img"
                                src="/images/code.svg"
                            />
                        </div>
                        <h2 className="About__value__h2">
                            <span  >
                                <AnimatedText text="M360 ICT Value" />
                            </span>
                        </h2>
                        <dl className="About__value__dl">
                            <div className="About__value__dl__item">
                                <div className="About__value__dl__item__header">
                                    <span
                                        className="About__value__dl__item__span"

                                    >
                                        01
                                    </span>
                                    <dt
                                        className="About__value__dl__item__dt"

                                    >
                                        I am the one who moves forward
                                    </dt>
                                </div>
                                <dd
                                    className="About__value__dl__item__dd"

                                >
                                    Instead of waiting for someone's instructions, think about what you
                                    need to do for the growth of your business, make your own decisions,
                                    and take action with an aggressive attitude.
                                </dd>
                            </div>
                            <div className="About__value__dl__item">
                                <div className="About__value__dl__item__header">
                                    <span
                                        className="About__value__dl__item__span"

                                    >
                                        02
                                    </span>
                                    <dt
                                        className="About__value__dl__item__dt"

                                    >
                                        Quality that we can be proud of
                                    </dt>
                                </div>
                                <dd
                                    className="About__value__dl__item__dd"

                                >
                                    Create the best SNS app in Japan. With that awareness, let's pursue
                                    the quality that we can be proud of. Let's accumulate one more step
                                    of persistence and repeatedly improve.
                                </dd>
                            </div>
                            <div className="About__value__dl__item">
                                <div className="About__value__dl__item__header">
                                    <span
                                        className="About__value__dl__item__span"

                                    >
                                        03
                                    </span>
                                    <dt
                                        className="About__value__dl__item__dt"

                                    >
                                        Thorough self-blame thinking
                                    </dt>
                                </div>
                                <dd
                                    className="About__value__dl__item__dd"

                                >
                                    When a problem arises, look back to see if there is a cause for it.
                                    Make any problem your own and go pick up the ball of the assignment
                                    yourself.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="About__company-profile">
                    <div className="container">
                        <div className="About__company-profile__wrapper">
                            <h2 className="About__company-profile__h2">
                                <AnimatedText text="Company profile" />
                            </h2>

                            <div
                                className="About__company-profile__dl"
                                style={{ opacity: 1, transform: "translateX(0px) translateY(0px)" }}
                            >

                                <div className="About__company-profile__dl__item">
                                    <dt className="About__company-profile__dl__item__dt">
                                        Name
                                    </dt>
                                    <div className="About__company-profile__dl__item__ps">
                                        <p className="About__company-profile__dl__item__p">
                                            M360 ICT Limited
                                        </p>
                                    </div>
                                </div>

                                <div className="About__company-profile__dl__item">
                                    <dt className="About__company-profile__dl__item__dt">
                                        Industry
                                    </dt>
                                    <div className="About__company-profile__dl__item__ps">
                                        <p className="About__company-profile__dl__item__p">
                                            IT Services, Software Development & Travel Technology Solutions
                                        </p>
                                    </div>
                                </div>

                                <div className="About__company-profile__dl__item">
                                    <dt className="About__company-profile__dl__item__dt">
                                        Chairman
                                    </dt>
                                    <div className="About__company-profile__dl__item__ps">
                                        <p className="About__company-profile__dl__item__p">
                                            Prof. Dr. Mahbubul Haque Joarder
                                        </p>
                                    </div>
                                </div>

                                <div className="About__company-profile__dl__item">
                                    <dt className="About__company-profile__dl__item__dt">
                                        MD & CEO
                                    </dt>
                                    <div className="About__company-profile__dl__item__ps">
                                        <p className="About__company-profile__dl__item__p">
                                            Fahim Shariar Ratul
                                        </p>
                                    </div>
                                </div>

                                <div className="About__company-profile__dl__item">
                                    <dt className="About__company-profile__dl__item__dt">
                                        Headquarters
                                    </dt>
                                    <div className="About__company-profile__dl__item__ps">
                                        <p className="About__company-profile__dl__item__p">
                                            House 74, Road 7, Block H, Banani, Dhaka-1213, Bangladesh
                                        </p>
                                    </div>
                                </div>

                                <div className="About__company-profile__dl__item">
                                    <dt className="About__company-profile__dl__item__dt">
                                        Branch Offices
                                    </dt>
                                    <div className="About__company-profile__dl__item__ps">
                                        <p className="About__company-profile__dl__item__p">
                                            ICT Tower, Agargaon, Dhaka
                                        </p>
                                        <p className="About__company-profile__dl__item__p">
                                            Jamal Khan Road, Chattogram
                                        </p>
                                        <p className="About__company-profile__dl__item__p">
                                            New York, USA
                                        </p>
                                    </div>
                                </div>

                                <div className="About__company-profile__dl__item">
                                    <dt className="About__company-profile__dl__item__dt">
                                        Employees
                                    </dt>
                                    <div className="About__company-profile__dl__item__ps">
                                        <p className="About__company-profile__dl__item__p">
                                            150+ ICT Professionals
                                        </p>
                                    </div>
                                </div>

                                <div className="About__company-profile__dl__item">
                                    <dt className="About__company-profile__dl__item__dt">
                                        Global Presence
                                    </dt>
                                    <div className="About__company-profile__dl__item__ps">
                                        <p className="About__company-profile__dl__item__p">
                                            Serving clients in 16+ countries worldwide
                                        </p>
                                    </div>
                                </div>

                                <div className="About__company-profile__dl__item">
                                    <dt className="About__company-profile__dl__item__dt">
                                        Core Services
                                    </dt>
                                    <div className="About__company-profile__dl__item__ps">
                                        <p className="About__company-profile__dl__item__p">
                                            Software Development
                                        </p>
                                        <p className="About__company-profile__dl__item__p">
                                            Web & Mobile Application Development
                                        </p>
                                        <p className="About__company-profile__dl__item__p">
                                            Travel Technology Solutions
                                        </p>
                                        <p className="About__company-profile__dl__item__p">
                                            AI Based Systems & Enterprise Solutions
                                        </p>
                                    </div>
                                </div>

                                <div className="About__company-profile__dl__item">
                                    <dt className="About__company-profile__dl__item__dt">
                                        Awards & Recognition
                                    </dt>
                                    <div className="About__company-profile__dl__item__ps">
                                        <p className="About__company-profile__dl__item__p">
                                            BASIS National ICT Award 2022 (Tourism & Hospitality)
                                        </p>
                                        <p className="About__company-profile__dl__item__p">
                                            Global Change Makers Awards 2024
                                        </p>
                                        <p className="About__company-profile__dl__item__p">
                                            Commonwealth Business Excellence Award 2025
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <img
                                className="About__company-profile__img"
                                src="https://img.freepik.com/premium-photo/modern-business-office-interior-3d-rendering_651547-1296.jpg"
                                srcSet="https://img.freepik.com/premium-photo/modern-business-office-interior-3d-rendering_651547-1296.jpg"
                            />
                        </div>
                    </div>
                </div>
                <div >
                    <div className='container ' style={{
                        marginTop: "30px"
                    }}>
                        <h2 className="About__company-profile__h2" style={{
                            marginBottom: "20px"
                        }}>
                            <AnimatedText text="Company profile" />
                        </h2>
                        <PDFViewer pdfUrl='/images/m360.pdf' />
                    </div>
                </div>

                <div className="About__access">
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
                </div>
            </div>

        </div>

    );
}
