export interface NavLink {
  label: string;
  href: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'food' | 'coffee' | 'drinks' | 'desserts';
  image: string;
  imageAlt: string;
  featured?: boolean;
  popular?: boolean;
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

export type GalleryCategory = 'interior' | 'food' | 'drinks' | 'moments';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  aspect: 'portrait' | 'landscape' | 'square';
  span: 'normal' | 'wide' | 'tall';
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  accentColor: string;
  textColor: string;
}

export interface RestaurantHours {
  day: string;
  time: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
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
  hours: RestaurantHours[];
  social: SocialLink[];
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

export interface MarqueeItem {
  text: string;
  symbol: string;
}

export type PaymentProvider = 'bkash' | 'nagad' | 'rocket';

export interface MarathonRegistration {
  id: string;
  name: string;
  email: string;
  phone: string;
  provider: PaymentProvider;
  transactionId: string;
  registeredAt: string;
  verified: boolean;
}
