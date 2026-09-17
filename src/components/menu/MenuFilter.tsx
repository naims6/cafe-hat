'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type FilterCategory = 'all' | 'food' | 'coffee' | 'drinks' | 'desserts';

interface MenuFilterProps {
  categories: { label: string; value: FilterCategory }[];
  active: FilterCategory;
  onChange: (value: FilterCategory) => void;
}

export function MenuFilter({ categories, active, onChange }: MenuFilterProps) {
  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible">
      {categories.map((cat) => {
        const isActive = active === cat.value;
        return (
          <button
            key={cat.value}
            onClick={() => onChange(cat.value)}
            className={cn(
              'relative shrink-0 rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors duration-300',
              isActive ? 'text-cream' : 'text-espresso/60 hover:text-espresso'
            )}
          >
            {isActive && (
              <motion.span
                layoutId="menu-filter-pill"
                className="absolute inset-0 rounded-full bg-espresso"
                transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
}
