"use client";

import { motion } from "framer-motion";
import { HeroScene } from "@/components/scene/hero-scene";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[95vh] items-center overflow-hidden px-4 pt-28"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(2, 6, 23, 0.78), rgba(2, 6, 23, 0.88)), url('https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <HeroScene />
      <div className="noise absolute inset-0 -z-10" />
      <div className="container relative z-10">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-6 w-fit rounded-full border border-white/30 px-5 py-2 text-xs uppercase tracking-[0.4em] text-cyan">
          Elevate your journey
        </motion.p>
        <motion.h1 initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="max-w-4xl font-display text-5xl font-black leading-[0.95] md:text-8xl">
          Your Dream, <span className="bg-gradient-to-r from-cyan via-sky-300 to-teal bg-clip-text text-transparent">AnyTrip</span> Away.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-6 max-w-2xl text-lg text-slate-300">
          Experience seamless global travel with an immersive premium booking ecosystem designed for cinematic modern explorers.
        </motion.p>
      </div>
    </section>
  );
}
