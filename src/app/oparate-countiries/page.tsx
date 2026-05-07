"use client";

import React from 'react';
import AnimatedText from "@/components/AnimatedText";

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

    return (
        <div className="min-h-screen pb-24 bg-white">
            <header className="pt-3 pb-16 border-b border-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-['Outfit'] tracking-tight">
                        <AnimatedText text={["Global", "Operating Countries"]} />
                    </h1>
                    <div className='flex items-center justify-center'> <p className="text-lg text-gray-500 max-w-2xl mx-auto font-['Inter']">
                        Our software solutions operate globally, with registered trademarks and legal presence across multiple continents and jurisdictions.
                    </p></div>

                </div>
            </header>

            <main className="container mx-auto px-4 pt-20">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {countries.map((country, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center p-8 bg-white rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2"
                        >
                            <div className="relative w-24 h-16 mb-6 overflow-hidden rounded-lg shadow-sm border border-gray-100 transition-transform duration-500 group-hover:scale-110">
                                <img
                                    src={`https://flagcdn.com/w320/${country.code}.png`}
                                    alt={`${country.name} Flag`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 font-['Outfit'] group-hover:text-blue-600 transition-colors">
                                {country.name}
                            </h3>
                            <div className="mt-2 w-0 h-0.5 bg-blue-500 group-hover:w-12 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </main>

            <section className="container mx-auto px-4 mt-32 text-center">
                <div className="max-w-3xl mx-auto p-12 bg-gray-50 rounded-[40px] border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 font-['Outfit']">International Compliance</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We maintain strict adherence to international trade laws and intellectual property regulations in every country we operate. Our trademarks are registered to ensure brand protection and service quality worldwide.
                    </p>
                </div>
            </section>
        </div>
    );
}
