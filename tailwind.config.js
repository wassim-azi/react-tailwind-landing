/** @type {import('tailwindcss').Config} */

/**
 * TO CHANGE CTA COLOR:
 * Edit the 'cta' color below to update the primary CTA site-wide
 * Also update src/theme.ts → theme.colors.cta for CSS variable consistency
 */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Change CTA color here to update site-wide
        cta: '#FB923C',        // Primary CTA button color (orange)
        accent1: '#06B6D4',    // Cyan - links, highlights
        accent2: '#6366F1',    // Indigo - headings, gradients
        bg: '#F8FAFC',         // Main background
        text: '#0F172A',       // Primary text

        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          500: '#8b5cf6',
          600: '#7c3aed',
        }
      },
    },
  },
  plugins: [],
}

