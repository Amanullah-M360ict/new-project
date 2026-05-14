"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "../app/products/_style/products.css"
import AnimatedText from './AnimatedText'
import { useMediaQuery } from '@/lib/hooks/use-media-query'
interface Product {
    id: string
    name: string
    category: string
    badge?: string
    href: string
    previewImage: string
    previewVideo?: string
    logoImage: string
    logoAlt: string
}


interface M360ictProductsProps {
    limit?: number;
    showExploreButton?: boolean;
}
const products: Product[] = [
    {
        id: 'trabill',
        name: 'TRABILL',
        category: 'Travel Management Software',
        href: 'https://travell-flow-engine.lovable.app/',
        previewImage: '/images/products/ai-based-tour--travel-portal-development-company-in-delhi-ncr--oprezo-india.png',
        previewVideo: '/images/products/trabill.mp4',
        logoImage: '/images/products/trabill.png',
        logoAlt: 'TRABILL logo',
    },
    {
        id: "OTA",
        name: "Online Travel Agency",
        logoImage: "/images/products/ota.png",
        href: "https://ota-promotion-web.vercel.app/",
        previewImage: "/images/hot2.jpg",
        previewVideo: '/images/products/ota.mp4',
        category: "Travel OTA",
        logoAlt: "OTA logo",
    },
    {
        id: 'thehotel360',
        name: 'The Hotel 360',
        category: 'Hotel Management',
        href: 'https://thehotel360.com/',
        previewImage: '/images/products/hotel.jpg',
        previewVideo: '',
        logoImage: '/images/products/hotel.png',
        logoAlt: 'The Hotel 360 logo',
    },
    {
        id: 'crm360',
        name: 'CRM360',
        category: 'Customer Relationship Management',
        href: 'https://employee.crm360world.com/',
        previewImage: '/images/products/srm-.jpg',
        previewVideo: '/images/products/crm.mp4',
        logoImage: '/images/products/CRM.png',
        logoAlt: 'CRM360 logo',
    },
    {
        id: 'dokani',
        name: 'Dokani',
        category: 'Retail POS Software',
        href: 'https://dokani-website.vercel.app/',
        previewImage: '/images/products/oip.jpg',
        previewVideo: '/images/products/dokani.mp4',
        logoImage: '/images/products/dokani.png',
        logoAlt: 'Dokani logo',
    },
    {
        id: 'erpbd',
        name: 'ERP BD',
        category: 'Enterprise Resource Planning',
        href: 'https://erp-informative-website.vercel.app/',
        previewImage: '/images/products/erp.jpg',
        previewVideo: '',
        logoImage: '/images/products/erp.png',
        logoAlt: 'ERP BD logo',
    },
    {
        id: 'recruit360',
        name: 'Recruit360',
        category: 'Recruitment & HR Software',
        href: 'https://account.recruit360.biz',
        previewImage: '',
        previewVideo: '/images/products/rec.mp4',
        logoImage: '/images/products/recruitment.png',
        logoAlt: 'Recruit360 logo',
    },
    {
        id: "sohi",
        name: "Sohi",
        logoImage: "/images/products/sohi.webp",
        href: "https://sohi.com.bd/",
        category: "Airport Services",
        previewImage: "/images/products/sohi.webp",
        previewVideo: "/images/products/sohi-video.mp4",
        logoAlt: "Sohi logo",
    },
    {
        id: "hajj",
        name: "Hajj Management Software",
        logoImage: "/images/products/hajj.webp",
        href: "https://hajj-management-plum.vercel.app/",
        category: "Hajj Management ",
        previewImage: "/images/hajj.jpg",
        previewVideo: "",
        logoAlt: "Hajj Management Software logo",
    }
]



const M360ictProductsNew = ({ limit, showExploreButton = false }: M360ictProductsProps) => {
    const displayData = limit ? products.slice(0, limit) : products;
    const isDesktop = useMediaQuery('(min-width: 768px)');
    return (
        <section className="brand__area line">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="sec-title-wrapper">
                            <div className='flex items-center justify-between'>
                                <h2 className="sec-sub-title title-anim"  >
                                    <div >
                                        Our Products
                                    </div>
                                </h2>
                                <div className="flex gap-1" aria-hidden="true">
                                    <span className="h-2 w-2 rounded-full   transition-colors duration-300 bg-[#ff5f57]" />
                                    <span className="h-2 w-2 rounded-full  transition-colors duration-300 bg-[#febc2e]" />
                                    <span className="h-2 w-2 rounded-full  transition-colors duration-300 bg-[#28c840]" />
                                </div>
                            </div>
                            <h3 className="sec-title title-anim p-0 m-0 pb-10 text-[#272727]"  >
                                <div style={{ 'display': 'block', 'position': 'relative', 'translate': 'none', 'rotate': 'none', 'scale': 'none', 'transformOrigin': '660px 30px', 'transform': 'translate3d(0px, 0px, 0px)', 'opacity': '1', }} className='md:text-[44px] text-[18px]'>
                                    <AnimatedText text={isDesktop ? ["Innovate & Transform your business with", "M360 ICT Limited"] : "Innovate & Transform your business with M360 ICT Limited"} />
                                </div>

                            </h3>
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <div className="brand__list software-section">
                            {displayData.map((product, index) => {
                                const youtubeId = product.previewVideo?.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)?.[2];
                                const isYouTube = youtubeId && youtubeId.length === 11;
                                const embedUrl = isYouTube ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&enablejsapi=1` : null;

                                return (
                                    <Link target="_blank" href={product.href} key={index} className="product-card__wrapper">
                                        <div className="product-card fade_bottom">
                                            <div className="product-card__video">
                                                {isYouTube ? (
                                                    <iframe
                                                        src={embedUrl!}
                                                        className="product-card__iframe"
                                                        allow="autoplay; encrypted-media"
                                                        loading="lazy"

                                                    />
                                                ) : product.previewVideo ? (
                                                    <video
                                                        src={product.previewVideo}
                                                        autoPlay
                                                        loop
                                                        muted
                                                        playsInline
                                                        className="product-card__video-tag"
                                                    />
                                                ) : (
                                                    <Image
                                                        src={product.previewImage}
                                                        alt={`${product.name} preview`}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                )}
                                                <div className="product-card__badge">{product.category}</div>
                                            </div>

                                            <div className="product-card__content">
                                                <div className="product-card__header">
                                                    <div className="product-card__logo-box">
                                                        <Image
                                                            src={product.logoImage}
                                                            alt={product.logoAlt}
                                                            width={60}
                                                            height={60}
                                                            className="product-card__logo-img"
                                                        />
                                                    </div>
                                                    <div className="product-card__titles">
                                                        <h4 className="product-card__name">{product.name}</h4>
                                                    </div>
                                                </div>




                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}





                        </div>
                    </div>
                    {showExploreButton &&
                        <div className="NewsSection__action">
                            <Link href="/products" className="NewsSection__link">
                                See More Products
                            </Link>
                        </div>
                    }

                </div>
            </div>
        </section>
    )
}

export default M360ictProductsNew