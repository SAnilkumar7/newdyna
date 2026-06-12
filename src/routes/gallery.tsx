import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal, SectionHeading } from "../components/Reveal";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import community from "../assets/hero-community.jpg";
import education from "../assets/hero-education.jpg";
import stupa from "../assets/hero-stupa.jpg";
import ashoka from "../assets/hero-ashoka.jpg";
import buddha from "../assets/hero-buddha.jpg";
import aboutBuddha from "../assets/about-buddha.jpg";
import aboutAshoka from "../assets/about-ashoka.jpg";
import aboutAmbedkar from "../assets/about-ambedkar.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — DEVANAMPRIYA" },
      { name: "description", content: "Photographs from our events, community service, education and welfare programmes." },
      { property: "og:title", content: "Gallery — DEVANAMPRIYA" },
      { property: "og:description", content: "Moments of compassion in action." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const CATS = ["All", "Events", "Community", "Education", "Buddhist Programs", "Welfare"] as const;
type Cat = typeof CATS[number];

const ITEMS: { img: string; cat: Exclude<Cat, "All">; title: string }[] = [
  { img: community, cat: "Community", title: "Community Kitchen" },
  { img: education, cat: "Education", title: "Rural Classroom" },
  { img: stupa, cat: "Buddhist Programs", title: "Heritage Walk — Sanchi" },
  { img: ashoka, cat: "Events", title: "Ashoka Day" },
  { img: buddha, cat: "Buddhist Programs", title: "Meditation Retreat" },
  { img: aboutBuddha, cat: "Buddhist Programs", title: "Dhamma Talk" },
  { img: aboutAshoka, cat: "Events", title: "Annual Convention" },
  { img: aboutAmbedkar, cat: "Welfare", title: "Constitution Day" },
  { img: community, cat: "Welfare", title: "Health Camp" },
  { img: education, cat: "Education", title: "Scholarship Day" },
  { img: stupa, cat: "Events", title: "Vesak Celebration" },
  { img: ashoka, cat: "Community", title: "Village Outreach" },
];

function GalleryPage() {
  const [cat, setCat] = useState<Cat>("All");
  const [open, setOpen] = useState<string | null>(null);
  const filtered = cat === "All" ? ITEMS : ITEMS.filter((i) => i.cat === cat);
  return (
    <>
      <section className="bg-[var(--royal-deep)] pt-32 pb-16 text-white">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">Gallery</span>
            <h1 className="mt-4 text-4xl font-semibold sm:text-5xl md:text-6xl">A visual <span className="text-gradient-gold">journal</span> of our journey.</h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${cat === c ? "bg-[var(--royal)] text-white" : "border border-border text-foreground hover:border-[var(--gold)] hover:text-[var(--royal)]"}`}>
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.button layout key={item.title + item.img}
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setOpen(item.img)}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-secondary">
                  <img src={item.img} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[var(--royal-deep)]/85 via-transparent to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                    <div className="text-left">
                      <div className="text-xs uppercase tracking-wider text-[var(--gold)]">{item.cat}</div>
                      <div className="mt-1 font-semibold text-white">{item.title}</div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[80] grid place-items-center bg-black/90 p-4 backdrop-blur">
            <button className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"><X className="h-5 w-5" /></button>
            <motion.img initial={{ scale: 0.95 }} animate={{ scale: 1 }} src={open} alt="" className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
