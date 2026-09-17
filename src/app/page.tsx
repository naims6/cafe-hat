import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { FeaturedMenu } from "@/components/landing/FeaturedMenu";
import { About } from "@/components/landing/About";
import { Experience } from "@/components/landing/Experience";
import { FoodMoment } from "@/components/landing/FoodMoment";
import { Gallery } from "@/components/landing/Gallery";
import { Testimonials } from "@/components/landing/Testimonials";
import { ReservationCTA } from "@/components/landing/ReservationCTA";
import { Location } from "@/components/landing/Location";
import { Footer } from "@/components/landing/Footer";

import { heroData } from "@/data/hero";
import { marqueeItems } from "@/data/marquee";
import { featuredMenuItems } from "@/data/menu";
import { experienceItems } from "@/data/experience";
import { galleryItems } from "@/data/gallery";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <Hero data={heroData} />
      <Marquee items={marqueeItems} />
      <FeaturedMenu items={featuredMenuItems} />
      <About />
      <Experience items={experienceItems} />
      <FoodMoment />
      <Gallery items={galleryItems} />
      <Testimonials items={testimonials} />
      <ReservationCTA />
      <Location />
      <Footer />
    </main>
  );
}
