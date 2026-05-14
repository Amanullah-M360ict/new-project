"use client";

import React from 'react';
import Image from 'next/image';
import './operated-countries.css';
import { useMediaQuery } from '@/lib/hooks/use-media-query';

const OperatedCountries = () => {
    const countries = [
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
    ];

    const duplicatedCountries = [...countries, ...countries, ...countries];
    const isDesktop = useMediaQuery('(min-width: 768px)');
    return (
        <div className="operated-countries-bar">
            <div className="operated-countries-bar__label">
                {isDesktop ? "From Bangladesh to Global" : "From BD to Gb"}
            </div>

            <div className="operated-countries-bar__marquee">
                <div className="operated-countries-bar__fade operated-countries-bar__fade--left"></div>
                <div className="operated-countries-bar__track">
                    {duplicatedCountries.map((country, index) => (
                        <div key={`${country.code}-${index}`} className="mini-country">
                            <Image
                                src={`https://flagcdn.com/w80/${country.code}.png`}
                                alt={country.name}
                                width={22}
                                height={22}
                                className="mini-flag"
                            />
                            <span className="mini-name">{country.name}</span>
                        </div>
                    ))}
                </div>
                <div className="operated-countries-bar__fade operated-countries-bar__fade--right"></div>
            </div>
        </div>
    );
};

export default OperatedCountries;
