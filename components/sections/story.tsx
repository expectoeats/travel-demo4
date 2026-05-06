"use client";

export function StorySection() {
  return (
    <section className="relative px-4 py-24">
      <div className="container grid gap-10 md:grid-cols-2">
        <div className="rounded-[2rem] border border-white/15 bg-white/5 p-8">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan">Happy Customers</p>
          <h3 className="mt-5 font-display text-4xl font-black">Pay What You See</h3>
          <p className="mt-4 text-slate-300">Transparent pricing with no hidden fees, no convenience charges, and no last-minute surprises.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img className="h-72 w-full rounded-3xl object-cover" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop" alt="traveler" />
          <img className="h-72 w-full rounded-3xl object-cover" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop" alt="travel" />
        </div>
      </div>
    </section>
  );
}
