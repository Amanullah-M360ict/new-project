export interface Award {
    id: string;
    title: string;
    institution: string;
    year: string;
    image: string;
    description?: string;
}

export const AWARDS: Award[] = [
    {
        id: "commonwealth-2023",
        title: "Commonwealth Business Excellence Awards",
        institution: "Commonwealth Business",
        year: "2023",
        image: "/images/awards/Asset 19.png",
        description: "Recognized for outstanding business excellence and contributions to the Commonwealth business community."
    },
    {
        id: "basis-ict-2022",
        title: "Basis National ICT Awards",
        institution: "BASIS",
        year: "2022",
        image: "/images/awards/Asset 25.png",
        description: "Honored for excellence in Information and Communication Technology at the national level."
    },
    {
        id: "ict-awards-2022",
        title: "ICT Awards",
        institution: "ICT Division",
        year: "2022",
        image: "/images/awards/Asset 20.png",
        description: "Received for innovative contributions and excellence in the ICT sector."
    },
    {
        id: "global-changemakers-2024",
        title: "Global Changemakers Award",
        institution: "Global Changemakers",
        year: "2024",
        image: "/images/awards/Asset 21.png",
        description: "Awarded for significant impact and positive change in the global technology landscape."
    },
    {
        id: "south-asian-business-2025",
        title: "South Asian Business Excellence Awards",
        institution: "South Asian Business Excellence",
        year: "2025",
        image: "/images/awards/Asset 18.png",
        description: "Celebrated for leadership and excellence in business within the South Asian region."
    },
    {
        id: "honors-awards",
        title: "Honors and Awards",
        institution: "Various Institutions",
        year: "Ongoing",
        image: "/images/awards/Asset 22.png",
        description: "A collection of various honors and recognitions received for consistent performance and innovation."
    }
];
