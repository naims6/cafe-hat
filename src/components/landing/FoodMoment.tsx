'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/shared/Container';
import { DecorativeShape } from '@/components/shared/DecorativeShape';

export function FoodMoment() {
  const shouldReduceMotion = useReducedMotion();
  const words = ['Friends.', 'Conversations.', 'Late afternoons.', 'Good food.'];

  return (
    <section className="relative overflow-hidden bg-espresso py-20 lg:py-28">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/9961871/pexels-photo-9961871.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Friends laughing and eating at a restaurant"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/80 to-espresso/40" />
      </div>

      <Container className="relative">
        <div className="max-w-3xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 bg-tomato px-4 py-2 text-sm font-bold uppercase tracking-wider text-cream">
              ★ The Feeling
            </div>

            <h2 className="text-5xl font-black leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-7xl">
              NOT JUST FOOD.
              <br />
              <span className="text-sunny">IT&apos;S A MOMENT.</span>
            </h2>
          </motion.div>

          {/* Word list */}
          <div className="mt-8 space-y-2">
            {words.map((word, i) => (
              <motion.div
                key={word}
                initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: ['#F04438', '#FFC928', '#FF7A30', '#3E9B63'][i] }}
                />
                <span className="text-2xl font-bold text-cream/90 sm:text-3xl">{word}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 max-w-lg text-lg leading-relaxed text-cream/60"
          >
            Some places just feed you. We give you a reason to stay a little longer.
          </motion.p>
        </div>
      </Container>

      {/* Floating decorative stickers */}
      <DecorativeShape
        kind="star"
        color="#FFC928"
        size={48}
        float
        className="absolute right-8 top-12 sm:right-16 sm:top-20"
      />
      <DecorativeShape
        kind="sparkle"
        color="#F04438"
        size={32}
        float
        className="absolute bottom-16 right-24 sm:bottom-24 sm:right-32"
      />
    </section>
  );
}
