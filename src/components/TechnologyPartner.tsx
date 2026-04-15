'use client';

import React from 'react';
import './technology-partner.css';
import AnimatedText from './AnimatedText';

const TechnologyPartner = () => {
    const associations = [
        { name: "Association of Travel Agents of Bangladesh", logo: "/images/partners/atab.png", label: "Association of Travel Agents of Bangladesh" },
        { name: "Tour Operators Association of Bangladesh", logo: "/images/partners/toab.jpg", label: "Tour Operators Association of Bangladesh" },
        { name: "Hajj Agencies Association of Bangladesh", logo: "/images/partners/haab.png", label: "Hajj Agencies Association of Bangladesh" },
        { name: "American Chamber of Commerce in Bangladesh", logo: "/images/partners/amcham.png", label: "American Chamber of Commerce in Bangladesh" },
    ];

    const exhibitions = [
        { name: "The Bangladesh Monitor", logo: "/images/partners/monitor.png", label: "The Bangladesh Monitor" },
        { name: "Bangladesh Travel and Tourism Fair", logo: "/images/partners/bttf.jpg", label: "Bangladesh Travel and Tourism Fair" },
        { name: "Asian Tourism Fair", logo: "/images/partners/asian-tourism.png", label: "Asian Tourism Fair" },
        { name: "Bangladesh International Travel and Tourism Expo", logo: "/images/partners/bitte.jpg", label: "Bangladesh International Travel and Tourism Expo" },
    ];

    const trainingInstitutions = [
        { name: "Bangladesh Institute of Tourism & Hospitality", logo: "/images/partners/bith.png", label: "Bangladesh Institute of Tourism & Hospitality" },
        { name: "HB Aviation & Tourism Institute", logo: "/images/partners/hb.jpg", label: "HB Aviation & Tourism Institute" },
        { name: "ATAB Training Institute", logo: "/images/partners/atab-training.png", label: "ATAB Training Institute" },
        { name: "Aviation.com.bd", logo: "/images/aviation.webp", label: "Aviation.com.bd" },
        { name: "Sammoni Aviation & Tourism Training Institute", logo: "/images/partners/sammoni.jpg", label: "Sammoni Aviation & Tourism Training Institute" },
        { name: "Skill Planet", logo: "/images/partners/skill-planet.jpg", label: "Skill Planet" },
    ];

    return (
        <section className="TechPartner">
            <div className="container">
                <div className="TechPartner__header">
                    <h2 className="TechPartner__title">
                        <AnimatedText text="Technology Partner" />
                    </h2>
                </div>

                <div className="TechPartner__section">
                    <div className="TechPartner__sectionHeader">
                        <h3 className="TechPartner__sectionTitle">Association</h3>
                    </div>
                    <div className="TechPartner__grid grid-4">
                        {associations.map((item, idx) => (
                            <div key={idx} className="TechPartner__item">
                                <div className="TechPartner__logoWrapper">
                                    <img
                                        src={item.logo}
                                        alt={item.name}
                                        className="TechPartner__logo"
                                        onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/150?text=' + item.name.split(' ')[0] }}
                                    />
                                </div>
                                <p className="TechPartner__label">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="TechPartner__section">
                    <div className="TechPartner__sectionHeader">
                        <h3 className="TechPartner__sectionTitle">Exhibition</h3>
                    </div>
                    <div className="TechPartner__grid grid-4">
                        {exhibitions.map((item, idx) => (
                            <div key={idx} className="TechPartner__item">
                                <div className="TechPartner__logoWrapper">
                                    <img
                                        src={item.logo}
                                        alt={item.name}
                                        className="TechPartner__logo"
                                        onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/150?text=' + item.name.split(' ')[0] }}
                                    />
                                </div>
                                <p className="TechPartner__label">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="TechPartner__section">
                    <div className="TechPartner__sectionHeader">
                        <h3 className="TechPartner__sectionTitle">Training Institution</h3>
                    </div>

                    <div className="TechPartner__trainingGrid">
                        <div className="TechPartner__grid grid-4">
                            {trainingInstitutions.slice(0, 4).map((item, idx) => (
                                <div key={idx} className="TechPartner__item">
                                    <div className="TechPartner__logoWrapper">
                                        <img
                                            src={item.logo}
                                            alt={item.name}
                                            className="TechPartner__logo"
                                            onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/150?text=' + item.name.split(' ')[0] }}
                                        />
                                    </div>
                                    <p className="TechPartner__label">{item.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="TechPartner__trainingBottom">
                            <div className="TechPartner__item TechPartner__sabreBox">
                                <div className="TechPartner__sabreContent">
                                    <p className="TechPartner__sabreTitle">Training partner</p>
                                    <img
                                        src="/images/partners/sabre.png"
                                        alt="Sabre"
                                        className="TechPartner__sabreLogo"
                                        onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/100x40?text=Sabre' }}
                                    />
                                </div>
                            </div>

                            {trainingInstitutions.slice(4).map((item, idx) => (
                                <div key={idx} className="TechPartner__item">
                                    <div className="TechPartner__logoWrapper">
                                        <img
                                            src={item.logo}
                                            alt={item.name}
                                            className="TechPartner__logo"
                                            onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/150?text=' + item.name.split(' ')[0] }}
                                        />
                                    </div>
                                    <p className="TechPartner__label">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologyPartner;
