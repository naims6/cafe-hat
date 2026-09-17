import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  /** Controls the image + text size. */
  size?: 'sm' | 'md' | 'lg';
  /** When true, renders CAFE and HAT in cream/tomato (for dark backgrounds). */
  inverted?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { img: 'h-8 w-8',  text: 'text-xl'  },
  md: { img: 'h-10 w-10', text: 'text-2xl' },
  lg: { img: 'h-12 w-12', text: 'text-3xl' },
};

export function Logo({ size = 'md', inverted = false, className }: LogoProps) {
  const { img, text } = sizeMap[size];

  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span
        className={cn(
          'relative overflow-hidden rounded-full bg-white shadow-sm transition-transform duration-300 group-hover:scale-105',
          img,
          inverted
            ? 'ring-2 ring-cream/20'
            : 'border-2 border-espresso/15'
        )}
      >
        <Image
          src="/logo.jpg"
          alt="Cafe Hat Logo"
          width={48}
          height={48}
          className="h-full w-full object-cover"
          priority
        />
      </span>
      <span className={cn('font-black tracking-tight', text)}>
        <span className={inverted ? 'text-cream' : 'text-espresso'}>CAFE</span>
        <span className="text-tomato"> HAT</span>
      </span>
    </span>
  );
}
