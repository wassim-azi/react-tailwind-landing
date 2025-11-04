import React from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Connect Your Tools",
    description: "Link your favorite apps—Slack, Notion, Gmail, Asana, and more—in just a few clicks. No technical setup required.",
    icon: "fa-plug"
  },
  {
    number: 2,
    title: "Set Your Preferences",
    description: "Choose what to sync, who gets notified, and how data flows between your tools. FlowSync adapts to your workflow.",
    icon: "fa-sliders-h"
  },
  {
    number: 3,
    title: "Work Seamlessly",
    description: "Updates flow automatically between all your tools. Focus on your work, not on keeping apps in sync.",
    icon: "fa-check-circle"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            FlowSync is designed for simplicity. No complex configuration, no IT team required.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-600 transform -translate-y-1/2 z-0"
               style={{ top: '80px' }}>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 text-center">
                  {/* Icon Circle */}
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg">
                      <i className={`fas ${step.icon} text-3xl text-white`}></i>
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Hidden on last step and mobile */}
                {step.number < steps.length && (
                  <div className="hidden md:block absolute top-1/4 -right-6 lg:-right-8 text-primary-400 text-3xl z-20">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Start Your Free Trial
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
