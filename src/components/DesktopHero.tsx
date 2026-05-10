"use client";

import Link from "next/link";
import { buttonFonts, ManropeFonts } from "@/lib/fonts";
import "./HeroPage.css";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "@/lib/hooks/use-media-query";

export default function DesktopHero() {
  const container = useRef(null);

  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <main className="hero-main" ref={container}>
      <section className="hero-section">


        <div className="container mx-auto relative"   >
          <div className="hero-content">
            <h1 className={`hero-title font-bold ${ManropeFonts.className}`}>
              Provided <span className="hero_title_span_1">TravelTech</span> <span className="hero_title_span_1 second">Solutions</span>
            </h1>

            <div className="hero-para">
              M360ICT delivers intelligent AI-powered digital solutions <br /> and
              automation workflows, enabling enterprises to scale faster
            </div>

            <div className="hero-countries">
              <span className="countries-text">Operated in 20+ Countries</span>
              <div className="country-flags">
                {[
                  { name: "Bangladesh", code: "bd" },
                  { name: "USA", code: "us" },
                  { name: "Canada", code: "ca" },
                  { name: "UK", code: "gb" },
                  { name: "Saudi Arabia", code: "sa" },
                  { name: "UAE", code: "ae" },
                  { name: "Kuwait", code: "kw" },
                  { name: "Japan", code: "jp" },
                  { name: "South Sudan", code: "ss" },
                  { name: "Australia", code: "au" },
                  { name: "Qatar", code: "qa" },
                ].map((country) => (
                  <img
                    key={country.code}
                    src={`https://flagcdn.com/w80/${country.code}.png`}
                    alt={country.name}
                    className="country-flag"
                    title={country.name}
                  />
                ))}
              </div>
              <div className="country-flags">
                {[
                  { name: "Malaysia", code: "my" },
                  { name: "India", code: "in" },
                  { name: "Egypt", code: "eg" },
                  { name: "Oman", code: "om" },
                  { name: "Italy", code: "it" },
                  { name: "Vietnam", code: "vn" },
                  { name: "Bhutan", code: "bt" },
                  { name: "Portugal", code: "pt" },
                  { name: "Scotland", code: "gb-sct" },
                  { name: "Nepal", code: "np" }
                ].map((country) => (
                  <Image
                    key={country.code}
                    src={`https://flagcdn.com/w80/${country.code}.png`}
                    alt={country.name}
                    className="country-flag"
                    title={country.name}
                    width={42}
                    height={35}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop SVG */}
          <div className="hero-image-desktop">
            <div className="relative">
              <Link href={"https://travell-flow-engine.lovable.app/"} target="_blank" className="m_main_home_product">
                <Image src={`/images/products/trabill-icon.png`} alt="M360ICT Logo" width={56} height={58} title="Trabill" className="" />
              </Link>
              <Link href={"https://recruitment-website-six.vercel.app/"} target="_blank" className="m_main_home_product_1">
                <Image src={`/images/products/recruit-icon.png`} alt="M360ICT Logo" width={66} height={66} />
              </Link>
              <Link href={"https://erp-informative-website.vercel.app/"} target="_blank" className="m_main_home_product_2">
                <Image src={`/images/products/erp.png`} alt="M360ICT Logo" width={70} height={57} />
              </Link>
              <Link href={"https://thehotel360.com/"} target="_blank" className="m_main_home_product_3">
                <Image src={`/images/products/hotel.png`} alt="M360ICT Logo" width={65} height={47} />
              </Link>
              <Link href={"https://hajj-management-plum.vercel.app/"} target="_blank" className="m_main_home_product_4">
                <Image src={`/images/products/hajj.webp`} alt="M360ICT Logo" width={35} height={45} />
              </Link>
              <Link href={"https://dokani-website.vercel.app/"} target="_blank" className="m_main_home_product_5">
                <Image src={`/images/products/dokani.png`} alt="M360ICT Logo" width={30} height={25} />
              </Link>
              <Link href={"https://sohi.com.bd/"} target="_blank" className="m_main_home_product_6">
                <Image src={`/images/products/sohi.webp`} alt="M360ICT Logo" width={35} height={25} />
              </Link>
              <Link href={"https://employee.crm360world.com/"} target="_blank" className="m_main_home_product_7">
                <Image src={`/images/products/CRM.png`} alt="M360ICT Logo" width={40} height={35} />
              </Link>
              <Link href={"https://employee.crm360world.com/"} target="_blank" className="m_main_home_product_0">
                <Image src={`/images/m.png`} alt="M360ICT Logo" width={106} height={105} />
              </Link>
              <Image src="/images/home-empty.svg" alt="hero" width={1600} height={633} className="main_home_products_image" />
              {/* home view show here */}
              {/* <div className="w-[80%] ms-24 home_video">
                <video
                  src="/images/home-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div> */}
            </div>
          </div>


        </div>

      </section>
    </main>
  );
}