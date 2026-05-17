import React from 'react';
import AnimatedText from "@/components/AnimatedText";

export default function Certifications() {
    const certifications = [
        {
            id: 1,
            title: "Microsoft Solutions Partner",
            category: "Digital & App Innovation",
            img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            registrationNo: "MS-99831"
        },
        {
            id: 2,
            title: "AWS Certified",
            category: "Cloud Architecture",
            img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
            registrationNo: "AWS-77201"
        },
        {
            id: 3,
            title: "Google Cloud Partner",
            category: "Cloud Solutions",
            img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
            registrationNo: "GCP-55302"
        },
        {
            id: 4,
            title: "ISO 9001:2015",
            category: "Quality Management",
            img: "https://placehold.co/600x400?text=certifications",
            registrationNo: "ISO-QMS-444"
        },
        {
            id: 5,
            title: "ISO 27001:2013",
            category: "Information Security",
            img: "https://placehold.co/600x400?text=certifications",
            registrationNo: "ISO-ISMS-333"
        },
        {
            id: 6,
            title: "CMMI Level 3",
            category: "Process Maturity",
            img: "https://placehold.co/600x400?text=certifications",
            registrationNo: "CMMI-DEV-001"
        },
        {
            id: 7,
            title: "Cyber Essentials",
            category: "Cybersecurity",
            img: "https://placehold.co/600x400?text=certifications",
            registrationNo: "CE-UK-992"
        },
        {
            id: 8,
            title: "Oracle Partner",
            category: "Database Solutions",
            img: "https://placehold.co/600x400?text=certifications",
            registrationNo: "ORCL-881"
        },
        {
            id: 9,
            title: "Cisco Certified",
            category: "Networking Excellence",
            img: "https://placehold.co/600x400?text=certifications",
            registrationNo: "CSCO-771"
        },
        {
            id: 10,
            title: "Red Hat Partner",
            category: "Open Source Solutions",
            img: "https://placehold.co/600x400?text=certifications",
            registrationNo: "RH-661"
        }
    ];

    return (
        <div className="min-h-screen pb-24  ">
            <header className="pt-10 pb-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-[12px] font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Our Accreditations</div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] font-['Outfit'] tracking-tight max-w-4xl">
                        Global Standards that Validate <br />
                        Technical Excellence
                    </h1>
                </div>
            </header>

            <main className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-gray-100">
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className="group relative aspect-square flex flex-col items-center justify-center p-2 border-r border-b border-gray-100 transition-all duration-500 hover:bg-blue-50/30"
                        >
                            <div className="h-36 w-full flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                                <img
                                    src={cert.img}
                                    alt={cert.title}
                                    className="h-full w-auto object-contain group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                />
                            </div>

                            <div className="absolute inset-x-4 bottom-6 text-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                <h3 className="text-[12px] font-bold text-gray-900 uppercase tracking-wider mb-1">{cert.title}</h3>
                                <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">{cert.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
