'use client';

import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { MenuItem } from '@/types/restaurant';
import { MenuCard } from './MenuCard';
import { MenuFilter, type FilterCategory } from './MenuFilter';

const filterCategories: { label: string; value: FilterCategory }[] = [
  { label: 'All', value: 'all' },
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
    return items.filter((item) => item.category === active);
  }, [items, active]);

  // Assign sizes based on featured flag and position
  const sizedItems = useMemo(() => {
    return filtered.map((item, index) => {
      if (item.featured) return { item, size: 'large' as const };
      if (index === 1 || index === 4) return { item, size: 'medium' as const };
      return { item, size: 'small' as const };
    });
  }, [filtered]);

  return (
    <div>
      <MenuFilter categories={filterCategories} active={active} onChange={setActive} />
      <motion.div
        layout
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {sizedItems.map(({ item, size }) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <MenuCard item={item} size={size} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
