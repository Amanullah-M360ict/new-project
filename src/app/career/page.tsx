import AnimatedText from "@/components/AnimatedText";
import "./_style.css/career.css";

export default function Career() {
    return (
        <div className="Careers">
            <div className="Hero">
                <div className="container">
                    <div className="Hero__wrapper">
                        <div className="Hero__wrapper-inner">
                            <h1 className="Hero__h1 Hero__h1--careers">
                                <AnimatedText text="Be happy & diverse" />
                            </h1>
                            <p className="Hero__p Hero__p--careers">M360ICT Careers</p>
                        </div>
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