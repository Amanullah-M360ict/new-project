"use client";

import { useMediaQuery } from "@/lib/hooks/use-media-query";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


export default function Nav() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const links = [
        { href: "/", label: "home" },
        { href: "/about", label: "about" },
        { href: "/products", label: "products" },
        { href: "/services", label: "services" },
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
        { href: "/oparate-countiries", label: "countries we serve" },
        { href: "/mou", label: "MOU" },
        { href: "/copyright-and-license", label: "©License" },
        { href: "/contact", label: "contact" },
    ]
    const isSpecialPath = pathname === "/fairs" || pathname === "/awards" || pathname === "/vendors";
    const isDesktop = useMediaQuery('(min-width: 768px)');
    return (
        <div className={`Nav${menuOpen ? " Nav--menu-active" : ""}${isSpecialPath ? " Nav--fairs" : ""}${drawerOpen ? " Nav--drawer-active" : ""}`}>
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
    );
}
