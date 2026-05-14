"use client";

import Link from "next/link";
import { buttonFonts, higherJump, ManropeFonts } from "@/lib/fonts";
import "./HeroPage.css";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "@/lib/hooks/use-media-query";
import AnimatedText from "./AnimatedText";

export default function DesktopHero() {
  const container = useRef(null);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <main className="hero-main" ref={container}>
      <section className="hero-section">


        <div className="container mx-auto relative"   >
          <div className="hero-content">
            <h1 className={`hero-title font-bold ${higherJump.className}`}>
              <AnimatedText infinite={true} text={["We Build Software", "That Powers Global ", "Businesses"]} />
            </h1>
            <div className="hero-para">
              M360 ICT is an award-winning technology company helping businesses <br className="md:block hidden" /> worldwide build reliable, scalable, and future-ready digital solutions.
            </div>


          </div>

          {/* Desktop SVG */}
          <div className="hero-image-desktop">
            <div className="relative">
              {/* <Link href={"https://travell-flow-engine.lovable.app/"} target="_blank" className="m_main_home_product">
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
              <Image src="/images/home-empty.svg" alt="hero" width={1600} height={633} className="main_home_products_image" /> */}
              {/* home view show here */}
              <div className="2xl:w-[61%] 2xl:ml-[26%] 2xl:mt-[-34px] md:w-[57%] md:ml-[31%] md:mt-0 w-[38%] ml-[7%] mt-[2%] ">
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
              </div>
            </div>
          </div>


        </div>

      </section>
    </main>
  );
}