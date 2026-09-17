import type { RestaurantInfo } from '@/types/restaurant';

export const restaurantInfo: RestaurantInfo = {
  name: 'Cafe Hat',
  tagline: 'Good food. Great mood. Good moments.',
  description:
    'A little taste of happiness in Dhanbari. We serve fresh food, great coffee, and good moments in the heart of Tangail.',
  address: 'Dhanbari, Tangail',
  city: 'Dhanbari, Tangail',
  country: 'Bangladesh',
  phone: '+880 1712-258348',
  phoneHref: 'tel:+8801712258348',
  email: 'hello@cafehat.com',
  hours: [
    { day: 'Saturday', time: '9:00 AM — 11:00 PM' },
    { day: 'Sunday', time: '9:00 AM — 11:00 PM' },
    { day: 'Monday', time: '9:00 AM — 11:00 PM' },
    { day: 'Tuesday', time: '9:00 AM — 11:00 PM' },
    { day: 'Wednesday', time: '9:00 AM — 11:00 PM' },
    { day: 'Thursday', time: '9:00 AM — 11:00 PM' },
    { day: 'Friday', time: '9:00 AM — 11:00 PM' },
  ],
  social: [
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'Facebook', href: '#', icon: 'facebook' },
    { label: 'WhatsApp', href: '#', icon: 'message-circle' },
  ],
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Dhanbari+Tangail+Bangladesh',
  mapEmbedUrl: 'https://www.google.com/maps?q=Dhanbari,Tangail,Bangladesh&output=embed',
};
