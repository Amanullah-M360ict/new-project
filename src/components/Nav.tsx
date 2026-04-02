"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { href: "/", label: "home" },
        { href: "/about", label: "about" },
        { href: "/products", label: "products" },
        { href: "/career", label: "career" },
        { href: "/contact", label: "contact" },
    ];

    return (
        <div className={`Nav${menuOpen ? " Nav--menu-active" : ""}`}>
            <div className="container">
                <div className="Nav__wrapper">
                    <Link className="Nav__a" href="/">
                        <img className="Nav__a__img" src="/images/m360_ict_logo.jpg" alt="m360ict" style={{ width: "100px" }} />
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
                    </div>

                    <div className="Nav__menu">
                        <a className="Nav__menu__a" onClick={() => setMenuOpen(!menuOpen)}>
                            <img className="Nav__menu__a__img" src="/images/Nav__menu__a__img.svg" alt="Menu" />
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
        </div>
    );
}
