'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, Mail } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';
import { Container } from '@/components/shared/Container';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

export function Location() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden bg-cream py-20 lg:py-28">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-tomato/8 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-royal/8 blur-3xl" />

      <Container>
        {/* Section header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 lg:mb-16"
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-tomato">
            Find Us
          </p>
          <h2 className="text-4xl font-black uppercase leading-none tracking-tight text-espresso lg:text-6xl">
            Come Visit<br />
            <span className="text-tomato">Cafe Hat.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Left: Info cards — spans 2 cols */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {/* Address */}
            <motion.div
              custom={0}
              initial={shouldReduceMotion ? false : 'hidden'}
              whileInView={shouldReduceMotion ? undefined : 'visible'}
              viewport={{ once: true, margin: '-60px' }}
              variants={cardVariants}
              className="group relative flex items-start gap-4 border border-espresso/10 bg-white p-5 shadow-sm transition-all duration-300 hover:border-tomato/40 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-tomato text-cream">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-tomato">Address</p>
                <p className="mt-1 text-sm leading-relaxed text-espresso/70">
                  {restaurantInfo.address},<br />
                  {restaurantInfo.city}, {restaurantInfo.country}
                </p>
                <a
                  href={restaurantInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-tomato transition-colors hover:text-tomato-dark"
                >
                  Get Directions <Navigation className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              custom={1}
              initial={shouldReduceMotion ? false : 'hidden'}
              whileInView={shouldReduceMotion ? undefined : 'visible'}
              viewport={{ once: true, margin: '-60px' }}
              variants={cardVariants}
              className="group flex items-start gap-4 border border-espresso/10 bg-white p-5 shadow-sm transition-all duration-300 hover:border-royal/40 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-royal text-cream">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-royal">Phone</p>
                <a
                  href={restaurantInfo.phoneHref}
                  className="mt-1 block text-sm text-espresso/70 transition-colors hover:text-espresso"
                >
                  {restaurantInfo.phone}
                </a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              custom={2}
              initial={shouldReduceMotion ? false : 'hidden'}
              whileInView={shouldReduceMotion ? undefined : 'visible'}
              viewport={{ once: true, margin: '-60px' }}
              variants={cardVariants}
              className="group flex items-start gap-4 border border-espresso/10 bg-white p-5 shadow-sm transition-all duration-300 hover:border-fresh/40 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-fresh text-cream">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-fresh">Email</p>
                <a
                  href={`mailto:${restaurantInfo.email}`}
                  className="mt-1 block text-sm text-espresso/70 transition-colors hover:text-espresso"
                >
                  {restaurantInfo.email}
                </a>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              custom={3}
              initial={shouldReduceMotion ? false : 'hidden'}
              whileInView={shouldReduceMotion ? undefined : 'visible'}
              viewport={{ once: true, margin: '-60px' }}
              variants={cardVariants}
              className="border border-espresso/10 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-sunny text-espresso">
                  <Clock className="h-5 w-5" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-espresso/60">Opening Hours</p>
              </div>
              <div className="space-y-1.5">
                {restaurantInfo.hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between border-b border-espresso/5 pb-1.5 last:border-0">
                    <span className="text-xs font-semibold uppercase tracking-wide text-espresso/50">{h.day}</span>
                    <span className="text-xs text-espresso/80">{h.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Map — spans 3 cols */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:col-span-3"
          >
            {/* Decorative label */}
            <div className="mb-3 flex items-center gap-2">
              <div className="h-px flex-1 bg-espresso/10" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-espresso/30">Map</span>
              <div className="h-px flex-1 bg-espresso/10" />
            </div>

            {/* Map container */}
            <div className="relative overflow-hidden border border-espresso/10 shadow-sm">
              {/* Corner accents */}
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-6 w-6 border-l-2 border-t-2 border-tomato" />
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-6 w-6 border-r-2 border-t-2 border-tomato" />
              <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-6 w-6 border-b-2 border-l-2 border-tomato" />
              <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-6 w-6 border-b-2 border-r-2 border-tomato" />

              {/* 
                TODO: Replace the src below with your custom Cafe Hat Google Maps embed URL.
                Go to Google Maps → search "Cafe Hat" → Share → Embed a map → copy the src URL.
              */}
              <iframe
                src={restaurantInfo.mapEmbedUrl}
                className="h-full min-h-[480px] w-full lg:min-h-[560px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cafe Hat location on Google Maps"
              />
            </div>

            {/* Address badge below map */}
            <div className="mt-3 flex items-center gap-2 border border-espresso/10 bg-white px-4 py-2.5 shadow-sm">
              <MapPin className="h-4 w-4 shrink-0 text-tomato" />
              <span className="text-xs text-espresso/60">
                {restaurantInfo.address}, {restaurantInfo.city}, {restaurantInfo.country}
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
