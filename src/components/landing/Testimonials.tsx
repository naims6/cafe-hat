'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Testimonial } from '@/types/restaurant';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { DecorativeShape } from '@/components/shared/DecorativeShape';

interface TestimonialsProps {
  items: Testimonial[];
}

const CARDS_VISIBLE = 3;
const AUTO_INTERVAL = 4000;

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className="relative flex flex-col p-7 h-full"
      style={{ backgroundColor: t.accentColor, color: t.textColor }}
    >
      <Quote className="h-10 w-10 opacity-20" fill="currentColor" />

      <div
        className="mt-4 flex gap-1"
        style={{ color: t.accentColor === '#FFC928' ? '#F04438' : '#FFC928' }}
      >
        {Array.from({ length: t.rating }).map((_, s) => (
          <Star key={s} className="h-5 w-5" fill="currentColor" />
        ))}
      </div>

      <p className="mt-4 flex-1 text-base leading-relaxed" style={{ color: t.textColor }}>
        &ldquo;{t.text}&rdquo;
      </p>

      <div
        className="mt-6 flex items-center gap-3 border-t pt-4"
        style={{ borderColor: `${t.textColor}30` }}
      >
        <div
          className="flex h-11 w-11 items-center justify-center rounded-full text-lg font-black"
          style={{ backgroundColor: `${t.textColor}20`, color: t.textColor }}
        >
          {t.name.charAt(0)}
        </div>
        <span className="font-bold">{t.name}</span>
      </div>
    </div>
  );
}

export function Testimonials({ items }: TestimonialsProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Max starting index so we never show blank slots
  const maxIndex = Math.max(0, items.length - CARDS_VISIBLE);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-advance
  useEffect(() => {
    if (shouldReduceMotion || isHovered) return;
    timerRef.current = setInterval(next, AUTO_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, isHovered, shouldReduceMotion]);

  const trackPercent = -(activeIndex * (100 / items.length));

  return (
    <section id="reviews" className="relative overflow-hidden bg-cream-dark py-20 lg:py-28">
      <DecorativeShape
        kind="star"
        color="#1557D6"
        size={56}
        className="absolute left-6 top-16 opacity-20"
      />
      <DecorativeShape
        kind="blob"
        color="#FF7A30"
        size={120}
        className="absolute -right-10 bottom-10 opacity-10"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Reviews"
          title="PEOPLE LOVE THE HAT."
          align="center"
          className="mb-14"
        />

        {/* ── Mobile / tablet: stacked grid ───────────────────────── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:hidden">
          {items.map((t, i) => (
            <motion.div
              key={t.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>

        {/* ── Desktop: horizontal sliding carousel ────────────────── */}
        <div
          className="hidden lg:block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Track wrapper — clips overflow */}
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                width: `${(items.length / CARDS_VISIBLE) * 100}%`,
                transform: `translateX(${trackPercent}%)`,
                transition: shouldReduceMotion
                  ? 'none'
                  : 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              {items.map((t) => (
                <div
                  key={t.id}
                  style={{ width: `${100 / items.length}%` }}
                  className="px-2.5"
                >
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls row */}
          <div className="mt-8 flex items-center justify-center gap-4">
            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Previous review"
              className="flex h-10 w-10 items-center justify-center border border-espresso/20 text-espresso/60 transition-colors hover:border-tomato hover:text-tomato"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className="transition-all duration-300"
                  style={{
                    width: i === activeIndex ? '28px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: i === activeIndex ? '#F04438' : '#211A1740',
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Next review"
              className="flex h-10 w-10 items-center justify-center border border-espresso/20 text-espresso/60 transition-colors hover:border-tomato hover:text-tomato"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
