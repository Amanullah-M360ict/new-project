'use client';

import React from 'react';
import './global-reach.css';
import AnimatedText from './AnimatedText';

const GlobalReach = () => {
    const countries = [
        { name: "Bangladesh", code: "bd" },
        { name: "USA", code: "us" },
        { name: "Canada", code: "ca" },
        { name: "UK", code: "gb" },
        { name: "Saudi Arabia", code: "sa" },
        { name: "UAE (Dubai)", code: "ae" },
        { name: "Kuwait", code: "kw" },
        { name: "Japan", code: "jp" },
        { name: "South Sudan", code: "ss" },
        { name: "Qatar", code: "qa" },
        { name: "Malaysia", code: "my" },
        { name: "India", code: "in" },
        { name: "Egypt", code: "eg" },
        { name: "Oman", code: "om" },
        { name: "Italy", code: "it" },
        { name: "Vietnam", code: "vn" },
        { name: "Bhutan", code: "bt" },
        { name: "Portugal", code: "pt" },
        { name: "Nepal", code: "np" },
    ];

    return (
        <section className="GlobalReach">
            <div className="container">
                <div className="GlobalReach__header">
                    <h2 className="GlobalReach__title">
                        <AnimatedText text="Innovative" />
                    </h2>
                    <p className="GlobalReach__subtitle">
                        Travel Tech Solutions Connecting 19 Countries
                    </p>
                </div>

                <div className="GlobalReach__grid">
                    {countries.map((country, idx) => (
                        <div key={idx} className="GlobalReach__item">
                            <div className="GlobalReach__flagWrapper">
                                <img
                                    src={`https://flagcdn.com/w160/${country.code}.png`}
                                    alt={country.name}
                                    className="GlobalReach__flag"
                                    loading="lazy"
                                />
                            </div>
                            <p className="GlobalReach__countryName">{country.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GlobalReach;
