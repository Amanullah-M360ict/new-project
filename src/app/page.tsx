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
import AwardHome from "@/components/hero/AwardHome";
import WeBring from "@/components/WeBring";
import NewAwards from "@/components/NewAwards";
import NewProducts from "@/components/NewProducts";


export default function Home() {

  return (
    <div className="Index">
      <div className="desktop-hero">
        <DesktopHero />
      </div>
      <AwardHome />
      <NewProducts />
      <WeBring />


      {/* <NewAwards /> */}



      <NewsSection />
      <div style={{ margin: '80px 0' }}>
        <AwardsSection showExploreButton={true} />
      </div>
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