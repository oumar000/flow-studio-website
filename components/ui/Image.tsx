// components/ui/Image.tsx - Optimized image component
/*import NextImage from 'next/image';
import { cn } from '@/lib/utils';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
}

export function Image({ 
  src, 
  alt, 
  className, 
  priority = false,
  fill = false,
  sizes,
  ...props 
}: ImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      className={cn('object-cover', className)}
      priority={priority}
      fill={fill}
      sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
      {...props}
    />
  );
}*/