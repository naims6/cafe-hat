'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import type { HeroData } from '@/types/restaurant';
import { DecorativeShape } from '@/components/shared/DecorativeShape';

interface HeroProps {
  data: HeroData;
}

export function Hero({ data }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section id="home" className="relative overflow-hidden bg-cream pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      {/* Background decorative shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large blue circle top-right */}
        <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-royal/10 blur-3xl" />
        {/* Tomato organic blob bottom-left */}
        <div
          className="absolute -left-20 bottom-0 h-80 w-80 bg-tomato/8 blur-3xl"
          style={{ borderRadius: '42% 58% 63% 37% / 41% 44% 56% 59%' }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 sm:px-6 lg:grid-cols-12 lg:gap-6 lg:px-8">
        {/* Left: Typography column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 lg:col-span-6"
        >
          {/* Location badge */}
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 bg-royal/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-royal">
            <MapPin className="h-4 w-4" />
            {data.location}
          </motion.div>

          {/* Headline */}
          <div className="space-y-1">
            {data.headlineLines.map((line, i) => (
              <motion.h1
                key={i}
                variants={item}
                className="text-[3.5rem] font-black leading-[0.95] tracking-tight text-espresso sm:text-7xl lg:text-8xl"
              >
                {line}
              </motion.h1>
            ))}
          </div>

          {/* Subheadline */}
          <motion.p variants={item} className="mt-6 max-w-md text-xl leading-relaxed text-espresso/60 sm:text-2xl">
            {data.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={data.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2 bg-tomato px-7 py-4 text-base font-bold uppercase tracking-wider text-cream transition-all duration-300 hover:bg-tomato-dark hover:shadow-xl"
            >
              {data.primaryCta.label}
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>
            <a
              href={data.secondaryCta.href}
              className="group inline-flex items-center justify-center gap-2 border-2 border-espresso px-7 py-4 text-base font-bold uppercase tracking-wider text-espresso transition-all duration-300 hover:bg-espresso hover:text-cream"
            >
              {data.secondaryCta.label}
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-cream"
                  style={{
                    backgroundColor: ['#F04438', '#1557D6', '#FFC928', '#3E9B63'][i],
                  }}
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-sunny">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i} className="text-lg">{s}</span>
                ))}
              </div>
              <p className="text-sm font-semibold text-espresso/60">Loved by locals in Dhanbari</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Image collage column */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-6"
        >
          <div className="relative">
            {/* Organic red shape behind image */}
            <div
              className="absolute -right-4 -top-6 h-[110%] w-[90%] bg-tomato"
              style={{ borderRadius: '42% 58% 63% 37% / 47% 44% 56% 53%' }}
            />

            {/* Main image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-square lg:aspect-[4/5]">
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Yellow badge - top left */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: 'spring', bounce: 0.5 }}
              className="absolute -left-3 top-8 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-sunny text-center shadow-xl sm:-left-6 sm:h-28 sm:w-28"
            >
              <span className="text-xs font-black uppercase leading-tight text-espresso">{data.badge}</span>
              <span className="text-2xl">★</span>
            </motion.div>

            {/* Blue decorative circle */}
            <div className="absolute -bottom-6 -right-3 h-20 w-20 rounded-full border-4 border-royal bg-cream sm:h-24 sm:w-24" />

            {/* Small star decorations */}
            <DecorativeShape
              kind="star"
              color="#FF7A30"
              size={32}
              float
              className="absolute -right-8 top-1/3 z-20"
            />
            <DecorativeShape
              kind="sparkle"
              color="#1557D6"
              size={24}
              float
              className="absolute -left-4 bottom-12 z-20"
            />

            {/* Dots decoration */}
            <DecorativeShape
              kind="dots"
              color="#3E9B63"
              size={48}
              className="absolute right-8 -bottom-4 z-20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
