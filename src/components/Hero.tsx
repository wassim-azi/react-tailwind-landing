import React from 'react';
import { track } from '../utils/analytics';

const Hero: React.FC = () => {
  const handleCTAClick = () => {
    track('hero_cta_click', { location: 'primary' });
    console.log('CTA clicked - navigate to signup');
  };

  const handleDemoClick = () => {
    track('hero_demo_click');
    console.log('Demo clicked');
  };

  return (
    <section className="gradient-bg py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Entire Workspace,
              <span className="text-primary-600"> Perfectly Synced</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              FlowSync automatically connects Slack, Notion, Gmail, and all your tools into one seamless workflow—no manual updates, no context switching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Primary CTA - uses --cta color from theme.ts */}
              <button
                onClick={handleCTAClick}
                className="text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                style={{ backgroundColor: 'var(--cta)' }}
              >
                Start Free Trial
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <button
                onClick={handleDemoClick}
                className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-lg border-2 border-gray-200 transition-all"
              >
                Watch Demo
                <i className="fas fa-play ml-2"></i>
              </button>
            </div>
            <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-600">
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
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="FlowSync Dashboard"
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Card 1 */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg hidden sm:block">
                <div className="flex items-center gap-2">
                  <i className="fas fa-sync-alt text-primary-500"></i>
                  <span className="text-sm font-semibold">Auto-syncing</span>
                </div>
              </div>
              {/* Floating Card 2 */}
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg hidden sm:block">
                <div className="flex items-center gap-2">
                  <i className="fas fa-bell text-accent-500"></i>
                  <span className="text-sm font-semibold">Real-time updates</span>
                </div>
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-purple-200 rounded-2xl transform rotate-3 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
