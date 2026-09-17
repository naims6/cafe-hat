import type { Metadata } from 'next';
import { Space_Grotesk, DM_Serif_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cafe Hat — Good Food. Great Mood. | Dhanbari, Tangail',
  description:
    'A little taste of happiness in Dhanbari. Cafe Hat serves fresh food, great coffee, and good moments in the heart of Tangail, Bangladesh.',
  keywords: ['Cafe Hat', 'Dhanbari', 'Tangail', 'restaurant', 'cafe', 'Bangladesh', 'coffee', 'food'],
  openGraph: {
    title: 'Cafe Hat — Good Food. Great Mood.',
    description: 'A little taste of happiness in Dhanbari, Tangail.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${dmSerif.variable}`}>
      <body className="font-sans bg-cream text-espresso antialiased">
        {children}
      </body>
    </html>
  );
}
