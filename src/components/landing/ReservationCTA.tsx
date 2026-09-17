'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';
import { Container } from '@/components/shared/Container';
import { triggerToast } from '@/lib/toast';
import { DecorativeShape } from '@/components/shared/DecorativeShape';

export function ReservationCTA() {
  const shouldReduceMotion = useReducedMotion();

  const handleOrderClick = () => {
    triggerToast(
      'Online Ordering Coming Soon!',
      `Online ordering is coming soon! Please call ${restaurantInfo.phone} to place an order.`
    );
  };

  return (
    <section id="reservation" className="relative overflow-hidden py-0">
      {/* Background image */}
      <div className="relative h-[600px] w-full sm:h-[560px]">
        <Image
          src="https://images.pexels.com/photos/7444129/pexels-photo-7444129.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Friends enjoying a meal at a restaurant table"
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Red translucent overlay */}
        <div className="absolute inset-0 bg-tomato/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-transparent to-espresso/40" />

        {/* Decorative elements */}
        <DecorativeShape
          kind="star"
          color="#FFC928"
          size={56}
          float
          className="absolute left-8 top-12 sm:left-16 sm:top-20"
        />
        <DecorativeShape
          kind="sparkle"
          color="#FFF8EA"
          size={36}
          float
          className="absolute right-12 top-24 sm:right-24"
        />
        <DecorativeShape
          kind="circle"
          color="#FF7A30"
          size={20}
          className="absolute bottom-24 left-1/4"
        />

        {/* Content */}
        <Container className="relative flex h-full flex-col items-center justify-center text-center">
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl font-black leading-[0.95] tracking-tight text-cream sm:text-7xl lg:text-8xl"
          >
            HUNGRY YET?
            <br />
            <span className="text-sunny">COME HANG OUT.</span>
          </motion.h2>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <button
              onClick={handleOrderClick}
              className="group inline-flex items-center justify-center gap-2 bg-cream px-8 py-4 text-base font-bold uppercase tracking-wider text-tomato transition-all duration-300 hover:bg-sunny hover:text-espresso hover:shadow-2xl cursor-pointer"
            >
              Order Now
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </button>
            <a
              href={restaurantInfo.phoneHref}
              className="group inline-flex items-center justify-center gap-2 border-2 border-cream px-8 py-4 text-base font-bold uppercase tracking-wider text-cream transition-all duration-300 hover:bg-cream hover:text-tomato"
            >
              <Phone className="h-5 w-5" />
              CALL US
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>
          </motion.div>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg font-semibold text-cream/80"
          >
            {restaurantInfo.address}, {restaurantInfo.country}
          </motion.p>
        </Container>
      </div>
    </section>
  );
}
