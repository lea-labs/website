"use client";

import ScrollReveal from "./ScrollReveal";

export default function Motto() {
  return (
    <section id="content" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="orbital-lines" />
      <div className="glow-ambient -top-40 right-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-12">
          <p className="font-heading text-[10px] tracking-[0.4em] uppercase text-neon-bright mb-6">
            Who We Are
          </p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Engineering Brand
            <br />
            <span className="text-neon-bright">Perception</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150} className="max-w-2xl mx-auto text-center">
          <p className="text-silver text-base md:text-lg leading-relaxed mb-8">
            We are a brand strategy, growth systems & digital influence
            consultancy. We don&apos;t chase trends — we architect systems that
            compound influence, trust, and revenue.
          </p>
        </ScrollReveal>

        {/* Three capability badges */}
        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {[
              { label: "Community Engineering", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" },
              { label: "Brand Architecture", icon: "M3 21h18M3 7v14M21 7v14M6 7V4l6-3 6 3v3" },
              { label: "Influence Systems", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 px-5 py-3 border border-neon/15 rounded-full bg-neon/[0.03] hover:bg-neon/[0.08] hover:border-neon/30 transition-all cursor-default"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-neon-bright shrink-0"
                >
                  <path d={item.icon} />
                </svg>
                <span className="font-heading text-xs tracking-[0.1em] uppercase text-silver">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
