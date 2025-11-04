/**
 * A/B Testing Configuration
 *
 * This file manages A/B test variants for conversion optimization.
 * Update these values to run different experiments.
 *
 * USAGE:
 * 1. Set ENABLE_AB_TESTING to true
 * 2. Configure variants for each test
 * 3. Use getVariant() in components to get the active variant
 * 4. Track conversions using your analytics tool (GA4, Mixpanel, etc.)
 */

export interface ABTest {
  name: string;
  enabled: boolean;
  variants: {
    control: any;
    variant: any;
  };
  // Which variant to show (can be randomized or set manually)
  activeVariant?: 'control' | 'variant';
}

/**
 * MASTER SWITCH: Enable/disable all A/B testing
 */
export const ENABLE_AB_TESTING = false;

/**
 * A/B Test Configurations
 */
export const AB_TESTS: Record<string, ABTest> = {
  // Test 1: CTA Color
  ctaColor: {
    name: 'CTA Button Color',
    enabled: true,
    variants: {
      control: '#FB923C', // Orange (current)
      variant: '#EF4444',  // Red (test variant)
    },
    activeVariant: 'control',
  },

  // Test 2: Hero Headline
  heroHeadline: {
    name: 'Hero Headline Copy',
    enabled: false,
    variants: {
      control: 'FlowSync keeps your team in sync — across apps and devices.',
      variant: 'Sync your work automatically. Save 5+ hours per week.',
    },
    activeVariant: 'control',
  },

  // Test 3: No Credit Card Microcopy
  noCreditCardCopy: {
    name: 'No Credit Card Required Text',
    enabled: false,
    variants: {
      control: true,  // Show the text
      variant: false, // Hide the text
    },
    activeVariant: 'control',
  },

  // Test 4: Pricing Highlight
  pricingHighlight: {
    name: 'Highlight Most Popular Plan',
    enabled: false,
    variants: {
      control: true,  // Show "Most Popular" badge
      variant: false, // No badge
    },
    activeVariant: 'control',
  },
};

/**
 * Get the active variant for a specific test
 *
 * @param testName - The name of the test (key from AB_TESTS)
 * @returns The active variant value
 */
export function getVariant<T>(testName: keyof typeof AB_TESTS): T {
  if (!ENABLE_AB_TESTING) {
    return AB_TESTS[testName].variants.control as T;
  }

  const test = AB_TESTS[testName];
  if (!test.enabled) {
    return test.variants.control as T;
  }

  const variant = test.activeVariant || 'control';
  return test.variants[variant] as T;
}

/**
 * Randomly assign a user to a variant (50/50 split)
 * Call this once per user session and store in localStorage
 *
 * @param testName - The name of the test
 * @returns 'control' or 'variant'
 */
export function assignVariant(testName: keyof typeof AB_TESTS): 'control' | 'variant' {
  const storageKey = `ab_test_${testName}`;
  const stored = localStorage.getItem(storageKey);

  if (stored === 'control' || stored === 'variant') {
    return stored;
  }

  const variant = Math.random() < 0.5 ? 'control' : 'variant';
  localStorage.setItem(storageKey, variant);
  return variant;
}

/**
 * Track a conversion event for analytics
 *
 * @param eventName - Name of the conversion event
 * @param testName - Which A/B test this relates to
 * @param variant - Which variant the user saw
 * @param value - Optional conversion value
 */
export function trackConversion(
  eventName: string,
  testName?: keyof typeof AB_TESTS,
  variant?: 'control' | 'variant',
  value?: number
) {
  // Example: Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      ab_test: testName,
      ab_variant: variant,
      value: value,
    });
  }

  // Example: Console logging for development
  console.log('Conversion tracked:', {
    event: eventName,
    test: testName,
    variant: variant,
    value: value,
  });
}
