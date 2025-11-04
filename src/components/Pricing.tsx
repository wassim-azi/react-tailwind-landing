/**
 * Pricing Component - High-Conversion SaaS Pricing Section
 *
 * CONVERSION FEATURES:
 * - Clear value differentiation between tiers
 * - "Most Popular" visual highlight on Pro plan
 * - Monthly/Yearly toggle with savings indicator
 * - Outcome-focused benefit bullets (not just features)
 * - Trust-building microcopy below pricing
 * - Mobile-optimized layout
 *
 * DESIGN PRINCIPLES:
 * - Scannable at a glance
 * - Emphasized recommended plan
 * - Clear CTAs in each tier
 * - Professional, modern styling
 */

import React, { useState } from 'react';
import { trackConversion } from '../config/abTests';

interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: number | string;
  yearlyPrice: number | string;
  monthlyPriceDisplay: string;
  yearlyPriceDisplay: string;
  benefits: string[];
  cta: string;
  featured: boolean;
  icon: string;
  annualSavings?: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    description: "Perfect for individuals getting started with workflow automation",
    monthlyPrice: 0,
    yearlyPrice: 0,
    monthlyPriceDisplay: "$0",
    yearlyPriceDisplay: "$0",
    benefits: [
      "Connect 3 essential tools — start syncing immediately",
      "30-minute sync intervals — reduce manual updates",
      "500 syncs/month — plenty for personal projects",
      "Community support — learn from other users",
      "7-day history — track recent changes"
    ],
    cta: "Get Started Free",
    featured: false,
    icon: "fa-seedling"
  },
  {
    name: "Pro",
    description: "For teams that need real-time sync and unlimited integrations",
    monthlyPrice: 29,
    yearlyPrice: 23,
    monthlyPriceDisplay: "$29",
    yearlyPriceDisplay: "$23",
    benefits: [
      "Unlimited tool connections — sync your entire workflow",
      "Instant real-time sync — zero manual updates",
      "Unlimited syncs — scale without limits",
      "Priority support — get help in under 4 hours",
      "Unlimited history & search — never lose context",
      "Advanced automation — save 5+ hours per week"
    ],
    cta: "Start Free Trial",
    featured: true,
    icon: "fa-rocket",
    annualSavings: "Save 20%"
  },
  {
    name: "Enterprise",
    description: "For organizations with custom requirements and dedicated support",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    monthlyPriceDisplay: "Custom",
    yearlyPriceDisplay: "Custom",
    benefits: [
      "Everything in Pro, plus:",
      "Dedicated success manager — personalized onboarding",
      "99.9% uptime SLA — mission-critical reliability",
      "Enterprise security — SOC 2, HIPAA compliance",
      "Custom integrations — build what you need",
      "SSO & SAML — seamless team access"
    ],
    cta: "Contact Sales",
    featured: false,
    icon: "fa-building"
  }
];

const Pricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const handleToggle = (period: 'monthly' | 'yearly') => {
    setBillingPeriod(period);
    trackConversion('pricing_toggle_clicked', undefined, undefined, period === 'yearly' ? 1 : 0);
  };

  const handleCTAClick = (tierName: string) => {
    trackConversion('pricing_cta_clicked', undefined, undefined);
    console.log(`${tierName} plan selected`);
  };

  return (
    <section
      id="pricing"
      className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #FFFFFF 100%)' }}
    >
      <div className="container-custom max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}>
            Choose the plan that fits your workflow
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
             style={{ color: 'var(--text-secondary)' }}>
            FlowSync scales with your team, whether you're working solo or collaborating across departments.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <button
            onClick={() => handleToggle('monthly')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              billingPeriod === 'monthly'
                ? 'text-white shadow-md'
                : 'hover:opacity-70'
            }`}
            style={{
              backgroundColor: billingPeriod === 'monthly' ? 'var(--accent-primary)' : 'transparent',
              color: billingPeriod === 'monthly' ? '#FFFFFF' : 'var(--text-secondary)'
            }}
            aria-label="Select monthly billing"
          >
            Monthly
          </button>

          <button
            onClick={() => handleToggle('yearly')}
            className={`px-6 py-2 rounded-full font-semibold transition-all relative ${
              billingPeriod === 'yearly'
                ? 'text-white shadow-md'
                : 'hover:opacity-70'
            }`}
            style={{
              backgroundColor: billingPeriod === 'yearly' ? 'var(--accent-primary)' : 'transparent',
              color: billingPeriod === 'yearly' ? '#FFFFFF' : 'var(--text-secondary)'
            }}
            aria-label="Select yearly billing"
          >
            Yearly
            {/* Savings Badge */}
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded whitespace-nowrap">
              Save 20%
            </span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-6 transition-all duration-300 flex flex-col ${
                tier.featured
                  ? 'shadow-2xl border-2 transform md:scale-105 z-10'
                  : 'shadow-lg hover:shadow-xl border'
              }`}
              style={{
                backgroundColor: tier.featured ? 'var(--bg-surface)' : 'var(--bg-surface)',
                borderColor: tier.featured ? 'var(--accent-primary)' : 'var(--border-default)'
              }}
            >
              {/* "Most Popular" Ribbon */}
              {tier.featured && (
                <div className="absolute -top-0 -right-0 overflow-hidden w-32 h-32 pointer-events-none">
                  <div
                    className="absolute top-7 -right-8 w-40 text-center transform rotate-45 py-2 shadow-md"
                    style={{ backgroundColor: 'var(--cta-bg)' }}
                  >
                    <span className="text-white text-xs font-bold uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                </div>
              )}

              {/* Plan Icon */}
              <div className="flex justify-center mb-4">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    tier.featured ? 'shadow-md' : ''
                  }`}
                  style={{
                    backgroundColor: tier.featured ? 'var(--accent-primary)' : 'rgba(6, 182, 212, 0.1)'
                  }}
                >
                  <i
                    className={`fas ${tier.icon} text-2xl`}
                    style={{ color: tier.featured ? '#FFFFFF' : 'var(--accent-primary)' }}
                  ></i>
                </div>
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-center mb-2"
                  style={{ color: 'var(--text-primary)' }}>
                {tier.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-center mb-6 min-h-[3rem]"
                 style={{ color: 'var(--text-secondary)' }}>
                {tier.description}
              </p>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold"
                        style={{ color: 'var(--text-primary)' }}>
                    {billingPeriod === 'monthly' ? tier.monthlyPriceDisplay : tier.yearlyPriceDisplay}
                  </span>
                  {typeof tier.monthlyPrice === 'number' && tier.monthlyPrice > 0 && (
                    <span className="text-lg"
                          style={{ color: 'var(--text-muted)' }}>
                      /month
                    </span>
                  )}
                </div>
                {billingPeriod === 'yearly' && tier.annualSavings && (
                  <p className="text-sm mt-2 font-semibold"
                     style={{ color: 'var(--color-success)' }}>
                    {tier.annualSavings} with annual billing
                  </p>
                )}
                {typeof tier.monthlyPrice === 'number' && tier.monthlyPrice === 0 && (
                  <p className="text-sm mt-2"
                     style={{ color: 'var(--text-muted)' }}>
                    Forever free
                  </p>
                )}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleCTAClick(tier.name)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all mb-6 ${
                  tier.featured ? 'btn-cta-primary' : 'btn-cta-secondary'
                }`}
                aria-label={`${tier.cta} for ${tier.name} plan`}
              >
                {tier.cta}
                {tier.featured && <i className="fas fa-arrow-right ml-2"></i>}
              </button>

              {/* Benefits List */}
              <ul className="space-y-3 flex-grow">
                {tier.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <i
                      className="fas fa-check-circle mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--color-success)' }}
                    ></i>
                    <span className="text-sm leading-relaxed"
                          style={{ color: 'var(--text-secondary)' }}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust-Building Microcopy */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm"
               style={{ color: 'var(--text-muted)' }}>
            <span className="flex items-center gap-2">
              <i className="fas fa-check-circle" style={{ color: 'var(--color-success)' }}></i>
              No credit card required to start
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-check-circle" style={{ color: 'var(--color-success)' }}></i>
              Cancel anytime
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-shield-alt" style={{ color: 'var(--color-success)' }}></i>
              Billing is secure and encrypted
            </span>
          </div>

          {/* Additional Trust Signal */}
          <p className="mt-6 text-sm"
             style={{ color: 'var(--text-secondary)' }}>
            All paid plans include a <strong>14-day free trial</strong>. Upgrade, downgrade, or cancel at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
