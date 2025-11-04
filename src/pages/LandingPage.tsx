/**
 * Landing Page - Main entry point for the FlowSync landing page
 *
 * This component composes all sections in the optimal conversion order
 */

import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustStrip />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
