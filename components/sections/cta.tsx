"use client";

export function CtaSection() {
  return (
    <section className="px-4 pb-16 pt-8">
      <div className="container relative overflow-hidden rounded-[2.5rem] border border-cyan/40 bg-slate-900/70 p-10 text-center shadow-glow md:p-16">
        <div className="aurora absolute inset-0 opacity-70" />
        <div className="relative">
          <h2 className="font-display text-5xl font-black">Begin Your Cinematic Escape</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">Build unforgettable journeys with luxury-grade booking, support, and experiences.</p>
          <button className="mt-8 rounded-full bg-cyan px-8 py-4 font-semibold text-slate-950 transition hover:scale-105">Start Planning</button>
        </div>
      </div>
    </section>
  );
}
