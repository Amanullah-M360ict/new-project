"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import '@/app/products/_style/products.css';


export default function ProductDetails() {
    const { id } = useParams();
    const router = useRouter();
    const product = PRODUCTS.find(p => p.id === id);
    const [activeImage, setActiveImage] = React.useState(product?.image || "");

    React.useEffect(() => {
        if (product) setActiveImage(product.image);
    }, [product]);

    if (!product) {
        return (
            <div className="ProductNotFound">
                <div className="container">
                    <h1>Product Not Found</h1>
                    <Link href="/products">Go back to products</Link>
                </div>
            </div>
        );
    }

    const galleryImages = product.images || [product.image];

    return (
        <div className="ProductDetails">
            <div className="ProductDetails__hero">
                <div className="container">
                    <button className="BackButton" onClick={() => router.push("/products")}>
                        ← Back to Products
                    </button>
                    <div className="ProductDetails__heroContent">
                        <h1 className="ProductDetails__h1">
                            <AnimatedText text={[product.productName]} />
                        </h1>
                        <p className="ProductDetails__tagline">{product.title}</p>
                    </div>
                </div>
            </div>

            <div className="ProductDetails__content">
                <div className="container">
                    {/* Gallery Section */}
                    {galleryImages.length > 0 && (
                        <div className="ProductDetails__gallery">
                            <div className="ProductDetails__mainImage">
                                <img src={activeImage} alt={product.productName} />
                            </div>
                            <div className="ProductDetails__thumbnails">
                                {galleryImages.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={`ProductDetails__thumbnail ${activeImage === img ? 'active' : ''}`}
                                        onClick={() => setActiveImage(img)}
                                    >
                                        <img src={img} alt={`${product.productName} ${idx}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="ProductDetails__grid" style={{ marginTop: '80px' }}>
                        <div className="ProductDetails__left">
                            <div className="ProductDetails__section">
                                <h2 className="ProductDetails__sectionTitle">About {product.productName}</h2>
                                <p className="ProductDetails__longDesc">{product.longDesc}</p>
                            </div>

                            <div className="ProductDetails__section">
                                <h2 className="ProductDetails__sectionTitle">Key Features</h2>
                                <ul className="ProductDetails__features">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="ProductDetails__featureItem">
                                            <span className="check">✔</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>



                            <div className="ProductDetails__actions">
                                <a href={product.href} target="_blank" rel="noopener noreferrer" className="Button PrimaryButton">
                                    Live Preview
                                </a>
                                <Link href="/contact" className="Button SecondaryButton">
                                    Inquiry Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
