"use client";

import React, { useState, useEffect } from 'react';

export default function FairModalGallery({
    images,
    remainingCount,
    fairName
}: {
    images: string[];
    remainingCount: number;
    fairName: string;
}) {
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

    const openModal = () => {
        setCurrentIndex(0);
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
            <div className="Fairs__thumbnail_more" style={{ cursor: 'pointer' }} onClick={openModal}>
                <span>+{remainingCount} More</span>
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
