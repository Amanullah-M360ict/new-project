import React from 'react';
import AnimatedText from "@/components/AnimatedText";

export default function CopyrightAndLicense() {
    const licenses = [
        {
            id: 1,
            title: "Corporate Incorporation",
            category: "Legal Operations",
            img: "https://placehold.co/600x400?text=Incorporation",
            registrationNo: "C-161483/2020"
        },
        {
            id: 2,
            title: "Global Trademark Registration",
            category: "Intellectual Property",
            img: "https://placehold.co/600x400?text=Trademark",
            registrationNo: "TM-INT-9984"
        },
        {
            id: 3,
            title: "Platform Copyright (Core)",
            category: "Software Rights",
            img: "https://placehold.co/600x400?text=Copyright",
            registrationNo: "CR-SOFT-2021"
        },
        {
            id: 4,
            title: "Data Processing Agreement",
            category: "Security & Privacy",
            img: "https://placehold.co/600x400?text=DPA",
            registrationNo: "DPA-2024-COMP"
        },
        {
            id: 5,
            title: "Open Source Compliance",
            category: "Standardization",
            img: "https://placehold.co/600x400?text=OSC",
            registrationNo: "OSC-STD-001"
        },
        {
            id: 6,
            title: "Commercial Distribution License",
            category: "Global Sales",
            img: "https://placehold.co/600x400?text=License",
            registrationNo: "GSDL-INT-5501"
        }
    ];

    return (
        <div className="min-h-screen pb-24">
            <header className="pt-10 pb-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-[12px] font-bold text-[#38B1ED] uppercase tracking-[0.3em] mb-4">Official Rights</div>
                    <h1 className="text-4xl md:text-6xl m-0 font-bold text-gray-900 leading-[1.1] font-['Outfit'] tracking-tight max-w-4xl">
                        Copyright, Licensing & <br />
                        Legal Compliance
                    </h1>
                </div>
            </header>

            <main className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-gray-100">
                    {licenses.map((license) => (
                        <div
                            key={license.id}
                            className="group relative aspect-square flex flex-col items-center justify-center p-6 border-r border-b border-gray-100 transition-all duration-500 hover:bg-indigo-50/30"
                        >
                            <div className="h-32 w-full flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                                <img
                                    src={license.img}
                                    alt={license.title}
                                    className="h-full w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                />
                            </div>

                            <div className="absolute inset-x-4 bottom-6 text-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                <h3 className="text-[12px] font-bold text-gray-900 uppercase tracking-wider mb-1">{license.title}</h3>
                                <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest">{license.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
