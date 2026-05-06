"use client";

import { motion } from "framer-motion";

const routes = [
  { city: "London", price: "?48,000", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1400&auto=format&fit=crop" },
  { city: "Dubai", price: "?22,500", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1400&auto=format&fit=crop" },
  { city: "Singapore", price: "?18,000", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1400&auto=format&fit=crop" },
  { city: "New York", price: "?75,900", image: "https://images.unsplash.com/photo-1496588152823-86ff7695ca99?q=80&w=1400&auto=format&fit=crop" }
];

export function RoutesSection() {
  return (
    <section className="px-4 py-24">
      <div className="container">
        <p className="text-center text-xs uppercase tracking-[0.4em] text-cyan">Explore the world</p>
        <h2 className="mt-4 text-center font-display text-5xl font-black">Popular Flight Routes</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {routes.map((r, i) => (
            <motion.article key={r.city} initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group relative overflow-hidden rounded-[2rem] border border-white/15">
              <img src={r.image} alt={r.city} className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-5">
                <p className="text-3xl font-bold">{r.city}</p>
                <p className="text-slate-200">Starting from {r.price}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
