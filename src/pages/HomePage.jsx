// pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Stats from '../components/Stats';
import CTA from '../components/CTA';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Features />
            <Stats />
            <CTA />
        </>
    );
};

export default HomePage;