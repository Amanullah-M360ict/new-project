import fs from 'fs';
import path from 'path';
import AnimatedText from "@/components/AnimatedText";
import "./_style/fairs.css";
import "./_style/fairs-modal.css";
import FairImages from './FairImages';

export const metadata = {
    title: "Industry Fairs & Exhibitions | M360ICT",
    description: "M360ICT actively engages in top-tier tourism and technology exhibitions around the world. Explore our global footprint.",
};

export default function FairsPage() {
    const participantsDir = path.join(process.cwd(), 'public', 'images', 'fair-participant');

    let fairs: { name: string, folderName: string, images: string[] }[] = [];
    try {
        if (fs.existsSync(participantsDir)) {
            const folders = fs.readdirSync(participantsDir, { withFileTypes: true });

            fairs = folders
                .filter(dirent => dirent.isDirectory())
                .map(dirent => {
                    const folderName = dirent.name;
                    const folderPath = path.join(participantsDir, folderName);
                    const files = fs.readdirSync(folderPath);

                    const images = files.filter(f => f.match(/\.(jpg|jpeg|png|webp|gif)$/i));

                    return {
                        name: folderName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                        folderName: folderName,
                        images: images.map(img => `/images/fair-participant/${folderName}/${img}`)
                    };
                })
                .filter(f => f.images.length > 0)
                .sort((a, b) => {
                    const yearA = a.folderName.match(/\d{4}/);
                    const yearB = b.folderName.match(/\d{4}/);
                    const yA = yearA ? parseInt(yearA[0], 10) : 0;
                    const yB = yearB ? parseInt(yearB[0], 10) : 0;

                    if (yA !== yB) {
                        return yB - yA; // Descending by year
                    }
                    // Fallback to reverse alphabetical
                    return b.name.localeCompare(a.name);
                });
        }
    } catch (e) {
        console.error("Error reading fair participant dir:", e);
    }

    const allHeroImages = fairs.flatMap(f => f.images);
    const rowCount = 5;
    const itemsPerRow = Math.ceil(allHeroImages.length / rowCount);

    const rows = Array.from({ length: rowCount }, (_, i) =>
        allHeroImages.slice(i * itemsPerRow, (i + 1) * itemsPerRow)
    );

    const awardsDir = path.join(process.cwd(), 'public', 'images', 'awards', 'received-award');
    let awardVideos: string[] = [];
    let awardImages: string[] = [];
    try {
        if (fs.existsSync(awardsDir)) {
            const allFiles = fs.readdirSync(awardsDir);
            awardVideos = allFiles
                .filter(f => f.match(/\.(mp4|webm)$/i))
                .map(file => `/images/awards/received-award/${file}`);
            awardImages = allFiles
                .filter(f => f.match(/\.(jpg|jpeg|png|webp|gif)$/i))
                .map(file => `/images/awards/received-award/${file}`);
        }
    } catch (e) {
        console.error("Error reading awards dir:", e);
    }

    return (
        <div className="Fairs">
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
                            <h1 className="fairs_Hero__h1 Fairs__mb">
                                <AnimatedText text={["Industry Events", "Global Footprint"]} />
                            </h1>
                            <p className="Hero__p">
                                Connecting at Events
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Fairs__awards">
                <div className="container">


                    {/* Featured Videos */}
                    <div className="Awards__featured">
                        {awardVideos.map((video, idx) => (
                            <div key={`v-${idx}`} className="Award__video-featured">
                                <video src={video} autoPlay loop muted playsInline />
                                <div className="Award__video-overlay">
                                    <span>Featured Recognition</span>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>

            <div className="Fairs__main">
                <div className="container">
                    <div className="Fairs__intro">
                        <h2 className="Fairs__h2">Our Presence</h2>
                        <p className="Fairs__intro-text">
                            M360ICT proudly participates in global tourism, technology, and business exhibitions, showcasing innovation and building strong <br className='md:block hidden' /> connections in the travel tech industry.
                        </p>
                    </div>

                    <dl className="Fairs__main__dl">
                        {fairs.map((fair, index) => (
                            <div className="Fairs__main__dl__item" key={`fair-${index}`}>
                                <h3 className="Fairs__main__dl__item__dt">
                                    <AnimatedText text={fair.name} />
                                </h3>

                                <FairImages
                                    images={fair.images}
                                    fairName={fair.name}
                                    introText={`Immersing ourselves in the heart of ${fair.name}, we showcased our latest innovations and connected with industry leaders. Our participation underscores our commitment to elevating the global digital ecosystem and providing cutting-edge solutions for modern travel enterprises.`}
                                />
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            <div className="Fairs__questions">
                <div className="container">
                    <h5 className="Fairs__questions__h5">
                        <AnimatedText text="Interested in our journey?" />
                    </h5>
                    <p className="Fairs__questions__p">
                        To explore partnerships, discover our innovations, or invite us to your next big event, let's get in touch.
                    </p>
                    <div className="Fairs__questions__buttons">
                        <a className="Button" href="/contact">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
