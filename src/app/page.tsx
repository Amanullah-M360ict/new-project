"use client"
import HeroText from "@/components/HeroText";
import ModernHero from "@/components/ModernHero";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import M360ictProducts from "@/components/M360ictProducts";
import AwardsSection from "@/components/AwardsSection";
import DesktopHero from "@/components/DesktopHero";
import M360ictProductsNew from "@/components/M360ictProductsNew";
import NewsSection from "@/components/NewsSection";


export default function Home() {

  return (
    <div className="Index">
      <div className="desktop-hero">
        <DesktopHero />
      </div>
      <div className="mobile-hero">
        <ModernHero />
      </div>

      <div className="Index__mission">
        <div className="container">
          <div className="Index__mission__wrapper">

            <img
              className="Index__mission__img"
              src="/images/ict-logo.png"
              alt="Our mission"
            />
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
          </div>
        </div>
      </div>


      {/* <M360ictProducts limit={1} showExploreButton={true} /> */}
      <M360ictProductsNew limit={6} showExploreButton={true} />
      <div style={{ margin: '80px 0' }}>
        <AwardsSection showExploreButton={true} />
      </div>

      <NewsSection />

      <ServicesSection />
      <StatsSection />


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