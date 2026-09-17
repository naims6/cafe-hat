'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Sparkles } from 'lucide-react';

interface ToastData {
  id: number;
  title: string;
  message: string;
}

export function ToastContainer() {
  const [toast, setToast] = useState<ToastData | null>(null);

  useEffect(() => {
    const handleToast = (e: Event) => {
      const customEv = e as CustomEvent<{ title: string; message: string }>;
      setToast({
        id: Date.now(),
        title: customEv.detail.title,
        message: customEv.detail.message,
      });
    };

    window.addEventListener('cafe-toast', handleToast);
    return () => window.removeEventListener('cafe-toast', handleToast);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] w-full max-w-md px-4 pointer-events-none">
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -35, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -25, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className="pointer-events-auto flex items-center justify-between gap-3 rounded-2xl border border-espresso/20 bg-espresso p-4 text-cream shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tomato text-white shadow-md">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-black uppercase tracking-wider text-sunny flex items-center gap-1.5 truncate">
                  <Sparkles className="h-3.5 w-3.5 text-sunny shrink-0" />
                  <span>{toast.title}</span>
                </h4>
                <p className="mt-0.5 text-xs font-medium text-cream/90 leading-snug">
                  {toast.message}
                </p>
              </div>
            </div>

            <button
              onClick={() => setToast(null)}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-tomato hover:text-white"
              aria-label="Close notification"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
