/**
 * Trust Strip Component
 *
 * Social proof section featuring:
 * - Client logos (increases credibility)
 * - Short testimonials
 * - Trust badges (GDPR, encryption, etc.)
 */

import React from 'react';

const TrustStrip: React.FC = () => {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container-custom">
        {/* Client Logos */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide mb-6"
             style={{ color: 'var(--text-muted)' }}>
            Trusted by 10,000+ teams worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            <i className="fab fa-github text-4xl md:text-5xl hover:opacity-100 transition-opacity" style={{ color: 'var(--text-secondary)' }} title="GitHub"></i>
            <i className="fab fa-slack text-4xl md:text-5xl hover:opacity-100 transition-opacity" style={{ color: 'var(--text-secondary)' }} title="Slack"></i>
            <i className="fab fa-microsoft text-4xl md:text-5xl hover:opacity-100 transition-opacity" style={{ color: 'var(--text-secondary)' }} title="Microsoft"></i>
            <i className="fab fa-google text-4xl md:text-5xl hover:opacity-100 transition-opacity" style={{ color: 'var(--text-secondary)' }} title="Google"></i>
            <i className="fab fa-dropbox text-4xl md:text-5xl hover:opacity-100 transition-opacity" style={{ color: 'var(--text-secondary)' }} title="Dropbox"></i>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 py-6 border-t border-b"
             style={{ borderColor: 'var(--border-default)' }}>
          <div className="flex items-center gap-2">
            <i className="fas fa-shield-alt text-green-500 text-xl"></i>
            <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-lock text-green-500 text-xl"></i>
            <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>256-bit Encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-star text-yellow-500 text-xl"></i>
            <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>4.9/5 Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
