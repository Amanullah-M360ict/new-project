import AnimatedText from "@/components/AnimatedText";
import "./_style/contact.css";

export default function Contact() {
    return (
        <div className="Contact">
            <div className="Contact__hero">
                <div className="container">
                    <h1 className="Contact__hero__h1">
                        <AnimatedText text="Contact Us" />
                    </h1>
                    <p className="Contact__hero__p">Any questions or just want to say hi</p>
                </div>
            </div>

            <form className="Contact__content">
                <div className="container">
                    <p className="Contact__content__p">
                        For company information, recruitment, HR, or any inquiries about our services, please contact us here.
                    </p>
                    <div className="Contact__content__wrapper">
                        <div className="Contact__content__left">
                            <div className="">
                                <h3>Contact Info</h3>
                                <div className="flex gap-4 mb-4">
                                    <div className="ExactFooter__contactIconWrapper">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    </div>
                                    <span> +8809638336699, <br />+8801888798798 <br /> +8802226603136</span>
                                </div>
                                <div className="flex gap-4">
                                    <div className="ExactFooter__contactIconWrapper">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    </div>
                                    <span> info@m360ict.com</span>
                                </div>
                                <div className="flex gap-4 mt-5 " style={{ alignItems: 'flex-start' }}>
                                    <div className="ExactFooter__contactIconWrapper" style={{ marginTop: '4px' }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>

                                        {/* USA */}
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                            <span style={{ fontSize: '15px', fontWeight: '600', color: '#000', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                <span>🇺🇸</span> United States
                                            </span>
                                            <span style={{ fontSize: '13px', color: '#9ca3af' }}>447 Broadway, 2nd Floor, New York, NY 10013</span>
                                            <span style={{ fontSize: '11px', color: '#6b7280', fontFamily: 'monospace', letterSpacing: '0.5px' }}>REG: 5432198</span>
                                        </div>

                                        {/* UK */}
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                            <span style={{ fontSize: '15px', fontWeight: '600', color: '#000', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                <span>🇬🇧</span> United Kingdom
                                            </span>
                                            <span style={{ fontSize: '13px', color: '#9ca3af' }}>71-75 Shelton Street, Covent Garden, London</span>
                                            <span style={{ fontSize: '11px', color: '#6b7280', fontFamily: 'monospace', letterSpacing: '0.5px' }}>REG: 12839440</span>
                                        </div>

                                        {/* AUS */}
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                            <span style={{ fontSize: '15px', fontWeight: '600', color: '#000', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                <span>🇦🇺</span> Australia
                                            </span>
                                            <span style={{ fontSize: '13px', color: '#9ca3af' }}>100 Harris Street, Pyrmont, NSW 2009</span>
                                            <span style={{ fontSize: '11px', color: '#6b7280', fontFamily: 'monospace', letterSpacing: '0.5px' }}>REG: ABN 45 123 456 789</span>
                                        </div>

                                        {/* BD */}
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                            <span style={{ fontSize: '15px', fontWeight: '600', color: '#000', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                <span>🇧🇩</span> Bangladesh
                                            </span>
                                            <span style={{ fontSize: '13px', color: '#9ca3af' }}>House# 74, Road# 7, Block# H, Banani, Dhaka</span>
                                            <span style={{ fontSize: '11px', color: '#6b7280', fontFamily: 'monospace', letterSpacing: '0.5px' }}>REG: C-161483/2020</span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <iframe
                                className="Contact__content__left__iframe"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.839238197431!2d90.40625977600666!3d23.788738378644354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7834bbfbc75%3A0x3fcb6c647c404905!2sM360%20ICT!5e0!3m2!1sen!2sbd!4v1774783464216!5m2!1sen!2sbd"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                            <a
                                className="Contact__content__left__a"
                                href="https://maps.app.goo.gl/ZzQ82E5U7qzeK6L68"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                Open in Google Maps
                            </a>
                        </div>


                        <div className="Contact__content__form">

                            <label className="Contact__content__form__label">
                                <p className="Contact__content__form__label__p">
                                    Full Name
                                    <span className="Contact__content__form__label__p__required">
                                        Required
                                    </span>
                                </p>

                                <input
                                    type="text"
                                    className="Contact__content__form__label__input"
                                    name="name"
                                    required
                                />
                            </label>


                            <div className="Contact__content__form__row">

                                <label className="Contact__content__form__label">
                                    <p className="Contact__content__form__label__p">
                                        Email Address
                                        <span className="Contact__content__form__label__p__required">
                                            Required
                                        </span>
                                    </p>

                                    <input
                                        type="text"
                                        className="Contact__content__form__label__input"
                                        name="email"
                                        required
                                    />
                                </label>


                                <label className="Contact__content__form__label">
                                    <p className="Contact__content__form__label__p">
                                        Phone Number
                                    </p>

                                    <input
                                        type="text"
                                        className="Contact__content__form__label__input"
                                        name="tel"
                                    />
                                </label>

                            </div>


                            <label className="Contact__content__form__label">

                                <p className="Contact__content__form__label__p">
                                    Inquiry Type
                                    <span className="Contact__content__form__label__p__required">
                                        Required
                                    </span>
                                </p>

                                <select
                                    className="Contact__content__form__label__input Contact__content__form__label__input--select"
                                    name="inquiry"
                                    required
                                >
                                    <option value="">Select inquiry type</option>

                                    <option value="Project request or consultation">
                                        Project request or consultation
                                    </option>

                                    <option value="Apply for recruitment or contract work">
                                        Apply for recruitment or contract work
                                    </option>

                                    <option value="Business partnership">
                                        Business partnership
                                    </option>

                                    <option value="Other inquiries">
                                        Other inquiries
                                    </option>

                                </select>
                            </label>


                            <label className="Contact__content__form__label">

                                <p className="Contact__content__form__label__p">
                                    Message
                                    <span className="Contact__content__form__label__p__required">
                                        Required
                                    </span>
                                </p>

                                <textarea
                                    className="Contact__content__form__label__input"
                                    rows={4}
                                    name="message"
                                    required
                                />

                            </label>

                        </div>


                        <div className="Contact__content__buttons">
                            <button className="Button">Send Message</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
}