"use client";

import React from 'react';
import AnimatedText from "@/components/AnimatedText";

export default function MOUPage() {
    const mous = [
        {
            id: 1,
            partner: "Global Tech Solutions",
            date: "December 15, 2023",
            description: "Strategic partnership for AI-driven software development and cloud infrastructure optimization.",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000",
            category: "Strategic Partnership"
        },
        {
            id: 2,
            partner: "National Education Board",
            date: "October 22, 2023",
            description: "Collaborative framework for the digital transformation of academic management systems nationwide.",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000",
            category: "Public Sector"
        },
        {
            id: 3,
            partner: "South Asian Airways",
            date: "August 10, 2023",
            description: "Modernizing flight reservation systems and enhancing customer service portals with AI integration.",
            image: "https://images.unsplash.com/photo-1540339832862-4745511505d2?auto=format&fit=crop&q=80&w=1000",
            category: "Aviation & Travel"
        },
        {
            id: 4,
            partner: "Emirates Hospitality Group",
            date: "June 05, 2023",
            description: "Implementation of advanced ERP solutions for large-scale hospitality and resource management.",
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000",
            category: "Enterprise Solutions"
        },
        {
            id: 5,
            partner: "European Logistics Corp",
            date: "April 18, 2023",
            description: "Optimization of supply chain tracking and fleet management through innovative IoT solutions.",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000",
            category: "Logistics & Supply Chain"
        },
        {
            id: 6,
            partner: "Innovate Fintech Hub",
            date: "February 28, 2023",
            description: "Development of secure, scalable payment gateways and blockchain-based financial tools.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
            category: "Financial Technology"
        }
    ];

    return (
        <div className="min-h-screen pb-24 bg-white">
            <header className="pt-3 pb-16 border-b border-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-['Outfit'] tracking-tight">
                        <AnimatedText text={["Strategic", "MOU Signing"]} />
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto font-['Inter']">
                        Documenting our milestones in building global partnerships and collaborative success through official Memorandums of Understanding.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-4 pt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {mous.map((mou) => (
                        <div
                            key={mou.id}
                            className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                        >
                            <div className="aspect-[16/10] w-full overflow-hidden relative">
                                <img
                                    src={mou.image}
                                    alt={mou.partner}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <span className="text-blue-400 font-semibold text-sm mb-2">{mou.category}</span>
                                    <h3 className="text-white text-2xl font-bold font-['Outfit']">{mou.partner}</h3>
                                </div>
                            </div>

                            <div className="p-10">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider">
                                        MOU SIGNED
                                    </span>
                                    <span className="text-sm text-gray-400 font-mono">{mou.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Outfit'] group-hover:text-blue-600 transition-colors">
                                    {mou.partner}
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-['Inter'] mb-6 line-clamp-3">
                                    {mou.description}
                                </p>
                                <div className="pt-6 border-t border-gray-50 flex items-center text-blue-600 font-semibold text-sm cursor-pointer group/btn">
                                    View Partnership Details
                                    <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <section className="container mx-auto px-4 mt-32 text-center">
                <div className="max-w-4xl mx-auto p-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-[50px] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
                    
                    <h2 className="text-4xl font-bold text-white mb-6 font-['Outfit'] relative z-10">Join Our Ecosystem</h2>
                    <p className="text-blue-100 text-lg leading-relaxed mb-10 relative z-10 max-w-2xl mx-auto">
                        We are always looking to collaborate with industry leaders and innovators. Let's create impactful solutions together through strategic partnership.
                    </p>
                    <button className="px-10 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors relative z-10 shadow-lg">
                        Inquire for Partnership
                    </button>
                </div>
            </section>
        </div>
    );
}
