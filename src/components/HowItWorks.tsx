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
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Get Started in Minutes
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            FlowSync is designed for simplicity. No complex configuration, no IT team required.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-600 transform -translate-y-1/2 z-0"
               style={{ top: '80px' }}>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-lg md:rounded-xl p-6 sm:p-7 md:p-8 shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 text-center">
                  {/* Icon Circle */}
                  <div className="relative inline-block mb-4 sm:mb-5 md:mb-6">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg">
                      <i className={`fas ${step.icon} text-2xl sm:text-3xl text-white`}></i>
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-accent-500 text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg shadow-md">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Hidden on last step and mobile */}
                {step.number < steps.length && (
                  <div className="hidden md:block absolute top-1/4 -right-6 lg:-right-8 text-primary-400 text-2xl md:text-3xl z-20">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <button className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-sm sm:text-base">
            Start Your Free Trial
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
          <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 px-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
