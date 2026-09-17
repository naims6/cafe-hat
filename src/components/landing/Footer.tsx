"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, MapPin, Phone, Clock, Mail } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { restaurantInfo } from "@/data/restaurant";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const socialIcons: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  "message-circle": MessageCircle,
};

export function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: shouldReduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, delay },
  });

  return (
    <footer className="relative overflow-hidden bg-espresso">
      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-tomato via-sunny to-tomato" />

      {/* Giant background wordmark */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center overflow-hidden">
        <span className="select-none text-[7rem] font-black leading-[0.8] text-cream/[0.04] sm:text-[12rem] lg:text-[18rem]">
          CAFE HAT
        </span>
      </div>

      <Container className="relative pt-16 pb-0">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* ── Brand column ── */}
          <motion.div {...fadeUp(0)} className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="group inline-block">
              <Logo size="lg" inverted />
            </a>

            <p className="mt-5 text-sm leading-relaxed text-cream/55 max-w-xs">
              {restaurantInfo.description}
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-2.5">
              {restaurantInfo.social.map((s) => {
                const Icon = socialIcons[s.icon] ?? InstagramIcon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 text-cream/50 transition-all duration-300 hover:border-tomato hover:bg-tomato hover:text-cream hover:scale-110"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* ── Navigation column ── */}
          <motion.div {...fadeUp(0.1)}>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-sunny">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-cream/55 transition-colors duration-200 hover:text-cream"
                  >
                    <span className="h-px w-3 bg-tomato/0 transition-all duration-200 group-hover:w-4 group-hover:bg-tomato" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Hours column ── */}
          <motion.div {...fadeUp(0.2)}>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-sunny">
              Hours
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-sm">
                <Clock className="h-4 w-4 shrink-0 text-tomato" />
                <span className="text-cream/55">Every Day</span>
              </div>
              <div className="pl-6">
                <p className="text-base font-bold text-cream">9:00 AM</p>
                <p className="text-xs text-cream/40 mt-0.5">— until —</p>
                <p className="text-base font-bold text-cream">11:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* ── Contact column ── */}
          <motion.div {...fadeUp(0.3)}>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-sunny">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={restaurantInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm text-cream/55 transition-colors hover:text-cream"
                >
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-tomato" />
                  <span>
                    {restaurantInfo.address},<br />
                    {restaurantInfo.city},<br />
                    {restaurantInfo.country}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={restaurantInfo.phoneHref}
                  className="flex items-center gap-3 text-sm text-cream/55 transition-colors hover:text-cream"
                >
                  <Phone className="h-4 w-4 shrink-0 text-tomato" />
                  {restaurantInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${restaurantInfo.email}`}
                  className="flex items-center gap-3 text-sm text-cream/55 transition-colors hover:text-cream"
                >
                  <Mail className="h-4 w-4 shrink-0 text-tomato" />
                  {restaurantInfo.email}
                </a>
              </li>
            </ul>

            <a
              href="#reservation"
              className="mt-6 inline-flex items-center gap-2 bg-tomato px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-cream transition-all duration-300 hover:bg-tomato-dark hover:gap-3"
            >
              Reserve a Table <span>→</span>
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px bg-gradient-to-r from-transparent via-cream/10 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} Cafe Hat. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-cream/30">
            Developed with <span className="text-tomato animate-pulse">♥</span>{" "}
            by{" "}
            <a
              href="https://www.facebook.com/naim.sorker6"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cream/45 transition-colors hover:text-tomato"
            >
              Naim Sorker
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
