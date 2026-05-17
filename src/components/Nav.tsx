"use client";

import { useMediaQuery } from "@/lib/hooks/use-media-query";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export default function Nav() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { href: "/", label: "home" },
        { href: "/about", label: "about" },
        { href: "/products", label: "products" },
        { href: "/services", label: "services" },
        { href: "/fairs", label: "Events" },
        { href: "/career", label: "career" },
        { href: "/contact", label: "contact" },
    ];

    const allRouteLinks = [
        { href: "/", label: "home" },
        { href: "/about", label: "about" },
        { href: "/services", label: "services" },
        { href: "/products", label: "products" },
        { href: "/career", label: "career" },
        { href: "/our-clients", label: "our clients" },
        { href: "/fairs", label: "Events" },
        { href: "/awards", label: "awards" },
        { href: "/certifications", label: "Certifications" },
        { href: "/memberships", label: "Memberships" },
        { href: "/oparate-countiries", label: "Countries We Serve" },
        { href: "/mou", label: "Collaborations" },
        { href: "/copyright-and-license", label: "©License" },
        { href: "/contact", label: "contact" },
    ]
    const isSpecialPath = pathname === "/fairs" || pathname === "/awards" || pathname === "/vendors";
    const isDesktop = useMediaQuery('(min-width: 768px)');

    // ditect is home use useEffect  
    const [isHomePage, setIsHomePage] = useState(false);
    useEffect(() => {
        if (pathname === "/") {
            setIsHomePage(true);
        } else {
            setIsHomePage(false);
        }
    }, [pathname]);
    return (
        <div style={{
            position: isHomePage ? "fixed" : "relative",
            width: "100%",
            zIndex: 1001,
        }}>
            <div className={` hidden`}>


                <div
                    style={{
                        backgroundColor: "rgb(197 226 255 / 100%)",
                        boxShadow: "0 1px 0 0 #f0f7ff",

                    }}
                    className={`py-[6px] md:px-0 px-2 z-10 relative Nav__top-bar `}
                >
                    <div className="container flex items-center md:justify-between ">
                        <div className="flex items-center gap-5 font-semibold text-sm w-full text-[#161C2D] md:block hidden">

                            Get Free Consultancy!
                        </div>
                        <div className="flex items-center md:justify-end justify-between w-full gap-2">
                            <Link
                                href="tel:+8809638336699"
                                className="text-[12px] text-black flex items-center gap-1"
                            >
                                <Phone color="#38b1ed" size={15} />
                                <p className="text-black">+8809638336699</p>
                            </Link>
                            <Link
                                href="mailto:info@m360ict.com"
                                className="text-[12px] text-black flex items-center gap-2"
                            >
                                <Image
                                    src={"/images/email-icon.svg"}
                                    alt=""
                                    width={17}
                                    height={17}
                                />
                                <p className="text-black">info@m360ict.com</p>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
            <div className={`Nav${menuOpen ? " Nav--menu-active" : ""}${isSpecialPath ? " Nav--fairs" : ""}${drawerOpen ? " Nav--drawer-active" : ""}${isScrolled ? " Nav--scrolled" : ""}`}>


                <div className="container">
                    <div className="Nav__wrapper">
                        <Link className="Nav__a" href="/">
                            <Image className="Nav__a__img" src={!isSpecialPath ? "/images/M360ict_TM.png" : "/images/m360logo.webp"} alt="m360ict" width={127} height={55} />
                        </Link>

                        <div className="Nav__links">
                            {links.filter(link => link.href !== "/contact").map((link) => (
                                <Link
                                    key={link.href}
                                    className={`Nav__links__a${pathname === link.href ? " Nav__links__a--active" : ""}`}
                                    href={link.href}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <div className="Nav__right">
                            {/* a rounded button  */}
                            <Link href={"/contact"} className="nav-contact-button">Contact</Link>
                            <button className="Nav__menu-toggle" onClick={() => setDrawerOpen(!drawerOpen)}>
                                <div className={`Nav__menu-toggle__bar ${isSpecialPath ? "Nav__menu-toggle__bar--white" : ""}`}></div>
                                <div className={`Nav__menu-toggle__bar ${isSpecialPath ? "Nav__menu-toggle__bar--white" : ""}`}></div>
                                <div className={`Nav__menu-toggle__bar ${isSpecialPath ? "Nav__menu-toggle__bar--white" : ""}`}></div>
                            </button>
                        </div>
                    </div>
                </div>


                <div className={`Nav__drawer${drawerOpen ? " Nav__drawer--active" : ""}`}>
                    <div className="Nav__drawer__header">
                        <button className="Nav__drawer__close" onClick={() => setDrawerOpen(false)}>&times;</button>
                    </div>
                    <div className="Nav__drawer__content">
                        {allRouteLinks.map((link) => (
                            <Link
                                key={link.href}
                                className={`Nav__drawer__link${pathname === link.href ? " Nav__drawer__link--active" : ""}`}
                                href={link.href}
                                onClick={() => setDrawerOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
                {drawerOpen && <div className="Nav__drawer-overlay" onClick={() => setDrawerOpen(false)}></div>}
            </div>
        </div>
    );
}
