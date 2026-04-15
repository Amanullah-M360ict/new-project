"use client";

import Link from "next/link";
import "./_style/clients.css";
import AnimatedText from "@/components/AnimatedText";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

const clients = [
    {
        name: "ATAB",
        fullName: "Association of Travel Agents of Bangladesh",
        industry: "Travel & Tourism",
        logo: "/images/partners/atab.png",
        description: "One of the largest associations of travel agencies in Bangladesh, trusting M360ICT's solutions for over a decade.",
    },
    {
        name: "HAAB",
        fullName: "Hajj Agencies Association of Bangladesh",
        industry: "Religious Tourism",
        logo: "/images/partners/haab.png",
        description: "The national body for Hajj agencies in Bangladesh, leveraging our platform for seamless pilgrimage management.",
    },
    {
        name: "TOAB",
        fullName: "Tour Operators Association of Bangladesh",
        industry: "Tour Operations",
        logo: "/images/partners/toab.jpg",
        description: "Empowering tour operators across Bangladesh with modern technology solutions for end-to-end travel management.",
    },
    {
        name: "BITH",
        fullName: "Bangladesh International Travel & Hospitality",
        industry: "Hospitality",
        logo: "/images/partners/bith.png",
        description: "A leading player in Bangladesh's travel & hospitality sector, powered by M360ICT's enterprise software.",
    },
    {
        name: "AMCHAM",
        fullName: "American Chamber of Commerce in Bangladesh",
        industry: "Commerce & Trade",
        logo: "/images/partners/amcham.png",
        description: "Promoting bilateral trade between the US and Bangladesh with efficient business management tools.",
    },
    {
        name: "Asian Tourism",
        fullName: "Asian Tourism Fair",
        industry: "Tourism & Events",
        logo: "/images/partners/asian-tourism.png",
        description: "Hosting premier travel fairs across Asia, collaborating with M360ICT to manage participants globally.",
    },
    {
        name: "BITTE",
        fullName: "Bangladesh International Travel & Tourism Expo",
        industry: "Events & Expos",
        logo: "/images/partners/bitte.jpg",
        description: "Bangladesh's flagship travel & tourism expo, streamlined with our event and participant management platform.",
    },
    {
        name: "BTTF",
        fullName: "Bangladesh Travel & Tourism Fair",
        industry: "Tourism Events",
        logo: "/images/partners/bttf.jpg",
        description: "An annual travel fair bringing together thousands of stakeholders, powered by M360ICT's solutions.",
    },
    {
        name: "Sabre",
        fullName: "Sabre Corporation",
        industry: "GDS & Technology",
        logo: "/images/partners/sabre.png",
        description: "A global leader in travel technology, partnered with M360ICT to offer the best-in-class booking systems.",
    },
    {
        name: "Skill Planet",
        fullName: "Skill Planet Training Institute",
        industry: "Education & Training",
        logo: "/images/partners/skill-planet.png",
        description: "Upskilling the next generation of travel professionals through collaborative training programs.",
    },
];

const stats = [
    { val: "500+", label: "Active Clients" },
    { val: "15+", label: "Countries Served" },
    { val: "10M+", label: "Transactions Processed" },
    { val: "98%", label: "Client Satisfaction" },
];

export default function OurClientsPage() {
    const pageRef = useScrollReveal("[data-reveal]");

    // Duplicate logos for infinite marquee
    const marqueeLogos = [...clients, ...clients];

    return (
        <div className="OurClients" ref={pageRef}>

            {/* ── Hero ── */}
            <section className="OurClients__hero">
                <div className="container OurClients__hero__inner">
                    <div className="OurClients__hero__label" data-reveal="up">Our Clients</div>
                    <h1 className="OurClients__hero__h1" data-reveal="up" data-delay="100">
                        <AnimatedText text={["Trusted by", "Industry Leaders"]} />
                    </h1>
                    <p className="OurClients__hero__p" data-reveal="up" data-delay="200">
                        From travel associations to global technology companies, M360ICT proudly serves the best in the industry — building long-term partnerships built on trust and innovation.
                    </p>
                    <div className="OurClients__hero__stats" data-reveal="up" data-delay="300">
                        {stats.map((s, i) => (
                            <div key={i}>
                                <div className="OurClients__hero__stat__val">{s.val}</div>
                                <div className="OurClients__hero__stat__label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Marquee Logo Strip ── */}
            <div className="OurClients__marquee-section">
                <div className="OurClients__marquee-track">
                    {marqueeLogos.map((c, i) => (
                        <img
                            key={i}
                            src={c.logo}
                            alt={c.name}
                            className="OurClients__marquee-logo"
                            title={c.fullName}
                        />
                    ))}
                </div>
            </div>


            <section className="OurClients__intro">
                <div className="container">
                    <div className="OurClients__intro__grid">
                        <h2 className="OurClients__intro__h2" data-reveal="up">
                            Building <span>partnerships</span> that last.
                        </h2>
                        <p className="OurClients__intro__p" data-reveal="up" data-delay="200">
                            We work with associations, enterprises, and government bodies across Bangladesh and beyond. Our clients rely on us for reliable software, dedicated support, and continuous innovation — ensuring that their businesses stay ahead.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Client Cards Grid ── */}
            <section className="OurClients__section">
                <div className="container">
                    <div className="OurClients__section__header">
                        <h2 className="OurClients__section__h2">Our Clients</h2>
                    </div>
                    <div className="OurClients__grid">
                        {clients.map((client, idx) => (
                            <div
                                className="ClientCard"
                                key={idx}
                                data-reveal="scale"
                                data-delay={String(Math.min((idx % 4) * 100, 400))}
                            >
                                <div className="ClientCard__logo-box">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="ClientCard__logo"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <div className=" ">
                <div className="OurClients__cta" data-reveal="up">
                    <div className="container OurClients__cta__inner">
                        <h2 className="OurClients__cta__h2">
                            Ready to join our growing family of clients?
                        </h2>
                        <div className="OurClients__cta__right">
                            <Link href="/contact" className="OurClients__cta__btn">
                                Get In Touch
                            </Link>
                            <span className="OurClients__cta__sub">No commitment needed — just a conversation.</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
