/**
 * Theme Configuration
 *
 * Central place to manage color tokens for the entire site.
 *
 * TO CHANGE CTA COLOR:
 * Update theme.colors.cta below. Common alternatives:
 * - Orange (current): '#FB923C'
 * - Red: '#EF4444'
 * - Blue: '#3B82F6'
 * - Green: '#10B981'
 *
 * Ensure WCAG AA contrast ratio ≥4.5:1 with backgrounds.
 */

export const theme = {
  colors: {
    cta: '#FB923C',        // Primary CTA button color (orange)
    accent1: '#06B6D4',    // Cyan - links, highlights
    accent2: '#6366F1',    // Indigo - headings, gradients
    bg: '#F8FAFC',         // Main background (slate-50)
    surface: '#FFFFFF',    // Card backgrounds
    text: '#0F172A',       // Primary text (slate-900)
    textSecondary: '#475569', // Secondary text (slate-600)
    textMuted: '#94A3B8',  // Muted text (slate-400)
    success: '#10B981',    // Green for success states
    border: '#E2E8F0',     // Default borders
  },
  // Add more theme tokens as needed
};

export default theme;
