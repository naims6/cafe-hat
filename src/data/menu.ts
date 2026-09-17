import type { MenuItem } from '@/types/restaurant';

export const featuredMenuItems: MenuItem[] = [
  {
    id: 'hat-special-burger',
    name: 'The Hat Special Burger',
    description: 'Juicy beef patty, melted cheddar, crispy lettuce, and our signature house sauce stacked tall on a toasted sesame bun.',
    price: 320,
    category: 'food',
    image:
      'https://images.pexels.com/photos/5175580/pexels-photo-5175580.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Colorful gourmet burger with red sesame bun',
    featured: true,
    popular: true,
  },
  {
    id: 'classic-beef-burger',
    name: 'Classic Beef Burger',
    description: 'Grilled beef patty with caramelized onions, cheddar, and pickles on a brioche bun.',
    price: 280,
    category: 'food',
    image:
      'https://images.pexels.com/photos/6088519/pexels-photo-6088519.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Stacked burger with bacon, cheese, and lettuce',
    popular: true,
  },
  {
    id: 'spaghetti-tomato',
    name: 'Spaghetti al Pomodoro',
    description: 'Slow-simmered tomato sauce, fresh basil, and a drizzle of olive oil over al dente pasta.',
    price: 250,
    category: 'food',
    image:
      'https://images.pexels.com/photos/31637791/pexels-photo-31637791.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Spaghetti in tomato sauce with mushrooms and herbs',
  },
  {
    id: 'latte-art',
    name: 'Cafe Hat Latte',
    description: 'Smooth espresso, steamed milk, and beautiful latte art. The perfect afternoon pick-me-up.',
    price: 120,
    category: 'coffee',
    image:
      'https://images.pexels.com/photos/37034126/pexels-photo-37034126.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Warm-toned latte art in a cozy coffee shop',
    popular: true,
  },
  {
    id: 'cappuccino',
    name: 'Classic Cappuccino',
    description: 'Rich espresso topped with velvety frothed milk and a dusting of cocoa.',
    price: 100,
    category: 'coffee',
    image:
      'https://images.pexels.com/photos/13735913/pexels-photo-13735913.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Barista crafting latte art with milk',
  },
  {
    id: 'fruit-cocktail',
    name: 'Tropical Fruit Cooler',
    description: 'A refreshing blend of seasonal fruits, ice, and a hint of mint. Served tall and colorful.',
    price: 150,
    category: 'drinks',
    image:
      'https://images.pexels.com/photos/13004099/pexels-photo-13004099.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Vibrant fruit cocktails with strawberry garnish',
  },
  {
    id: 'berry-cocktail',
    name: 'Berry Bliss Mocktail',
    description: 'Mixed berries, citrus, and sparkling soda for a sweet, fizzy finish.',
    price: 140,
    category: 'drinks',
    image:
      'https://images.pexels.com/photos/28583932/pexels-photo-28583932.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Vibrant cocktails with fresh fruit on a wooden table',
  },
  {
    id: 'mini-cheesecake',
    name: 'Mini Fruit Cheesecake',
    description: 'Creamy cheesecake topped with fresh fruit and edible flowers. Small but mighty.',
    price: 180,
    category: 'desserts',
    image:
      'https://images.pexels.com/photos/31928753/pexels-photo-31928753.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Colorful mini fruit cheesecakes garnished with flowers',
    featured: true,
  },
  {
    id: 'colorful-cakes',
    name: 'Assorted Mini Cakes',
    description: 'A colorful platter of bite-sized cakes — perfect for sharing or treating yourself.',
    price: 200,
    category: 'desserts',
    image:
      'https://images.pexels.com/photos/11522869/pexels-photo-11522869.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Colorful mini cakes arranged on trays',
  },
];
