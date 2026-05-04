"use client";

import Link from "next/link";
import { buttonFonts, ManropeFonts } from "@/lib/fonts";
import "./HeroPage.css";


export default function DesktopHero() {
  return (
    <main className="hero-main">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className={`hero-title ${ManropeFonts.className}`}>
              Build AI-Powered, Scalable Software for Startups to Enterprises.
            </h1>

            <div className="hero-para">
              M360ICT delivers intelligent AI-powered digital solutions <br /> and
              automation workflows, enabling enterprises to scale faster
            </div>

            <div className="hero-buttons">
              <Link
                href="/contact"
                className={`hero-btn button-primary button-small ${buttonFonts.className}`}
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className={`hero-btn button-secondary button-small ${buttonFonts.className}`}
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Desktop SVG */}
          <div className="hero-image-desktop">

            <video
              src="https://dynamic.heygen.ai/www/Home%20-%20Page%20-%20Rebrand/HEYGEN_Orb_home_ios.mp4?updatedAt=1761596026165"
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

      </section>
    </main>
  );
}