/**
 * Hero Component - Above the Fold Section
 *
 * CONVERSION PRIORITIES:
 * 1. Benefit-focused headline (≤3 seconds to understand)
 * 2. High-contrast primary CTA with micro-copy
 * 3. Minimal navigation to reduce distraction
 * 4. Trust indicator (testimonial snippet)
 * 5. Product visual with subtle animation
 *
 * A/B TEST HOOKS:
 * - Headline copy (see abTests.ts)
 * - CTA color (controlled via CSS variables)
 */

import React from 'react';
import { trackConversion } from '../config/abTests';
import { track } from '../utils/analytics';

const Hero: React.FC = () => {
  const handleCTAClick = () => {
    trackConversion('hero_cta_click', 'ctaColor');
    track('hero_cta_click', { location: 'primary' });
    console.log('CTA clicked - navigate to signup');
  };

  const handleSecondaryCTA = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    trackConversion('hero_secondary_cta_click');
    track('hero_demo_click');
    console.log('Secondary CTA clicked');
  };

  return (
    <section className="gradient-hero relative overflow-hidden">
      {/* Minimal Navigation Bar */}
      <nav className="container-custom py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-2">
            <i className="fas fa-sync-alt text-2xl md:text-3xl" style={{ color: 'var(--accent-primary)' }}></i>
            <span className="text-xl md:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              FlowSync
            </span>
          </div>

          {/* Minimal CTA Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#pricing"
              className="text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ color: 'var(--text-secondary)' }}
            >
              Pricing
            </a>
            <button
              onClick={handleCTAClick}
              className="btn-cta-primary text-sm md:text-base"
              aria-label="Start free trial"
            >
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden p-2"
            aria-label="Open menu"
            style={{ color: 'var(--text-primary)' }}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container-custom py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & CTA */}
          <div className="text-center lg:text-left">
            {/* Headline - Benefit-focused, readable in ≤3 seconds */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ color: 'var(--text-primary)' }}>
              FlowSync keeps your team in sync — across apps and devices.
            </h1>

            {/* Sub-headline - Clear value proposition */}
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed"
               style={{ color: 'var(--text-secondary)' }}>
              One platform. All your workflows. Zero interruptions.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col gap-3 justify-center lg:justify-start mb-4">
              {/* Primary CTA - most visually dominant */}
              <button
                onClick={handleCTAClick}
                className="px-8 py-4 rounded-2xl font-bold text-white text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                style={{ backgroundColor: 'var(--cta)' }}
                aria-label="Start free trial"
              >
                Start Free Trial
                <i className="fas fa-arrow-right ml-2"></i>
              </button>

              {/* Secondary CTA - smaller and less prominent */}
              <a
                href="#demo"
                onClick={handleSecondaryCTA}
                className="text-sm font-normal hover:underline"
                style={{ color: 'var(--text-secondary)' }}
              >
                Watch Demo
              </a>
            </div>

            {/* Micro-copy: Risk reducers */}
            <p className="text-xs flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1"
               style={{ color: 'var(--text-muted)' }}>
              <span>No credit card required</span>
              <span>•</span>
              <span>Cancel anytime</span>
              <span>•</span>
              <span>Secure & encrypted billing</span>
            </p>
          </div>

          {/* Right Column: Product Visual */}
          <div className="relative">
            {/* Main Product Screenshot */}
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="FlowSync Dashboard showing synchronized tasks across multiple tools"
                className="rounded-2xl shadow-2xl w-full"
                loading="lazy"
              />

              {/* Floating UI Element 1: Sync Status */}
              <div className="absolute -top-4 -left-4 p-3 rounded-xl shadow-lg hidden sm:block animate-float"
                   style={{ backgroundColor: 'var(--bg-surface)' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    Syncing...
                  </span>
                </div>
              </div>

              {/* Floating UI Element 2: Notification */}
              <div className="absolute -bottom-4 -right-4 p-3 rounded-xl shadow-lg hidden sm:block animate-float-delayed"
                   style={{ backgroundColor: 'var(--bg-surface)' }}>
                <div className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    All tools synced
                  </span>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div
              className="absolute inset-0 rounded-2xl transform rotate-3 -z-10"
              style={{ background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)', opacity: 0.1 }}
            ></div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
