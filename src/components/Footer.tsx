import PreFooter from './PreFooter';
import StatsSection from './StatsSection';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <div style={{
            overflow: "hidden"
        }}>

            <PreFooter />
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__grid">
                        <div className="footer__section">
                            <h3 className="footer__section-title">Products</h3>
                            <div className="footer__products-wrapper">
                                <ul className="footer__list">
                                    <li className="footer__list-item">
                                        <a
                                            className="footer__link footer__link--external"
                                            href="https://www.joomshaper.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>Trabill</span>
                                        </a>
                                    </li>
                                    <li className="footer__list-item">
                                        <a className="footer__link footer__link--external" href="https://www.themeum.com/" target="_blank" rel="noopener noreferrer">
                                            <span>Hotel360</span>

                                        </a>
                                    </li>
                                    <li className="footer__list-item">
                                        <a className="footer__link footer__link--external" href="https://droip.com/" target="_blank" rel="noopener noreferrer">
                                            <span>ERPBD</span>

                                        </a>
                                    </li>
                                    <li className="footer__list-item">
                                        <a className="footer__link footer__link--external" href="https://icofont.com/" target="_blank" rel="noopener noreferrer">
                                            <span>T360TRAVEL</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="footer__list">
                                    <li className="footer__list-item">
                                        <a className="footer__link footer__link--external" href="https://tutorlms.com/" target="_blank" rel="noopener noreferrer">
                                            <span>CRM360</span>

                                        </a>
                                    </li>
                                    <li className="footer__list-item">
                                        <a className="footer__link footer__link--external" href="https://growfund.com/" target="_blank" rel="noopener noreferrer">
                                            <span>Dokani</span>
                                        </a>
                                    </li>
                                    <li className="footer__list-item">
                                        <a className="footer__link footer__link--external" href="https://www.joomshaper.com/page-builder" target="_blank" rel="noopener noreferrer">
                                            <span>Recruit 360</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="footer__section">
                            <h3 className="footer__section-title">Discover</h3>
                            <div className="footer__discover-wrapper">
                                <nav className="footer__nav">
                                    <ul className="footer__list">
                                        <li className="footer__list-item">
                                            <a className="footer__link" href="/about/">About</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a className="footer__link" href="/career/">Careers</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a className="footer__link" href="/contact/">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                                <ul className="footer__list">
                                    <li className="footer__list-item">
                                        <a className="footer__link footer__link--social" href="https://www.facebook.com/M360ICT" target="_blank" rel="noopener noreferrer">
                                            Facebook
                                        </a>
                                    </li>
                                    <li className="footer__list-item">
                                        <a className="footer__link footer__link--social" href="https://www.linkedin.com/company/m360-ict/" target="_blank" rel="noopener noreferrer">
                                            LinkedIn
                                        </a>
                                    </li>
                                    <li className="footer__list-item">
                                        <a className="footer__link footer__link--social" href="https://x.com/IctM360" target="_blank" rel="noopener noreferrer">
                                            X (Twitter)
                                        </a>
                                    </li>

                                    <li className="footer__list-item">
                                        <a className="footer__link footer__link--social" href="https://www.youtube.com/@m360ict" target="_blank" rel="noopener noreferrer">
                                            Youtube
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="Footer">
                <div className="container">
                    <div className="Footer__wrapper">
                        <p className="Footer__p">
                            ©{year} M360 ICT LTD. All Rights Reserved.
                        </p>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                            fontSize: "16px"
                        }}>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
