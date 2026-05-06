"use client";

export function BookingPanel() {
  return (
    <section className="relative -mt-20 px-4">
      <div className="glass container rounded-[2rem] p-6 shadow-luxury md:p-10">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["From", "Mumbai"],
            ["To", "Lucknow"],
            ["Departure", "11 May, 2026"],
            ["Travelers", "1 Traveler, Economy"]
          ].map(([k, v]) => (
            <div key={k} className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{k}</p>
              <p className="mt-2 text-xl font-semibold">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
