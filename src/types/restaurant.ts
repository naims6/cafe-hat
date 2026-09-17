export type MenuCategory = 'food' | 'coffee' | 'drinks' | 'desserts';

export type GalleryCategory = 'interior' | 'food' | 'drinks' | 'moments';

export interface NavLink {
  label: string;
  href: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  phoneHref: string;
  email: string;
  hours: { day: string; time: string }[];
  social: { label: string; href: string; icon: string }[];
  mapUrl: string;
  mapEmbedUrl: string;
}

export interface HeroData {
  headlineLines: string[];
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  location: string;
  image: string;
  imageAlt: string;
  badge: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  imageAlt: string;
  featured?: boolean;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  aspect: 'portrait' | 'landscape' | 'square';
  span: 'tall' | 'wide' | 'normal';
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  accentColor: string;
  textColor: string;
}

export interface ExperienceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
}

export interface MarqueeItem {
  text: string;
  symbol: string;
}
