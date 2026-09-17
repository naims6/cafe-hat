import type { MenuItem } from '@/types/restaurant';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { DecorativeShape } from '@/components/shared/DecorativeShape';
import { MenuGrid } from '@/components/menu/MenuGrid';

interface FeaturedMenuProps {
  items: MenuItem[];
}

export function FeaturedMenu({ items }: FeaturedMenuProps) {
  return (
    <section id="menu" className="relative overflow-hidden bg-cream py-20 lg:py-28">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-sunny/10 blur-3xl" />
        <div className="absolute -left-10 bottom-40 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Our Favorites"
            title="A few things you should definitely try."
            className="max-w-2xl"
          />
          <div className="hidden items-center gap-2 text-sm font-bold uppercase tracking-wider text-espresso/40 sm:flex">
            <DecorativeShape kind="squiggle" color="#F04438" size={40} />
            <span>Scroll to explore</span>
          </div>
        </div>

        <div className="mt-10">
          <MenuGrid items={items} />
        </div>
      </Container>
    </section>
  );
}
