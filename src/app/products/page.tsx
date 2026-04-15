import AnimatedText from "@/components/AnimatedText";
import "./_style/products.css";
import M360ictProducts from "@/components/M360ictProducts";

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
                                <AnimatedText text={["Products ", "Our Journey"]} />
                            </h1>
                            <p className="Hero__p Hero__p--products">
                                How we change the world
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">

                <div className="second_title">
                    <h2 className="second_title__h2">Our Products</h2>
                    <p className="second_title__text">
                        At M360ICT, we build world-class software solutions designed to streamline operations across travel, hospitality, retail, and enterprise management. Our platforms are built on modern technologies, focused on security, efficiency, and empowering businesses everywhere to scale successfully. Walk through our suite of applications to see how we reshape the future of digital business.

                    </p>
                </div>
            </div>

            {/* this is common products show all here */}
            <div style={{ marginTop: "80px" }}>
                <M360ictProducts />
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