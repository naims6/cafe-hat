'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

type ShapeKind = 'star' | 'circle' | 'dots' | 'blob' | 'ring' | 'arrow' | 'squiggle' | 'sparkle';

interface DecorativeShapeProps {
  kind: ShapeKind;
  color?: string;
  className?: string;
  float?: boolean;
  spin?: boolean;
  size?: number;
}

export function DecorativeShape({
  kind,
  color = '#F04438',
  className,
  float = false,
  spin = false,
  size = 48,
}: DecorativeShapeProps) {
  const shouldReduceMotion = useReducedMotion();
  const animateClass = shouldReduceMotion
    ? ''
    : float
      ? 'animate-float-slow'
      : spin
        ? 'animate-spin-slow'
        : '';

  const shared = cn('pointer-events-none select-none', animateClass, className);

  const shapes: Record<ShapeKind, React.ReactNode> = {
    star: (
      <svg viewBox="0 0 24 24" width={size} height={size} fill={color} className={shared}>
        <path d="M12 0l3.09 8.26L24 9.17l-6.92 5.35L19.09 24 12 18.27 4.91 24l2.01-9.48L0 9.17l8.91-.91L12 0z" />
      </svg>
    ),
    sparkle: (
      <svg viewBox="0 0 24 24" width={size} height={size} fill={color} className={shared}>
        <path d="M12 2l1.5 7.5L21 11l-7.5 1.5L12 20l-1.5-7.5L3 11l7.5-1.5L12 2z" />
      </svg>
    ),
    circle: (
      <div
        className={cn('rounded-full', shared)}
        style={{ width: size, height: size, backgroundColor: color }}
      />
    ),
    ring: (
      <div
        className={cn('rounded-full border-4', shared)}
        style={{ width: size, height: size, borderColor: color, backgroundColor: 'transparent' }}
      />
    ),
    dots: (
      <svg width={size} height={size} viewBox="0 0 48 48" className={shared}>
        {Array.from({ length: 3 }).flatMap((_, r) =>
          Array.from({ length: 3 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={8 + c * 16} cy={8 + r * 16} r="4" fill={color} />
          ))
        )}
      </svg>
    ),
    blob: (
      <div
        className={shared}
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: '42% 58% 63% 37% / 41% 44% 56% 59%',
        }}
      />
    ),
    arrow: (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={shared}>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    ),
    squiggle: (
      <svg viewBox="0 0 80 24" width={size * 1.5} height={size * 0.4} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" className={shared}>
        <path d="M2 12 Q12 2, 22 12 T42 12 T62 12 T78 12" />
      </svg>
    ),
  };

  return <>{shapes[kind]}</>;
}
