'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Timer, X } from 'lucide-react';

// ── Set your marathon date here ──────────────────────────────────────────────
const MARATHON_DATE = new Date('2026-11-28T07:00:00+06:00');
// ────────────────────────────────────────────────────────────────────────────

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const diff = MARATHON_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export function MarathonBar() {
  // null = not yet mounted on client (avoids SSR/client hydration mismatch).
  // The interval sets it to a real TimeLeft object on the first client tick.
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft());
    tick(); // single setState call; no cascading renders
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (dismissed) return null;

  const over =
    timeLeft !== null &&
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <div className="relative flex items-center justify-center gap-3 bg-espresso px-4 py-2 sm:gap-5">
      {/* Left: timer icon + label */}
      <div className="flex items-center gap-1.5 text-sunny">
        <Timer className="h-3.5 w-3.5 shrink-0" />
        <span className="hidden text-[10px] font-bold uppercase tracking-widest text-sunny/80 sm:inline">
          Marathon 2026
        </span>
      </div>

      {/* Countdown — null means server-rendered; show placeholder until client hydrates */}
      {timeLeft === null ? (
        <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-cream sm:gap-2">
          <Segment value="--" label="days" />
          <Colon />
          <Segment value="--" label="hrs" />
          <Colon />
          <Segment value="--" label="min" />
          <Colon />
          <Segment value="--" label="sec" />
        </div>
      ) : over ? (
        <span className="text-xs font-bold uppercase tracking-wider text-cream/80">
          Registration is now closed
        </span>
      ) : (
        <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-cream sm:gap-2">
          <Segment value={pad(timeLeft.days)} label="days" />
          <Colon />
          <Segment value={pad(timeLeft.hours)} label="hrs" />
          <Colon />
          <Segment value={pad(timeLeft.minutes)} label="min" />
          <Colon />
          <Segment value={pad(timeLeft.seconds)} label="sec" />
        </div>
      )}

      {/* Register CTA — always visible until countdown is confirmed over */}
      {!over && (
        <Link
          href="/marathon"
          className="flex items-center gap-1 border border-tomato bg-tomato px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cream transition-all duration-200 hover:bg-tomato-dark"
        >
          Register
          <span className="text-[10px]">→</span>
        </Link>
      )}

      {/* Dismiss */}
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss marathon bar"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-cream/40 transition-colors hover:text-cream"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

function Segment({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center leading-none">
      <span className="text-sm font-black text-cream sm:text-base">{value}</span>
      <span className="text-[8px] font-bold uppercase tracking-wider text-cream/40">{label}</span>
    </div>
  );
}

function Colon() {
  return <span className="mb-2 text-sm font-black text-cream/30">:</span>;
}
