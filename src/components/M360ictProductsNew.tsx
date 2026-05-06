import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "../app/products/_style/products.css"
interface Product {
    id: string
    name: string

    category: string
    badge?: string
    href: string
    previewImage: string
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
        href: 'https://www.iata.trabill.biz/',
        previewImage: '/images/products/trabil-large.png',
        logoImage: '/images/products/trabill.png',
        logoAlt: 'TRABILL logo',
    },
    {
        id: 't360',
        name: 'T360',
        category: 'Tours & Travels LMS',
        href: 'https://t360.biz',
        previewImage: '/images/products/t360-sub.png',
        logoImage: '/images/products/t360.svg',
        logoAlt: 'T360 logo',
    },
    {
        id: 'crm360',
        name: 'CRM360',

        category: 'Customer Relationship Management',
        href: 'https://employee.crm360world.com',
        previewImage: '/images/products/crm-large.png',
        logoImage: '/images/products/CRM.png',
        logoAlt: 'CRM360 logo',
    },
    {
        id: 'thehotel360',
        name: 'The Hotel 360',
        category: 'Hotel Management',
        href: 'https://app.thehotel360.com',
        previewImage: '/images/products/hotel-large.png',
        logoImage: '/images/products/hotel.png',
        logoAlt: 'The Hotel 360 logo',
    },
    {
        id: 'dokani',
        name: 'Dokani',
        category: 'Retail POS Software',
        href: 'https://v2.dokani.live/login/',
        previewImage: '/images/products/dokani-large.png',
        logoImage: '/images/products/dokani.png',
        logoAlt: 'Dokani logo',
    },
    {
        id: 'erpbd',
        name: 'ERP BD',
        category: 'Enterprise Resource Planning',
        href: 'https://erpbd.ontheway.com.bd',
        previewImage: '/images/products/erp.jpg',
        logoImage: '/images/products/erp.png',
        logoAlt: 'ERP BD logo',
    },
    {
        id: 'recruit360',
        name: 'Recruit360',
        category: 'Recruitment & HR Software',
        href: 'https://account.recruit360.biz',
        previewImage: '/images/products/recruitment-large.png',
        logoImage: '/images/products/recruitment.png',
        logoAlt: 'Recruit360 logo',
    },
]

function ProductCard({ product }: { product: Product }) {
    return (
        <li>
            <article className="group flex flex-col gap-1">
                <div className="rounded-xl bg-white p-4">
                    <div className="flex items-center justify-between text-xs md:text-sm">
                        <div className="flex items-center gap-2 md:gap-4">
                            <span className="font-semibold text-black">
                                {product.name}.
                            </span>

                        </div>
                        <div className="flex gap-1" aria-hidden="true">
                            <span className="h-2 w-2 rounded-full bg-[#E7E7E7] transition-colors duration-300 group-hover:bg-[#ff5f57]" />
                            <span className="h-2 w-2 rounded-full bg-[#E7E7E7] transition-colors duration-300 group-hover:bg-[#febc2e]" />
                            <span className="h-2 w-2 rounded-full bg-[#E7E7E7] transition-colors duration-300 group-hover:bg-[#28c840]" />
                        </div>
                    </div>
                </div>

                <div className="relative rounded-xl bg-white p-2 backdrop-blur-sm">
                    <a
                        href={product.href}
                        target="_blank"
                        rel="noopener external"
                        className="block rounded-xl focus:outline-none"
                        aria-label={`Open ${product.name}`}
                    >
                        <div aria-hidden="true" className="aspect-[4/3] w-full" />

                        <div className="absolute inset-2 overflow-hidden rounded-xl transition-[inset] duration-300 ease-out group-hover:inset-0">
                            <img
                                src={product.previewImage}
                                alt={`${product.name} preview`}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full rounded-xl  blur-[3px] object-cover object-center transition-all duration-500 ease-out motion-safe:group-hover:scale-[1.06] motion-safe:group-hover:blur-[5px]"
                            />

                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 rounded-xl bg-black/35 transition-colors duration-300 ease-out"
                            />

                            <div className="pointer-events-none absolute inset-0 grid place-items-center">
                                <div className="flex flex-col items-center gap-2">
                                    <img
                                        src={product.logoImage}
                                        alt={product.logoAlt}
                                        loading="lazy"
                                        aria-hidden="true"
                                        decoding="async"
                                        className="h-10 w-auto object-contain transition-transform duration-300 ease-out motion-safe:group-hover:scale-[0.85] md:h-12 drop-shadow-lg"
                                    />
                                    <span className="text-white/80 text-xs font-medium tracking-widest uppercase drop-shadow">
                                        {product.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </article>
        </li>
    )
}

const M360ictProductsNew = ({ limit, showExploreButton = false }: M360ictProductsProps) => {
    const displayData = limit ? products.slice(0, limit) : products;
    return (
        <section className="brand__area line py-20">
            <div className="container g-0 line pt-140 pb-130 relative p-0!">

                <div className="Main-product-home">
                    {/* <div className="services-tabs__glass-effect" aria-hidden="true"></div>
                    <div className="services-tabs__glass-tint" aria-hidden="true"></div> */}
                    <div className="services-tabs__bg" aria-hidden="true">
                        <video className="services-tabs__bg-video" autoPlay={true} muted={true} loop={true} preload="auto">
                            <source src="https://gloriumtech.com/wp-content/themes/integrio/img/glorium/neon-glow.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div className="col-xxl-12">
                        <div className="sec-title-wrapper ">
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
                            <h3 className="sec-title title-anim p-0 m-0 pb-10 text-[#000]"  >
                                <div style={{ 'display': 'block', 'textAlign': 'center', 'position': 'relative', 'translate': 'none', 'rotate': 'none', 'scale': 'none', 'transformOrigin': '660px 30px', 'transform': 'translate3d(0px, 0px, 0px)', 'opacity': '1', }} className='md:text-[44px] text-[25px]'>
                                    Innovate & Transform your business with
                                </div>
                                <div style={{ 'display': 'block', 'textAlign': 'center', 'position': 'relative', 'translate': 'none', 'rotate': 'none', 'scale': 'none', 'transformOrigin': '660px 30px', 'transform': 'translate3d(0px, 0px, 0px)', 'opacity': '1' }}>
                                    M360 ICT Limited
                                </div>
                            </h3>
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <div className="brand__list software-section">
                            {products.map((product, index) => (
                                <Link target="_blank" href={product.href} key={index}>
                                    <div className="brand__item fade_bottom" >
                                        <Image className="img-fluid" src={product.logoImage} alt="Trabill" width={500} height={80} />
                                    </div>
                                </Link>
                            ))}


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default M360ictProductsNew