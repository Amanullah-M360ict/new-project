import React from 'react';
import AnimatedText from "@/components/AnimatedText";

export default function CopyrightAndLicense() {
    const licenses = [
        {
            id: 1,
            title: "ISO 9001:2015 Certification",
            category: "Quality Management",
            img: "https://tse1.mm.bing.net/th/id/OIP.w4Fj_FGBbyzk-uACaoi2YAHaKf?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            registrationNo: "ISO-9001-2023-458"
        },
        {
            id: 2,
            title: "BASIS Membership Certificate",
            category: "Industry Association",
            img: "https://tse3.mm.bing.net/th/id/OIP.TRJkxa2zUHZhovBbFZz3aAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            registrationNo: "BASIS-G-1892"
        },
        {
            id: 3,
            title: "International Copyright Registration",
            category: "Intellectual Property",
            img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
            registrationNo: "CR-2021-9984"
        },
        {
            id: 4,
            title: "Trade License & Incorporation",
            category: "Legal Operations",
            img: "https://tse4.mm.bing.net/th/id/OIP.dGhL73U11Z9QNX0ECOsSzgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            registrationNo: "C-161483/2020"
        },
        {
            id: 5,
            title: "Data Protection Compliance",
            category: "Security standard",
            img: "https://tse1.mm.bing.net/th/id/OIP.Qqq_xlQkNUxgcpKZ2hcCwQHaHa?r=0&w=1140&h=1140&rs=1&pid=ImgDetMain&o=7&rm=3",
            registrationNo: "DPA-2024-COMP"
        },
        {
            id: 6,
            title: "Global Software Distribution License",
            category: "Commercial",
            img: "https://5.imimg.com/data5/SELLER/Default/2024/7/431688681/QN/AE/XH/224933696/copyright-commercialization-service-500x500.jpg",
            registrationNo: "GSDL-INT-5501"
        }
    ];

    return (
        <div className="min-h-screen   pb-24">
            <header className="pt-3 pb-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-['Outfit'] tracking-tight">
                        <AnimatedText text={["Copyright &", "Licensing"]} />
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Official documentation of our corporate registrations, intellectual property rights, and global operational compliance.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-4 pt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {licenses.map((license) => (
                        <div
                            key={license.id}
                            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >

                            <div className="aspect-[4/3] w-full overflow-hidden relative bg-gray-100">
                                <img
                                    src={license.img}
                                    alt={license.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Card Content */}
                            <div className="p-8">
                                <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full mb-4">
                                    {license.category}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 font-['Outfit'] leading-tight">
                                    {license.title}
                                </h3>
                                <div className="flex items-center text-sm text-gray-500 mt-4 pt-4 border-t border-gray-50">
                                    <span className="font-mono bg-gray-50 px-2 py-1 rounded text-xs">
                                        REG: {license.registrationNo}
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
