"use client";

import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import CountUp from "@/components/common/CountUp";
import "./_style/services.css";

const services = [
    {
        id: "01",
        category: "Software Development",
        title: "Custom Software Engineering",
        description:
            "We architect and build enterprise-grade software tailored to your business processes. From bespoke SaaS platforms to internal workflow systems, our engineers deliver scalable, maintainable solutions built to last.",
        capabilities: [
            "Web Application Development",
            "Mobile App Development (iOS & Android)",
            "API Design & Integration",
            "Cloud-Native Architecture",
            "Microservices & DevOps",
        ],
    },
    {
        id: "02",
        category: "Travel Technology",
        title: "Travel Tech Platform Solutions",
        description:
            "M360 ICT is a leading travel tech company in South Asia. We build comprehensive travel management systems — GDS integrations, OTA platforms, B2B portals, and white-label booking engines trusted by hundreds of agencies globally.",
        capabilities: [
            "Online Travel Agency (OTA) Platform",
            "GDS / Amadeus / Sabre Integration",
            "B2B Travel Portal Development",
            "Airline & Hotel Booking Engine",
            "Travel ERP & CRM Systems",
        ],
    },
    {
        id: "03",
        category: "ERP & Business Systems",
        title: "Enterprise Resource Planning",
        description:
            "We build and deploy fully integrated ERP systems that unify operations, finance, HR, and supply chain. Our modular approach ensures a smooth adoption curve and a strong return on investment.",
        capabilities: [
            "Financial Accounting & Reporting",
            "HR & Payroll Management",
            "Inventory & Supply Chain",
            "Sales & CRM Modules",
            "Custom Dashboard & Analytics",
        ],
    },
    {
        id: "04",
        category: "UI/UX Design",
        title: "Product Design & UX Strategy",
        description:
            "We translate complex user needs into intuitive, impactful digital experiences. Our design team applies research-driven processes to produce world-class interfaces that delight users and drive business outcomes.",
        capabilities: [
            "User Research & Journey Mapping",
            "Wireframing & Prototyping",
            "Design Systems & Component Libraries",
            "Usability Testing",
            "Brand Identity & Visual Communication",
        ],
    },
    {
        id: "05",
        category: "Cloud & Infrastructure",
        title: "Cloud Migration & DevOps",
        description:
            "From legacy on-premise systems to modern cloud-native deployments, we guide and execute migrations with zero downtime. We implement CI/CD pipelines, automated testing, and infrastructure-as-code for reliable, fast delivery.",
        capabilities: [
            "AWS / GCP / Azure Deployment",
            "Docker & Kubernetes Orchestration",
            "CI/CD Pipeline Setup",
            "Infrastructure as Code (Terraform)",
            "Security Auditing & Compliance",
        ],
    },
    {
        id: "06",
        category: "IT Consulting",
        title: "Strategic Technology Consulting",
        description:
            "Our senior consultants partner with decision-makers to craft technology roadmaps that align IT investments with long-term business goals. We bridge the gap between business vision and engineering execution.",
        capabilities: [
            "Digital Transformation Strategy",
            "Technology Stack Evaluation",
            "IT Project Management (PMO)",
            "Vendor & Platform Assessment",
            "Post-Launch Support & SLA",
        ],
    },
];

const stats = [
    { value: "14+", label: "Years in Business" },
    { value: "500+", label: "Projects Delivered" },
    { value: "50+", label: "Enterprise Clients" },
    { value: "12+", label: "Countries Served" },
];

export default function Services() {
    return (
        <div className="ServicesPage">

            {/* ── Hero ─────────────────────────────────────── */}
            <div className="Svc__hero">
                <div className="container">
                    <p className="Svc__hero__eyebrow">Services</p>
                    <h1 className="Svc__hero__h1">
                        <AnimatedText text={["Engineering", "Solutions That", "Scale."]} />
                    </h1>
                    <div className="Svc__hero__bottom">
                        <p className="Svc__hero__desc">
                            M360 ICT is a multi-award-winning technology company from Bangladesh building software that powers travel agencies, enterprises, and governments across 12+ countries.
                        </p>
                        <Link href="/contact" className="Svc__hero__cta">
                            Start a Project
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── Stats ─────────────────────────────────────── */}
            <div className="Svc__stats">
                <div className="container">
                    <div className="Svc__stats__grid">
                        {stats.map((s, i) => (
                            <div key={i} className="Svc__stats__item">
                                <span className="Svc__stats__value">
                                    <CountUp end={s.value} delay={i * 0.1} />
                                </span>
                                <span className="Svc__stats__label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Services ─────────────────────────────────── */}
            <div className="Svc__list">
                <div className="container">
                    {services.map((svc, i) => (
                        <div key={i} className="Svc__item">
                            <div className="Svc__item__meta">
                                <span className="Svc__item__id">{svc.id} /</span>
                                <span className="Svc__item__cat">{svc.category}</span>
                            </div>
                            <div className="Svc__item__body">
                                <div className="Svc__item__left">
                                    <h2 className="Svc__item__title">{svc.title}</h2>
                                    <p className="Svc__item__desc">{svc.description}</p>
                                    <Link href="/contact" className="Svc__item__link">
                                        Get in Touch →
                                    </Link>
                                </div>
                                <ul className="Svc__item__caps">
                                    {svc.capabilities.map((cap, j) => (
                                        <li key={j} className="Svc__item__cap">
                                            <span className="Svc__item__capNum">{String(j + 1).padStart(2, "0")} /</span>
                                            {cap}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── CTA ──────────────────────────────────────── */}
            <div className="Svc__cta">
                <div className="container">
                    <div className="Svc__cta__inner">
                        <h2 className="Svc__cta__h2">
                            Ready to build<br />
                            something<br />
                            extraordinary?
                        </h2>
                        <div className="Svc__cta__right">
                            <p className="Svc__cta__p">
                                Let&apos;s talk about your project. Our team is ready to turn your vision into a world-class product.
                            </p>
                            <div className="Svc__cta__buttons">
                                <Link href="/contact" className="Svc__cta__btn Svc__cta__btn--primary">
                                    Contact Us
                                </Link>
                                <Link href="/products" className="Svc__cta__btn Svc__cta__btn--outline">
                                    See Our Products
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
