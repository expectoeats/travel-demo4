"use client";

export function StatsSection() {
  const stats = [["2.5K+", "Happy Customers"], ["350+", "Airlines"], ["4.5K+", "Destinations"], ["24/7", "Support"]];
  return (
    <section className="px-4 py-20">
      <div className="container grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:grid-cols-4">
        {stats.map(([v, l]) => (
          <div key={l} className="text-center">
            <p className="font-display text-5xl font-black text-glow">{v}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-400">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
