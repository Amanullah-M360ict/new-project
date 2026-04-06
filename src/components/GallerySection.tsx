"use client";

import React from 'react';
import './gallery.css';

const GallerySection = () => {
    return (
        <section className="gallery-section">
            <div className="gallery-container">
                <div className="gallery-left">
                    <img
                        src="https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Auditorium"
                        className="gallery-img-a"
                    />
                </div>
                <div className="gallery-right">

                    <div className="stat-item stat-1">
                        <span className="stat-title">Years of Excellence</span>
                        <span className="stat-number">15+</span>
                    </div>

                    <div className="stat-item stat-2">
                        <span className="stat-title">Team Members</span>
                        <span className="stat-number">100+</span>
                    </div>

                    <div className="stat-item stat-3">
                        <span className="stat-title">Brands & Products</span>
                        <span className="stat-number">300+</span>
                    </div>

                    <img
                        className="gallery-img-e"
                        src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?q=80&w=800&auto=format&fit=crop"
                        alt="Team creativity"
                    />

                    <img
                        className="gallery-img-b"
                        src="https://ollyo.com/wp-content/uploads/2026/02/about-img-2-1.webp"
                        alt="Discussion"
                    />

                    <img
                        className="gallery-img-c"
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop"
                        alt="Office Hallway"
                    />

                    <img
                        className="gallery-img-d"
                        src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=400&auto=format&fit=crop"
                        alt="Focus work"
                    />

                </div>
            </div>
        </section>
    );
};

export default GallerySection;
