import React from 'react';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
  icon: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for individuals trying out FlowSync",
    features: [
      "Connect up to 3 tools",
      "Basic sync (30 min intervals)",
      "500 syncs per month",
      "Community support",
      "7-day activity history"
    ],
    cta: "Get Started Free",
    featured: false,
    icon: "fa-seedling"
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For professionals and small teams",
    features: [
      "Connect unlimited tools",
      "Real-time sync (instant)",
      "Unlimited syncs",
      "Priority email support",
      "Unlimited history & search",
      "Advanced automation rules",
      "Custom workflows",
      "Team collaboration (up to 10)"
    ],
    cta: "Start Free Trial",
    featured: true,
    icon: "fa-rocket"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large teams with advanced needs",
    features: [
      "Everything in Pro, plus:",
      "Dedicated account manager",
      "SLA guarantee (99.9% uptime)",
      "Advanced security & compliance",
      "Custom integrations",
      "Unlimited team members",
      "SSO & SAML authentication",
      "Priority 24/7 phone support"
    ],
    cta: "Contact Sales",
    featured: false,
    icon: "fa-building"
  }
];

const Pricing: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Start free, upgrade when you need more. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-xl md:rounded-2xl p-6 sm:p-7 md:p-8 transition-all duration-300 ${
                tier.featured
                  ? 'bg-gradient-to-br from-accent-500 to-primary-600 text-white shadow-2xl md:scale-105 border-4 border-accent-400'
                  : 'bg-white border-2 border-gray-200 hover:border-primary-300 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Featured Badge */}
              {tier.featured && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 rounded-full shadow-md">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg mb-3 sm:mb-4 ${
                tier.featured ? 'bg-white bg-opacity-20' : 'bg-gradient-to-br from-primary-50 to-purple-50'
              }`}>
                <i className={`fas ${tier.icon} text-xl sm:text-2xl ${tier.featured ? 'text-white' : 'text-primary-600'}`}></i>
              </div>

              {/* Tier Name */}
              <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${tier.featured ? 'text-white' : 'text-gray-900'}`}>
                {tier.name}
              </h3>

              {/* Description */}
              <p className={`text-xs sm:text-sm mb-4 sm:mb-6 ${tier.featured ? 'text-white text-opacity-90' : 'text-gray-600'}`}>
                {tier.description}
              </p>

              {/* Price */}
              <div className="mb-4 sm:mb-6">
                <span className={`text-3xl sm:text-4xl md:text-5xl font-bold ${tier.featured ? 'text-white' : 'text-gray-900'}`}>
                  {tier.price}
                </span>
                <span className={`text-base sm:text-lg ml-2 ${tier.featured ? 'text-white text-opacity-80' : 'text-gray-500'}`}>
                  /{tier.period}
                </span>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all mb-6 sm:mb-8 text-sm sm:text-base ${
                  tier.featured
                    ? 'bg-white text-accent-600 hover:bg-gray-50 shadow-lg'
                    : 'bg-accent-500 text-white hover:bg-accent-600'
                }`}
              >
                {tier.cta}
              </button>

              {/* Features List */}
              <ul className="space-y-2 sm:space-y-3">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <i className={`fas fa-check-circle mt-0.5 sm:mt-1 mr-2 sm:mr-3 text-sm sm:text-base ${
                      tier.featured ? 'text-white' : 'text-green-500'
                    }`}></i>
                    <span className={`text-xs sm:text-sm ${tier.featured ? 'text-white text-opacity-90' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <p className="text-xs sm:text-sm md:text-base text-gray-600 px-4">
            All plans include 14-day free trial • Cancel anytime • Secure payments
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
