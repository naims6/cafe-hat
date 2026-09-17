import type { MenuItem } from '@/types/restaurant';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { MenuGrid } from '@/components/menu/MenuGrid';

interface FeaturedMenuProps {
  items: MenuItem[];
}

export function FeaturedMenu({ items }: FeaturedMenuProps) {
  return (
    <section id="menu" className="relative overflow-hidden bg-cream py-16 sm:py-24 lg:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-sunny/10 blur-3xl" />
        <div className="absolute left-0 bottom-1/4 h-80 w-80 rounded-full bg-tomato/8 blur-3xl" />
      </div>

      <Container className="relative">
        {/* Section Heading */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <SectionHeading
            eyebrow="OUR MENU"
            title="Explore Our Fresh & Delicious Offerings"
            subtitle="Handcrafted food, specialty coffee, refreshing drinks, and decadent desserts made daily."
            align="center"
          />
        </div>

        {/* Menu Grid Container */}
        <div>
          <MenuGrid items={items} />
        </div>
      </Container>
    </section>
  );
}
