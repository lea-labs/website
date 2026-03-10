"use client";

import ScrollReveal from "./ScrollReveal";
import Link from "next/link";

const pillars = [
  {
    num: "01",
    title: "Brand Architecture & Strategic Positioning",
    desc: "Engineering clarity, structure, and strategic direction.",
  },
  {
    num: "02",
    title: "Digital Ecosystem Development",
    desc: "Building digital infrastructure that converts attention to action.",
  },
  {
    num: "03",
    title: "Content Engine & Storytelling",
    desc: "Every frame engineered. Every word intentional.",
  },
  {
    num: "04",
    title: "Revenue Acceleration",
    desc: "Building the pipeline from first impression to signed contract.",
  },
  {
    num: "05",
    title: "Reputation & Influence Capital",
    desc: "Building authority, trust, and community ecosystems.",
  },
];

export default function PillarsPreview() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-abyss starfield">
      <div className="orbital-lines" />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-14">
          <p className="font-heading text-[10px] tracking-[0.4em] uppercase text-neon-bright mb-3">
            What We Do
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Five Pillars of Strategic Growth
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.num} delay={i * 80}>
              <Link href="/services" className="block group">
                <div className="bg-surface/50 border border-white/[0.04] rounded-lg p-6 card-glow relative overflow-hidden h-full">
                  <span className="absolute top-3 right-4 font-heading text-5xl font-bold text-white/[0.02] select-none">
                    {p.num}
                  </span>
                  <div className="relative z-10">
                    <span className="font-mono text-[10px] text-neon/60 tracking-wider">
                      {p.num}
                    </span>
                    <h3 className="font-heading text-sm font-semibold mt-2 mb-2 group-hover:text-neon-bright transition-colors leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-muted text-xs leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500} className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-neon-bright font-heading text-xs tracking-[0.15em] uppercase hover:text-off-white transition-colors"
          >
            Explore All Services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
