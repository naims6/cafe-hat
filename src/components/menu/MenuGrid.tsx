'use client';

import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { MenuItem } from '@/types/restaurant';
import { MenuCard } from './MenuCard';
import { MenuFilter, type FilterCategory } from './MenuFilter';

const filterCategories: { label: string; value: FilterCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Popular', value: 'popular' },
  { label: 'Food', value: 'food' },
  { label: 'Coffee', value: 'coffee' },
  { label: 'Drinks', value: 'drinks' },
  { label: 'Desserts', value: 'desserts' },
];

interface MenuGridProps {
  items: MenuItem[];
}

export function MenuGrid({ items }: MenuGridProps) {
  const [active, setActive] = useState<FilterCategory>('all');

  const filtered = useMemo(() => {
    if (active === 'all') return items;
    if (active === 'popular') return items.filter((item) => item.popular || item.featured);
    return items.filter((item) => item.category === active);
  }, [items, active]);

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <MenuFilter categories={filterCategories} active={active} onChange={setActive} />

      {/* Uniform Aligned Menu Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex"
            >
              <MenuCard item={item} className="w-full" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="rounded-2xl border border-dashed border-espresso/20 py-12 text-center text-espresso/60 font-medium">
          No items found in this category.
        </div>
      )}
    </div>
  );
}
