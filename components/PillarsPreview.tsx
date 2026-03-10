"use client";

import ScrollReveal from "./ScrollReveal";
import Link from "next/link";

const pillars = [
  {
    num: "01",
    title: "Brand Architecture",
    full: "& Strategic Positioning",
    desc: "Engineering clarity, structure, and strategic direction.",
    icon: "M3 21h18M3 7v14M21 7v14M6 7V4l6-3 6 3v3",
  },
  {
    num: "02",
    title: "Digital Ecosystem",
    full: "Development",
    desc: "Building digital infrastructure that converts attention to action.",
    icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
  },
  {
    num: "03",
    title: "Content Engine",
    full: "& Storytelling",
    desc: "Every frame engineered. Every word intentional.",
    icon: "M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4z",
  },
  {
    num: "04",
    title: "Revenue Acceleration",
    full: "& Acquisition",
    desc: "Building the pipeline from first impression to signed contract.",
    icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8",
  },
  {
    num: "05",
    title: "Reputation",
    full: "& Influence Capital",
    desc: "Building authority, trust, and community ecosystems.",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  },
];

export default function PillarsPreview() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-abyss starfield">
      <div className="orbital-lines" />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="font-heading text-[11px] tracking-[0.4em] uppercase text-neon-bright mb-3">
            What We Do
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-glow">
            Five Pillars of Strategic Growth
          </h2>
        </ScrollReveal>

        {/* Central pillar layout — hub and spoke */}
        <div className="relative">
          {/* Top row — 3 pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {pillars.slice(0, 3).map((p, i) => (
              <ScrollReveal key={p.num} delay={i * 100}>
                <Link href="/services" className="block group h-full">
                  <div className="relative h-full border border-white/[0.06] rounded-xl p-8 bg-gradient-to-b from-surface/60 to-void/40 hover:border-neon/30 transition-all duration-500 overflow-hidden">
                    {/* Glow corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-neon/[0.04] rounded-bl-full pointer-events-none group-hover:bg-neon/[0.08] transition-colors" />

                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center shrink-0 group-hover:bg-neon/20 transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neon-bright">
                          <path d={p.icon} />
                        </svg>
                      </div>
                      <span className="font-mono text-[10px] text-neon/40 tracking-wider mt-1">
                        {p.num}
                      </span>
                    </div>

                    <h3 className="font-heading text-base md:text-lg font-bold mb-1 group-hover:text-neon-bright transition-colors leading-tight">
                      {p.title}
                    </h3>
                    <p className="font-heading text-xs text-silver/50 mb-3">{p.full}</p>
                    <p className="text-silver/70 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom row — 2 pillars, centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pillars.slice(3).map((p, i) => (
              <ScrollReveal key={p.num} delay={(i + 3) * 100}>
                <Link href="/services" className="block group h-full">
                  <div className="relative h-full border border-white/[0.06] rounded-xl p-8 bg-gradient-to-b from-surface/60 to-void/40 hover:border-neon/30 transition-all duration-500 overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-neon/[0.04] rounded-bl-full pointer-events-none group-hover:bg-neon/[0.08] transition-colors" />

                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center shrink-0 group-hover:bg-neon/20 transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neon-bright">
                          <path d={p.icon} />
                        </svg>
                      </div>
                      <span className="font-mono text-[10px] text-neon/40 tracking-wider mt-1">
                        {p.num}
                      </span>
                    </div>

                    <h3 className="font-heading text-base md:text-lg font-bold mb-1 group-hover:text-neon-bright transition-colors leading-tight">
                      {p.title}
                    </h3>
                    <p className="font-heading text-xs text-silver/50 mb-3">{p.full}</p>
                    <p className="text-silver/70 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={600} className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 text-neon-bright font-heading text-xs tracking-[0.2em] uppercase hover:text-off-white transition-colors group"
          >
            Explore All Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
