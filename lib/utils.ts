// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Tailwind v4 breakpoints (matches CSS custom properties)
export const breakpoints = {
  xs: '480px',   // Custom breakpoint
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Design tokens that match your CSS variables
export const tokens = {
  colors: {
    primary: {
      50: 'rgb(239 246 255)',
      500: 'rgb(59 130 246)',
      600: 'rgb(37 99 235)',
      700: 'rgb(29 78 216)',
      900: 'rgb(30 58 138)',
    }
  },
  spacing: {
    xs: '0.5rem',   // 8px
    sm: '1rem',     // 16px  
    md: '1.5rem',   // 24px
    lg: '2rem',     // 32px
    xl: '3rem',     // 48px
    '2xl': '4rem',  // 64px
  }
} as const;