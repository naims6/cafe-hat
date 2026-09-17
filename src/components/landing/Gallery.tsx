'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
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

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section id="gallery" className="relative overflow-hidden bg-cream py-16 sm:py-24 lg:py-28">
      {/* Background Soft Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-sunny/10 blur-3xl" />
        <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-tomato/8 blur-3xl" />
      </div>

      <Container className="relative">
        {/* Header & Filter Row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="OUR GALLERY"
            title="Moments Worth Saving"
            subtitle="Explore our cozy dining ambience, fresh delicious meals, and memorable cafe moments."
          />

          {/* Filter Pills */}
          <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible">
            {filterCategories.map((cat) => {
              const isActive = active === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActive(cat.value)}
                  className={cn(
                    'relative shrink-0 rounded-full px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider transition-all duration-300',
                    isActive
                      ? 'bg-espresso text-cream shadow-md'
                      : 'bg-white border border-espresso/10 text-espresso/70 hover:border-espresso/30 hover:text-espresso'
                  )}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean Balanced Gallery Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <div
                  onClick={() => setLightboxIndex(i)}
                  className="group relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-2xl border border-espresso/10 bg-cream-dark shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-espresso/20"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Top Category Badge */}
                  <div className="absolute left-3 top-3 z-10">
                    <span className="rounded-full bg-espresso/90 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-cream backdrop-blur-md shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Dark Hover Gradient & Maximize Icon */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <div className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-espresso shadow-xl transform scale-90 transition-transform duration-300 group-hover:scale-100">
                      <Maximize2 className="h-4 w-4 text-tomato" />
                      <span>View Full Image</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-12 rounded-2xl border border-dashed border-espresso/20 py-12 text-center text-espresso/60 font-medium">
            No items in this category.
          </div>
        )}
      </Container>

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-black/92 p-4 sm:p-6 backdrop-blur-md select-none"
            onClick={closeLightbox}
          >
            {/* Top Bar inside Lightbox */}
            <div
              className="flex w-full max-w-6xl items-center justify-between py-2 text-white z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-tomato px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
                  {filtered[lightboxIndex].category}
                </span>
                <span className="text-xs font-bold text-white/70">
                  {lightboxIndex + 1} of {filtered.length}
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-tomato hover:scale-105 active:scale-95"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Main Lightbox Content Area */}
            <div
              className="relative flex h-[75vh] w-full max-w-5xl items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:-left-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-espresso hover:scale-110 active:scale-95"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>

              {/* Full Image Container - Displays complete uncropped image with object-contain */}
              <div className="relative h-full w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={filtered[lightboxIndex].id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={filtered[lightboxIndex].src}
                      alt={filtered[lightboxIndex].alt}
                      fill
                      priority
                      sizes="100vw"
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-2 sm:-right-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-espresso hover:scale-110 active:scale-95"
                aria-label="Next image"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div
              className="w-full max-w-2xl rounded-2xl bg-white/10 px-6 py-3 text-center backdrop-blur-md z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-sm font-semibold text-white/90">
                {filtered[lightboxIndex].alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
