import type { RestaurantInfo } from '@/types/restaurant';

export const restaurantInfo: RestaurantInfo = {
  name: 'Cafe Hat',
  tagline: 'Good food. Great mood. Good moments.',
  description:
    'A little taste of happiness in Dhanbari. We serve fresh food, great coffee, and good moments in the heart of Tangail.',
  address: 'Dewan Shopping Complex, Dhanbari Bazar Rd',
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
  mapUrl: 'https://maps.app.goo.gl/tLt2VftJ9eZgrUda6',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.8!2d90.0212!3d24.2992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fd890071cab5c7%3A0x81a7f340bf45d65d!2sCafe%20Hat!5e0!3m2!1sen!2sbd!4v1700000000000',
};
