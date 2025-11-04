/**
 * Analytics Utilities
 *
 * Lightweight event tracking for conversion metrics.
 * Integrates with Google Analytics dataLayer when available.
 */

interface AnalyticsEvent {
  event: string;
  [key: string]: any;
}

/**
 * Track an analytics event
 *
 * @param event - Event name (e.g., 'pricing_cta_click')
 * @param props - Additional properties (e.g., { plan: 'Pro' })
 */
export function track(event: string, props?: Record<string, any>): void {
  const eventData: AnalyticsEvent = {
    event,
    ...props,
    timestamp: new Date().toISOString(),
  };

  // Log to console for development/debugging
  console.log('[Analytics]', eventData);

  // Push to Google Analytics dataLayer if available
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push(eventData);
  }

  // Add additional analytics integrations here (Mixpanel, Segment, etc.)
}

export default { track };
