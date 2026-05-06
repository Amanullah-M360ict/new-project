import React from 'react';
import Image from 'next/image';
import "./awardShort.css";

const AwardHome = () => {
    const awards = [
        {
            id: 1,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/Top-software-companies.svg",
            alt: "Top Software Companies",
            title: "Top Software Companies"
        },
        {
            id: 2,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/Softwere-Developers-2026.svg",
            alt: "Top 100 Software Developers in 2026",
            title: "Top 100 Software Developers in 2026"
        },
        {
            id: 3,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/Global-Top-10-Agency-2026-–-50Pros.svg",
            alt: "Global Top 10 Agency in 2026",
            title: "Global Top 10 Agency in 2026"
        },
        {
            id: 4,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/clients-love-us.svg",
            alt: "Clients Love Us",
            title: "Clients Love Us"
        },
        {
            id: 5,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/TOP-DIGITAL-TRANSFORMATION-COMPANY.svg",
            alt: "Top Digital Transformation Company in Ukraine 2026",
            title: "Top Digital Transformation Company in Ukraine 2026"
        },
        {
            id: 6,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/1000-2025.svg",
            alt: "Top 1000 Global Service Providers in 2025",
            title: "Top 1000 Global Service Providers in 2025"
        },
        {
            id: 7,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/IAOP-Outsourcing100-2025.svg",
            alt: "IAOP® Global Outsourcing 100 in 2025",
            title: "IAOP® Global Outsourcing 100 in 2025"
        },
        {
            id: 8,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/Techbehemoths-CSD-2025.svg",
            alt: "2025 Winner in Custom Software Development",
            title: "2025 Winner in Custom Software Development"
        },
        {
            id: 9,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/G100-Standard.svg",
            alt: "IAOP® Global Outsourcing 100 in 2026",
            title: "IAOP® Global Outsourcing 100 in 2026"
        },
        {
            id: 10,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/Web-Excellence-Awards.svg",
            alt: "Web Excellence Award",
            title: "Web Excellence Award"
        },
        {
            id: 11,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/OA500.svg",
            alt: "OA500 Global Outsourcing Firm Index in 2025",
            title: "OA500 Global Outsourcing Firm Index in 2025"
        },
        {
            id: 12,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/INC_png.png",
            alt: "Inc. Regionals Northeast 2022",
            title: "Inc. Regionals Northeast 2022"
        },
        {
            id: 13,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/ISO-9001.svg",
            alt: "ISO 9001",
            title: "ISO 9001"
        },
        {
            id: 14,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/ISO-13485.svg",
            alt: "ISO 13485",
            title: "ISO 13485"
        },
        {
            id: 15,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/ISO-27001.svg",
            alt: "ISO 27001",
            title: "ISO 27001"
        },
        {
            id: 16,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/Logo.svg",
            alt: "AWS Select Tier Services Partner",
            title: "AWS Select Tier Services Partner"
        },
        {
            id: 17,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/microsoft_partner_logo.svg",
            alt: "Microsoft Partner",
            title: "Microsoft Partner"
        },
        {
            id: 18,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/Stripe.svg",
            alt: "Stripe Partner",
            title: "Stripe Partner"
        },
        {
            id: 19,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/Inc.-5000-in-2021.svg",
            alt: "Inc. 5000 in 2021",
            title: "Inc. 5000 in 2021"
        },
        {
            id: 20,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/Inc.-5000-Regionals-NY-Metro-in-2021.svg",
            alt: "Inc. 5000 Regionals NY Metro in 2021",
            title: "Inc. 5000 Regionals NY Metro in 2021"
        },
        {
            id: 21,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/Inc.-5000-in-2020.svg",
            alt: "Inc. 5000 in 2020",
            title: "Inc. 5000 in 2020"
        }
    ];

    // Double the array for seamless marquee effect
    const duplicatedAwards = [...awards, ...awards];

    const AwardItem = ({ award }: { award: typeof awards[0] }) => (
        <div className="awards__item">
            <Image
                src={award.src}
                alt={award.alt}
                width={60}
                height={60}
                loading="lazy"
                className="award-image"
            />
            <div className="awards__item--inner">
                <Image
                    src={award.src}
                    alt={award.alt}
                    width={40}
                    height={40}
                    loading="lazy"
                    className="award-image"
                />
                <span>{award.title}</span>
            </div>
        </div>
    );

    return (
        <section className="wrapper glorium-block awards container">
            <p className="awards__title">
                Awards & Recognitions
            </p>
            <div className="awards__marquee">
                <div className="awards__track">
                    {duplicatedAwards.map((award, index) => (
                        <AwardItem key={`${award.id}-${index}`} award={award} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AwardHome;