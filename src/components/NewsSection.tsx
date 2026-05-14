'use client';

import React from 'react';
import './news-section.css';
import AnimatedText from './AnimatedText';
import Link from 'next/link';

const newsItems = [
    {
        id: 1,
        link: 'https://www.tbsnews.net/economy/corporates/m360-ict-ltd-recognised-commonwealth-award-1227471',
        img: '/images/media1.png',
        text: 'M360 ICT Limited won "Best Use of Technology in Travel and Tourism" at the Commonwealth Business Excellence Awards'
    },
    {
        id: 2,
        link: 'https://bnia.basis.org.bd/win/winner-2022#:~:text=Image%20%20CHAMPION%20Medicart%20,47%20Winner',
        img: '/images/basis.jpg',
        text: 'Recognized as the Winner of BASIS National ICT Award (Tourism & Hospitality)'
    },
    {
        id: 3,
        link: 'https://www.risingbd.com/english/business/news/100684',
        img: '/images/risingbd.webp',
        text: 'M360 ICT Trabill has got ‘The South Asian Business Excellence Award’ for its contribution to travel and tourism'
    },
    {
        id: 4,
        link: 'https://aviation.com.bd/m360-ict-honored-at-sapsa-for-excellence-in-technology-innovation/',
        img: '/images/aviation.webp',
        text: 'Recognized at the South Asia Pacific Summit & Awards (SAPSA) for excellence in technology innovation'
    },
    {
        id: 5,
        link: 'https://www.observerbd.com/news/456863',
        img: '/images/observer.png',
        text: '"M360 ICT" received the award at the Global Change Maker Awards held in Bangkok, Thailand'
    }
];

const NewsSection = () => {
    return (
        <section className="NewsSection">
            <div className="container mx-auto px-4">
                <div className="NewsSection__header">
                    <h2 className="NewsSection__title">
                        <AnimatedText text="In the Press Latest News" />
                    </h2>
                </div>

                <div className="NewsSection__list">
                    {newsItems.map((news) => (
                        <a key={news.id} href={news.link} target="_blank" rel="noopener noreferrer" className="NewsListRow">
                            <div className="NewsListRow__left">
                                <img src={news.img} alt="News Source" className="NewsListRow__logo" />
                            </div>
                            <div className="NewsListRow__center">
                                <p className="NewsListRow__text">{news.text}</p>
                            </div>
                            <div className="NewsListRow__right">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="NewsListRow__arrow">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="NewsSection__action">
                    <Link href="/news" className="NewsSection__link">
                        See More News
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
