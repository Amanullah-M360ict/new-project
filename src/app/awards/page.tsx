import AnimatedText from "@/components/AnimatedText";
import AwardsSection from "@/components/AwardsSection";
import "./_style/awards.css";
import "../products/_style/products.css";

export default function Awards() {
    const heroImages = [
        "/images/awards/received-award/award-2.png",
        "/images/awards/received-award/basis-national-ict.png",
        "/images/awards/received-award/commonwealth-award.png",
        "/images/awards/received-award/global-change-makers.jpg",
        "/images/awards/received-award/sapsaa-award.jpg",
        "/images/awards/received-award/south-asian-business.jpg"
    ];

    const rowCount = 5;
    const rows = Array.from({ length: rowCount }, (_, i) => {
        const rowImages = [];
        for (let j = 0; j < 6; j++) {
            rowImages.push(heroImages[(i + j) % heroImages.length]);
        }
        return rowImages;
    });

    return (
        <div className="Awards">
            <div className="Hero">
                <div className="Hero__grid-container">
                    <div className="Hero__grid">
                        {rows.map((row, index) => (
                            <div key={`row-${index}`} className={`Hero__row Hero__row--${index + 1}`}>
                                {[...row, ...row, ...row].map((img, i) => (
                                    <img key={`row${index}-${i}`} src={img} alt="" className="Hero__grid-img" />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="Hero__overlay"></div>
                <div className="container">
                    <div className="Hero__wrapper">
                        <div className="Hero__wrapper-inner">
                            <h1 className="award_Hero__h1 Awards__mb">
                                <AnimatedText text={["Honors &", "Achievements"]} />
                            </h1>
                            <p className="Hero__p">
                                Celebrating Excellence
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '100px' }} >
                <AwardsSection />

            </div>
            <div className="Products__questions" style={{ marginTop: '140px' }}>
                <div className="container">
                    <h5 className="Products__questions__h5">
                        <AnimatedText text={["Want to achieve ", "greatness together?"]} />
                    </h5>
                    <p className="Products__questions__p">
                        Learn how our award-winning solutions can elevate your business to new heights.
                    </p>
                    <div className="Products__questions__buttons">
                        <a className="Button" href="/contact">
                            Partner With Us
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}
