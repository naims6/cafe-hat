import type { MarqueeItem } from '@/types/restaurant';

interface MarqueeProps {
  items: MarqueeItem[];
}

export function Marquee({ items }: MarqueeProps) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden bg-tomato py-4 sm:py-5">
      <div className="flex w-max animate-marquee items-center whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="px-6 text-2xl font-black uppercase tracking-tight text-cream sm:text-3xl lg:text-4xl">
              {item.text}
            </span>
            <span className="text-2xl text-sunny sm:text-3xl lg:text-4xl">{item.symbol}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
