import AnimatedText from "@/components/AnimatedText";
import "./_style/products.css";

export default function Products() {

    const ourClients = [
        { name: "Bextrade Travel", logo: "https://www.bextrade.net/themes/beximcotravel/assets/images/logo.png" },
        { name: "Assure Tourism", logo: "https://assuretourism.com/svg/logo.2860fecd.svg" },
        { name: "DEBON AIR", logo: "https://debonairaviation.com/_next/image?url=%2Flogo.png&w=128&q=75" },
        { name: "Travel Trip BD", logo: "https://traveltripbd.com/_next/image?url=%2Flogo-trans.png&w=256&q=75" },
        { name: "Booking Expert", logo: "https://bookingexpert.us/_next/image?url=%2Flogo.png&w=256&q=75" },
        { name: "Sena Kalyan Travels & Tours", logo: "https://senatravels.com/_next/image?url=%2Flogo.png&w=1920&q=75" },
        { name: "Discovery tour & logistic", logo: "https://ota.discoverbangla.com/_next/image?url=%2Fassets%2Flogo.png&w=256&q=75" },
        { name: "WFTT", logo: "https://media.licdn.com/dms/image/v2/D560BAQHbURqyQtp28w/company-logo_200_200/company-logo_200_200/0/1707757760688?e=2147483647&v=beta&t=pY1t3JiLnlRY6oWBITjb5BvNDoXxQf4S4WPshyYp2Ic" },
        { name: "DBL", logo: "https://booking.dbltravels.com/_next/image?url=%2Flogo-white-trans.png&w=128&q=75" },
        { name: "Fanam", logo: "https://www.fanamtrip.com/_next/image?url=%2FfanamTrip.png&w=256&q=75" },
        { name: "Fly Farhan", logo: "https://flyfarhan.com.bd/_next/image?url=%2Ffly-farhan-2.png&w=1920&q=75" },
        { name: "M & N", logo: "https://www.ticketbd.net/_next/image?url=https%3A%2F%2Fm360ict-data.s3.ap-south-1.amazonaws.com%2Fbooking-expert-v2%2Fagent%2Fagency-files%2F1756099130394-579833000.jpeg&w=1920&q=75" },
        { name: "Kingdom Tours and Travels", logo: "https://travelskingdom.com/_next/image?url=%2FkindgomNewLogo.png&w=256&q=100" },
        { name: "Rupali Trip Holidays", logo: "https://rupalitrip.com/_next/image?url=%2FWFTT-logo-white.png&w=256&q=75" },
        { name: "Star Haven Tour & Travel", logo: "https://starhaventravel.com/_next/image?url=%2Fshtt_logo.png&w=128&q=75" },
        { name: "FlyTriva", logo: "https://ota.flytriva.com/_next/image?url=%2Fflytriva.png&w=256&q=75" },
        { name: "Travelicious", logo: "https://ourtravelicious.com/logo1.svg" },
        { name: "Al-amin Tours & Travels", logo: "https://alamintourntravels.com/_next/image?url=%2Flogo.jpeg&w=1920&q=75" },
        { name: "Airspan", logo: "https://www.buytickets.com.bd/_next/image?url=%2Flogo.png&w=128&q=75" },
        { name: "Akash Bari", logo: "https://www.akashbariholidays.com/_next/image?url=%2Flogo.png&w=128&q=75" },
        { name: "Sania Air International", logo: "https://saniaair.com/_next/image?url=%2Fsania_logo.png&w=256&q=75" },
        { name: "Cloud Trips (East Couch)", logo: "https://cloudtrips.com/_next/image?url=%2FcloudTrip_logo.png&w=128&q=75" },
        { name: "Sharothi Online", logo: "https://sharothionline.com/_next/image?url=%2FbuyTicketsLogo.png&w=256&q=75" },
        { name: "Royal Flys (Sky Bound)", logo: "https://skyboundbd.com/_next/image?url=%2Fskybound.png&w=256&q=75" },
        { name: "Vision Holidays", logo: "https://visionholidays.com.bd/_next/image?url=%2Fvision_holidays_logo.png&w=256&q=75" },
        { name: "Amar Booking", logo: "https://amarbooking.com/_next/image?url=%2Fglocal_trip_header_logo.png&w=2048&q=75" },
        { name: "Finlay Travels", logo: "https://finlaytravels.com/logo.png" },
        { name: "FlyCon", logo: "https://flycon.net/_next/image?url=%2Flogo.png&w=128&q=75" },
        { name: "Universal Travel BD", logo: "https://www.nusukibd.com/_next/image?url=%2Funiversal_logo.png&w=256&q=75" },
        { name: "Lantabur", logo: "https://lantaburtours.com/_next/image?url=%2FLantabur_Tours%20%26%20Travel_Logo.png&w=384&q=75" }
    ];

    const data = [
        {
            title: "Customer Relationship Management",
            productName: "CRM360",
            logo: "/images/products/CRM.png",
            href: "https://employee.crm360world.com",
            desc: "Customer Relationship Management",
            longDesc: "Streamline customer relationships and internal communication. Our CRM system helps manage leads, employee activities, and client interactions in one centralized dashboard.",
            image: "/images/products/crm-large.png"
        },
        {
            title: "The Hotel 360",
            productName: "The Hotel 360",
            logo: "/images/products/reservation1.png",
            href: "https://app.thehotel360.com",
            desc: "Hotel & Restaurant Management",
            longDesc: "A fully integrated hotel and restaurant management platform. Handle bookings, room administration, guest services, and billing seamlessly to provide the best hospitality experience.",
            image: "/images/products/hotel-large.png"
        },
        {
            title: "Dokani",
            productName: "POS Software",
            logo: "/images/products/dokani.png",
            href: "https://v2.dokani.live/login/",
            desc: "Sales software for retail shops",
            longDesc: "Smart point-of-sale and sales management software tailored for retail shops. Dokani simplifies inventory tracking, daily sales reporting, and retail accounting for any shop size.",
            image: "/images/products/dokani-large.png"
        },

        {
            title: "ERP BD",
            productName: "ERP Software",
            logo: "/images/products/erp.png",
            href: "https://erpbd.ontheway.com.bd",
            desc: "Enterprise Resource Planning",
            longDesc: "An Enterprise Resource Planning system natively built to support regional businesses. Integrate your supply chain, finance, HR, and operations into a single cohesive platform.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Recruit360",
            productName: "Recruitment Software",
            logo: "/images/products/recruitment.png",
            href: "https://account.recruit360.biz",
            desc: "Recruitment & HR software",
            longDesc: "Next-generation recruitment and human resources software. Manage job postings, track applicant pipelines, and automate your hiring workflows with complete organizational visibility.",
            image: "/images/products/recruitment-large.png"
        },
    ];

    const otherProjects = [
        { name: "Sohi aviation (B2C)", link: "https://sohiaviation.com" },
        { name: "FLYnGO (Tourist police)", link: "https://flyngo.xyz/" },
        { name: "Meherba", link: "https://www.meherba.com" },
        { name: "DYNAMIC Tours & Travels", link: "https://sharothionline.com" },
        { name: "Travel Architect", link: "https://travelarchitect.net/" },
        { name: "Pilot Tours & Travels Limited", link: "https://pilottravels.com.bd/" },
        { name: "Asia Net Hotels", link: "https://ota.asianethotels.com" },
        { name: "L Tour Maldives Pvt Limited", link: "https://ltourmv.com/" },
        { name: "Aviation Hub BD", link: "https://aviationhubbd.com/" },
        { name: "FlyGrid", link: "https://fly-grid.com" },
        { name: "Amar Travels", link: "http://ota.amartravels.com.bd/" },
        { name: "HopNgo", link: "https://hopngo.net/" },
        { name: "Joy Air", link: "https://joyair.co/" },
        { name: "On The Way", link: "https://flight.ontheway.com.bd/" },
        { name: "Ayat Tours and Travels", link: "https://ayatairtravels.com/" },
        { name: "Sydney Tread Int.", link: "http://sydneytradeint.com" },
        { name: "Global Air Travel Express", link: "https://globalairtravelexpress.com/" },
        { name: "firoz travels", link: "" },
        { name: "Peaceful Travels", link: "https://peacefultravelsbd.com/" },
        { name: "JM Travels and Tours", link: "https://jmtravelsandtours.com" },
        { name: "Monihar Tours and Travels", link: "http://monihartoursandtravels.com" },
        { name: "Ticket BD/M & N Holidays", link: "http://ticketbd.net" },
        { name: "AV Aviation Air Travels", link: "https://avaviationbd.com" },
        { name: "S.S International", link: "https://airticketssint.com" },
        { name: "Sky Hub Bangladesh", link: "https://www.skyhubbd.com/" },
        { name: "NEEL AVIATION", link: "https://neel-aviation.com" },
        { name: "BGD Tours And Travels", link: "http://bgdtravels.com/" },
        { name: "Flight Point", link: "https://theflight-point.com/" },
        { name: "KBC Tours and Travels", link: "https://kbctoursandtravels.com" },
        { name: "Ark Travels", link: "https://ark-travels.com" },
        { name: "Onmax Limited", link: "https://onmaxholidays.com" },
        { name: "Limpid Travels", link: "http://partner.limpidtravels.com" },
        { name: "IMO Travels", link: "https://imotravelsbd.com" },
        { name: "Travel Online", link: "https://www.urejai.com" },
        { name: "Binge Travelers", link: "https://bingetravelers.net" },
        { name: "Salehia Travels and Tours", link: "https://salehiatravelsandtours.com" },
        { name: "SadiqTrip Travels & Consultancy", link: "http://sadiqtrip.com" },
        { name: "Fly Mim Tour & Travels", link: "https://flymim.com/" },
        { name: "Al-Mabruk Tours & Travels", link: "http://almabrukbd.com" },
        { name: "Cardinal Tour", link: "http://www.cardinaltourtravel.com" },
        { name: "Flourish Tours and Travel", link: "http://flourishtourstravels.com/" },
        { name: "Glocal Trip Consultant", link: "https://glocaltripconsultant.com/" },
        { name: "Hornbill Travels & Tours Ltd.", link: "https://ticket.hornbillttl.com/" },
        { name: "Business World 24", link: "http://businessworld24bd.com" },
        { name: "BDindi Traverra", link: "https://www.bdindi.com" },
        { name: "Fly Duronto Aviation", link: "http://flyduronto.com" },
        { name: "Rifa Travels", link: "https://rifatravels.com/" },
        { name: "Taqwa Travels", link: "https://taqwatravelsbd.com/" },
        { name: "RK Tour and Travels", link: "https://rktourandtravel.com/" },
        { name: "Riazul Jannah Travel Consultancy", link: "https://Riazul-jtc.com/" },
        { name: "F G Tours and Travels", link: "https://fgtoursntravels.com/" },
        { name: "Ticket master BD", link: "https://ticketmasterbd.net" },
        { name: "Holiday Art BD", link: "https://holidayartbd.com/" },
        { name: "Travel Mirror", link: "https://travelmirror.com.bd/" },
        { name: "Bhuban Majhi Travel and Tourism ltd.", link: "https://bhubanmajhi.com.bd" },
        { name: "Huzrat Air Track Int.", link: "http://huzrat.com/" },
        { name: "AH Travels", link: "https://ahtravelsbd.com/" },
        { name: "A1 Traveler", link: "http://a1traveler.xyz/" },
        { name: "Musafir Travel", link: "https://ota.mtltd.com.bd/" },
        { name: "Amar Booking", link: "https://amarbooking.com/" },
        { name: "Trip Expert", link: "https://tripexpert.com.bd" },
        { name: "Air Bee Holidays", link: "https://airbeeholidays.com" },
        { name: "Safina Tour and travels Ltd", link: "https://safinatourandtravels.com" },
        { name: "Blue Sky Tours & Travels", link: "https://blueskytoursandtravels.com" },
        { name: "Sammoni Tours and Travels BD", link: "http://sammonitravels.com" },
        { name: "Usman Travels And Tours", link: "https://usmantravelsandtours.com" },
        { name: "FLY Bird", link: "https://www.flybird-bd.net/" },
        { name: "Asia Net", link: "https://ota.asianethotels.com/" },
        { name: "Fly Dream Aviation & Consultancy", link: "https://ota.weflydream.com" },
        { name: "Priyo - Tours and Travels", link: "https://www.priyotours.net" },
        { name: "GoTo Travel", link: "https://goto.com.bd" },
        { name: "Zam Zam Travel Aviation", link: "http://zamzamtravelaviation.com" },
        { name: "Max Fly Travels", link: "http://maxflytravels.com" },
        { name: "Tour Unlock", link: "http://tourunlock.com" },
        { name: "Panchashar Travels", link: "http://panchashartravels.com" },
        { name: "Safwan Travels and Tour", link: "https://safwantravels.com" },
        { name: "K.N Global Aviation & Travels", link: "http://knglobaltravels.com/" },
        { name: "TRUST GLOBAL TOURS AND TRAVELS", link: "http://trustglobalbd.com/" },
        { name: "Cox’s Tours & Travels", link: "https://www.ota.coxstourstravels.com/" },
        { name: "Global Gateway", link: "http://www.globalgatewaybd.com" },
        { name: "Bait Al NUKHBA Tourism LLC", link: "http://baitalnukhba.com" },
        { name: "Mollah  Tours and Travels", link: "https://mollahtravelsbd.com" },
        { name: "Flyaxies", link: "https://flyaxies.com/" },
        { name: "Flyrume", link: "http://flyrume.com" },
        { name: "Trip On Demand", link: "http://tripondemands.com" },
        { name: "SureTrip International", link: "https://www.suretrip.net" },
        { name: "Travel World Consultancy", link: "https://www.travelworldconsultancy.com" },
        { name: "Dream Travels", link: "http://www.dreamtravelsbd.com" },
        { name: "Evergreen Holidays", link: "http://www.eholidaysbd.com" },
        { name: "Al Amin Hajj Kafela", link: "https://flycon.net/" },
    ];

    return (
        <div className="Products">
            <div className="Hero">
                <div className="container">
                    <div className="Hero__wrapper">
                        <div className="Hero__wrapper-inner">
                            <h1 className="Hero__h1 Hero__h1--products">
                                <AnimatedText text="Products Our Journey" />
                            </h1>
                            <p className="Hero__p Hero__p--products">
                                How we change the world
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Products__main">
                <div className="container">
                    <h2 className="Products__h2">Our Main Projects</h2>
                    <dl className="Products__main__dl">
                        <div className="Products__main__dl__item">
                            <h3 className="Products__main__dl__item__dt">
                                <AnimatedText text="Trabill" />
                            </h3>

                            <div className="Products__main__dl__item__box">

                                <div className="Products__main__dl__item__box__header">
                                    <img
                                        className="Products__main__dl__item__box__header__img"
                                        src="/images/products/trabill.png"
                                        width={150}
                                    />

                                    <div className="Products__main__dl__item__box__header__center">
                                        <h4 className="Products__main__dl__item__box__header__center__h4">
                                            IATA Integrated Solutions
                                        </h4>

                                        <p className="Products__main__dl__item__box__header__center__p">
                                            IATA, NON-IATA, Single entry, double entry accounting management software
                                        </p>
                                    </div>

                                    <a
                                        className="Products__go-to-site"
                                        href="https://www.iata.trabill.biz/"
                                        target="_blank"
                                        rel="nofollow noopener noreferrer"
                                    >
                                        Go to site
                                    </a>
                                </div>

                                <img
                                    className="Products__main__dl__item__box__img"
                                    src="/images/products/trabill-large.png"
                                />
                                <p className="Products__main__dl__item__box__p">
                                    A complete travel agency management software designed to simplify
                                    airline ticketing, invoicing, accounting, and financial tracking
                                    in one powerful dashboard. The system allows agencies to manage
                                    air ticket invoices, visa and tour package billing, reissues,
                                    refunds, vendor balances, BSP reports, and remittance monitoring
                                    with ease. With real-time sales reports, vendor management, and
                                    automated financial insights, it helps travel businesses operate
                                    efficiently, reduce manual work, and maintain accurate financial
                                    control from a single secure platform.
                                </p>

                                <div className="Products__main__dl__item__box__drama">
                                    <div className="Index__products__dl__item__drama">
                                        <div className="Index__products__dl__item__drama__header">
                                            <img
                                                className="Index__products__dl__item__drama__header__img"
                                                src="/images/Index__products__dl__item__drama__header__img.svg"
                                            />
                                            <h4 className="Index__products__dl__item__drama__header__h4">
                                                Multi version
                                            </h4>
                                            <small className="Index__products__dl__item__drama__header__small">
                                                supported by trabill
                                            </small>
                                        </div>
                                        <dl className="Index__products__dl__item__drama__dl">
                                            <a className="Index__products__dl__item__drama__dl__a Index__products__dl__item__drama__dl__a--left Index__products__dl__item__drama__dl__a--disabled" />
                                            <div className="Index__products__dl__item__drama__dl__chunk">
                                                <a
                                                    className="Index__products__dl__item__drama__dl__item Index__products__dl__item__drama__dl__item--active"
                                                    href="https://www.trabill.biz/"
                                                    target="_blank"
                                                    rel="nofollow noopener noreferrer"
                                                >
                                                    <img
                                                        className="Index__products__dl__item__drama__dl__item__img"
                                                        src="/images/products/non-iata.png"
                                                    />
                                                    <dt className="Index__products__dl__item__drama__dl__item__dt">
                                                        Non-IATA Version
                                                    </dt>
                                                    <div className="Index__products__dl__item__drama__dl__item__link">
                                                        <span className="Index__products__dl__item__drama__dl__item__link__a">
                                                            Go to site
                                                        </span>
                                                    </div>
                                                </a>
                                                <a
                                                    className="Index__products__dl__item__drama__dl__item Index__products__dl__item__drama__dl__item--active"
                                                    href="https://www.iata.trabill.biz/"
                                                    target="_blank"
                                                    rel="nofollow noopener noreferrer"
                                                >
                                                    <img
                                                        className="Index__products__dl__item__drama__dl__item__img"
                                                        src="/images/products/iata-trabill.png"
                                                    />
                                                    <dt className="Index__products__dl__item__drama__dl__item__dt">
                                                        IATA Version
                                                    </dt>
                                                    <div className="Index__products__dl__item__drama__dl__item__link">
                                                        <span className="Index__products__dl__item__drama__dl__item__link__a">
                                                            Go to site
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="Index__products__dl__item__drama__dl__chunk">
                                                <a
                                                    className="Index__products__dl__item__drama__dl__item"
                                                    href="https://iata-double-entry.trabill.biz/"
                                                    target="_blank"
                                                    rel="nofollow noopener noreferrer"
                                                >
                                                    <img
                                                        className="Index__products__dl__item__drama__dl__item__img"
                                                        src="/images/products/double-entry-version.png"
                                                    />
                                                    <dt className="Index__products__dl__item__drama__dl__item__dt">
                                                        Double-Entry Version
                                                    </dt>
                                                    <div className="Index__products__dl__item__drama__dl__item__link">
                                                        <span className="Index__products__dl__item__drama__dl__item__link__a">
                                                            Go to site
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                            <a className="Index__products__dl__item__drama__dl__a" />
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="Products__main__dl__item">
                            <h3 className="Products__main__dl__item__dt">
                                <AnimatedText text="T360 Tours and Travels" />
                            </h3>

                            <div className="Products__main__dl__item__box">

                                <div className="Products__main__dl__item__box__header">

                                    <img
                                        className="Products__main__dl__item__box__header__img"
                                        src="https://www.t360toursntravels.com/_next/static/media/T360.12rr7u5fwacvd.svg"
                                        width={70}
                                    />

                                    <div className="Products__main__dl__item__box__header__center">

                                        <h4 className="Products__main__dl__item__box__header__center__h4">
                                            Complete OTA Solution
                                        </h4>

                                        <p className="Products__main__dl__item__box__header__center__p">
                                            integrated OTA platform

                                        </p>


                                    </div>
                                    <a
                                        className="Products__go-to-site"
                                        href="https://www.t360toursntravels.com/"
                                        target="_blank"
                                        rel="nofollow noopener noreferrer"
                                    >
                                        Go to site
                                    </a>
                                </div>

                                <img
                                    className="Products__main__dl__item__box__img"
                                    src="/images/products/t360-product.png"
                                    height={224}
                                />

                                <p className="Products__main__dl__item__box__p">
                                    T360 Tours & Travels is a complete OTA platform that integrates flights,
                                    hotels, and travel services into one system, helping agencies manage
                                    bookings easily while providing travelers with a smooth and reliable
                                    experience.
                                </p>

                            </div>
                        </div>



                        {data.map((item, index) => (
                            <div className="Products__main__dl__item" key={`product-${index}`}>
                                <h3 className="Products__main__dl__item__dt">
                                    <AnimatedText text={item.title} />
                                </h3>

                                <div className="Products__main__dl__item__box">

                                    <div className="Products__main__dl__item__box__header">
                                        <img
                                            className="Products__main__dl__item__box__header__img"
                                            src={item.logo}
                                            width={150}
                                        />

                                        <div className="Products__main__dl__item__box__header__center">
                                            <h4 className="Products__main__dl__item__box__header__center__h4">
                                                {item.productName}
                                            </h4>
                                            <p className="Products__main__dl__item__box__header__center__p">
                                                {item.desc}
                                            </p>
                                        </div>

                                        <a
                                            className="Products__go-to-site"
                                            href={item.href}
                                            target="_blank"
                                            rel="nofollow noopener noreferrer"
                                        >
                                            Go to site
                                        </a>

                                    </div>

                                    <img
                                        className="Products__main__dl__item__box__img"
                                        src={item.image}
                                        alt={item.title}
                                        style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "8px" }}
                                    />

                                    <p className="Products__main__dl__item__box__p" style={{ marginTop: "20px" }}>
                                        {item.longDesc}
                                    </p>

                                </div>
                            </div>
                        ))}

                    </dl>
                </div>
            </div>



            <div className="Products__clients" style={{ margin: "100px 0" }}>
                <div className="container">
                    <h2 className="Products__h2" style={{ marginBottom: "20px" }}>Our Key Clients </h2>
                    <p style={{ marginBottom: '40px', fontSize: '18px', color: '#666' }}>Trusted by leading travel agencies and corporate partners globally.</p>

                    <div className="client_showcase">
                        {ourClients.map((client, index) => (
                            <div key={index} style={{
                                background: '#fff',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '15px',
                            }}>
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    loading="lazy"
                                    className="client_showcase__img"
                                />

                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="Products__questions">
                <div className="container">

                    <h5 className="Products__questions__h5">
                        <AnimatedText text="Any questions about our products?" />
                    </h5>

                    <p className="Products__questions__p">
                        For company information, recruitment, or any of our services,
                        please contact us here.
                    </p>

                    <div className="Products__questions__buttons">
                        <a className="Button" href="/contact">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}