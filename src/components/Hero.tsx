import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="gradient-bg py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Your Entire Workspace,
              <span className="text-primary-600"> Perfectly Synced</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 mx-auto lg:mx-0 max-w-xl lg:max-w-2xl">
              FlowSync automatically connects Slack, Notion, Gmail, and all your tools into one seamless workflow—no manual updates, no context switching.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-sm sm:text-base">
                Start Free Trial
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 border-gray-200 transition-all text-sm sm:text-base">
                Watch Demo
                <i className="fas fa-play ml-2"></i>
              </button>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 justify-center lg:justify-start text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-green-500"></i>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-green-500"></i>
                <span>No credit card required</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="FlowSync Dashboard"
                className="rounded-xl md:rounded-2xl shadow-2xl w-full"
              />
              {/* Floating Card 1 */}
              <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 bg-white p-2 md:p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center gap-2">
                  <i className="fas fa-sync-alt text-primary-500 text-sm md:text-base"></i>
                  <span className="text-xs md:text-sm font-semibold">Auto-syncing</span>
                </div>
              </div>
              {/* Floating Card 2 */}
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-white p-2 md:p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center gap-2">
                  <i className="fas fa-bell text-accent-500 text-sm md:text-base"></i>
                  <span className="text-xs md:text-sm font-semibold">Real-time updates</span>
                </div>
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-purple-200 rounded-xl md:rounded-2xl transform rotate-3 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
