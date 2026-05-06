"use client";

import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-8">
      <div className="container border-t border-white/10 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-slate-300">© 2026 FlyAnyTrip. Crafted for premium global explorers.</p>
          <div className="flex gap-3 text-slate-200">
            {[FaInstagram, FaXTwitter, FaLinkedinIn].map((Icon, i) => (
              <span key={i} className="glass rounded-full p-3"><Icon /></span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
