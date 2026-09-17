'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function Location() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Find Us"
          title="COME FIND US."
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Info cards */}
          <div className="flex flex-col gap-5">
            {/* Address card */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-4 bg-tomato p-6 text-cream"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream/20">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider">Address</h3>
                <p className="mt-1 text-cream/80">{restaurantInfo.address}, {restaurantInfo.country}</p>
                <a
                  href={restaurantInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-sunny transition-colors hover:text-cream"
                >
                  Get Directions <Navigation className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Phone card */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start gap-4 bg-royal p-6 text-cream"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream/20">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider">Phone</h3>
                <a href={restaurantInfo.phoneHref} className="mt-1 block text-cream/80 transition-colors hover:text-cream">
                  {restaurantInfo.phone}
                </a>
              </div>
            </motion.div>

            {/* Hours card */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-4 bg-fresh p-6 text-cream"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream/20">
                <Clock className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold uppercase tracking-wider">Opening Hours</h3>
                <div className="mt-2 space-y-1">
                  {restaurantInfo.hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm text-cream/80">
                      <span className="font-semibold">{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Map */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative min-h-[400px] overflow-hidden border-4 border-espresso lg:min-h-full"
          >
            <iframe
              src={restaurantInfo.mapEmbedUrl}
              className="h-full w-full"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cafe Hat location map"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
