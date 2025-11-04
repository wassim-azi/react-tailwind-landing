/**
 * Pricing Component - High-Conversion SaaS Pricing Section
 *
 * Features:
 * - Monthly/Yearly toggle with 20% discount
 * - "Most Popular" visual emphasis on Pro plan
 * - Outcome-focused benefits
 * - Analytics tracking on all interactions
 */

import React, { useState } from 'react';
import { trackConversion } from '../config/abTests';
import { track } from '../utils/analytics';

interface PricingPlan {
  name: string;
  monthlyPrice: number | null;
  icon: string;
  description: string;
  benefits: string[];
  cta: string;
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: 'Free',
    monthlyPrice: 0,
    icon: 'fa-seedling',
    description: 'For individuals exploring automation',
    benefits: [
      'Connect up to 3 tools',
      'Basic sync (30-min intervals)',
      '500 syncs/month',
      'Community support',
      '7-day activity history',
    ],
    cta: 'Start Free',
  },
  {
    name: 'Pro',
    monthlyPrice: 29,
    icon: 'fa-rocket',
    description: 'For professionals who value their time',
    benefits: [
      'Connect unlimited tools',
      'Real-time sync (instant)',
      'Unlimited syncs',
      'Priority email support',
      'Unlimited history & search',
      'Advanced automation rules',
      'Custom workflows',
      'Team collaboration (up to 10)',
    ],
    cta: 'Start Pro — Free 14-day trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    icon: 'fa-building',
    description: 'For large teams with advanced needs',
    benefits: [
      'Everything in Pro, plus:',
      'Dedicated account manager',
      'SLA guarantee (99.9% uptime)',
      'Advanced security & compliance',
      'Custom integrations',
      'Unlimited team members',
      'SSO & SAML authentication',
      'Priority 24/7 phone support',
    ],
    cta: 'Contact Sales',
  },
];

const Pricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const handleToggle = (period: 'monthly' | 'yearly') => {
    setBillingPeriod(period);
    // (C) Analytics call: track toggle interaction
    track('pricing_toggle_clicked', { period });
    trackConversion('pricing_toggle_clicked', undefined, undefined, period === 'yearly' ? 1 : 0);
  };

  const handleToggleKeyDown = (event: React.KeyboardEvent, period: 'monthly' | 'yearly') => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      handleToggle(period);
    }
  };

  const handleCTAClick = (planName: string) => {
    // (C) Analytics call: track CTA clicks
    track('pricing_cta_click', { plan: planName, billing: billingPeriod });
    trackConversion('pricing_cta_clicked', undefined, undefined);
    console.log(`CTA clicked: ${planName} - ${billingPeriod}`);
  };

  const getPrice = (monthlyPrice: number | null): string => {
    if (monthlyPrice === null) return 'Custom';
    if (monthlyPrice === 0) return '$0';

    // (B) A/B test location: flip monthly/yearly pricing display
    if (billingPeriod === 'yearly') {
      const yearlyPrice = Math.round(monthlyPrice * 12 * 0.8); // 20% discount
      return `$${yearlyPrice}`;
    }
    return `$${monthlyPrice}`;
  };

  const getPeriod = (monthlyPrice: number | null): string => {
    if (monthlyPrice === null) return 'contact us';
    if (monthlyPrice === 0) return 'forever';
    return billingPeriod === 'yearly' ? 'per year' : 'per month';
  };

  return (
    <section
      id="pricing"
      className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--bg-primary)' }}
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Choose the plan that fits your workflow
          </h2>
          <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
            FlowSync scales with your team — from solo to enterprise
          </p>

          {/* Monthly/Yearly Toggle */}
          <div className="inline-flex items-center gap-4 p-1 rounded-full" style={{ backgroundColor: 'var(--bg-surface)', border: '2px solid var(--border-default)' }}>
            <button
              onClick={() => handleToggle('monthly')}
              onKeyDown={(e) => handleToggleKeyDown(e, 'monthly')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingPeriod === 'monthly' ? 'shadow-md' : ''
              }`}
              style={{
                backgroundColor: billingPeriod === 'monthly' ? 'var(--accent-primary)' : 'transparent',
                color: billingPeriod === 'monthly' ? 'white' : 'var(--text-secondary)',
              }}
              role="switch"
              aria-checked={billingPeriod === 'monthly'}
              aria-label="Switch to monthly billing"
            >
              Monthly
            </button>
            <button
              onClick={() => handleToggle('yearly')}
              onKeyDown={(e) => handleToggleKeyDown(e, 'yearly')}
              className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                billingPeriod === 'yearly' ? 'shadow-md' : ''
              }`}
              style={{
                backgroundColor: billingPeriod === 'yearly' ? 'var(--accent-primary)' : 'transparent',
                color: billingPeriod === 'yearly' ? 'white' : 'var(--text-secondary)',
              }}
              role="switch"
              aria-checked={billingPeriod === 'yearly'}
              aria-label="Switch to yearly billing"
            >
              Yearly
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: 'var(--color-success)', color: 'white' }}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'transform scale-105 shadow-lg border-2'
                  : 'shadow-md hover:shadow-lg border'
              }`}
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: plan.popular ? 'var(--accent-secondary)' : 'var(--border-default)',
              }}
            >
              {/* "Most Popular" Ribbon (top-right diagonal) */}
              {plan.popular && (
                <div className="absolute -top-1 -right-1 overflow-hidden w-32 h-32 pointer-events-none">
                  <div
                    className="absolute top-0 right-0 w-40 h-8 transform rotate-45 translate-x-10 translate-y-6 text-center text-xs font-bold flex items-center justify-center"
                    style={{ backgroundColor: 'var(--accent-secondary)', color: 'white' }}
                  >
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4" style={{ backgroundColor: 'var(--accent-primary)', opacity: 0.1 }}>
                <i className={`fas ${plan.icon} text-3xl`} style={{ color: 'var(--accent-primary)' }}></i>
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  {getPrice(plan.monthlyPrice)}
                </span>
                <span className="text-lg ml-2" style={{ color: 'var(--text-muted)' }}>
                  /{getPeriod(plan.monthlyPrice)}
                </span>
              </div>

              {/* CTA Button */}
              {/* (A) CTA color: controlled by --cta variable (see src/theme.ts) */}
              <button
                onClick={() => handleCTAClick(plan.name)}
                className="w-full px-6 py-3 rounded-2xl font-semibold transition-all mb-8"
                style={{
                  backgroundColor: plan.popular ? 'var(--cta)' : 'var(--accent-secondary)',
                  color: 'white',
                }}
                aria-label={plan.cta}
              >
                {plan.cta}
              </button>

              {/* Benefits List */}
              <ul className="space-y-3">
                {plan.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <i className="fas fa-check-circle mt-1" style={{ color: 'var(--color-success)' }}></i>
                    <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Microcopy */}
        <div className="text-center">
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            No credit card required • Cancel anytime • Secure billing (256-bit encryption)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
