import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: "fa-sync-alt",
    title: "Automatic Sync Across Tools",
    description: "Connect Slack, Notion, Gmail, Asana, and more. Updates flow automatically—no manual copying or pasting ever again.",
    color: "text-blue-500"
  },
  {
    icon: "fa-bolt",
    title: "Real-Time Updates",
    description: "Changes sync instantly across all platforms. Your team always sees the latest information, everywhere.",
    color: "text-yellow-500"
  },
  {
    icon: "fa-shield-alt",
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption, SOC 2 compliance, and granular permissions keep your data safe and private.",
    color: "text-green-500"
  },
  {
    icon: "fa-search",
    title: "Universal Search",
    description: "Find any message, file, or task across all your tools from one search bar. Stop digging through multiple apps.",
    color: "text-purple-500"
  },
  {
    icon: "fa-robot",
    title: "Smart Automation",
    description: "AI-powered workflows automatically route tasks, notify teammates, and keep projects on track without manual intervention.",
    color: "text-pink-500"
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Everything You Need, Nothing You Don't
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Stop juggling tools and losing context. FlowSync brings your entire workflow into one connected ecosystem.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg md:rounded-xl p-6 sm:p-7 md:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-primary-50 to-purple-50 mb-4 sm:mb-5`}>
                <i className={`fas ${feature.icon} text-xl sm:text-2xl ${feature.color}`}></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-accent-500 to-primary-600 rounded-lg md:rounded-xl p-6 sm:p-7 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 text-white flex flex-col justify-center items-center text-center">
            <i className="fas fa-rocket text-3xl sm:text-4xl mb-3 sm:mb-4 opacity-90"></i>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
              Ready to Transform Your Workflow?
            </h3>
            <button className="bg-white text-accent-600 font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-gray-50 transition-colors mt-2 text-sm sm:text-base">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
