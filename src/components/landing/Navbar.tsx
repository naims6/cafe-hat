'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks } from '@/data/navigation';
import { restaurantInfo } from '@/data/restaurant';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={shouldReduceMotion ? false : { y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-cream/90 shadow-[0_4px_30px_rgba(33,26,23,0.08)] backdrop-blur-md'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-2">
            <span
              className={cn(
                'text-2xl font-black tracking-tight transition-colors duration-300',
                scrolled ? 'text-espresso' : 'text-espresso'
              )}
            >
              CAFE
            </span>
            <span
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-full text-sm font-black transition-colors duration-300',
                scrolled ? 'bg-tomato text-cream' : 'bg-tomato text-cream'
              )}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12 2C7.6 2 4 5.6 4 10v6c0 1.1.9 2 2 2h1v-8H6v-2c0-3.3 2.7-6 6-6s6 2.7 6 6v2h-1v8h1c1.1 0 2-.9 2-2v-6c0-4.4-3.6-8-8-8z" />
              </svg>
            </span>
            <span
              className={cn(
                'text-2xl font-black tracking-tight transition-colors duration-300',
                scrolled ? 'text-tomato' : 'text-tomato'
              )}
            >
              HAT
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-300',
                  scrolled
                    ? 'text-espresso/70 hover:text-tomato'
                    : 'text-espresso/80 hover:text-tomato'
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#reservation"
              className="group hidden items-center gap-2 bg-tomato px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-cream transition-all duration-300 hover:bg-tomato-dark hover:shadow-lg sm:inline-flex"
            >
              Reserve a Table
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                'flex h-10 w-10 items-center justify-center transition-colors lg:hidden',
                scrolled ? 'text-espresso' : 'text-espresso'
              )}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
              className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-cream"
            >
              <div className="flex items-center justify-between border-b border-espresso/10 px-5 py-4">
                <span className="text-2xl font-black text-espresso">
                  CAFE <span className="text-tomato">HAT</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center text-espresso"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex flex-1 flex-col gap-1 px-5 py-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                    className="border-b border-espresso/5 py-4 text-2xl font-bold text-espresso transition-colors hover:text-tomato"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <div className="border-t border-espresso/10 px-5 py-6">
                <a
                  href="#reservation"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 bg-tomato px-5 py-3.5 text-base font-bold uppercase tracking-wider text-cream"
                >
                  Reserve a Table →
                </a>
                <a
                  href={restaurantInfo.phoneHref}
                  className="mt-3 flex w-full items-center justify-center gap-2 text-sm font-bold text-espresso/60"
                >
                  <Phone className="h-4 w-4" /> {restaurantInfo.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
