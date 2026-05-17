import Image from 'next/image'
import React from 'react'
import "./review.css"

const Review = () => {
    return (
        <div className='pb-10 pt-4 md:pb-26'>
            <div className='container'>
                <div className="Review__intro" style={{ marginBottom: '30px', textAlign: 'center' }}>
                    <h2 className='m-0' style={{ fontSize: '36px', fontWeight: '600', color: '#1a1a1a', letterSpacing: '-1px' }}>Chairman's Message</h2>
                </div>
                <div className="embla__slide EmblaSlideTestimonial">
                    <blockquote className="Testimonial">
                        <svg
                            width={32}
                            height={32}
                            viewBox="0 0 32 32"
                            fill="none"
                            className="QuoteIcon"
                        >
                            <path
                                d="M31.1899 32H19.173V19.2542L24.3038 0H32L23.8987 19.2542H31.1899V32ZM12.1519 32H0V19.2542L5.40084 0H13.097L4.86076 19.2542H12.1519V32Z"
                                fill="black"
                            />
                        </svg>
                        <div className="TestimonialContent">
                            <p className="Text TextVariantHeading TextVariantHeadingSize6">
                                M360 ICT represents a commitment to building practical,
                                reliable, and scalable technology solutions. What I value
                                most is the team’s disciplined approach to
                                problem-solving—focusing on real business needs such as
                                accounting systems, ERP platforms, and travel technology
                                rather than short-term trends. Their consistency,
                                transparency, and long-term vision make M360 ICT a company
                                I genuinely trust and stand behind.
                            </p>
                            <footer className="TestimonialFooter">
                                <Image
                                    src={"/images/jordar.png"}
                                    alt="Phil Mui"
                                    loading="lazy"
                                    decoding="async"
                                    width={100}
                                    height={100}
                                    className="Image TestimonialImage"
                                />
                                <div className="TestimonialFooterContent">
                                    <p className="Text TextVariantParagraph TextVariantParagraphSize3 TestimonialName">
                                        MD. Dr. Mahbubul Joarder
                                    </p>
                                    <p className="Text TextVariantLabel !text-[13px] space-y-2 TextVariantLabelSize1 TestimonialJobTitle pt-1">
                                        Dean at Metropolitan College of New York (MCNY).
                                        <br />
                                        Chancellor’s Nominee to the Governing Body, Islamic
                                        University, Bangladesh.
                                        <br />
                                        Certified Management Consultant (CMC®), Institute of
                                        Management Consultants, USA.
                                        <br />
                                        Management & Project Management Consultant, (30+ years
                                        of consulting experience across industries).
                                        <br />
                                        Chairman, M360 ICT.
                                        <br />
                                        UNDP / UNCTAD Consultant Government of Bangladesh.
                                    </p>
                                </div>
                            </footer>
                        </div>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

export default Review