import AnimatedText from "@/components/AnimatedText";
import "./_style/news.css";

export default function NewsPage() {
    const newsItems = [
        {
            title: "M360 ICT Limited recognized at Commonwealth Award 2025",
            source: "TBS News",
            link: "https://www.tbsnews.net/economy/corporates/m360-ict-ltd-recognised-commonwealth-award-1227471",
            image: "/images/media1.png",
            description: "M360 ICT Limited won 'Best Use of Technology in Travel and Tourism' at the Commonwealth Business Excellence Awards 2025, held at the Concorde Hotel in Kuala Lumpur."
        },
        {
            title: "Winner of BASIS National ICT Award 2022",
            source: "BASIS",
            link: "https://bnia.basis.org.bd/win/winner-2022#:~:text=Image%20%20CHAMPION%20Medicart%20,47%20Winner",
            image: "/images/basis.jpg",
            description: "Recognized as the Winner of BASIS National ICT Award 2022 (Tourism & Hospitality) for extraordinary contributions."
        },
        {
            title: "The South Asian Business Excellence Award-2023",
            source: "RisingBD",
            link: "https://www.risingbd.com/english/business/news/100684",
            image: "/images/risingbd.webp",
            description: "M360 ICT Trabill has got ‘The South Asian Business Excellence Award-2023’ for its extraordinary contribution to the travel and tourism sector."
        },
        {
            title: "Excellence in Technology Innovation - SAPSA",
            source: "Aviation.com.bd",
            link: "https://aviation.com.bd/m360-ict-honored-at-sapsa-for-excellence-in-technology-innovation/",
            image: "/images/aviation.webp",
            description: "M360 ICT has achieved a new milestone by being recognized at the South Asia Pacific Summit & Awards (SAPSA)—one of the region’s most respected platforms."
        },
        {
            title: "Global Change Maker Awards 2024",
            source: "Observer",
            link: "https://www.observerbd.com/news/456863",
            image: "/images/observer.png",
            description: "'M360 ICT' received the award at the Global Change Maker Awards 2024 held in Bangkok, Thailand on Wednesday."
        }
    ];

    return (
        <div className="NewsPage">
            <div className="Hero">
                <div className="container">
                    <div className="Hero__wrapper">
                        <div className="Hero__wrapper-inner">
                            <h1 className="Hero__h1 Hero__h1--news">
                                <AnimatedText text="News & Awards" />
                            </h1>
                            <p className="Hero__p Hero__p--news">
                                Celebrating our achievements and milestones
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="NewsPage__main">
                <div className="container">
                    <div className="NewsPage__grid">
                        {newsItems.map((item, index) => (
                            <div key={index} className="NewsPage__card">
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="NewsPage__card-link">
                                    <div className="NewsPage__card-header">
                                        <img src={item.image} alt={item.source} className="NewsPage__card-img" />
                                    </div>
                                    <div className="NewsPage__card-body">
                                        <h2 className="NewsPage__card-title">{item.title}</h2>
                                        <p className="NewsPage__card-desc">{item.description}</p>
                                        <div className="NewsPage__card-footer">
                                            <span className="NewsPage__read-more">Read More</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="NewsPage__footer-cta">
                <div className="container">
                    <h2 className="NewsPage__footer-h2">
                        <AnimatedText text="Stay updated with our journey" />
                    </h2>
                    <p className="NewsPage__footer-p">
                        Discover more about how we are transforming the tech landscape.
                    </p>
                    <div className="NewsPage__footer-buttons">
                        <a className="Button" href="/contact">
                            Work With Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
