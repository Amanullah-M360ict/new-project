"use client";

import React from 'react';
import AnimatedText from "@/components/AnimatedText";
import Marquee from "react-fast-marquee";
import './flags.css';

export default function OperatingCountriesPage() {
    const countries = [
        { name: "Bangladesh", code: "bd" },
        { name: "USA", code: "us" },
        { name: "Canada", code: "ca" },
        { name: "UK", code: "gb" },
        { name: "Saudi Arabia", code: "sa" },
        { name: "UAE", code: "ae" },
        { name: "Kuwait", code: "kw" },
        { name: "Japan", code: "jp" },
        { name: "South Sudan", code: "ss" },
        { name: "Australia", code: "au" },
        { name: "Qatar", code: "qa" },
        { name: "Malaysia", code: "my" },
        { name: "India", code: "in" },
        { name: "Egypt", code: "eg" },
        { name: "Oman", code: "om" },
        { name: "Italy", code: "it" },
        { name: "Vietnam", code: "vn" },
        { name: "Bhutan", code: "bt" },
        { name: "Portugal", code: "pt" },
        { name: "Scotland", code: "gb-sct" },
        { name: "Nepal", code: "np" }
    ];

    const firstRow = countries.slice(0, 11);
    const secondRow = countries.slice(11);

    return (
        <div className="min-h-screen pb-24 bg-white overflow-hidden">
            <header className="pt-3 pb-16 border-b border-gray-50">
                <div className="container mx-auto px-4 ">
                    <h1 className="text-5xl md:text-4xl font-bold text-gray-900 mb-6 font-['Outfit'] tracking-tight">
                        <AnimatedText text={["Global", "Operating Countries"]} />
                    </h1>
                    <div className=''> <p className="text-lg text-gray-500  font-['Inter']">
                        Our software solutions operate globally, with registered <br className='md:block hidden' /> trademarks and legal presence across multiple continents and jurisdictions.
                    </p></div>

                </div>
            </header>

            <main className="py-24 space-y-1 container">
                {/* Right to Left Marquee */}
                <Marquee gradient={true} gradientColor="white" gradientWidth={150} speed={45}>
                    {firstRow.map((country, index) => (
                        <div key={index} className="mx-4 group flex flex-col items-center">
                            <div className="relative w-44 h-28 flag-flying transition-transform duration-500 group-hover:scale-110">
                                <div className="flag-pole"></div>
                                <img
                                    src={`https://flagcdn.com/w320/${country.code}.png`}
                                    alt={`${country.name} Flag`}
                                    className="w-full h-full object-cover rounded-sm shadow-xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <h3 className="mt-6 text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                {country.name}
                            </h3>
                        </div>
                    ))}
                </Marquee>

                {/* Left to Right Marquee */}
                <Marquee gradient={true} gradientColor="white" gradientWidth={150} speed={45} direction="right">
                    {secondRow.map((country, index) => (
                        <div key={index} className="mx-4 group flex flex-col items-center">
                            <div className="relative w-44 h-28 flag-flying transition-transform duration-500 group-hover:scale-110">
                                <div className="flag-pole"></div>
                                <img
                                    src={`https://flagcdn.com/w320/${country.code}.png`}
                                    alt={`${country.name} Flag`}
                                    className="w-full h-full object-cover rounded-sm shadow-xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <h3 className="mt-6 text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                {country.name}
                            </h3>
                        </div>
                    ))}
                </Marquee>
            </main>

            <section className="container mx-auto px-4 mt-32 text-center">
                <div className="max-w-3xl mx-auto p-12 bg-gray-50 rounded-[40px] border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 font-['Outfit'] mt-0">International Compliance</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We strictly adhere to international trade and intellectual property laws across all operating regions, ensuring global brand protection and service excellence.
                    </p>
                </div>
            </section>
        </div>
    );
}
