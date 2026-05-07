import React from 'react';
import AnimatedText from "@/components/AnimatedText";

export default function Memberships() {
    const memberships = [
        {
            id: 1,
            title: "BASIS",
            category: "Software Industry",
            img: "https://tse3.mm.bing.net/th/id/OIP.TRJkxa2zUHZhovBbFZz3aAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            registrationNo: "G-1892"
        },
        {
            id: 2,
            title: "ECAB",
            category: "E-Commerce",
            img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
            registrationNo: "ECAB-2021-443"
        },
        {
            id: 3,
            title: "BACCO",
            category: "Outsourcing",
            img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
            registrationNo: "BACCO-M-882"
        },
        {
            id: 4,
            title: "BCS",
            category: "Computer Society",
            img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
            registrationNo: "BCS-2022-771"
        },
        {
            id: 5,
            title: "DCCI",
            category: "Chamber of Commerce",
            img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
            registrationNo: "DCCI-CORP-992"
        },
        {
            id: 6,
            title: "International Travel Association",
            category: "Global Travel",
            img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
            registrationNo: "IATA-M-55102"
        }
    ];

    return (
        <div className="min-h-screen pb-24  ">
            <header className="pt-3 pb-10 bg-white ">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-['Outfit'] tracking-tight">
                        <AnimatedText text={["Corporate", "Memberships"]} />
                    </h1>
                    <div className='flex items-center justify-center'><p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        We are proud members of prestigious national and international associations, collaborating to drive industry growth.
                    </p></div>

                </div>
            </header>

            <main className="container mx-auto px-4 pt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {memberships.map((member) => (
                        <div
                            key={member.id}
                            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="aspect-[4/3] w-full overflow-hidden relative bg-gray-100">
                                <img
                                    src={member.img}
                                    alt={member.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-8">
                                <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full mb-4">
                                    {member.category}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 font-['Outfit'] leading-tight">
                                    {member.title}
                                </h3>
                                <div className="flex items-center text-sm text-gray-500 mt-4 pt-4 border-t border-gray-50">
                                    <span className="font-mono bg-gray-50 px-2 py-1 rounded text-xs">
                                        REG: {member.registrationNo}
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
