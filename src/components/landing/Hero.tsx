'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Star, ArrowRight, Heart } from 'lucide-react';
import type { HeroData } from '@/types/restaurant';
import { triggerToast } from '@/lib/toast';

interface HeroProps {
  data: HeroData;
}

export function Hero({ data }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const handleOrderClick = () => {
    triggerToast(
      'Online Ordering Coming Soon!',
      'Online ordering is coming soon! Please call us or visit to place your order.'
    );
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="home" className="relative overflow-hidden bg-cream pt-37 pb-16 sm:pt-36 lg:pt-40 lg:pb-28">
      {/* Soft ambient background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-[450px] w-[450px] rounded-full bg-tomato/8 blur-[100px]" />
        <div className="absolute -left-20 bottom-10 h-[400px] w-[400px] rounded-full bg-sunny/15 blur-[90px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        {/* Left Column: Typography & CTAs */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 lg:col-span-6"
        >
          {/* Location & Brand Badge */}
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-espresso/10 bg-white/80 px-4 py-2 shadow-xs backdrop-blur-sm">
            <MapPin className="h-4 w-4 text-tomato" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-espresso">
              {data.location}
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-1">
            <motion.h1
              variants={item}
              className="text-5xl font-black leading-[1.02] tracking-tight text-espresso sm:text-7xl lg:text-8xl"
            >
              GOOD FOOD.
            </motion.h1>

            <motion.h1
              variants={item}
              className="text-5xl font-black leading-[1.02] tracking-tight text-tomato sm:text-7xl lg:text-8xl"
            >
              GREAT MOOD.
            </motion.h1>
          </div>

          {/* Subheadline Description */}
          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-lg leading-relaxed text-espresso/70 sm:text-xl"
          >
            A little taste of happiness in Dhanbari. Freshly prepared artisanal coffee, gourmet pizzas, sizzlers, and cozy dining moments.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          >
            <a
              href={data.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-tomato px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-cream shadow-md transition-all duration-300 hover:bg-tomato-dark hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{data.primaryCta.label}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <button
              onClick={handleOrderClick}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-espresso bg-white/60 px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-espresso transition-all duration-300 hover:bg-espresso hover:text-cream hover:shadow-md cursor-pointer"
            >
              <span>{data.secondaryCta.label}</span>
            </button>
          </motion.div>

          {/* Customer Reviews & Trust Line */}
          <motion.div
            variants={item}
            className="mt-10 flex items-center gap-4 border-t border-espresso/10 pt-6"
          >
            <div className="flex -space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-cream bg-tomato text-xs font-bold text-white shadow-xs">
                C
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-cream bg-royal text-xs font-bold text-white shadow-xs">
                A
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-cream bg-sunny text-xs font-bold text-espresso shadow-xs">
                F
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-cream bg-fresh text-xs font-bold text-white shadow-xs">
                E
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-sunny text-sunny" />
                ))}
                <span className="ml-1 text-sm font-extrabold text-espresso">4.9 / 5.0</span>
              </div>
              <p className="text-xs font-bold text-espresso/60">
                Loved by 500+ food lovers in Dhanbari
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Image Frame */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-6"
        >
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            {/* Subtle soft backdrop accent card */}
            <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-tomato/20 via-sunny/20 to-royal/10 blur-xl opacity-70" />

            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-[2.2rem] border-4 border-white bg-white shadow-2xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[4/3]">
                <Image
                  src={data.image}
                  alt={data.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Clean Floating Info Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-espresso/5 bg-white/95 p-3.5 backdrop-blur-md shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-tomato/10 text-tomato">
                    <Heart className="h-5 w-5 fill-tomato" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-espresso">{data.badge}</p>
                    <p className="text-xs font-medium text-espresso/60">Crafted with Fresh Ingredients</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 rounded-full bg-cream-dark px-3 py-1.5 text-xs font-extrabold text-espresso">
                  <Star className="h-3.5 w-3.5 fill-sunny text-sunny" />
                  <span>4.9 ★</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
