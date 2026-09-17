'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/types/restaurant';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { DecorativeShape } from '@/components/shared/DecorativeShape';

interface TestimonialsProps {
  items: Testimonial[];
}

export function Testimonials({ items }: TestimonialsProps) {
  const shouldReduceMotion = useReducedMotion();

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

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.div
              key={t.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col p-7"
              style={{ backgroundColor: t.accentColor, color: t.textColor }}
            >
              {/* Quote icon */}
              <Quote
                className="h-10 w-10 opacity-20"
                fill="currentColor"
              />

              {/* Stars */}
              <div className="mt-4 flex gap-1" style={{ color: t.accentColor === '#FFC928' ? '#F04438' : '#FFC928' }}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-5 w-5" fill="currentColor" />
                ))}
              </div>

              {/* Review text */}
              <p className="mt-4 flex-1 text-base leading-relaxed" style={{ color: t.textColor }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Name */}
              <div className="mt-6 flex items-center gap-3 border-t pt-4" style={{ borderColor: `${t.textColor}30` }}>
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full text-lg font-black"
                  style={{ backgroundColor: `${t.textColor}20`, color: t.textColor }}
                >
                  {t.name.charAt(0)}
                </div>
                <span className="font-bold">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
