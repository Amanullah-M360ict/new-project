"use client"
import AnimatedText from "@/components/AnimatedText";
import "./_style.css/career.css";
import CultureSection from "@/components/CultureSection";
import { jobsData } from "@/lib/data/jobsData";
import Link from "next/link";
import { useMediaQuery } from "@/lib/hooks/use-media-query";

export default function Career() {
    // Group jobs by department
    const departments = Array.from(new Set(jobsData.map(j => j.department)));
    const isDesktop = useMediaQuery('(min-width: 768px)');
    return (
        <div className="Careers">
            <div className="Hero">
                <div className="container">
                    <div className="Hero__wrapper">
                        <div className="Hero__wrapper-inner">
                            <h1 className="Hero__h1 Hero__h1--careers">
                                <AnimatedText text={["Be happy  ", "& diverse"]} />
                            </h1>
                            <p className="Hero__p Hero__p--careers">M360ICT Careers</p>
                        </div>
                    </div>
                </div>
            </div>

            <CultureSection />
            <div className="Careers__openings">
                <div className="container">
                    <div className="Careers__openings__hero">
                        <div className="Careers__openings__hero__left">
                            <h2 className="Careers__openings__hero__h2">
                                <AnimatedText text={isDesktop ? ["Digital Empowerment Future"] : ["Digital Empowerment", "Future"]} />
                            </h2>
                            <p className="Careers__openings__hero__p text-center">
                                Join a world-class team of engineers, designers, and visionaries dedicated to building <br className="md:block hidden" /> scalable solutions that solve real-world complexities on a global scale.
                            </p>
                        </div>
                    </div>

                    <div className="Careers__job-list">
                        {departments.map(dept => (
                            <div key={dept} className="Careers__dept-section">
                                <div className="Careers__dept-label">{dept}</div>
                                <div className="Careers__dept-jobs">
                                    {jobsData.filter(j => j.department === dept).map(job => (
                                        <div key={job.id} className="Careers__job-item">
                                            <div className="Careers__job-info">
                                                <h3 className="Careers__job-title">{job.title}</h3>
                                                <div className="Careers__job-meta">
                                                    {job.location} · {job.type} · {job.level}
                                                </div>
                                            </div>
                                            <Link href={`/career/${job.slug}`} className="Careers__apply-btn">
                                                View Details
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="Careers__wanna-join">
                <div className="container">
                    <h2 className="Careers__wanna-join__h2">
                        <AnimatedText text="Want to join our team?" />
                    </h2>
                    <p className="Careers__wanna-join__p">
                        Ready to make an impact? Discover opportunities and grow your career with us.
                    </p>

                    <div className="Careers__wanna-join__buttons">
                        <a
                            className="Button"
                            href="/contact"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                        >
                            Contact Us
                        </a>
                    </div>

                </div>
            </div>


        </div>
    );
}