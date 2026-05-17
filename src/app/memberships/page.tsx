import React from 'react';
import AnimatedText from "@/components/AnimatedText";

export default function Memberships() {
    const memberships = [
        {
            id: 1,
            title: "ATAB",
            category: "Association of Travel Agents of Bangladesh",
            img: "/images/partners/atab.png",
            registrationNo: "M-11202"
        },
        {
            id: 2,
            title: "TOAB",
            category: "Tour Operators Association of Bangladesh",
            img: "/images/partners/toab.jpg",
            registrationNo: "M-55201"
        },
        {
            id: 3,
            title: "HAAB",
            category: "Hajj Agencies Association of Bangladesh",
            img: "/images/partners/haab.png",
            registrationNo: "M-99301"
        },
        {
            id: 4,
            title: "AMCHAM",
            category: "American Chamber of Commerce in Bangladesh",
            img: "/images/partners/amcham.png",
            registrationNo: "M-88402"
        },
        {
            id: 5,
            title: "BTTF",
            category: "Bangladesh Travel & Tourism Fair",
            img: "/images/partners/bttf.jpg",
            registrationNo: "M-77503"
        },
        {
            id: 6,
            title: "Sabre",
            category: "Global Travel Technology Partner",
            img: "/images/partners/sabre.png",
            registrationNo: "T-44604"
        },
        {
            id: 7,
            title: "Asian Tourism",
            category: "Regional Partner",
            img: "/images/partners/asian-tourism.png",
            registrationNo: "P-33705"
        },
        {
            id: 8,
            title: "ATAB Training",
            category: "Educational Partner",
            img: "/images/partners/atab-training.png",
            registrationNo: "E-22806"
        },
        {
            id: 9,
            title: "DBBL",
            category: "Financial Partner",
            img: "/images/partners/dbbl.webp",
            registrationNo: "F-11907"
        },
        {
            id: 10,
            title: "Discover",
            category: "Global Travel Network",
            img: "/images/partners/discover.webp",
            registrationNo: "N-00108"
        },
        {
            id: 11,
            title: "Finlay",
            category: "Logistics Partner",
            img: "/images/partners/finlay.webp",
            registrationNo: "L-22209"
        },
        {
            id: 12,
            title: "Skill Planet",
            category: "Training Partner",
            img: "/images/partners/skill-planet.png",
            registrationNo: "S-33310"
        },
        {
            id: 13,
            title: "Sena Kalyan",
            category: "Corporate Partner",
            img: "/images/partners/sena.webp",
            registrationNo: "C-44411"
        },
        {
            id: 14,
            title: "The Monitor",
            category: "Media Partner",
            img: "/images/partners/monitor.png",
            registrationNo: "M-55512"
        },
        {
            id: 15,
            title: "Sammoni",
            category: "Strategic Partner",
            img: "/images/partners/sammoni.jpg",
            registrationNo: "S-66613"
        }
    ];

    return (
        <div className="min-h-screen pb-24  ">
            <header className="pt-10 pb-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-[12px] font-bold text-amber-600 uppercase tracking-[0.3em] mb-4">Our Memberships</div>
                    <h1 className="text-4xl md:text-6xl m-0 font-bold text-gray-900 leading-[1.1] font-['Outfit'] tracking-tight max-w-4xl">
                        Strategic Partnerships that Drive <br />
                        Industry Innovation
                    </h1>
                </div>
            </header>

            <main className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-gray-100">
                    {memberships.map((member) => (
                        <div
                            key={member.id}
                            className="group relative aspect-square flex flex-col items-center justify-center p-6 border-r border-b border-gray-100 transition-all duration-500 hover:bg-amber-50/30"
                        >
                            <div className="h-32 w-full flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                                <img
                                    src={member.img}
                                    alt={member.title}
                                    className="h-full w-auto object-contain  group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                />
                            </div>

                            <div className="absolute inset-x-4 bottom-6 text-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                <h3 className="text-[12px] font-bold text-gray-900 uppercase tracking-wider mb-1">{member.title}</h3>
                                <p className="text-[10px] text-amber-600 font-bold uppercase tracking-widest">{member.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
