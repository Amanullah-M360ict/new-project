"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { PRODUCTS } from '@/data/products'
import "./newProducts.css"
import { usePathname } from 'next/navigation'

const NewProducts = () => {
    const [isHome, setIsHome] = useState(false)
    const pathname = usePathname()
    useEffect(() => {

        if (pathname === '/') {
            setIsHome(true)
        } else {
            setIsHome(false)
        }
    }, [])
    return (
        <section className="our-solutions-section">


            <div className="container max-w-[1170px]!">
                <div className="section-header text-center">
                    <h2 className="section-title">
                        <span className="highlight-blue">Our</span> Products
                    </h2>
                    <p className="section-subtitle">
                        At M360ict, we develop cutting-edge digital solutions that transform the way businesses operate. Our innovative tools are designed to streamline workflows, boost efficiency, and empower teams to achieve more.
                    </p>
                </div>

                <div className="products-grid-container">
                    {PRODUCTS.map((product) => (
                        <div key={product.id} className="product-card-wrapper">
                            <div className="product-card">
                                <div className="product-logo-box">
                                    <Link href={product.href} target="_blank">
                                        <img
                                            src={product.logo}
                                            alt={product.productName}
                                            className="product-logo-img"
                                        />
                                    </Link>
                                </div>
                                <h3 className="product-name">{product.productName}</h3>
                                <p className="product-desc">
                                    {product.desc}
                                </p>
                                <Link
                                    href={product.href}
                                    target="_blank"
                                    className="learn-more-link"
                                >
                                    Learn more →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                {isHome && (
                    <div className="view-all-container">
                        <Link href="/products" className="btn-view-all">
                            View All Products
                            <span className="arrow-icon">↝</span>
                        </Link>
                    </div>
                )}

            </div>
        </section>
    )
}

export default NewProducts
