export interface Job {
    id: string;
    slug: string;
    title: string;
    department: string;
    location: string;
    type: string;
    level: string;
    salary?: string;
    introduction: string;
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
}

export const jobsData: Job[] = [
    {
        id: "1",
        slug: "senior-people-officer",
        title: "Senior People Officer",
        department: "Management",
        location: "Dhaka, Bangladesh",
        type: "Full Time",
        level: "Senior Level",
        salary: "BDT 120,000 - 150,000 per month",
        introduction: "At Ollyo, we build products used by thousands of creators and businesses worldwide. As we continue to grow, we are looking for a Senior People Officer who will help us strengthen our people operations, shape our culture, and support sustainable team growth.",
        responsibilities: [
            "Oversee accurate and timely payroll management",
            "Manage compensation structures, increments, and promotions",
            "Ensure compliance with local labor laws and company policies",
            "Maintain employee records and HR documentation",
            "Strengthen and scale Ollyo's culture and values",
            "Design engagement initiatives and feedback systems",
            "Handle employee relations and conflict resolution",
            "Improve retention through structured engagement strategies",
            "Build and maintain performance review systems",
            "Support managers in goal-setting and evaluation processes",
            "Design and deliver Leadership and Management programmes to upskill managers to be effective in their roles",
            "Lead leadership and succession planning initiatives",
            "Develop scalable HR systems and SOPs",
            "Improve onboarding and offboarding processes",
            "Introduce HR analytics and reporting for leadership",
            "Continuously optimize people processes as the company grows"
        ],
        requirements: [
            "5+ years of experience in HR / People Operations",
            "Proven experience in recruitment, payroll, and employee engagement",
            "Exposure to international hiring or contractor management is a plus",
            "Experience in tech companies is preferred",
            "Strong interpersonal and problem-solving skills",
            "High level of integrity and confidentiality",
            "Ability to work closely with the CEO and senior leadership team",
            "Bachelor's degree in HR, Business Administration, or related field"
        ],
        benefits: [
            "Exceptional work culture and environment",
            "Free meals, coffee, and snacks",
            "Full-size gym to support wellness and fitness",
            "Facilities for both indoor and outdoor sports",
            "Free shuttle service (subject to route availability)",
            "Parking facility (subject to availability)",
            "Two festival bonuses",
            "Leave encashment",
            "Loyalty bonus",
            "Maternity and paternity leaves",
            "Designated areas for male and female Muslim prayers"
        ]
    },
    {
        id: "2",
        slug: "software-qa-engineer",
        title: "Software QA Engineer",
        department: "Engineering",
        location: "Dhaka, Bangladesh",
        type: "Full Time",
        level: "Entry Level",
        salary: "BDT 50,000 - 70,000 per month",
        introduction: "We are looking for a Software QA Engineer to join our team. You will be responsible for testing our products to ensure they meet our high-quality standards.",
        responsibilities: [
            "Develop and execute test cases",
            "Identify and report bugs",
            "Collaborate with developers to resolve issues",
            "Perform regression testing"
        ],
        requirements: [
            "1+ years of experience in Software QA",
            "Strong understanding of testing methodologies",
            "Experience with automated testing tools is a plus",
            "Excellent attention to detail"
        ],
        benefits: [
            "Competitive salary",
            "Flexible working hours",
            "Health insurance",
            "Professional development opportunities"
        ]
    },
    {
        id: "3",
        slug: "senior-motion-designer",
        title: "Senior Motion Designer (UI & Marketing)",
        department: "Design",
        location: "Dhaka, Bangladesh",
        type: "Full Time",
        level: "Senior Level",
        salary: "BDT 80,000 - 110,000 per month",
        introduction: "We are seeking a talented Senior Motion Designer to create engaging animations for our UI and marketing materials.",
        responsibilities: [
            "Create high-quality motion graphics and animations",
            "Collaborate with UI/UX designers to enhance user experiences",
            "Design advertisements and promotional content",
            "Stay up-to-date with motion design trends"
        ],
        requirements: [
            "5+ years of experience in motion design",
            "Proficient in After Effects, Premiere Pro, and Figma",
            "Strong portfolio showcasing motion work",
            "Experience with UI animation is preferred"
        ],
        benefits: [
            "Creative work environment",
            "Latest design tools and hardware",
            "Regular team outings",
            "Performance bonuses"
        ]
    }
];
