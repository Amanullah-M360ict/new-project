import React from 'react';
import Image from 'next/image';
import "./awardShort.css";

const AwardHome = () => {
    const awards = [

        {
            id: 1,
            src: "/images/awards/Asset 19.png",
            alt: "Commonwealth Business Excellence 2025",
            title: "Commonwealth Business Excellence 2025"
        },

        {
            id: 2,
            src: "/images/awards/Asset 25.png",
            alt: "Basis National ICT Awards 2022",
            title: "Basis National ICT Awards 2022"
        },
        {
            id: 3,
            src: "/images/awards/Asset 21.png",
            alt: "Global Changemakers Award 2024",
            title: "Global Changemakers Award 2024"
        },
        {
            id: 17,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/microsoft_partner_logo.svg",
            alt: "Microsoft Partner",
            title: "Microsoft Partner"
        },

        {
            id: 4,
            src: "/images/awards/Asset 18.png",
            alt: "South Asian Business Excellence 2025",
            title: "South Asian Business Excellence 2025"
        },

        {
            id: 5,
            src: "/images/awards/Asset 20.png",
            alt: "ICT Awards 2022",
            title: "ICT Awards 2022"
        },
        {
            id: 10,
            src: "/images/awards/Asset 26.png",
            alt: "South Asian Business Excellence 2023",
            title: "South Asian Business Excellence 2023"
        },

        {
            id: 6,
            src: "/images/awards/Asset 22.png",
            alt: "Honors and Awards",
            title: "Honors and Awards"
        },
        {
            id: 11,
            src: "/images/awards/Asset 27.png",
            alt: "Commonwealth Business Excellence 2023",
            title: "Commonwealth Business Excellence 2023"
        },
        {
            id: 16,
            src: "https://gloriumtech.com/wp-content/uploads/2026/04/Logo.svg",
            alt: "AWS Select Tier Services Partner",
            title: "AWS Select Tier Services Partner"
        },

    ];

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