'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Coffee, Utensils, Sparkles } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { restaurantInfo } from '@/data/restaurant';

export function About() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="about" className="relative overflow-hidden bg-cream py-16 sm:py-24 lg:py-28">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 h-[400px] w-[400px] rounded-full bg-royal/8 blur-[100px]" />
        <div className="absolute right-0 bottom-10 h-[450px] w-[450px] rounded-full bg-tomato/8 blur-[110px]" />
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Wider Restaurant Photo (7 Columns) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-7"
          >
            <div className="relative w-full">
              {/* Main Restaurant Interior Image Card - Wider 16:10 Ratio */}
              <div className="relative aspect-[13/10] w-full overflow-hidden rounded-[2.5rem] border-4 border-white bg-cream-dark shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dynxnpj21/image/upload/v1789655617/cover_vbf14j.jpg"
                  alt="Cafe Hat Restaurant Interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>

              {/* Overlapping Secondary Photo Card (Bottom Right) */}
              <div className="absolute -bottom-6 -right-2 z-10 h-36 w-36 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl sm:h-48 sm:w-48 sm:-right-4">
                <Image
                  src="https://res.cloudinary.com/dynxnpj21/image/upload/v1789657002/706832034_1395239115957992_1034244220069765850_n_xahwkw.jpg"
                  alt="Cafe Hat Coffee & Moments"
                  fill
                  sizes="220px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Balanced Professional Content (5 Columns) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="relative lg:col-span-5"
          >
            {/* Eyebrow Tag */}
            <motion.div variants={itemVariants} className="mb-4 inline-flex items-center gap-2 rounded-full border border-royal/20 bg-royal/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-royal">
              <Coffee className="h-3.5 w-3.5 text-royal" />
              <span>OUR STORY & PASSION</span>
            </motion.div>

            {/* Headline */}
            <motion.h2 variants={itemVariants} className="text-4xl font-black leading-[1.05] tracking-tight text-espresso sm:text-5xl">
              MORE THAN
              <br />
              <span className="text-tomato">JUST A CAFE.</span>
            </motion.h2>

            {/* Story Paragraph 1 */}
            <motion.p variants={itemVariants} className="mt-5 text-base sm:text-lg leading-relaxed text-espresso/80">
              Food tastes better when the moment feels right. At <strong className="text-espresso font-black">Cafe Hat</strong>, we built a warm place in Dhanbari where every visit feels like a small celebration — great smiles, fresh artisanal coffee, wood-fired pizzas, and plates crafted with care.
            </motion.p>

            {/* Story Paragraph 2 */}
            <motion.p variants={itemVariants} className="mt-3 text-sm sm:text-base leading-relaxed text-espresso/65">
              From our kitchen to your table, everything is prepared fresh daily with authentic flavors and generous portions. Whether for a quick coffee or sharing a meal with friends, we welcome you home.
            </motion.p>

            {/* Highlight Chips */}
            <motion.div variants={itemVariants} className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-espresso/10 bg-white px-3 py-1.5 text-xs font-extrabold text-espresso shadow-2xs">
                <Utensils className="h-3.5 w-3.5 text-tomato" /> Fresh Daily Food
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-espresso/10 bg-white px-3 py-1.5 text-xs font-extrabold text-espresso shadow-2xs">
                <Coffee className="h-3.5 w-3.5 text-royal" /> Artisanal Brews
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-espresso/10 bg-white px-3 py-1.5 text-xs font-extrabold text-espresso shadow-2xs">
                <Sparkles className="h-3.5 w-3.5 text-sunny-dark" /> Good Moments
              </span>
            </motion.div>

            {/* Location Card at Bottom */}
            <motion.div variants={itemVariants} className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-espresso/10 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tomato text-white shadow-xs">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-wider text-tomato">Visit Us Today</p>
                  <p className="text-xs sm:text-sm font-bold text-espresso">
                    {restaurantInfo.address}, {restaurantInfo.country}
                  </p>
                </div>
              </div>

              <a
                href={restaurantInfo.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 rounded-xl bg-cream-dark px-3.5 py-2 text-xs font-extrabold text-espresso transition-all hover:bg-espresso hover:text-white"
              >
                Directions →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
