'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Flame } from 'lucide-react';

export type FilterCategory = 'all' | 'popular' | 'food' | 'coffee' | 'drinks' | 'desserts';

interface MenuFilterProps {
  categories: { label: string; value: FilterCategory }[];
  active: FilterCategory;
  onChange: (value: FilterCategory) => void;
}

export function MenuFilter({ categories, active, onChange }: MenuFilterProps) {
  return (
    <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-3 pt-1 sm:flex-wrap sm:justify-center sm:overflow-visible">
      {categories.map((cat) => {
        const isActive = active === cat.value;
        const isPopular = cat.value === 'popular';
        return (
          <button
            key={cat.value}
            onClick={() => onChange(cat.value)}
            className={cn(
              'relative shrink-0 rounded-full px-5 py-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5',
              isActive
                ? 'text-cream shadow-md'
                : 'bg-white/80 border border-espresso/10 text-espresso/70 hover:border-espresso/30 hover:text-espresso'
            )}
          >
            {isActive && (
              <motion.span
                layoutId="menu-filter-pill"
                className="absolute inset-0 rounded-full bg-espresso"
                transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              {isPopular && <Flame className={cn('h-4 w-4', isActive ? 'text-sunny' : 'text-tomato animate-pulse')} />}
              {cat.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
