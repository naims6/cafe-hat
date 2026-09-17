'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  invert?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
  titleClassName,
  invert = false,
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();
  const alignClass =
    align === 'center' ? 'text-center mx-auto' : align === 'right' ? 'text-right ml-auto' : 'text-left';

  return (
    <div className={cn('max-w-3xl', alignClass, className)}>
      {eyebrow && (
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className={cn(
            'mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em]',
            invert ? 'text-cream/80' : 'text-tomato'
          )}
        >
          <span className="inline-block h-2 w-2 rounded-full bg-current" />
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className={cn(
          'text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl',
          invert ? 'text-cream' : 'text-espresso',
          titleClassName
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={cn(
            'mt-4 text-lg leading-relaxed',
            invert ? 'text-cream/70' : 'text-espresso/60'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
