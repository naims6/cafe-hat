import type { Metadata } from 'next';
import Link from 'next/link';
import { MarathonForm } from '@/components/marathon/MarathonForm';
import { Logo } from '@/components/shared/Logo';
import { DecorativeShape } from '@/components/shared/DecorativeShape';

export const metadata: Metadata = {
  title: 'Marathon Registration — Cafe Hat | Dhanbari, Tangail',
  description:
    'Register for the annual Cafe Hat Marathon. Fill in your details and submit your payment info to secure your spot.',
};

export default function MarathonPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-espresso/10 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Back to Cafe Hat home">
            <Logo size="md" />
          </Link>
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-wider text-espresso/50 transition-colors hover:text-tomato"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      <main>
        {/* Hero banner */}
        <section className="relative overflow-hidden bg-espresso py-20 sm:py-28">
          {/* Decorative shapes */}
          <DecorativeShape
            kind="star"
            color="#FFC928"
            size={64}
            float
            className="absolute left-8 top-10 sm:left-20 sm:top-14 opacity-60"
          />
          <DecorativeShape
            kind="sparkle"
            color="#FF7A30"
            size={40}
            float
            className="absolute right-10 top-8 sm:right-24 opacity-50"
          />
          <DecorativeShape
            kind="circle"
            color="#F04438"
            size={180}
            className="absolute -bottom-10 -right-16 opacity-10"
          />
          <DecorativeShape
            kind="circle"
            color="#FFC928"
            size={120}
            className="absolute -left-10 bottom-0 opacity-10"
          />

          <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
            {/* Year badge */}
            <div className="mb-6 inline-flex items-center gap-2 border border-sunny/40 bg-sunny/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-sunny" />
              <span className="text-xs font-bold uppercase tracking-widest text-sunny">
                Annual Event — 2026
              </span>
            </div>

            <h1 className="font-display text-5xl font-black leading-[0.9] tracking-tight text-cream sm:text-7xl">
              CAFE HAT
              <br />
              <span className="text-tomato">MARATHON</span>
            </h1>

            <p className="mt-6 text-lg font-medium leading-relaxed text-cream/70 sm:text-xl">
              Lace up your shoes and join us for Cafe Hat&apos;s annual marathon in the heart of
              Dhanbari, Tangail. Register below and let the run begin!
            </p>

            {/* Quick info pills */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                { icon: '📍', text: 'Dhanbari, Tangail' },
                { icon: '🏃', text: 'Open to All' },
                { icon: '💳', text: 'bKash · Nagad · Rocket' },
              ].map((item) => (
                <span
                  key={item.text}
                  className="flex items-center gap-1.5 border border-cream/15 bg-cream/5 px-4 py-1.5 text-sm font-semibold text-cream/80"
                >
                  <span>{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Registration form section */}
        <section className="mx-auto max-w-2xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          {/* Payment instructions */}
          <div className="mb-8 border-l-4 border-sunny bg-sunny/8 px-5 py-4">
            <p className="text-xs font-bold uppercase tracking-wider text-espresso/60">
              Before you register
            </p>
            <p className="mt-1 text-sm font-medium text-espresso/80">
              Send the registration fee to our bKash / Nagad / Rocket number{' '}
              <span className="font-bold text-tomato">01712-258348</span>. Then enter
              the transaction ID below to confirm your spot.
            </p>
          </div>

          <div className="border border-espresso/10 bg-cream p-6 shadow-[0_4px_40px_rgba(33,26,23,0.06)] sm:p-8">
            <h2 className="mb-1 font-display text-2xl font-black text-espresso sm:text-3xl">
              Registration Form
            </h2>
            <p className="mb-6 text-sm text-espresso/50">
              All fields are required. You&apos;ll receive a confirmation on the email you provide.
            </p>
            <MarathonForm />
          </div>

          {/* Footer note */}
          <p className="mt-6 text-center text-xs text-espresso/40">
            Questions? Call us at{' '}
            <a href="tel:+8801712258348" className="font-bold text-tomato hover:underline">
              +880 1712-258348
            </a>{' '}
            or visit us at Dewan Shopping Complex, Dhanbari Bazar Rd.
          </p>
        </section>
      </main>
    </div>
  );
}
