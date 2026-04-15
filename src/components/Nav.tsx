"use client";

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
        { href: "/career", label: "career" },
        { href: "/contact", label: "contact" },
    ];

    const allRouteLinks = [
        { href: "/", label: "home" },
        { href: "/about", label: "about" },
        { href: "/services", label: "services" },
        { href: "/products", label: "products" },
        { href: "/career", label: "career" },
        { href: "/vendors", label: "vendors" },
        { href: "/our-clients", label: "our clients" },
        { href: "/fairs", label: "fairs" },
        { href: "/awards", label: "awards" },
        { href: "/contact", label: "contact" },


    ]
    const isSpecialPath = pathname === "/fairs" || pathname === "/awards" || pathname === "/vendors";

    return (
        <div className={`Nav${menuOpen ? " Nav--menu-active" : ""}${isSpecialPath ? " Nav--fairs" : ""}${drawerOpen ? " Nav--drawer-active" : ""}`}>
            <div className="container">
                <div className="Nav__wrapper">
                    <Link className="Nav__a" href="/">
                        <img className="Nav__a__img" src={!isSpecialPath ? "/images/m360_ict_logo.jpg" : "/images/m360logo.webp"} alt="m360ict" style={{ width: "100px" }} />
                    </Link>
                    <div className="Nav__links">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                className={`Nav__links__a${pathname === link.href ? " Nav__links__a--active" : ""}`}
                                href={link.href}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <button className="Nav__drawer-toggle" onClick={() => setDrawerOpen(!drawerOpen)}>
                            <div className={`Nav__drawer-toggle__bar ${isSpecialPath ? "Nav__drawer-toggle__bar--white" : ""}`} ></div>
                            <div className={`Nav__drawer-toggle__bar ${isSpecialPath ? "Nav__drawer-toggle__bar--white" : ""}`}></div>
                            <div className={`Nav__drawer-toggle__bar ${isSpecialPath ? "Nav__drawer-toggle__bar--white" : ""}`}></div>
                        </button>
                    </div>

                    <div className="Nav__menu">
                        <a className="Nav__menu__a" onClick={() => setMenuOpen(!menuOpen)}>
                            <img className="Nav__menu__a__img" src={!isSpecialPath ? "/images/Nav__menu__a__img.svg" : "/images/white-bar.png"} alt="Menu" />
                        </a>
                        <div className={`Nav__menu__panel${menuOpen ? " Nav__menu__panel--active" : ""}`}>
                            <div className="Nav__menu__panel__grid">
                                {links.slice(1).map((link) => (
                                    <Link
                                        key={link.href}
                                        className="Nav__menu__panel__grid__a"
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
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
