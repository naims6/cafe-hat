import type { MenuItem } from "@/types/restaurant";

export const featuredMenuItems: MenuItem[] = [
  {
    id: "hat-special-burger",
    name: "The Hat Special Burger",
    description:
      "A gourmet burger with a juicy beef patty, melted cheese, fresh lettuce, tomato, and our signature sauce. Served with crispy fries.",
    price: 320,
    category: "food",
    image:
      "https://res.cloudinary.com/dynxnpj21/image/upload/v1789658095/485364483_1048486447299929_1071210043035398535_n_kpuhnx.jpg",
    imageAlt: "Colorful gourmet burger with red sesame bun",
    popular: true,
  },
  {
    id: "khepsa-saudia",
    name: "Khepsa Saudi Arab",
    description:
      "A traditional Saudi Arabian dish with fragrant rice, tender meat, and a blend of aromatic spices. Served with a side of fresh salad.",
    price: 280,
    category: "food",
    image:
      "https://res.cloudinary.com/dynxnpj21/image/upload/v1789657002/715990164_1403598268455410_1111556858615097762_n_eav9dh.jpg",
    imageAlt: "Stacked burger with bacon, cheese, and lettuce",
    popular: true,
  },
  {
    id: "spaghetti-tomato",
    name: "Pizza Cafe Hat",
    description:
      "Classic pizza with a thin crust, fresh tomato sauce, mozzarella, and basil leaves.",
    price: 250,
    category: "food",
    image:
      "https://res.cloudinary.com/dynxnpj21/image/upload/v1789657349/776685706_1467920682023168_873761508925192303_n_kcuiyf.jpg",
    imageAlt: "Spaghetti in tomato sauce with mushrooms and herbs",
  },
  {
    id: "latte-art",
    name: "Cafe Hat Juice",
    description:
      "A refreshing blend of seasonal fruits, ice, and a hint of mint. Served tall and colorful.",
    price: 120,
    category: "drinks",
    image:
      "https://res.cloudinary.com/dynxnpj21/image/upload/v1789657347/788461484_1484422467039656_8485224681510499400_n_jdy1fh.jpg",
    imageAlt: "Warm-toned latte art in a cozy coffee shop",
    popular: true,
  },
  {
    id: "nachos",
    name: "Nachos",
    description:
      "nachos with melted cheese, jalapeños, and a side of salsa. Perfect for sharing or enjoying solo.",
    price: 100,
    category: "food",
    image:
      "https://res.cloudinary.com/dynxnpj21/image/upload/v1789657710/514403207_1144732337675339_7115199574087542413_n_xqvkp7.jpg",
    imageAlt: "Barista crafting latte art with milk",
  },
  {
    id: "noodles-cafe-hat",
    name: "Noodles Cafe Hat",
    description:
      "Noodles with a medley of fresh vegetables, tossed in a savory sauce. A comforting and flavorful dish.",
    price: 150,
    category: "food",
    image:
      "https://res.cloudinary.com/dynxnpj21/image/upload/v1789658096/514255116_1124101263071780_6026690490363124213_n_d7nils.jpg",
    imageAlt: "Noodles with vegetables and sauce in a bowl",
  },
  {
    id: "pizza-cafe-hat",
    name: "Pizza Cafe Hat",
    description:
      "Classic pizza with a thin crust, fresh tomato sauce, mozzarella, and basil leaves.",
    price: 250,
    category: "food",
    image:
      "https://res.cloudinary.com/dynxnpj21/image/upload/v1789658095/499929022_1094810092667564_6752206686177155216_n_fzkgdv.jpg",
    imageAlt: "Vibrant cocktails with fresh fruit on a wooden table",
  },
  {
    id: "mini-cheesecake",
    name: "Mini Fruit Cheesecake",
    description:
      "Creamy cheesecake topped with fresh fruit and edible flowers. Small but mighty.",
    price: 180,
    category: "drinks",
    image:
      "https://images.pexels.com/photos/31928753/pexels-photo-31928753.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Colorful mini fruit cheesecakes garnished with flowers",
    featured: true,
  },
];
