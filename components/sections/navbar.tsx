"use client";

import { motion } from "framer-motion";

const links = ["Flights", "Hotels", "Packages", "Visa"];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="glass mx-auto mt-4 flex w-[min(1200px,94vw)] items-center justify-between rounded-full px-4 py-3">
        <div className="font-display text-xl font-black tracking-[0.2em] text-cyan">ANYTRIP</div>
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l} className="text-sm uppercase tracking-[0.2em] text-slate-200/90 transition hover:text-cyan">{l}</li>
          ))}
        </ul>
        <button className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.18em]">Account</button>
      </nav>
    </motion.header>
  );
}
