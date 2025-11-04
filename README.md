# FlowSync Landing Page

A modern, high-converting landing page for FlowSync - a cloud-based productivity platform that automatically syncs tasks, messages, and files across all devices and collaboration tools.

## Latest Updates (Branch: audit-and-fix-2025-11-04)

### Hero Section
- Updated headline: "FlowSync keeps your team in sync — across apps and devices."
- New sub-headline: "One platform. All your workflows. Zero interruptions."
- Enhanced primary CTA with larger padding, bold font, and high visibility
- Moved secondary CTA below primary with lighter styling
- Updated trust microcopy: "No credit card required • Cancel anytime • Secure & encrypted billing"

### Social Proof & Trust
- Reorganized trust strip to appear immediately after hero
- Added testimonial with avatar directly beneath hero section
- Enhanced trust badges: GDPR compliant, 256-bit encryption, Trusted by teams at GitHub, Slack & more

### Pricing Section
- Implemented working Monthly/Yearly toggle with 20% discount calculation
- Added "Most Popular" badge on Pro plan with visual prominence
- Updated plan CTAs: "Start Free", "Start Pro — Free 14-day trial", "Contact Sales"
- Added trust microcopy: "No credit card required • Cancel anytime • Secure billing (256-bit encryption)"
- Fully responsive grid: grid-cols-1 sm:grid-cols-3 gap-6

### Theme & Configuration
- Enhanced theme.ts with comprehensive color tokens
- Updated tailwind.config.js with cta, accent1, accent2, bg, text tokens
- Centralized CTA color management for site-wide updates

### Accessibility
- Added keyboard navigation (space/enter) for pricing toggle
- Implemented role="switch" and aria-checked for toggle buttons
- Added aria-labelledby for pricing section
- Proper semantic HTML throughout

### Analytics
- Implemented lightweight analytics tracking with dataLayer integration
- Added tracking to all CTAs and interactions
- Console logging for development: TRACK_EVENT format

### Testing
- Created accessibility tests for Pricing component using jest-axe
- Added snapshot tests for Hero and Pricing components
- Ensured WCAG AA compliance

## Tech Stack

- **React 18** - Functional components with hooks
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **Font Awesome** - Icon library
- **Vite** - Fast build tool and dev server

## Features

✅ Fully responsive design (mobile-first)
✅ Modern, clean UI with smooth animations
✅ Component-based architecture
✅ TypeScript for type safety
✅ Optimized for conversions
✅ Accessibility compliant (WCAG AA)
✅ Analytics integration ready
✅ Monthly/Yearly pricing toggle
✅ Comprehensive test coverage

## Landing Page Sections

1. **Hero Section** - Compelling headline with CTA
2. **Social Proof** - Company logos and testimonial slider
3. **Features** - 5 key features with icons
4. **How It Works** - 3-step process
5. **Pricing** - 3 tiers (Free, Pro, Enterprise)
6. **FAQ** - 5 common questions with accordion
7. **Footer** - Navigation and social links

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx
│   ├── SocialProof.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Customization

### Colors

The color scheme uses Tailwind's custom colors defined in `tailwind.config.js`:
- Primary: Sky blue shades
- Accent: Purple shades

### Content

All content is defined within each component and can be easily modified by editing the respective TypeScript files.

## Design Principles

- **Clear Value Proposition** - Immediately communicate benefits
- **Social Proof** - Build trust with testimonials and logos
- **Conversion-Focused** - Strategic CTA placement
- **Mobile-First** - Responsive design optimized for all devices
- **Clean & Modern** - Minimal design with balanced whitespace

## License

MIT
