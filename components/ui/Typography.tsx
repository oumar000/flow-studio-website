// components/ui/Typography.tsx
import { createElement, HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight',
      h2: 'text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight',
      h3: 'text-2xl md:text-3xl font-semibold font-heading leading-tight',
      h4: 'text-xl md:text-2xl font-semibold font-heading leading-tight',
      body: 'text-base md:text-lg leading-relaxed',
      small: 'text-sm text-gray-600',
      caption: 'text-xs text-gray-500',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

interface TypographyProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

export function Typography({
  variant,
  as = 'p',
  className,
  children,
  ...props
}: TypographyProps) {
  return createElement(
    as,
    {
      className: cn(typographyVariants({ variant }), className),
      ...props,
    },
    children
  );
}

export default Typography;