import React from 'react'
import "./webring.css"
const WeBring = () => {
    return (
        <div className='container'>
            <div className="wrapper difference__content">
                <div className="difference__text text-block">
                    <h2>
                        The Difference We Bring
                    </h2>
                    <h3>
                        Drive innovation with a partner that understands your business goals.
                    </h3>
                    <p>
                        <span  >
                            Team up with developers who get the business side. We offer a rare mix of strategic insight and technical depth. Using 15+ years of industry-leading experience, we help you deliver polished products to market while the window of opportunity is wide open.
                        </span>
                    </p>
                </div>
                <div className="difference__visuals">
                    <div className="difference__cards">
                        <div className="difference__card difference__card--1">
                            <p>
                                Focus on TravelTech Solutions
                            </p>
                        </div>
                        <div className="difference__card difference__card--2">
                            <i>
                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.9999 7H11.6612C11.1745 7 10.7045 6.82252 10.3392 6.50083L8.06671 4.49917M18.9999 7C20.1045 7 20.9999 7.89543 20.9999 9V18C20.9999 19.1046 20.1045 20 18.9999 20H5C3.89543 20 3 19.1046 3 18V6C3 4.89543 3.89543 4 5 4H6.74477C7.23147 4 7.70148 4.17748 8.06671 4.49917M18.9999 7C18.9999 5.61883 17.8803 4.49917 16.4991 4.49917H8.06671" stroke="#0063C1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </i>
                            <strong>
                                1500+
                            </strong>
                            <p>
                                Successfull Projects
                            </p>
                        </div>
                        <div className="difference__card difference__card--3">
                            <strong>
                                100%
                            </strong>
                            <p>
                                Industry-Specific Expertise
                            </p>
                        </div>
                        <div className="difference__card difference__card--4">
                            <i>
                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2803_6798)">
                                        <path d="M23.2968 11.9999H16.6406L14.8593 9.18744L11.9062 14.3437L8.34373 7.31245L6.37498 11.9999H0.703125M12 5.32186L11.211 4.53291C9.03237 2.35426 5.50011 2.35426 3.32146 4.53291C1.14281 6.71152 1.14281 10.2438 3.32146 12.4224L12 21.1009L20.6785 12.4224C22.8571 10.2438 22.8571 6.71152 20.6785 4.53291C18.4998 2.35426 14.9676 2.35426 12.7889 4.53291L12 5.32186Z" stroke="#0063C1" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>

                                    </defs>
                                </svg>
                            </i>
                            <p>
                                Transparent Costs
                            </p>
                        </div>
                    </div>
                    <div className="difference__badge">
                        <img className="difference__badge-logo" src="/images/ict-logo-modified.png" alt="logo" loading="lazy" />
                        <img className="difference__badge-text" src="/images/Build-Modernize-Scale.svg" alt="Build Modernize Scale" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeBring