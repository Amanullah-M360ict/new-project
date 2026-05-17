'use client';

import React, { useState, useMemo } from "react";
import AnimatedText from "@/components/AnimatedText";
import "./_style/news.css";

interface NewsItem {
    id: number;
    title: string;
    source: string;
    link: string;
    image: string;
    description: string;
    category: string;
    date: string;
    readTime: string;
    featured?: boolean;
}

const newsItems: NewsItem[] = [
    {
        id: 1,
        title: "M360 ICT Limited recognized at Commonwealth Award 2025",
        source: "TBS News",
        link: "https://www.tbsnews.net/economy/corporates/m360-ict-ltd-recognised-commonwealth-award-1227471",
        image: "/images/media1.png",
        description: "M360 ICT Limited won 'Best Use of Technology in Travel and Tourism' at the Commonwealth Business Excellence Awards 2025, held at the Concorde Hotel in Kuala Lumpur.",
        category: "Awards & Recognition",
        date: "December 15, 2025",
        readTime: "4 min read",
        featured: true
    },
    {
        id: 2,
        title: "Winner of BASIS National ICT Award 2022",
        source: "BASIS",
        link: "https://bnia.basis.org.bd/win/winner-2022#:~:text=Image%20%20CHAMPION%20Medicart%20,47%20Winner",
        image: "/images/basis.jpg",
        description: "Recognized as the Winner of BASIS National ICT Award 2022 (Tourism & Hospitality) for extraordinary contributions to the domestic TravelTech ecosystem.",
        category: "Awards & Recognition",
        date: "October 24, 2022",
        readTime: "3 min read",
        featured: false
    },
    {
        id: 3,
        title: "The South Asian Business Excellence Award-2023",
        source: "RisingBD",
        link: "https://www.risingbd.com/english/business/news/100684",
        image: "/images/risingbd.webp",
        description: "M360 ICT Trabill has got ‘The South Asian Business Excellence Award-2023’ for its extraordinary contribution to the travel and tourism sector.",
        category: "Press Releases",
        date: "November 10, 2023",
        readTime: "3 min read",
        featured: false
    },
    {
        id: 4,
        title: "Excellence in Technology Innovation - SAPSA",
        source: "Aviation.com.bd",
        link: "https://aviation.com.bd/m360-ict-honored-at-sapsa-for-excellence-in-technology-innovation/",
        image: "/images/aviation.webp",
        description: "M360 ICT has achieved a new milestone by being recognized at the South Asia Pacific Summit & Awards (SAPSA)—one of the region’s most respected platforms.",
        category: "Corporate News",
        date: "June 05, 2024",
        readTime: "5 min read",
        featured: false
    },
    {
        id: 5,
        title: "Global Change Maker Awards 2024",
        source: "Observer",
        link: "https://www.observerbd.com/news/456863",
        image: "/images/observer.png",
        description: "'M360 ICT' received the award at the Global Change Maker Awards 2024 held in Bangkok, Thailand on Wednesday.",
        category: "Awards & Recognition",
        date: "August 28, 2024",
        readTime: "3 min read",
        featured: false
    }
];

export default function NewsPage() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    // Split the spotlight story (id: 1) and the regular stories
    const { featuredItem, regularItems } = useMemo(() => {
        const featured = newsItems.find((item) => item.featured);
        const regular = newsItems.filter((item) => !item.featured);
        return { featuredItem: featured, regularItems: regular };
    }, []);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setEmail("");
            setTimeout(() => setSubscribed(false), 5000);
        }
    };

    return (
        <div className="NewsPage">
            {/* Header Hero Section */}
            <div className="Hero">
                <div className="container">
                    <div className="Hero__wrapper">
                        <div className="Hero__wrapper-inner">
                            <span className="NewsPage__subheading">Company Updates</span>
                            <h1 className="Hero__h1 Hero__h1--news">
                                <AnimatedText text="News & Awards" />
                            </h1>
                            <p className="Hero__p Hero__p--news">
                                Celebrating our achievements & global footprints
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="NewsPage__main">
                <div className="container">
                    {/* Spotlight Featured Article */}
                    {featuredItem && (
                        <div className="NewsPage__featured">
                            <a href={featuredItem.link} target="_blank" rel="noopener noreferrer" className="NewsPage__featured-link">
                                <div className="NewsPage__featured-image-container">
                                    <div className="NewsPage__featured-img-wrapper">
                                        <img src={featuredItem.image} alt={featuredItem.title} className="NewsPage__featured-img" />
                                    </div>
                                    <div className="NewsPage__featured-badge">Spotlight Story</div>
                                </div>
                                <div className="NewsPage__featured-content">
                                    <div className="NewsPage__card-meta">
                                        <span className="NewsPage__card-category">{featuredItem.category}</span>
                                        <span className="NewsPage__card-dot"></span>
                                        <span className="NewsPage__card-date">{featuredItem.date}</span>
                                    </div>
                                    <h2 className="NewsPage__featured-title">{featuredItem.title}</h2>
                                    <p className="NewsPage__featured-desc">{featuredItem.description}</p>
                                    <div className="NewsPage__featured-footer">
                                        <span className="NewsPage__read-more">Read Full Story <span className="NewsPage__source-label">on {featuredItem.source}</span></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )}

                    {/* Regular News Cards Grid */}
                    {regularItems.length > 0 && (
                        <div className="NewsPage__grid">
                            {regularItems.map((item) => (
                                <div key={item.id} className="NewsPage__card">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="NewsPage__card-link">
                                        <div className="NewsPage__card-header">
                                            <div className="NewsPage__card-img-wrapper">
                                                <img src={item.image} alt={item.source} className="NewsPage__card-img" />
                                            </div>
                                            <span className="NewsPage__card-badge">{item.source}</span>
                                        </div>
                                        <div className="NewsPage__card-body">
                                            <div className="NewsPage__card-meta">
                                                <span className="NewsPage__card-category">{item.category}</span>
                                                <span className="NewsPage__card-dot"></span>
                                                <span className="NewsPage__card-date">{item.date}</span>
                                            </div>
                                            <h3 className="NewsPage__card-title">{item.title}</h3>
                                            <p className="NewsPage__card-desc">{item.description}</p>
                                            <div className="NewsPage__card-footer">
                                                <span className="NewsPage__read-more">Read Article</span>
                                                <span className="NewsPage__card-time">{item.readTime}</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Newsletter & Contact Footer CTA */}
            <div className="NewsPage__footer-cta">
                <div className="container">
                    <div className="NewsPage__footer-grid">
                        <div className="NewsPage__footer-info">
                            <h2 className="NewsPage__footer-h2">
                                <AnimatedText text="Stay updated with our journey" />
                            </h2>
                            <p className="NewsPage__footer-p">
                                Discover more about how we are transforming the tech landscape and building travel technologies for tomorrow.
                            </p>
                        </div>
                        <div className="NewsPage__footer-subscribe">
                            <div className="NewsPage__subscribe-card">
                                <h3>Subscribe to Press Updates</h3>
                                <p>Get instant notifications on our latest awards, announcements, and product releases.</p>
                                {subscribed ? (
                                    <div className="NewsPage__subscribe-success">
                                        <svg className="NewsPage__success-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                        <span>Awesome! You've been subscribed.</span>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubscribe} className="NewsPage__subscribe-form">
                                        <input
                                            type="email"
                                            className="NewsPage__subscribe-input"
                                            placeholder="Enter your corporate email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <button type="submit" className="NewsPage__subscribe-btn">
                                            Subscribe
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
