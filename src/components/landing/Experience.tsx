'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Utensils, Armchair, PartyPopper, Heart, type LucideIcon } from 'lucide-react';
import type { ExperienceItem } from '@/types/restaurant';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { DecorativeShape } from '@/components/shared/DecorativeShape';

interface ExperienceProps {
  items: ExperienceItem[];
}

const iconMap: Record<string, LucideIcon> = {
  'utensils': Utensils,
  'armchair': Armchair,
  'party-popper': PartyPopper,
  'heart': Heart,
};

export function Experience({ items }: ExperienceProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-cream py-20 lg:py-28">
      {/* Decorative dots */}
      <DecorativeShape
        kind="dots"
        color="#FF7A30"
        size={64}
        className="absolute left-4 top-20 opacity-30"
      />
      <DecorativeShape
        kind="ring"
        color="#1557D6"
        size={80}
        className="absolute right-8 bottom-20 opacity-20"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why Visit Us"
          title="THE CAFE HAT EXPERIENCE"
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((exp, i) => {
            const Icon = iconMap[exp.icon] ?? Heart;
            return (
              <motion.div
                key={exp.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                className="group relative flex flex-col p-7"
                style={{ backgroundColor: exp.bgColor, color: exp.textColor }}
              >
                {/* Huge number */}
                <span className="text-6xl font-black leading-none opacity-20" style={{ color: exp.textColor }}>
                  {exp.number}
                </span>

                {/* Icon */}
                <div
                  className="mt-4 flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: exp.accentColor, color: exp.bgColor }}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-bold leading-tight">{exp.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-80">{exp.description}</p>

                {/* Decorative corner element */}
                <div
                  className="absolute right-4 top-4 h-3 w-3 rounded-full"
                  style={{ backgroundColor: exp.accentColor }}
                />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
