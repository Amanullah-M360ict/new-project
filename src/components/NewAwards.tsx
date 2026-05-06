import React from 'react'
import "./newAwards.css"
import Image from 'next/image';
const NewAwards = () => {
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

    return (
        <section className="glorium-block metrics bg-muted">
            <div className="metrics--inner">
                <div className="wrapper">
                    <div className="metrics__top">
                        <h2 className="metrics__heading text-[#000]">
                            Value Delivered
                        </h2>
                        <div className="metrics__marquee">
                            <div className="metrics__track">
                                {clients.map((client, index) => (
                                    <Image className="metrics__logo" src={client.logo} alt={client.name} title={client.fullName} loading="lazy" width={500} height={500} />

                                ))}

                            </div>
                        </div>
                    </div>
                    <div className="metrics__grid">
                        <div className="metrics__card">
                            <strong className="metrics__value">
                                20M+
                            </strong>
                            <p className="metrics__title">
                                end users served through AI-powered products we engineered
                            </p>
                        </div>
                        <div className="metrics__card">
                            <strong className="metrics__value">
                                10x
                            </strong>
                            <p className="metrics__title">
                                faster data analytics and reporting for clients in regulated industries
                            </p>
                        </div>
                        <div className="metrics__card">
                            <strong className="metrics__value">
                                2–3x
                            </strong>
                            <p className="metrics__title">
                                more cost-efficient than maintaining an equivalent in-house dev team
                            </p>
                        </div>
                        <div className="metrics__card">
                            <strong className="metrics__value">
                                15-30%
                            </strong>
                            <p className="metrics__title">
                                reduction in operational costs through ERP and AI automation
                            </p>
                        </div>
                    </div>
                </div>
                <div className="circle-gradient circle-gradient--1" />
                <div className="circle-gradient circle-gradient--2" />
            </div>
        </section>
    )
}

export default NewAwards