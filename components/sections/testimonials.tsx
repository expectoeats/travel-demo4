"use client";

const testimonials = [
  "FlyAnyTrip made my international work trip completely seamless.",
  "Corporate travel services are unmatched and truly premium.",
  "Curated tours helped us discover unforgettable hidden gems."
];

export function TestimonialsSection() {
  return (
    <section className="px-4 py-24">
      <div className="container rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/70 p-8 md:p-12">
        <h2 className="text-center font-display text-5xl font-black">What Our Travelers Say</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <article key={idx} className="glass rounded-[2rem] p-6">
              <p className="text-lg text-slate-100">“{t}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
