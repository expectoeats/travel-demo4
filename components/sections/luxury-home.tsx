"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { animate } from "motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { ArrowUpRight, Compass, Menu, Plane, Sparkles, X } from "lucide-react";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const destinations = [
  {
    title: "Iceland Aurora",
    copy: "Private glacier flights, volcanic spa rituals, and aurora domes under endless stars.",
    image: "https://images.unsplash.com/photo-1474690455603-a369ec1293f9?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Santorini Eclipse",
    copy: "Cliffside infinity villas curated for golden-hour sails and chef-led night tastings.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Kyoto Velvet",
    copy: "Temple dawn walkthroughs, hidden tea salons, and curated art hotel experiences.",
    image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1600&q=80"
  }
];

const packages = [
  {
    title: "Sky Palace Circuit",
    nights: "9 nights",
    price: "$14,900",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "Arctic Glass Escape",
    nights: "6 nights",
    price: "$11,200",
    image: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "Mirage Dune Voyage",
    nights: "8 nights",
    price: "$12,700",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1400&q=80"
  }
];

const gallery = [
  "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=900&q=80"
];

function useMagnetic() {
  const ref = useRef<HTMLButtonElement>(null);
  const onMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    gsap.to(ref.current, { x: x * 0.15, y: y * 0.2, duration: 0.3, ease: "power2.out" });
  };
  const onLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.4, ease: "elastic.out(1,0.4)" });
  };
  return { ref, onMove, onLeave };
}

function MagneticButton({ label }: { label: string }) {
  const magnetic = useMagnetic();
  return (
    <button
      ref={magnetic.ref}
      onMouseMove={magnetic.onMove}
      onMouseLeave={magnetic.onLeave}
      className="group relative overflow-hidden rounded-full border border-red-300/60 bg-white/85 px-6 py-3 text-sm font-medium tracking-wide text-slate-800 backdrop-blur"
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10 inline-flex items-center gap-2">{label} <ArrowUpRight size={14} /></span>
    </button>
  );
}

export function LuxuryHome() {
  const root = useRef<HTMLDivElement>(null);
  const heroText = useRef<HTMLHeadingElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;
    const cursor = document.getElementById("cursor-glow");
    const moveCursor = (event: MouseEvent) => {
      if (!cursor) return;
      gsap.to(cursor, { x: event.clientX, y: event.clientY, duration: 0.35, ease: "power3.out" });
    };
    window.addEventListener("mousemove", moveCursor);

    const splits: SplitType[] = [];
    if (heroText.current) {
      const split = new SplitType(heroText.current, { types: "lines,words" });
      splits.push(split);
      gsap.from(split.words, {
        yPercent: 120,
        opacity: 0,
        stagger: 0.04,
        duration: 1.2,
        ease: "power4.out"
      });
    }

    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((item) => {
      gsap.fromTo(
        item,
        { y: 80, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 82%" }
        }
      );
    });

    const stats = root.current.querySelectorAll("[data-stat]");
    stats.forEach((el) => {
      const value = Number(el.getAttribute("data-stat"));
      const obj = { n: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: () => {
          animate(obj.n, value, {
            duration: 1.8,
            onUpdate: (latest) => {
              el.textContent = `${Math.floor(latest)}+`;
            }
          });
        }
      });
    });

    return () => {
      splits.forEach((split) => split.revert());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div ref={root} className="relative min-h-screen overflow-x-clip bg-bg text-slate-900">
      <div className="noise pointer-events-none fixed inset-0 -z-20 opacity-30" />
      <div className="aurora pointer-events-none fixed inset-0 -z-10" />
      <div className="cursor-glow pointer-events-none fixed left-0 top-0 z-50 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full" id="cursor-glow" />

      <header className="fixed left-0 top-0 z-40 w-full px-4 pt-4">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-[1.25rem] border border-slate-200/90 bg-white/85 px-4 py-3 shadow-[0_14px_35px_rgba(148,163,184,0.22)] backdrop-blur-2xl md:px-6">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-content-center rounded-xl bg-gradient-to-br from-red-400 via-rose-500 to-red-700 text-white shadow-[0_0_25px_rgba(248,113,113,.45)]"><Sparkles size={14} /></span>
            <div className="leading-tight">
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Luxury Travel Atelier</p>
              <p className="text-sm font-semibold tracking-[0.22em] text-slate-900">EXPECTO</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/70 p-1 md:flex">
            <a className="rounded-full px-4 py-2 text-sm text-slate-700 transition hover:bg-red-50 hover:text-slate-900" href="#destinations">Destinations</a>
            <a className="rounded-full px-4 py-2 text-sm text-slate-700 transition hover:bg-red-50 hover:text-slate-900" href="#experiences">Experiences</a>
            <a className="rounded-full px-4 py-2 text-sm text-slate-700 transition hover:bg-red-50 hover:text-slate-900" href="#gallery">Gallery</a>
            <a className="rounded-full px-4 py-2 text-sm text-slate-700 transition hover:bg-red-50 hover:text-slate-900" href="#contact">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-red-300/40 bg-red-400/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-red-100 md:block">Plan Trip</button>
            <button className="rounded-xl border border-slate-300 bg-white/90 p-2 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </nav>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mt-3 max-w-7xl rounded-3xl border border-slate-200 bg-white/95 p-4 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-3 text-sm text-slate-700"><a href="#destinations">Destinations</a><a href="#experiences">Experiences</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a></div>
          </motion.div>
        )}
      </header>

      <section className="relative isolate flex min-h-screen items-end px-4 pb-16 pt-36">
        <img
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-100"
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=90"
          alt="Beautiful tropical travel destination"
        />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_72%_18%,rgba(239,68,68,.18),transparent_36%),linear-gradient(180deg,rgba(255,255,255,.20),rgba(255,255,255,.72))]" />

        <div className="relative z-20 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div data-reveal>
            <h1 ref={heroText} className="font-display text-5xl font-semibold leading-[0.95] sm:text-7xl xl:text-[6.8rem]">Journey Beyond Ordinary Earth.</h1>
            <p className="mt-6 max-w-xl text-base text-slate-700">Bespoke expeditions crafted like cinema. Private air, rare stays, and immersive storytelling for travelers who collect unforgettable moments.</p>
            <div className="mt-8 flex flex-wrap gap-4"><MagneticButton label="Start a Curated Trip" /><MagneticButton label="Watch Brand Film" /></div>
          </div>

          <div data-reveal className="glass relative h-fit rounded-[2rem] p-4 sm:p-6 lg:self-start">
            <div className="mb-5 text-xs uppercase tracking-[0.3em] text-slate-700">Private Booking Capsule</div>
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="rounded-2xl border border-slate-200 bg-white/5 p-4"><p>Departure</p><p className="mt-1 text-lg font-medium">New York</p></div>
              <div className="rounded-2xl border border-slate-200 bg-white/5 p-4"><p>Destination</p><p className="mt-1 text-lg font-medium">Reykjavik</p></div>
              <div className="rounded-2xl border border-slate-200 bg-white/5 p-4"><p>Date</p><p className="mt-1 text-lg font-medium">18 Jun</p></div>
              <div className="rounded-2xl border border-slate-200 bg-white/5 p-4"><p>Guests</p><p className="mt-1 text-lg font-medium">2 Adults</p></div>
            </div>
            <button className="mt-4 w-full rounded-2xl bg-gradient-to-r from-red-400 via-rose-400 to-red-600 py-3 text-sm font-semibold text-white">Design My Escape</button>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl grid-cols-3 gap-3 px-4 pb-12 sm:gap-5">
        {[
          { label: "Luxury Routes", value: 120 },
          { label: "Private Partners", value: 48 },
          { label: "5-Star Stories", value: 980 }
        ].map((item) => (
          <div key={item.label} data-reveal className="glass rounded-3xl p-4 text-center sm:p-7">
            <div data-stat={item.value} className="text-2xl font-semibold sm:text-4xl">0+</div>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-700">{item.label}</p>
          </div>
        ))}
      </section>

      <section id="destinations" className="mx-auto max-w-7xl px-4 py-20">
        <h2 data-reveal className="font-display text-4xl sm:text-6xl">Signature Destinations</h2>
        <div className="mt-10 grid gap-7 lg:grid-cols-3">
          {destinations.map((item, i) => (
            <motion.article
              key={item.title}
              data-reveal
              whileHover={{ y: -8, rotateX: 3, rotateY: i === 1 ? -4 : 4 }}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80"
            >
              <img src={item.image} alt={item.title} className="h-[28rem] w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/35 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{item.copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20" id="experiences">
        <div data-reveal className="grid items-end gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <h2 className="font-display text-4xl sm:text-6xl">Travel Films You Can Live Inside</h2>
          <p className="text-slate-700">Each itinerary is a directed narrative with private guides, chef-curated moments, and cinematic pacing from sunrise to starlight.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <article key={item.title} data-reveal className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80">
              <img src={item.image} alt={item.title} className="h-80 w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/85 to-transparent" />
              <div className="absolute bottom-0 w-full p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-red-500">{item.nights}</p>
                <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
                <div className="mt-4 flex items-center justify-between"><span className="text-xl text-slate-900">{item.price}</span><MagneticButton label="Reserve" /></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-4 py-20">
        <h2 data-reveal className="font-display text-4xl sm:text-6xl">Cinematic Gallery</h2>
        <div className="mt-10 columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3">
          {gallery.map((img, i) => (
            <motion.figure
              key={img}
              data-reveal
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200"
            >
              <img src={img} alt={`Travel scene ${i + 1}`} className="w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <h2 data-reveal className="font-display text-4xl sm:text-6xl">Words From World Travelers</h2>
        <div data-reveal className="mt-10 flex gap-4 overflow-hidden">
          <div className="marquee flex gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <article key={i} className="glass w-[22rem] shrink-0 rounded-3xl p-5">
                <div className="mb-3 flex items-center gap-3"><img src={`https://i.pravatar.cc/100?img=${i + 8}`} className="h-10 w-10 rounded-full" alt="traveler" /><p className="text-sm">Elite Traveler {i + 1}</p></div>
                <p className="text-sm text-slate-700">Every frame of our trip felt intentional and cinematic. This is not vacation planning, this is emotional direction.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-slate-200 px-4 pb-12 pt-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-700">Begin Your Next Chapter</p>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl">Let Us Design Your Cinematic Escape.</h2>
          </div>
          <div className="glass rounded-3xl p-6">
            <p className="mb-4 text-sm text-slate-700">Join our private release list for destination drops.</p>
            <div className="flex gap-3"><input placeholder="Email address" className="w-full rounded-2xl border border-slate-300 bg-white/90 px-4 py-3 outline-none" /><button className="rounded-2xl bg-white px-4 text-slate-900">Join</button></div>
            <div className="mt-6 flex gap-4 text-xl text-slate-700"><FaInstagram /><FaXTwitter /><FaYoutube /></div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl items-center justify-between border-t border-slate-200 pt-6 text-xs text-slate-500"><p>2026 Crafted with vision by <a href="https://expecto.online" target="_blank" rel="noreferrer" className="text-red-500 transition hover:text-red-600">Expecto</a></p><p className="flex items-center gap-2"><Compass size={14} /> Crafted for extraordinary journeys <Plane size={14} /></p></div>
      </footer>
    </div>
  );
}
