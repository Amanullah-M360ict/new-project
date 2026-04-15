import AnimatedText from "@/components/AnimatedText";
import "./_style/vendors.css";

export const metadata = {
    title: "Our Trusted Vendors & Partners | M360ICT",
    description: "M360ICT partners with world-class technology vendors to provide cutting-edge solutions. Explore our network of trusted providers.",
};

export default function VendorsPage() {

    const heroImages = [

        "https://th.bing.com/th/id/OIP.ytqyhJM2Y4kZb7rV2Nn0mgHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        "https://th.bing.com/th/id/OIP.wAKg-Fwc3o_qIuGNQEk5lgHaFY?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",


    ];

    const rowCount = 5;
    const rows = Array.from({ length: rowCount }, (_, i) => {
        const rowImages = [];
        for (let j = 0; j < 6; j++) {
            rowImages.push(heroImages[(i + j) % heroImages.length]);
        }
        return rowImages;
    });

    const vendors = [
        {
            name: "Microsoft Partner",
            description: "As a certified Microsoft Partner, we leverage the power of Microsoft software and services to build and deliver innovative solutions for our clients.",
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
        },
        {
            name: "AWS (Amazon Web Services)",
            description: "Our collaboration with AWS allows us to provide scalable, reliable, and secure cloud computing solutions tailored to your business needs.",
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
        },
        {
            name: "Microsoft Azure",
            description: "We utilize Azure's comprehensive suite of cloud services to help our clients build, manage, and deploy applications on a global scale.",
            logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
        },
        {
            name: "Sabre",
            description: "Partnering with Sabre, a leading software and technology company that powers the global travel industry.",
            logo: "/images/partners/sabre.png"
        },

        {
            name: "Oracle",
            description: "Leveraging Oracle technology to deliver robust and high-performance enterprise solutions.",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
        }
    ];

    return (
        <div className="Vendors">
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
                            <h1 className="vendors_Hero__h1 Vendors__mb">
                                <AnimatedText text={["Our Strategic", "Technology Vendors"]} />
                            </h1>
                            <p className="Hero__p">
                                Empowering Growth through Partnerships
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Vendors__main">
                <div className="container">
                    <div className="Vendors__intro">
                        <h2 className="Vendors__h2">Strategic Collaborations</h2>
                        <p className="Vendors__intro-text">
                            At M360ICT, we believe in the power of collaboration. We partner with the world's leading technology providers to ensure our clients receive the most advanced, reliable, and scalable solutions available in the market today.
                        </p>
                    </div>

                    <div className="Vendors__grid">
                        {vendors.map((vendor, index) => (
                            <div className="VendorCard" key={index}>
                                <div className="VendorCard__logo-box">
                                    <img src={vendor.logo} alt={vendor.name} className="VendorCard__logo" />
                                </div>
                                <h3 className="VendorCard__h3">{vendor.name}</h3>
                                <p className="VendorCard__p">{vendor.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="Vendors__questions">
                <div className="container">
                    <h5 className="Vendors__questions__h5">
                        <AnimatedText text="Looking for a specific solution?" />
                    </h5>
                    <p className="Vendors__questions__p">
                        Our vendor network is constantly expanding. If you need a solution involving a specific provider, let's talk.
                    </p>
                    <div className="Vendors__questions__buttons">
                        <a className="Button" href="/contact">
                            Partner With Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
