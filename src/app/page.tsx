
import Link from "next/link";
import HeroText from "@/components/HeroText";
import AnimatedText from "@/components/AnimatedText";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {

  return (
    <div className="Index">
      <div className="Index__hero">
        <div className="container">
          <div className="Index__hero__wrapper">
            <HeroText />
            <p className="Index__hero__p">Innovative software solutions</p>
          </div>
        </div>
      </div>


      <div className="Index__mission">
        <div className="container">
          <div className="Index__mission__wrapper">
            <div className="Index__mission__left">
              <h3 className="Index__h3"><AnimatedText text="Our mission" /></h3>
              <div className="Index__mission__content">
                <p className="Index__mission__p">Connection, science.</p>
                <p className="Index__mission__p">
                  {`While the forms of encounters between people are expanding,
It is still difficult to connect with people who share the same heart.
`}
                </p>

                <p className="Index__mission__p">
                  {`Gender, age, and place of residence jumped over,
A really like-minded connection.
Expose yourself as you are,
A connection that can be respected.`}
                </p>
                <p className="Index__mission__p">
                  {`It seems that you would never meet if you were living normally
As many connections as possible with M360ICT.`}
                </p>
              </div>
            </div>
            <img
              className="Index__mission__img"
              src="/images/ict-logo.png"
              alt="Our mission"
            />
          </div>
        </div>
      </div>


      <div className="Index__products">
        <div className="container">
          <div className="Index__products__header">
            <h2 className="Index__products__header__h2">
              <AnimatedText text="Products" />
            </h2>
            <div className="Index__products__header__link">
              <Link className="Index__products__header__link__a" href="/products">
                See all products
              </Link>
            </div>
          </div>

          <dl className="Index__products__dl">
            {/* Trabill */}
            <div className="Index__products__dl__item product_trabill">
              <div className="Index__products__dl__item__wrapper">
                <h3 className="Index__products__dl__item__h3">Trabill</h3>

                <div className="Index__products__dl__item__box">


                  <small className="Index__products__dl__item__box__small">
                    Travel Agency Management Software
                  </small>

                  <div className="Index__products__dl__item__box__wrapper">

                    <img
                      className="Index__products__dl__item__box__img"
                      src="/images/products/trabill.png"
                      alt="Trabill"
                      width={220}
                      height={120}
                    />

                    <p className="Index__products__dl__item__box__p">
                      An all-in-one travel management solution featuring IATA integration and double-entry accounting. A professional platform where you can streamline agency operations, track financial transactions, and manage client bookings efficiently.
                    </p>

                    <div className="Index__products__dl__item__box__link">
                      <Link
                        className="Index__products__dl__item__box__link__a"
                        href="https://www.trabill.biz/login"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        Go to site
                      </Link>
                    </div>
                  </div>
                </div>


                <div className="Index__products__dl__item__drama">
                  <div className="Index__products__dl__item__drama__header">
                    <img
                      className="Index__products__dl__item__drama__header__img"
                      src="/images/Index__products__dl__item__drama__header__img.svg"
                      alt=""
                    />

                    <h4 className="Index__products__dl__item__drama__header__h4">
                      IATA Integrated Solutions
                    </h4>

                    <small className="Index__products__dl__item__drama__header__small">
                      double-entry accounting system
                    </small>
                  </div>

                  <dl className="Index__products__dl__item__drama__dl">
                    <div className="Index__products__dl__item__drama__dl__chunk">
                      <a
                        className="Index__products__dl__item__drama__dl__item Index__products__dl__item__drama__dl__item--active"
                        href="https://iata-double-entry.trabill.biz/"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        <img
                          className="Index__products__dl__item__drama__dl__item__img"
                          src="https://iata-double-entry.trabill.biz/assets/5-BRpnS7jU.png"
                          alt=""
                          height={230}
                        />

                        <dt className="Index__products__dl__item__drama__dl__item__dt">
                          Double Entry Accounting
                        </dt>

                        <div className="Index__products__dl__item__drama__dl__item__link">
                          <span className="Index__products__dl__item__drama__dl__item__link__a">
                            Go to site
                          </span>
                        </div>
                      </a>

                      <a
                        className="Index__products__dl__item__drama__dl__item Index__products__dl__item__drama__dl__item--active"
                        href="https://iata-double-entry.trabill.biz/"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        <img
                          className="Index__products__dl__item__drama__dl__item__img"
                          src="https://iata-double-entry.trabill.biz/assets/2-CpiDBrWp.jpg"
                          alt=""
                          height={230}
                        />

                        <dt className="Index__products__dl__item__drama__dl__item__dt">
                          Accounting Software
                        </dt>

                        <div className="Index__products__dl__item__drama__dl__item__link">
                          <span className="Index__products__dl__item__drama__dl__item__link__a">
                            Go to site
                          </span>
                        </div>
                      </a>
                    </div>
                  </dl>
                </div>
              </div>

              <img
                className="Index__products__dl__item__img"
                src="/images/products/trabill-banner.png"
                style={{
                  width: "18vw"
                }}
                alt="Virtual world"
              />
            </div>

            {/* T360 Tours and Travels */}
            <div className="Index__products__dl__item product_2">
              <div className="Index__products__dl__item__wrapper">
                <h3 className="Index__products__dl__item__h3">
                  <AnimatedText text="T360 Tours and Travels" />
                </h3>

                <div className="Index__products__dl__item__box">
                  <h4 className="Index__products__dl__item__box__h4">
                    Complete OTA Solution
                  </h4>

                  <small className="Index__products__dl__item__box__small">
                    integrated OTA platform

                  </small>

                  <div className="Index__products__dl__item__box__wrapper">
                    <img
                      className="Index__products__dl__item__box__img"
                      src="https://www.t360toursntravels.com/_next/static/media/T360.12rr7u5fwacvd.svg"
                      alt="Posmoni"
                      width={220}
                      height={140}
                    />

                    <p className="Index__products__dl__item__box__p">
                      An all-in-one travel booking solution for flights, hotels, and weekend getaways. Take advantage of limited-time deals, family packages, and exclusive promo codes for your next adventure.
                    </p>

                    <div className="Index__products__dl__item__box__link">
                      <a
                        className="Index__products__dl__item__box__link__a"
                        href="https://www.t360toursntravels.com/"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        Go to site
                      </a>
                    </div>
                  </div>
                </div>
                {/* <div className="Index__products__dl__item__drama">
                  <div className="Index__products__dl__item__drama__header">
                    <img
                      className="Index__products__dl__item__drama__header__img"
                      src="/images/Index__products__dl__item__drama__header__img.svg"
                      alt=""
                    />

                    <h4 className="Index__products__dl__item__drama__header__h4">
                      All-in-One Travel Solution
                    </h4>

                    <small className="Index__products__dl__item__drama__header__small">
                      Complete OTA System
                    </small>
                  </div>

                  <dl className="Index__products__dl__item__drama__dl">
                    <div className="Index__products__dl__item__drama__dl__chunk">
                      <a
                        className="Index__products__dl__item__drama__dl__item Index__products__dl__item__drama__dl__item--active"
                        href="https://www.t360toursntravels.com/"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        <img
                          className="Index__products__dl__item__drama__dl__item__img"
                          src="/images/products/t360-sub.png"
                          alt=""
                          height={150}
                        />

                        <dt className="Index__products__dl__item__drama__dl__item__dt">
                          Booking System
                        </dt>

                        <div className="Index__products__dl__item__drama__dl__item__link">
                          <span className="Index__products__dl__item__drama__dl__item__link__a">
                            Go to site
                          </span>
                        </div>
                      </a>

                      <a
                        className="Index__products__dl__item__drama__dl__item Index__products__dl__item__drama__dl__item--active"
                        href="https://www.t360toursntravels.com/"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        <img
                          className="Index__products__dl__item__drama__dl__item__img"
                          src="/images/products/t360-sub-1.png"
                          alt=""
                          height={150}
                        />

                        <dt className="Index__products__dl__item__drama__dl__item__dt">
                          Exclusive Flights
                        </dt>

                        <div className="Index__products__dl__item__drama__dl__item__link">
                          <span className="Index__products__dl__item__drama__dl__item__link__a">
                            Go to site
                          </span>
                        </div>
                      </a>
                    </div>
                  </dl>
                </div> */}
              </div>

              <img
                className="Index__products__dl__item__img"
                src="/images/t360-banner.png"
                alt="Content moderation"
              />

            </div>
          </dl>
        </div>
      </div>


      {/* News */}
      <div className="Index__news">
        <div className="container">
          <h2 className="Index__news__h2">
            <AnimatedText text="News" />
          </h2>
          <p className="Index__h3">
            <a
              className="Index__h3__a"
              href="/news"
            >
              See more
            </a>
          </p>
          <dl
            className="News__dl"
            style={{ opacity: 1, transform: "translateX(0px) translateY(0px)" }}
          >
            <div className="News__dl__item">
              <a className="News__dl__item__a" href="https://www.tbsnews.net/economy/corporates/m360-ict-ltd-recognised-commonwealth-award-1227471" target="_blank" />
              <dt className="News__dl__item__dt" >
                <img src="/images/media1.png" alt="News" width={100} />
              </dt>
              <dd className="News__dl__item__dd"  >
                M360 ICT Limited won "Best Use of Technology in Travel and Tourism" at the Commonwealth Business Excellence Awards 2025, held at the Concorde Hotel in Kuala Lumpur.
              </dd>
            </div>
            <div className="News__dl__item">
              <a className="News__dl__item__a" href="https://bnia.basis.org.bd/win/winner-2022#:~:text=Image%20%20CHAMPION%20Medicart%20,47%20Winner" target="_blank" />
              <img src="/images/basis.jpg" alt="News" width={100} />

              <p className="News__dl__item__dd"  >
                {`Recognized as the Winner of BASIS National ICT 
                 Award 2022 (Tourism & Hospitality)`}
              </p>
            </div>
            <div className="News__dl__item">
              <a className="News__dl__item__a" href="https://www.risingbd.com/english/business/news/100684" target="_blank" />
              <dt className="News__dl__item__dt"  >
                <img src="/images/risingbd.webp" alt="News" width={100} />
              </dt>
              <dd className="News__dl__item__dd">
                M360 ICT Trabill has got ‘The South Asian Business Excellence Award-2023’ for its extraordinary contribution to the travel and tourism sector.
              </dd>
            </div>
            <div className="News__dl__item">
              <a className="News__dl__item__a" href="https://aviation.com.bd/m360-ict-honored-at-sapsa-for-excellence-in-technology-innovation/" target="_blank" />
              <dt className="News__dl__item__dt"  >
                <img src="/images/aviation.webp" alt="News" width={100} />
              </dt>
              <dd className="News__dl__item__dd"  >
                M360 ICT has achieved a new milestone by being recognized at the South Asia Pacific Summit & Awards (SAPSA)—one of the region’s most respected platforms celebrating exceptional contributions in business, technology, leadership, and innovation.
              </dd>
            </div>
            <div className="News__dl__item">
              <a className="News__dl__item__a" href="https://www.observerbd.com/news/456863" target="_blank" />
              <dt className="News__dl__item__dt" >
                <img src="/images/observer.png" alt="News" width={100} />
              </dt>
              <dd className="News__dl__item__dd"  >
                "M360 ICT" received the award at the Global Change Maker Awards 2024 held in Bangkok, Thailand on Wednesday, says a press release.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <ServicesSection />
      <StatsSection />
      {/* Connect */}
      <div className="Index__connect">
        <img src="/images/lets-bg.svg" alt="Connect" className="Index__connect__img_bg" />
        <div className="container">

          <div className="Index__connect__wrapper">
            <h3 className="Index__connect__h3">
              <AnimatedText text={["Let's", "connect"]} />
            </h3>

            <div className="Index__connect__right">
              <small className="Index__connect__right__small">
                Be part of the M360 ICT Ltd
              </small>

              <h4 className="Index__connect__right__h4">
                We'd love to hear from you
              </h4>

              <p className="Index__connect__right__p">
                For company information, recruitment, or inquiries about our
                services, please contact us here.
              </p>

              <div className="Index__connect__right__buttons">
                <a className="Button" href="/contact">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}