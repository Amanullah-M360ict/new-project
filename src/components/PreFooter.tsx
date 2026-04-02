import React from 'react';
import './prefooter.css';
import AnimatedText from './AnimatedText';

export default function PreFooter() {
    return (
        <div className="pre-footer">
            <div className="pre-footer__gallery-container">
                <div className="pre-footer__gallery">
                    <div className="pre-footer__gallery-images">
                        <img src="https://img.freepik.com/free-photo/empty-modern-corporate-high-end-office-space-designed-ceo_482257-112494.jpg" alt="Gallery 1" className="pre-footer__gallery-img" />
                        <img src="https://img.freepik.com/free-photo/still-life-illustrating-ethics-concept_23-2149412257.jpg" alt="Gallery 2" className="pre-footer__gallery-img" />
                    </div>
                    <div className="pre-footer__gallery-title-wrapper">
                        <h2 className="pre-footer__gallery-title">
                            <AnimatedText text={["Ethics, Values,", "Culture, Sacrifice."]} />
                        </h2>
                    </div>

                    <div className="pre-footer__gallery-images">
                        <img src="https://img.freepik.com/premium-photo/businessman-hand-holding-wooden-cube-block-with-value-business-word-mission-vision-core-values-concept_42256-1423.jpg" alt="Gallery 3" className="pre-footer__gallery-img" />
                        <img src="https://img.freepik.com/premium-photo/nighttime-work-openplan-office_1286780-3008.jpg" alt="Gallery 4" className="pre-footer__gallery-img" />
                        <img src="https://img.freepik.com/free-photo/young-male-web-designers-working-computer_1303-19452.jpg" alt="Gallery 5" className="pre-footer__gallery-img" />
                    </div>
                </div>
            </div>

            <div className="pre-footer__content">
                <p className="pre-footer__text">
                    M360 ICT develops scalable travel technology<br />
                    solutions for modern online travel agencies.<br />
                    From Sabre to Travelport integrations,<br />
                    we build platforms that businesses rely on.
                </p>
                <a href="/contact" className="pre-footer__button">Contact Us</a>
            </div>
        </div>
    );
}
