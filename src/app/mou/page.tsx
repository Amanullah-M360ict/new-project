"use client";

import React from 'react';
import AnimatedText from "@/components/AnimatedText";
import Link from 'next/link';

export default function MOUPage() {
    const mous = [
        {
            id: 1,
            partner: "Global Tech Solutions",
            date: "December 15, 2023",
            description: "Strategic partnership for AI-driven software development and cloud infrastructure optimization.",
            image: "https://placehold.co/600x400?text=MOU",
            category: "Strategic Partnership"
        },
        {
            id: 2,
            partner: "National Education Board",
            date: "October 22, 2023",
            description: "Collaborative framework for the digital transformation of academic management systems nationwide.",
            image: "https://placehold.co/600x400?text=MOU",
            category: "Public Sector"
        },
        {
            id: 3,
            partner: "South Asian Airways",
            date: "August 10, 2023",
            description: "Modernizing flight reservation systems and enhancing customer service portals with AI integration.",
            image: "https://placehold.co/600x400?text=MOU",
            category: "Aviation & Travel"
        },
        {
            id: 4,
            partner: "Emirates Hospitality Group",
            date: "June 05, 2023",
            description: "Implementation of advanced ERP solutions for large-scale hospitality and resource management.",
            image: "https://placehold.co/600x400?text=MOU",
            category: "Enterprise Solutions"
        },
        {
            id: 5,
            partner: "European Logistics Corp",
            date: "April 18, 2023",
            description: "Optimization of supply chain tracking and fleet management through innovative IoT solutions.",
            image: "https://placehold.co/600x400?text=MOU",
            category: "Logistics & Supply Chain"
        },
        {
            id: 6,
            partner: "Innovate Fintech Hub",
            date: "February 28, 2023",
            description: "Development of secure, scalable payment gateways and blockchain-based financial tools.",
            image: "https://placehold.co/600x400?text=MOU",
            category: "Financial Technology"
        }
    ];

    return (
        <div className="min-h-screen pb-24 bg-white">
            <header className="pt-10 pb-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-[12px] font-bold text-[#38B1ED] uppercase tracking-[0.3em] mb-4">Collaborative Milestones</div>
                    <h1 className="text-4xl md:text-6xl m-0 font-bold text-gray-900 leading-[1.1] font-['Outfit'] tracking-tight max-w-4xl">
                        Strategic  Partnerships & <br />
                        Global Alliances
                    </h1>
                </div>
            </header>

            <main className="container mx-auto px-4 pt-10 !mb-[70px] ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mous.map((mou) => (
                        <div
                            key={mou.id}
                            className="group relative bg-white border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col"
                        >
                            <div className="aspect-[16/9] w-full overflow-hidden relative">
                                <img
                                    src={mou.image}
                                    alt={mou.partner}
                                    className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold text-emerald-600 rounded-sm shadow-sm uppercase tracking-widest">
                                        {mou.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <div className="text-[11px] font-mono text-gray-400 mb-3 tracking-tighter uppercase">
                                    Documented on {mou.date}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Outfit'] tracking-tight group-hover:text-emerald-600 transition-colors">
                                    {mou.partner}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-['Inter'] mb-6">
                                    {mou.description}
                                </p>


                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <section className="container mx-auto px-4  ">
                <div className="bg-gray-900 p-12 md:p-20 rounded-[40px] relative overflow-hidden text-center">

                    <div className="relative z-10">
                        <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-[0.4em] mb-6">Partnership Inquiry</div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 m-0 font-['Outfit'] tracking-tight max-w-3xl mx-auto">
                            Join Our Global Ecosystem of Strategic Excellence
                        </h2>
                        <div className='flex items-center justify-center mb-4'>
                            <p className="text-gray-400 text-lg  text-center leading-relaxed mb-12 max-w-2xl mx-auto font-['Inter']">
                                We collaborate with industry leaders and innovators to build impactful solutions through strategic Memorandums of Understanding.
                            </p>
                        </div>
                        <Link href={`/contact`} > <button className="px-12 py-5 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(16,185,129,0.3)]">
                            Inquire for Partnership
                        </button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
