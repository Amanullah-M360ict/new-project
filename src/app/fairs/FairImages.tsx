"use client"
import React, { useState, useEffect } from 'react';

export default function FairImages({ images, fairName, introText }: { images: string[], fairName: string, introText: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'Escape') setIsOpen(false);
            if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % images.length);
            if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, images.length]);

    const openModal = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <>
            <div className="Fairs__main__dl__item__box">
                {images[0] && (
                    <div className="Fairs__image_gallery" onClick={() => openModal(0)} style={{ cursor: 'pointer' }}>
                        <img
                            className="Fairs__main__dl__item__box__img"
                            src={images[0]}
                            alt={fairName}
                            loading="lazy"
                        />
                    </div>
                )}
                <div className="Fairs__main__dl__item__box__content">


                    {images.length > 1 && (
                        <div className="Fairs__thumbnail_grid" style={{ marginTop: '20px' }}>
                            {images.slice(1, 4).map((img, imgIdx) => (
                                <img
                                    key={`thumb-${imgIdx}`}
                                    src={img}
                                    alt={`${fairName} Thumbnail ${imgIdx + 1}`}
                                    className="Fairs__thumbnail"
                                    loading="lazy"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => openModal(imgIdx + 1)}
                                />
                            ))}
                            {images.length > 4 && (
                                <div className="Fairs__thumbnail_more" style={{ cursor: 'pointer' }} onClick={() => openModal(4)}>
                                    <span>+{images.length - 4} More</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {isOpen && (
                <div className="Fairs__modal-overlay" onClick={() => setIsOpen(false)}>
                    <div className="Fairs__modal-close" onClick={() => setIsOpen(false)}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <div className="Fairs__modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="Fairs__modal-btn Fairs__modal-prev" onClick={prevImage}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <div className="Fairs__modal-img-container">
                            <img
                                src={images[currentIndex]}
                                alt={`${fairName} Gallery Image ${currentIndex + 1}`}
                                className="Fairs__modal-img"
                            />
                            <div className="Fairs__modal-counter">
                                {currentIndex + 1} / {images.length}
                            </div>
                        </div>

                        <button className="Fairs__modal-btn Fairs__modal-next" onClick={nextImage}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
