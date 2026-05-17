"use client";

import React from 'react';
import './gallery.css';
import AnimatedText from './AnimatedText';
import CountUp from './common/CountUp';

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
                        <span className="stat-number"><CountUp end="15+" /></span>
                    </div>

                    <div className="stat-item stat-2">
                        <span className="stat-title">Tech Members</span>
                        <span className="stat-number"><CountUp end="150+" /></span>
                    </div>

                    <div className="stat-item stat-3">
                        <span className="stat-title">Export Countries</span>
                        <span className="stat-number"><CountUp end="21+" /></span>
                    </div>

                    <div className="stat-item stat-4">
                        <span className="stat-title">Users</span>
                        <span className="stat-number"><CountUp end="2500+" /></span>
                    </div>

                    <div className="stat-item stat-5">
                        <span className="stat-title">Products</span>
                        <span className="stat-number"><CountUp end="350+" /></span>
                    </div>

                    <div className="stat-item stat-6">
                        <span className="stat-title">Sister Concern</span>
                        <span className="stat-number"><CountUp end="9" /></span>
                    </div>


                    <img
                        className="gallery-img-e"
                        src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?q=80&w=800&auto=format&fit=crop"
                        alt="Team creativity"
                    />

                    <img
                        className="gallery-img-b"
                        src="/images/about.jpeg"
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
