'use client';

import { useState, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem, GalleryCategory } from '@/types/restaurant';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { cn } from '@/lib/utils';

interface GalleryProps {
  items: GalleryItem[];
}

const filterCategories: { label: string; value: GalleryCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Interior', value: 'interior' },
  { label: 'Food', value: 'food' },
  { label: 'Drinks', value: 'drinks' },
  { label: 'Moments', value: 'moments' },
];

const spanClasses: Record<string, string> = {
  tall: 'row-span-2',
  wide: 'col-span-2',
  normal: '',
};

const aspectClasses: Record<string, string> = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
};

export function Gallery({ items }: GalleryProps) {
  const [active, setActive] = useState<GalleryCategory | 'all'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const filtered = useMemo(() => {
    if (active === 'all') return items;
    return items.filter((item) => item.category === active);
  }, [items, active]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filtered.length));
  }, [filtered.length]);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  return (
    <section id="gallery" className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Gallery"
            title="Moments worth saving."
          />
          {/* Filters */}
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
            {filterCategories.map((cat) => {
              const isActive = active === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActive(cat.value)}
                  className={cn(
                    'shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300',
                    isActive
                      ? 'bg-tomato text-cream'
                      : 'bg-espresso/5 text-espresso/60 hover:bg-espresso/10'
                  )}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightboxIndex(i)}
                className={cn(
                  'group relative overflow-hidden',
                  aspectClasses[item.aspect],
                  spanClasses[item.span]
                )}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="bg-sunny px-2 py-1 text-xs font-bold uppercase tracking-wider text-espresso">
                    {item.category}
                  </span>
                  <span className="mt-2 text-lg font-bold uppercase tracking-wider text-cream">
                    View →
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-espresso/90 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center text-cream transition-colors hover:text-tomato"
              aria-label="Close"
            >
              <X className="h-7 w-7" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-cream transition-colors hover:text-sunny"
              aria-label="Previous"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-cream transition-colors hover:text-sunny"
              aria-label="Next"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image */}
            <motion.div
              key={filtered[lightboxIndex].id}
              initial={shouldReduceMotion ? false : { scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative h-[75vh] w-[90vw] max-w-4xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                sizes="90vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-espresso/70 p-4">
                <span className="bg-sunny px-2 py-1 text-xs font-bold uppercase tracking-wider text-espresso">
                  {filtered[lightboxIndex].category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
