export interface Product {
    id: string;
    title: string;
    productName: string;
    logo: string;
    href: string;
    desc: string;
    longDesc: string;
    image: string;
    images?: string[];
    features: string[];
    technicalStack: string[];
}

export const PRODUCTS: Product[] = [
    {
        id: "t360",
        title: "Tours & Travels Management",
        productName: "T360 Tours & Travels",
        logo: "/images/products/t360.svg",
        href: "https://t360.biz",
        desc: "Travel LMS",
        longDesc: "T360 is a powerful Travel Learning Management System designed specifically for the travel and tourism industry. It helps travel agencies, institutes, and organizations train their agents, partners, and students efficiently. The platform provides tools for course creation, learning analytics, certification management, and automated training workflows. With a user-friendly interface and scalable architecture, T360 enables organizations to deliver professional travel training programs globally while tracking learner performance in real time.",
        image: "/images/products/t360-sub.png",
        features: [
            "Travel Industry Learning Management System",
            "Course Creation & Curriculum Management",
            "Agent & Staff Training Programs",
            "Student Progress Tracking",
            "Certification & Assessment System",
            "Interactive Learning Modules",
            "Performance Analytics Dashboard",
            "Multi-organization Support"
        ],
        technicalStack: ["WordPress", "PHP", "MySQL"]
    },

    {
        id: "crm360",
        title: "Customer Relationship Management",
        productName: "CRM360",
        logo: "/images/products/CRM.png",
        href: "https://employee.crm360world.com",
        desc: "Customer Relationship Management",
        longDesc: "CRM360 is a modern customer relationship management platform designed to help businesses organize leads, manage customer communication, and streamline sales operations. The system centralizes customer data, tracks sales pipelines, and enables teams to collaborate efficiently. With automated workflows, reporting tools, and real-time dashboards, CRM360 empowers organizations to improve customer engagement, increase conversion rates, and make data-driven decisions for business growth.",
        image: "/images/products/crm-large.png",
        features: [
            "Lead & Contact Management",
            "Sales Pipeline Tracking",
            "Customer Interaction History",
            "Task & Team Activity Management",
            "Automated Sales Workflows",
            "Advanced Reporting & Analytics",
            "Customer Support Tracking",
            "Secure Cloud-Based Access"
        ],
        technicalStack: ["Next.js", "PostgreSQL", "Tailwind CSS"]
    },

    {
        id: "thehotel360",
        title: "The Hotel 360",
        productName: "The Hotel 360",
        logo: "/images/products/reservation1.png",
        href: "https://app.thehotel360.com",
        desc: "Hotel & Restaurant Management",
        longDesc: "The Hotel 360 is a comprehensive hospitality management platform built for hotels, resorts, and restaurants. It simplifies daily operations including reservations, guest check-in and check-out, billing, inventory tracking, and restaurant POS management. The system allows hotel managers to monitor room availability, manage guest data, and generate operational reports in real time. With an integrated booking and analytics system, The Hotel 360 helps hospitality businesses improve service efficiency and maximize revenue.",
        image: "/images/products/hotel-large.png",
        features: [
            "Online Room Reservation System",
            "Guest Check-in & Check-out Management",
            "Restaurant POS Integration",
            "Inventory & Stock Management",
            "Housekeeping Management",
            "Revenue & Financial Reporting",
            "Guest Profile & History Tracking",
            "Multi-branch Hotel Management"
        ],
        technicalStack: ["Node.js", "MongoDB", "React"]
    },

    {
        id: "dokani",
        title: "Dokani",
        productName: "POS Software",
        logo: "/images/products/dokani.png",
        href: "https://v2.dokani.live/login/",
        desc: "Sales software for retail shops",
        longDesc: "Dokani is a smart point-of-sale and retail management system designed for small and medium businesses. It allows shop owners to manage daily sales, inventory, invoices, and customer records from a single dashboard. With real-time stock updates and detailed sales reports, Dokani helps retailers maintain accurate inventory levels and track business performance. The system is designed to be simple, fast, and scalable for retail stores, supermarkets, and chain outlets.",
        image: "/images/products/dokani-large.png",
        features: [
            "Retail POS Billing System",
            "Real-time Inventory Tracking",
            "Product & Category Management",
            "Invoice & Receipt Generation",
            "Sales Analytics & Reports",
            "Customer Management",
            "Multi-store Retail Management",
            "Mobile Friendly Dashboard"
        ],
        technicalStack: ["React Native", "Firebase", "Node.js"]
    },

    {
        id: "erpbd",
        title: "ERP BD",
        productName: "ERP Software",
        logo: "/images/products/erp.png",
        href: "https://erpbd.ontheway.com.bd",
        desc: "Enterprise Resource Planning",
        longDesc: "ERP BD is a full-featured enterprise resource planning system that helps organizations manage core business processes such as finance, human resources, procurement, and project operations. The platform integrates multiple departments into one centralized system, ensuring better data visibility and operational efficiency. With powerful reporting tools and customizable modules, ERP BD enables companies to streamline workflows, reduce manual work, and improve overall business management.",
        image: "/images/products/erp.jpg",
        features: [
            "Finance & Accounting Management",
            "Human Resource Management System",
            "Supply Chain & Procurement",
            "Project & Task Management",
            "Budget Planning & Tracking",
            "Automated Business Workflows",
            "Advanced Business Reports",
            "Centralized Data Management"
        ],
        technicalStack: ["Python", "Django", "PostgreSQL"]
    },

    {
        id: "recruit360",
        title: "Recruit360",
        productName: "Recruitment Software",
        logo: "/images/products/recruitment.png",
        href: "https://account.recruit360.biz",
        desc: "Recruitment & HR software",
        longDesc: "Recruit360 is an intelligent recruitment and hiring management platform designed for HR teams and recruitment agencies. It simplifies the entire hiring process from job posting and candidate screening to interview management and onboarding. The platform helps recruiters track applicants, collaborate with hiring managers, and manage recruitment pipelines efficiently. With built-in analytics and automation features, Recruit360 enables organizations to find and hire the right talent faster.",
        image: "/images/products/recruitment-large.png",
        features: [
            "Job Posting & Vacancy Management",
            "Applicant Tracking System (ATS)",
            "Resume Database Management",
            "Interview Scheduling Tools",
            "Hiring Pipeline Management",
            "Candidate Evaluation System",
            "Recruitment Analytics & Reports",
            "Employee Onboarding Support"
        ],
        technicalStack: ["Vue.js", "Express", "MongoDB"]
    }
];