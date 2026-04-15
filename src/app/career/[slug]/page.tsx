"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { jobsData } from "@/lib/data/jobsData";
import "./_style/details.css";

export default function CareerDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const job = jobsData.find((j) => j.slug === params.slug);

    if (!job) {
        return (
            <div className="container" style={{ padding: "100px 0", textAlign: "center" }}>
                <h1>Job not found</h1>
                <Link href="/career">Return to Careers</Link>
            </div>
        );
    }

    return (
        <div className="CareerDetails">
            {/* ── Header / Hero ── */}
            <header className="CareerDetails__hero">
                <div className="CareerDetails__inner">
                    <nav className="CareerDetails__breadcrumb">
                        <Link href="/career">Careers</Link> / <span>{job.department}</span>
                    </nav>
                    <h1 className="CareerDetails__title">{job.title}</h1>

                    <div className="CareerDetails__meta-grid">
                        <div className="CareerDetails__meta-item">
                            <span className="CareerDetails__meta-label">Location</span>
                            <span className="CareerDetails__meta-val">{job.location}</span>
                        </div>
                        <div className="CareerDetails__meta-item">
                            <span className="CareerDetails__meta-label">Job Type</span>
                            <span className="CareerDetails__meta-val">{job.type}</span>
                        </div>
                        <div className="CareerDetails__meta-item">
                            <span className="CareerDetails__meta-label">Level</span>
                            <span className="CareerDetails__meta-val">{job.level}</span>
                        </div>
                        <div className="CareerDetails__meta-item">
                            <span className="CareerDetails__meta-label">Compensation</span>
                            <span className="CareerDetails__meta-val">{job.salary}</span>
                        </div>
                    </div>

                    <div className="CareerDetails__actions">
                        <Link href="/contact" className="CareerDetails__apply-main">
                            Apply Now
                        </Link>

                    </div>
                </div>
            </header>

            {/* ── Content ── */}
            <main className="CareerDetails__content">
                <div className="container CareerDetails__inner">
                    <p className="CareerDetails__intro">{job.introduction}</p>

                    <section className="CareerDetails__section">
                        <h2 className="CareerDetails__section-h2">Key Responsibilities</h2>
                        <ul className="CareerDetails__list">
                            {job.responsibilities.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="CareerDetails__section">
                        <h2 className="CareerDetails__section-h2">Requirements</h2>
                        <ul className="CareerDetails__list">
                            {job.requirements.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="CareerDetails__section">
                        <h2 className="CareerDetails__section-h2">Benefits & Perks</h2>
                        <div className="CareerDetails__benefits-grid">
                            {job.benefits.map((item, i) => (
                                <div key={i} className="CareerDetails__benefit-tag">{item}</div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            {/* ── Final CTA ── */}
            <section className="CareerDetails__cta">
                <div className="container">
                    <h2 className="CareerDetails__cta-h2">Ready to apply? We can't wait to meet you!</h2>
                    <p className="CareerDetails__cta-sub">Next, you'll face an assessment to proceed. Apply for one job at a time and prepare well.</p>
                    <Link href="/contact" className="CareerDetails__apply-main">
                        Apply Now
                    </Link>
                </div>
            </section>
        </div>
    );
}
