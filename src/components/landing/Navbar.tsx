'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks } from '@/data/navigation';
import { restaurantInfo } from '@/data/restaurant';
import { triggerToast } from '@/lib/toast';

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

  const handleOrderClick = () => {
    triggerToast(
      'Online Ordering Coming Soon!',
      `Online ordering is coming soon! Please call ${restaurantInfo.phone} to place an order.`
    );
  };

  return (
    <>
      <motion.nav
        initial={shouldReduceMotion ? false : { y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-cream/95 shadow-[0_4px_30px_rgba(33,26,23,0.08)] backdrop-blur-md py-3'
            : 'bg-transparent py-4 sm:py-5'
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-2 sm:px-6 lg:px-8">
          {/* Logo Brand */}
          <a href="#home" className="group flex items-center gap-2.5">
            <div className="relative h-9 w-9 sm:h-10 sm:w-10 overflow-hidden rounded-full border-2 border-espresso/15 bg-white shadow-xs transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.jpg"
                alt="Cafe Hat Logo"
                width={40}
                height={40}
                className="h-full w-full object-cover"
                priority
              />
            </div>
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
            <button
              onClick={handleOrderClick}
              className="group hidden items-center gap-2 bg-tomato px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-cream transition-all duration-300 hover:bg-tomato-dark hover:shadow-lg sm:inline-flex cursor-pointer"
            >
              Order Now
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
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
                <div className="flex items-center gap-2.5">
                  <div className="relative h-9 w-9 overflow-hidden rounded-full border border-espresso/15 bg-white">
                    <Image
                      src="/logo.jpg"
                      alt="Cafe Hat Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-2xl font-black text-espresso">
                    CAFE <span className="text-tomato">HAT</span>
                  </span>
                </div>
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
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    handleOrderClick();
                  }}
                  className="flex w-full items-center justify-center gap-2 bg-tomato px-5 py-3.5 text-base font-bold uppercase tracking-wider text-cream cursor-pointer"
                >
                  Order Now →
                </button>
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
