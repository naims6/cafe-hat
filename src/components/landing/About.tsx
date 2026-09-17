'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Coffee } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { DecorativeShape } from '@/components/shared/DecorativeShape';
import { restaurantInfo } from '@/data/restaurant';

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative overflow-hidden bg-royal py-20 lg:py-28">
      {/* Background giant typography */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="select-none text-[12rem] font-black leading-none text-cream/5 sm:text-[18rem] lg:text-[24rem]">
          HAT
        </span>
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image collage */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -40 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Large interior image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/34972661/pexels-photo-34972661.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Warm and colorful cafe interior with vibrant lampshades"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Overlapping smaller image */}
            <div className="absolute -bottom-8 -right-4 h-40 w-40 overflow-hidden border-4 border-cream shadow-2xl sm:h-52 sm:w-52 lg:-right-8">
              <Image
                src="https://images.pexels.com/photos/37034126/pexels-photo-37034126.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Latte art in a cozy coffee shop"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>

            {/* Green decorative blob */}
            <div
              className="absolute -left-6 -top-6 h-24 w-24 bg-fresh"
              style={{ borderRadius: '42% 58% 63% 37% / 41% 44% 56% 59%' }}
            />

            {/* Star decoration */}
            <DecorativeShape
              kind="star"
              color="#FFC928"
              size={36}
              float
              className="absolute -right-2 top-1/2 z-20"
            />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 40 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 lg:order-2"
          >
            <div className="mb-4 inline-flex items-center gap-2 bg-cream/15 px-4 py-2 text-sm font-bold uppercase tracking-wider text-cream">
              <Coffee className="h-4 w-4" />
              Our Story
            </div>

            <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-6xl">
              MORE THAN
              <br />
              JUST A CAFE.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/80">
              Food tastes better when the moment feels right. At Cafe Hat, we have built a place where
              every visit feels like a small celebration — colorful walls, warm smiles, and plates made
              with care.
            </p>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-cream/60">
              From our kitchen to your table, everything is fresh, generous, and full of flavor. Whether
              you are here for a quick coffee or a long afternoon with friends, we want you to feel at
              home.
            </p>

            {/* Location info card */}
            <div className="mt-8 flex items-center gap-4 border-l-4 border-sunny bg-cream/10 py-4 pl-5 pr-4">
              <MapPin className="h-6 w-6 shrink-0 text-sunny" />
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-sunny">Find Us</p>
                <p className="text-lg font-semibold text-cream">{restaurantInfo.address}, {restaurantInfo.country}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
