import React from 'react';
import AnimatedText from "@/components/AnimatedText";

export default function Certifications() {
    const certifications = [
        {
            id: 1,
            title: "ISO 9001:2015",
            category: "Quality Management",
            img: "https://tse1.mm.bing.net/th/id/OIP.w4Fj_FGBbyzk-uACaoi2YAHaKf?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            registrationNo: "ISO-QMS-2023-458"
        },
        {
            id: 2,
            title: "ISO 27001:2013",
            category: "Information Security",
            img: "https://tse1.mm.bing.net/th/id/OIP.Qqq_xlQkNUxgcpKZ2hcCwQHaHa?r=0&w=1140&h=1140&rs=1&pid=ImgDetMain&o=7&rm=3",
            registrationNo: "ISO-ISMS-2024-991"
        },
        {
            id: 3,
            title: "CMMI Level 3",
            category: "Process Improvement",
            img: "https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=800",
            registrationNo: "CMMI-DEV-L3-001"
        },
        {
            id: 4,
            title: "Cyber Essentials",
            category: "Cybersecurity",
            img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
            registrationNo: "CE-UK-2024-552"
        },
        {
            id: 5,
            title: "Green Business Certification",
            category: "Sustainability",
            img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
            registrationNo: "GBC-2023-ENV"
        },
        {
            id: 6,
            title: "Microsoft Solutions Partner",
            category: "Technical Excellence",
            img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
            registrationNo: "MS-PART-99831"
        }
    ];

    return (
        <div className="min-h-screen pb-24  ">
            <header className="pt-3 pb-10 bg-white  ">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-['Outfit'] tracking-tight">
                        <AnimatedText text={["Our", "Certifications"]} />
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Global standards and technical benchmarks that validate our commitment to quality, security, and innovation.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-4 pt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="aspect-[4/3] w-full overflow-hidden relative bg-gray-100">
                                <img
                                    src={cert.img}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-8">
                                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mb-4">
                                    {cert.category}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 font-['Outfit'] leading-tight">
                                    {cert.title}
                                </h3>
                                <div className="flex items-center text-sm text-gray-500 mt-4 pt-4 border-t border-gray-50">
                                    <span className="font-mono bg-gray-50 px-2 py-1 rounded text-xs">
                                        REG: {cert.registrationNo}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
