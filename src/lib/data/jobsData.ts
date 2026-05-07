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
        slug: "senior-full-stack-developer",
        title: "Senior Full Stack Developer",
        department: "Engineering",
        location: "Dhaka, Bangladesh",
        type: "Full Time",
        level: "Senior Level",
        salary: "BDT 150,000 - 220,000 per month",
        introduction: "At M360ICT, we engineer world-class digital solutions. We are looking for a Senior Full Stack Developer to lead our core product development, architect scalable systems, and mentor our growing engineering team.",
        responsibilities: [
            "Architect and develop high-performance web applications using React and Node.js",
            "Lead technical design sessions and provide architectural guidance",
            "Optimize applications for maximum speed, scalability, and security",
            "Mentor junior and mid-level developers through code reviews and pair programming",
            "Collaborate with product managers and designers to translate requirements into technical specs",
            "Maintain high code quality standards through automated testing and CI/CD"
        ],
        requirements: [
            "6+ years of professional experience in full-stack development",
            "Expertise in React.js, Node.js, and TypeScript",
            "Strong experience with PostgreSQL, MongoDB, or Redis",
            "Proven track record of building and scaling cloud-native applications on AWS or Azure",
            "Deep understanding of RESTful APIs, GraphQL, and microservices architecture",
            "Excellent problem-solving skills and technical leadership abilities"
        ],
        benefits: [
            "Competitive salary with performance-based increments",
            "Premium health insurance for you and your family",
            "Annual learning and development budget",
            "Flexible working hours and remote work options",
            "Cutting-edge hardware and toolset",
            "Two annual festival bonuses and performance incentives",
            "Fully stocked pantry with gourmet coffee and snacks",
            "Gym membership and wellness programs"
        ]
    },
    {
        id: "2",
        slug: "senior-ui-ux-designer",
        title: "Senior UI/UX Designer",
        department: "Design",
        location: "Dhaka, Bangladesh",
        type: "Full Time",
        level: "Senior Level",
        salary: "BDT 100,000 - 150,000 per month",
        introduction: "We believe in human-centric design. M360ICT is seeking a visionary Senior UI/UX Designer to craft intuitive, beautiful, and high-converting experiences for our global suite of products.",
        responsibilities: [
            "Lead the design lifecycle from conceptualization to high-fidelity prototyping",
            "Conduct user research, usability testing, and data-driven design iterations",
            "Establish and maintain design systems across multiple product lines",
            "Collaborate closely with engineers to ensure pixel-perfect implementation",
            "Create wireframes, user flows, and interactive mockups",
            "Stay ahead of design trends and mentor junior designers"
        ],
        requirements: [
            "5+ years of experience in UI/UX design for web and mobile products",
            "Mastery of Figma, Adobe Creative Suite, and prototyping tools",
            "Strong portfolio demonstrating complex SaaS or Enterprise UI solutions",
            "Deep understanding of user psychology and accessibility standards",
            "Ability to articulate design decisions to stakeholders",
            "Experience working in an Agile/Scrum environment"
        ],
        benefits: [
            "Creative work environment with specialized design gear",
            "Design-focused workshops and conference sponsorships",
            "Annual bonuses and loyalty rewards",
            "Wellness benefits and mental health support",
            "Regular team building and design sprints"
        ]
    },

    {
        id: "4",
        slug: "technical-product-manager",
        title: "Technical Product Manager",
        department: "Management",
        location: "Dhaka, Bangladesh",
        type: "Full Time",
        level: "Senior Level",
        salary: "BDT 140,000 - 200,000 per month",
        introduction: "Join M360ICT as a Technical Product Manager to bridge the gap between business vision and engineering execution, driving the roadmap for our flagship SaaS platforms.",
        responsibilities: [
            "Define product strategy and roadmap based on market research and user feedback",
            "Translate business requirements into detailed technical user stories",
            "Coordinate between cross-functional teams (Engineering, Design, Marketing)",
            "Prioritize backlogs and manage sprint planning for development cycles",
            "Analyze product metrics to drive data-informed decisions",
            "Act as the primary point of contact for technical product inquiries"
        ],
        requirements: [
            "5+ years of experience in product management for tech companies",
            "Strong technical background (former engineer or CS degree preferred)",
            "Experience with Agile methodologies and PM tools (Jira/Linear)",
            "Excellent communication and stakeholder management skills",
            "Proven ability to manage products from inception to launch",
            "Background in TravelTech or FinTech is a significant advantage"
        ],
        benefits: [
            "Strategic leadership role in a fast-growing company",
            "Opportunity to influence global product direction",
            "High-impact projects with million-user reach",
            "Comprehensive executive benefit package",
            "Stock options and growth incentives"
        ]
    }
];
