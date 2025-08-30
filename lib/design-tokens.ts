// lib/design-tokens.ts
// Colors that match your sophisticated blue-gray palette

export const colors = {
  // Primary - Deep royal blue for actions and branding
  primary: {
    50: 'rgb(240 244 255)',   // Light tint
    100: 'rgb(224 234 255)',  // Very light
    400: 'rgb(110 128 160)',  // Your slate blue - #6e80a0
    500: 'rgb(14 57 115)',    // Your main primary - #0e3973
    600: 'rgb(11 43 91)',     // Your primary dark - #0b2b5b
    700: 'rgb(8 35 71)',      // Darker shade
    900: 'rgb(4 18 48)',      // Your darkest navy - #041230
  },
  
  // Neutral - Your blue-gray system
  neutral: {
    50: 'rgb(236 238 241)',   // Your light background - #eceef1
    100: 'rgb(221 225 230)',  // Light gray
    400: 'rgb(124 141 160)',  // Your medium blue-gray - #7c8da0
    500: 'rgb(110 128 160)',  // Your slate blue - #6e80a0
    600: 'rgb(76 85 98)',     // Your dark gray-blue - #4c5562
    700: 'rgb(69 75 94)',     // Your charcoal blue - #454b5e
    800: 'rgb(46 55 72)',     // Your dark blue-gray - #2e3748
    900: 'rgb(4 4 5)',        // Your pure black - #040405
  },
  
  // Surface colors for different UI elements
  surface: {
    light: 'rgb(236 238 241)',  // Light mode cards - #eceef1
    dark: 'rgb(46 55 72)',      // Dark mode cards - #2e3748
    darker: 'rgb(4 18 48)',     // Dark mode background - #041230
  }
};

// Spacing matches CSS custom properties
export const spacing = {
  xs: 'var(--spacing-xs)',     // 0.5rem
  sm: 'var(--spacing-sm)',     // 1rem
  md: 'var(--spacing-md)',     // 1.5rem
  lg: 'var(--spacing-lg)',     // 2rem
  xl: 'var(--spacing-xl)',     // 3rem
  '2xl': 'var(--spacing-2xl)', // 4rem
};

// Typography system optimized for your color scheme
export const typography = {
  sizes: {
    xs: 'text-xs',     // 12px
    sm: 'text-sm',     // 14px
    base: 'text-base', // 16px
    lg: 'text-lg',     // 18px
    xl: 'text-xl',     // 20px
    '2xl': 'text-2xl', // 24px
    '3xl': 'text-3xl', // 30px
  },
  // Text color utilities for your palette
  colors: {
    primary: 'text-primary-500',      // Main blue for links/emphasis
    secondary: 'text-neutral-600',    // Secondary text
    muted: 'text-neutral-500',        // Muted text
    inverse: 'text-neutral-50',       // Light text on dark backgrounds
  },
  // Custom gradient class
  gradients: {
    primary: 'text-gradient', // Uses .text-gradient class
  }
};

export default design-tokens;