"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Flame, Star, ShoppingBag } from "lucide-react";
import type { MenuItem } from "@/types/restaurant";
import { triggerToast } from "@/lib/toast";
import { cn } from "@/lib/utils";

interface MenuCardProps {
  item: MenuItem;
  size?: "large" | "medium" | "small";
  className?: string;
}

const categoryLabels: Record<string, string> = {
  food: "Food",
  coffee: "Coffee",
  drinks: "Drinks",
  desserts: "Desserts",
};

export function MenuCard({ item, className }: MenuCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const handleOrderClick = () => {
    triggerToast(
      "Online Ordering Coming Soon!",
      `Online ordering for ${item.name} is coming soon! Please call +880 1712-258348 for further assistance.`,
    );
  };

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-espresso/10 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-espresso/20",
        className,
      )}
    >
      {/* Image Container with Consistent Aspect Ratio */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-dark">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Top Badges */}
        <div className="absolute inset-x-3 top-3 flex items-center justify-between pointer-events-none">
          {/* Category Pill */}
          <span className="rounded-full bg-espresso/90 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-cream backdrop-blur-md shadow-sm">
            {categoryLabels[item.category] || item.category}
          </span>

          {/* Featured / Popular Badge */}
          {item.featured ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-sunny px-3 py-1 text-[11px] font-black uppercase tracking-wider text-espresso shadow-md">
              <Star className="h-3 w-3 fill-espresso text-espresso" />
              <span>Featured</span>
            </span>
          ) : item.popular ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-tomato px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-md">
              <Flame className="h-3 w-3 fill-white text-white" />
              <span>Popular</span>
            </span>
          ) : null}
        </div>
      </div>

      {/* Content Area with Perfect Vertical Alignment */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          {/* Item Name & Price Row */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-extrabold text-lg leading-tight text-espresso group-hover:text-tomato transition-colors">
              {item.name}
            </h3>
            <span className="shrink-0 rounded-lg bg-cream-dark/80 px-2.5 py-1 text-base font-black text-tomato">
              ৳{item.price}
            </span>
          </div>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-espresso/70 line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Card Footer Line with Order Button */}
        <div className="mt-4 flex items-center justify-between border-t border-espresso/5 pt-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-espresso/40">
            Cafe Hat Specialty
          </span>
          <button
            onClick={handleOrderClick}
            className="inline-flex items-center gap-1.5 rounded-full bg-tomato px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-xs transition-all duration-300 hover:bg-tomato-dark hover:shadow-md active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            <span>Order →</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}
