'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, MapPin, Phone } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { restaurantInfo } from '@/data/restaurant';
import { Container } from '@/components/shared/Container';

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const socialIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  'message-circle': MessageCircle,
};

export function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="relative overflow-hidden bg-espresso pt-20 pb-8">
      {/* Giant background wordmark */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center overflow-hidden">
        <span className="select-none text-[8rem] font-black leading-[0.8] text-cream/5 sm:text-[14rem] lg:text-[20rem]">
          CAFE HAT
        </span>
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full p-0.5 bg-white ring-2 ring-tomato/30 shadow-md">
                <img
                  src="/logo.jpg"
                  alt="Cafe Hat Logo"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-3xl sm:text-4xl font-black text-cream">CAFE</span>
                <span className="text-3xl sm:text-4xl font-black text-tomato">HAT</span>
              </div>
            </div>

            <p className="mt-6 max-w-sm text-lg leading-relaxed text-cream/60">
              Good food.
              <br />
              Great mood.
              <br />
              Good moments.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {restaurantInfo.social.map((s) => {
                const Icon = socialIcons[s.icon] ?? InstagramIcon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-all duration-300 hover:bg-tomato hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-sunny">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/60 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-sunny">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-cream/60">
                <MapPin className="h-5 w-5 shrink-0 text-tomato" />
                <span>{restaurantInfo.address}, {restaurantInfo.country}</span>
              </li>
              <li className="flex items-start gap-2 text-cream/60">
                <Phone className="h-5 w-5 shrink-0 text-tomato" />
                <a href={restaurantInfo.phoneHref} className="transition-colors hover:text-cream">
                  {restaurantInfo.phone}
                </a>
              </li>
            </ul>
            <a
              href="#reservation"
              className="mt-6 inline-flex items-center gap-2 bg-tomato px-6 py-3 text-sm font-bold uppercase tracking-wider text-cream transition-all duration-300 hover:bg-tomato-dark"
            >
              Reserve a Table →
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-cream/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-cream/40">
              © {new Date().getFullYear()} Cafe Hat. All rights reserved.
            </p>
            <p className="text-sm text-cream/40">
              Made with <span className="text-tomato">♥</span> in Dhanbari, Tangail
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
