'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { MenuItem } from '@/types/restaurant';
import { cn } from '@/lib/utils';

interface MenuCardProps {
  item: MenuItem;
  size?: 'large' | 'medium' | 'small';
  className?: string;
}

const categoryLabels: Record<string, string> = {
  food: 'Food',
  coffee: 'Coffee',
  drinks: 'Drinks',
  desserts: 'Desserts',
};

export function MenuCard({ item, size = 'small', className }: MenuCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const sizeClasses = {
    large: 'col-span-2 row-span-2',
    medium: 'col-span-2 row-span-1',
    small: 'col-span-1 row-span-1',
  };

  const imageHeight = {
    large: 'h-72 sm:h-96 lg:h-[28rem]',
    medium: 'h-56 sm:h-64',
    small: 'h-48 sm:h-52',
  };

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      className={cn(
        'group relative overflow-hidden bg-white',
        sizeClasses[size],
        className
      )}
    >
      {/* Image */}
      <div className={cn('relative w-full overflow-hidden', imageHeight[size])}>
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Category pill */}
        <span className="absolute left-3 top-3 z-10 bg-espresso/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cream backdrop-blur-sm">
          {categoryLabels[item.category]}
        </span>
        {/* Featured badge */}
        {item.featured && (
          <span className="absolute right-3 top-3 z-10 bg-sunny px-3 py-1 text-xs font-black uppercase tracking-wider text-espresso shadow-lg">
            ★ Featured
          </span>
        )}
        {/* Popular badge */}
        {!item.featured && item.popular && (
          <span className="absolute right-3 top-3 z-10 bg-tomato px-3 py-1 text-xs font-black uppercase tracking-wider text-cream shadow-lg">
            Popular
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className={cn(
            'font-bold leading-tight text-espresso',
            size === 'large' ? 'text-2xl' : 'text-lg'
          )}>
            {item.name}
          </h3>
          <span className="shrink-0 whitespace-nowrap bg-cream-dark px-2.5 py-1 text-sm font-black text-tomato">
            ৳{item.price}
          </span>
        </div>
        <p className={cn(
          'text-sm leading-relaxed text-espresso/60',
          size === 'large' ? 'line-clamp-3' : 'line-clamp-2'
        )}>
          {item.description}
        </p>
        {/* Arrow on hover */}
        <div className="mt-1 flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-royal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </motion.article>
  );
}
