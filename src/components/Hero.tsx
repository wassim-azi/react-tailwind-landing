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
import { getVariant, trackConversion } from '../config/abTests';

const Hero: React.FC = () => {
  // A/B Test: Headline variation
  const headlineText = getVariant<string>('heroHeadline');
  const showNoCreditCard = getVariant<boolean>('noCreditCardCopy');

  const handleCTAClick = () => {
    trackConversion('hero_cta_click', 'ctaColor');
    // Navigate to signup or trigger modal
    console.log('CTA clicked - navigate to signup');
  };

  const handleSecondaryCTA = () => {
    trackConversion('hero_secondary_cta_click');
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
              {headlineText}
            </h1>

            {/* Sub-headline - Clear value proposition */}
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed"
               style={{ color: 'var(--text-secondary)' }}>
              Automatically sync tasks, messages, and files across Slack, Notion, Gmail, and 50+ tools. Save 5+ hours per week on context switching.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              {/* Primary CTA */}
              <button
                onClick={handleCTAClick}
                className="btn-cta-primary text-lg"
                aria-label="Start free trial - sync in minutes"
              >
                Start Free Trial — Sync in Minutes
                <i className="fas fa-arrow-right ml-2"></i>
              </button>

              {/* Secondary CTA */}
              <button
                onClick={handleSecondaryCTA}
                className="btn-cta-secondary text-lg"
                aria-label="Watch 30 second demo"
              >
                <i className="fas fa-play mr-2"></i>
                Watch 30s Demo
              </button>
            </div>

            {/* Micro-copy: Risk reducers */}
            {showNoCreditCard && (
              <p className="text-sm flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2"
                 style={{ color: 'var(--text-muted)' }}>
                <span className="flex items-center gap-2">
                  <i className="fas fa-check-circle" style={{ color: 'var(--color-success)' }}></i>
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <i className="fas fa-check-circle" style={{ color: 'var(--color-success)' }}></i>
                  Cancel anytime
                </span>
                <span className="flex items-center gap-2">
                  <i className="fas fa-check-circle" style={{ color: 'var(--color-success)' }}></i>
                  14-day free trial
                </span>
              </p>
            )}

            {/* Inline Trust Indicator (compact testimonial) */}
            <div className="mt-8 p-4 rounded-lg inline-block"
                 style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', border: '1px solid var(--border-default)' }}>
              <div className="flex items-start gap-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop"
                  alt="Sarah Chen"
                  className="w-12 h-12 rounded-full border-2"
                  style={{ borderColor: 'var(--accent-primary)' }}
                  loading="lazy"
                />
                <div className="text-left">
                  <p className="text-sm italic mb-1" style={{ color: 'var(--text-primary)' }}>
                    "Cut our team's context-switching time by 60%. Life-changing."
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    <strong>Sarah Chen</strong>, Product Lead at TechCorp
                  </p>
                </div>
              </div>
            </div>
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
