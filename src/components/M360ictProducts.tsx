"use client"
import React from 'react';
import Link from 'next/link';
import AnimatedText from './AnimatedText';
import "../app/products/_style/products.css"
import { PRODUCTS } from '@/data/products';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from '@/lib/hooks/use-media-query';
interface M360ictProductsProps {
    limit?: number;
    showExploreButton?: boolean;
}

export default function M360ictProducts({ limit, showExploreButton = false }: M360ictProductsProps) {
    const router = useRouter();
    const data = PRODUCTS;
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const handleProductClick = (id: string) => {
        router.push(`/products/${id}`);
    };

    const displayData = limit ? data.slice(0, limit) : data;

    return (
        <div className="m360ict-products" style={{ marginTop: showExploreButton ? "120px" : "0px", background: showExploreButton ? "#E7E7E7" : "#fff", padding: showExploreButton ? isDesktop ? "150px 0 130px" : "30px 0 30px" : "0" }}>

            <div className="container">
                {showExploreButton && (
                    <div className="Index__products__header">
                        <h2 className="Index__products__header__h2">
                            <AnimatedText text="Products" />
                        </h2>
                        <div className="Index__products__header__link">
                            <Link className="Index__products__header__link__a" href="/products">
                                See all products
                            </Link>
                        </div>
                    </div>

                )}
                <div
                    className="ProductsHeroAdvanced"
                    onClick={() => handleProductClick('trabill')}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="container" style={{ padding: 0 }}>
                        <div className="ProductsHeroAdvanced__inner">
                            <div className="ProductsHeroAdvanced__left">
                                <div className="ProductsHeroAdvanced__number">01</div>

                                <div className="ProductsHeroAdvanced__logo">
                                    <img src="/images/products/trabill.png" alt="Trabill" />
                                </div>

                                <div className="ProductsHeroAdvanced__since">
                                    #1 Travel Management Software
                                </div>

                                <p className="ProductsHeroAdvanced__desc">
                                    IATA, NON-IATA, Single entry, double entry accounting management software
                                </p>
                            </div>
                            <div className="ProductsHeroAdvanced__right">
                                <img src="/images/products/trabill-design-for-mobile.png" className="collage-top-cutoff" alt="Header top cutoff" />

                                <div className="collage-creators">
                                    <img src="/images/products/non-iata.png" alt="Creators collage" />
                                </div>

                                <div className="collage-badges">
                                    <div className="c-badge badge-green">44+ Modules</div>
                                    <div className="c-badge badge-white ">100+ Sub-Modules</div>
                                    <div className="c-badge badge-white badge-pill">74+ Report Generated</div>
                                    <div className="c-badge badge-gray">Easy Accounting</div>
                                </div>

                                <div className="collage-unfold">
                                    <img src="/images/products/trabill-design-for-mobile.png" alt="unfold project" />
                                </div>

                                <div className="collage-ai">
                                    <img src="/images/products/double-entry-version.png" alt="AI Agents" />
                                </div>

                                <div className="collage-burger">
                                    <img src="/images/products/trabill-trail.png" alt="Spicy Burger" />
                                </div>

                                <div className="collage-medical">
                                    <img src="/images/products/trabil-large.png" alt="Medical path" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Products__main">
                <div className="container">
                    <div className="Products__main__dl">
                        {displayData.map((item, index) => {
                            const isFullWidth = index < 1;
                            return (
                                <div
                                    className={`product-card ${isFullWidth ? 'product-card-tutor-layout' : ''}`}
                                    data-layout={isFullWidth ? "full" : "half"}
                                    key={`product-${index}`}
                                    onClick={() => handleProductClick(item.id)}
                                    style={{
                                        cursor: 'pointer',
                                        ['--card-index' as string]: `"${index < 8 ? `0${index + 2}` : index + 2}"`
                                    }}
                                >
                                    <div className="product-index">
                                        {index < 9 ? `0${index + 2}` : index + 2}
                                    </div>

                                    {isFullWidth ? (
                                        <>
                                            <div className="product-info-left" style={{ zIndex: 10 }}>
                                                <div className="tutor-logo">
                                                    {/* t360 logo */}
                                                    <img src="/images/products/t360.svg" alt="T360 Logo" />
                                                </div>

                                                <h3 className="tutor-tagline">
                                                    Leading WordPress LMS trusted by educators worldwide.
                                                </h3>
                                            </div>

                                            <div className="tutor-right-bg">
                                                <div className="tutor-shape-blue"></div>
                                                <div className="tutor-shape-green"></div>
                                                <div className="tutor-shape-yellow"></div>

                                                <img
                                                    className="tutor-main-img"
                                                    src="/images/products/t360-sub.png"
                                                    alt="Main App Interface"
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="product-info-left">
                                                <div className="product-logo-wrapper">
                                                    {item.logo ? (
                                                        <img src={item.logo} alt={item.title} className="product-logo" />
                                                    ) : (
                                                        <h3 className="product-card-title">{item.title}</h3>
                                                    )}
                                                </div>
                                                <div className="product-meta">
                                                    <div className="product-view-hint">
                                                        <span>  Details</span>
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {showExploreButton && (
                        <div style={{ textAlign: "center", marginTop: "10px" }}>
                            {/* button with right arrow icon */}
                            <Link href="/products" style={{ display: "inline-block", fontWeight: "bold", fontSize: "15px" }}>
                                Explore More Products <span className="arrow-right">→</span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
