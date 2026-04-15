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
                            <p className="Contact__content__left__p">
                                M360 ICT Ltd. <br />
                                House# 74 Road# 7, Block# H, Banani, Dhaka-1213 <br />
                                <small>Phone: +8809638336699, +8801888798798, +8802226603136</small> <br />
                                <small>Email: info@m360ict.com</small>
                            </p>

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