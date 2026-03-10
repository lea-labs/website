"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

const ShaderHero = dynamic(() => import("@/components/ShaderHero"), {
  ssr: false,
  loading: () => (
    <section className="h-[70vh] min-h-[500px] bg-void flex items-center justify-center">
      <div className="w-3 h-3 rounded-full bg-neon animate-pulse" />
    </section>
  ),
});

export default function OurLabPage() {
  return (
    <>
      <Header />
      <main>
        {/* Shader Hero */}
        <ShaderHero
          label="The Blueprint for Dominance"
          title="Launch Your Workflow Into Orbit"
          subtitle="Inside the strategic engine that powers every LEA Labs engagement."
        />

        {/* The Strategic Gap */}
        <section className="py-20 md:py-28 px-6 bg-abyss relative overflow-hidden">
          <div className="orbital-lines" />
          <div className="max-w-6xl mx-auto relative z-10">
            <ScrollReveal className="mb-14">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-3 text-glow">
                The Strategic Gap
              </h2>
              <p className="text-silver text-base md:text-lg">
                Why is &ldquo;business as usual&rdquo; failing in the modern market?
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal>
                <div className="bg-surface/50 border border-white/[0.06] rounded-xl p-8">
                  <span className="inline-block px-3 py-1 bg-steel/50 text-silver text-[10px] font-heading font-bold tracking-[0.2em] uppercase mb-6 rounded-sm">
                    Usual Technique
                  </span>
                  <ul className="space-y-4">
                    {[
                      "Guerilla Marketing (Short-Term Noise)",
                      "Unaligned Branding (Identity Crisis)",
                      "Face-First Focus Without Trust-Shield",
                      "Passive Posting (Zero Community)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted/50 mt-0.5 shrink-0">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        <span className="text-silver/80 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="bg-surface/50 border border-neon/20 rounded-xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon/[0.04] to-transparent pointer-events-none" />
                  <span className="inline-block px-3 py-1 bg-neon/20 text-neon-bright text-[10px] font-heading font-bold tracking-[0.2em] uppercase mb-6 rounded-sm relative z-10">
                    Our Vision
                  </span>
                  <ul className="space-y-4 relative z-10">
                    {[
                      "Psychological Nurturing (Long-Term ROI)",
                      "Brand-Aligned Authority (Premium)",
                      "Trust-Shield Engineering",
                      "Active Community (Self-Sustaining Leads)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neon-bright mt-0.5 shrink-0">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-off-white/90 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 md:py-28 px-6 relative overflow-hidden">
          <div className="glow-ambient top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="max-w-5xl mx-auto relative z-10">
            <ScrollReveal>
              <div className="flex items-start gap-6">
                <div className="w-px h-20 bg-gradient-to-b from-neon/60 to-transparent shrink-0 mt-2 hidden md:block" />
                <div>
                  <p className="font-heading text-xl md:text-2xl lg:text-3xl font-bold italic leading-tight text-off-white text-glow">
                    &ldquo;Guerilla marketing grabs attention.
                    <br />
                    Community building keeps it.&rdquo;
                  </p>
                  <cite className="block mt-5 text-neon-bright text-xs md:text-sm font-heading tracking-[0.25em] uppercase not-italic">
                    &mdash; Lea Labs
                  </cite>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* The Conversion Catalyst */}
        <section className="py-20 md:py-28 px-6 relative overflow-hidden">
          <div className="glow-ambient -bottom-40 -left-40" />
          <div className="max-w-5xl mx-auto relative z-10">
            <ScrollReveal className="text-center mb-14">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-glow">
                The Conversion Catalyst
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="flex flex-col items-center gap-8">
                <div className="w-full max-w-2xl">
                  <span className="inline-block px-3 py-1 bg-neon/20 text-neon-bright text-[10px] font-heading font-bold tracking-[0.2em] uppercase mb-3 rounded-sm">
                    Marketing Goal
                  </span>
                  <div className="bg-surface border border-neon/15 rounded-xl p-8 text-center">
                    <h3 className="font-heading text-2xl md:text-4xl font-bold text-neon-bright mb-4 text-glow">
                      Community Building
                    </h3>
                    <p className="text-silver text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                      Lead generation is the bi-product of high-value community engineering.
                      When viewers feel understood by our psychological triggers and engagement,
                      conversion happens naturally.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-px h-8 bg-gradient-to-b from-neon/40 to-neon-bright/40" />
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-neon-bright">
                    <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>

                <div className="w-full max-w-2xl">
                  <span className="inline-block px-3 py-1 bg-neon-dim/30 text-neon-bright text-[10px] font-heading font-bold tracking-[0.2em] uppercase mb-3 rounded-sm">
                    Company Goal
                  </span>
                  <div className="bg-surface border border-neon-dim/25 rounded-xl p-8 text-center">
                    <h3 className="font-heading text-2xl md:text-4xl font-bold bg-gradient-to-r from-neon to-neon-bright bg-clip-text text-transparent mb-4">
                      Revenue
                    </h3>
                    <p className="text-silver text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                      We move them from &ldquo;passive viewer&rdquo; to &ldquo;active investor&rdquo;
                      by providing a digital home before we sell them a physical one.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* The Conversion Path */}
        <section className="py-20 md:py-28 px-6 bg-abyss relative overflow-hidden">
          <div className="orbital-lines" />
          <div className="max-w-6xl mx-auto relative z-10">
            <ScrollReveal className="mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold italic text-glow">
                The Conversion Path
              </h2>
              <p className="text-silver mt-3 tracking-[0.2em] uppercase text-[11px] font-heading">
                The Creative &rarr; Bank Account Pipeline
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              {/* Desktop: 4-column grid with connecting line */}
              <div className="hidden lg:block relative">
                {/* Gradient connecting line behind cards */}
                <div className="absolute top-1/2 left-[10%] right-[10%] h-px -translate-y-1/2 z-0">
                  <div className="w-full h-full bg-gradient-to-r from-neon/10 via-neon/30 to-neon-bright/50" />
                </div>

                <div className="relative z-10 grid grid-cols-4 gap-6">
                  {[
                    { label: "REACH", sub: "Viral Reels & Exposure", num: "01", intensity: 0.3, icon: (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neon-bright/60 group-hover:text-neon-bright transition-colors">
                        <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    )},
                    { label: "TRUST", sub: "Community Nurturing", num: "02", intensity: 0.5, icon: (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neon-bright/60 group-hover:text-neon-bright transition-colors">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    )},
                    { label: "INTENT", sub: "Data-Backed Engagement", num: "03", intensity: 0.7, icon: (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neon-bright/60 group-hover:text-neon-bright transition-colors">
                        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                      </svg>
                    )},
                    { label: "LEAD", sub: "High-Intent Conversion", num: "04", intensity: 1.0, icon: (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neon-bright/60 group-hover:text-neon-bright transition-colors">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    )},
                  ].map((stage, i) => (
                    <div key={stage.label} className="group relative">
                      <div className="absolute -inset-2 rounded-2xl bg-neon/[0.04] opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

                      <div className="relative bg-surface/80 backdrop-blur-sm border border-neon/15 rounded-xl p-6 text-center group-hover:border-neon/35 transition-all">
                        <span className="font-mono text-[10px] text-neon/40 tracking-widest">{stage.num}</span>
                        <div className="mx-auto mt-3 mb-3 flex justify-center">{stage.icon}</div>
                        <h3 className="font-heading text-lg font-bold tracking-[0.15em] mb-2 text-off-white group-hover:text-neon-bright transition-colors">
                          {stage.label}
                        </h3>
                        <p className="text-silver/70 text-xs tracking-wider uppercase leading-relaxed">{stage.sub}</p>
                      </div>

                      {i < 3 && (
                        <div className="absolute -right-3 top-1/2 -translate-y-1/2 translate-x-1/2 z-20">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-neon/40">
                            <path d="M3 7H11M8 4L11 7L8 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile: vertical timeline */}
              <div className="lg:hidden relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-neon/10 via-neon/25 to-neon-bright/40 z-0" />

                <div className="space-y-6 relative z-10">
                  {[
                    { label: "REACH", sub: "Viral Reels & Exposure", num: "01", intensity: 0.3, iconPath: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" },
                    { label: "TRUST", sub: "Community Nurturing", num: "02", intensity: 0.5, iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
                    { label: "INTENT", sub: "Data-Backed Engagement", num: "03", intensity: 0.7, iconPath: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" },
                    { label: "LEAD", sub: "High-Intent Conversion", num: "04", intensity: 1.0, iconPath: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
                  ].map((stage) => (
                    <div key={stage.label} className="flex items-center gap-5">
                      <div className="w-12 shrink-0 flex justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neon-bright/60">
                          <path d={stage.iconPath} />
                        </svg>
                      </div>
                      <div className="flex-1 bg-surface/80 backdrop-blur-sm border border-neon/15 rounded-xl p-5">
                        <div className="flex items-baseline gap-3 mb-1">
                          <span className="font-mono text-[10px] text-neon/40 tracking-widest">{stage.num}</span>
                          <h3 className="font-heading text-base font-bold tracking-[0.15em] text-off-white">
                            {stage.label}
                          </h3>
                        </div>
                        <p className="text-silver/70 text-xs tracking-wider uppercase">{stage.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} className="mt-10">
              <blockquote className="border-l-2 border-neon/40 pl-6 max-w-2xl">
                <p className="text-silver italic text-base">
                  &ldquo;By building a community, we ensure leads are{" "}
                  <span className="underline decoration-neon text-neon-bright">pre-qualified</span> by our
                  authority before you even speak to them.&rdquo;
                </p>
              </blockquote>
            </ScrollReveal>
          </div>
        </section>

        {/* Neural Capture Mapping */}
        <section className="py-20 md:py-28 px-6 relative overflow-hidden">
          <div className="glow-ambient top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]" />
          <div className="max-w-6xl mx-auto relative z-10">
            <ScrollReveal className="text-center mb-14">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-glow">
                Neural Capture Mapping
              </h2>
            </ScrollReveal>

            {/* Brain-centered neural map layout */}
            <ScrollReveal>
              <div className="relative max-w-3xl mx-auto">
                {/* Top node: Mere Exposure */}
                <div className="flex justify-center mb-6">
                  <div className="border border-neon/25 rounded-xl p-5 text-center bg-surface/50 hover:border-neon/40 hover:bg-neon/[0.03] transition-all w-56">
                    <span className="font-heading text-sm font-bold tracking-[0.1em] block mb-1 text-off-white">Mere Exposure</span>
                    <span className="text-silver text-xs">Brand Familiarity</span>
                  </div>
                </div>

                {/* Connector line down */}
                <div className="flex justify-center"><div className="w-px h-6 bg-gradient-to-b from-neon/40 to-neon/20" /></div>

                {/* Middle row: Authority Bias | Brain | Halo Effect */}
                <div className="flex items-center justify-center gap-4 md:gap-8 my-4">
                  <div className="border border-neon/25 rounded-xl p-5 text-center bg-surface/50 hover:border-neon/40 hover:bg-neon/[0.03] transition-all w-48">
                    <span className="font-heading text-sm font-bold tracking-[0.1em] block mb-1 text-off-white">Authority Bias</span>
                    <span className="text-silver text-xs">Legacy & Trust</span>
                  </div>

                  {/* Connector line */}
                  <div className="w-6 h-px bg-gradient-to-r from-neon/40 to-neon/20 hidden md:block" />

                  {/* Brain icon center */}
                  <div className="relative w-36 h-36 md:w-48 md:h-48 shrink-0 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-neon/[0.06] blur-xl animate-pulse" />
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-neon-bright relative z-10 drop-shadow-[0_0_20px_rgba(167,139,250,0.5)]">
                      <path d="M9.5 2a3.5 3.5 0 0 0-3.5 3.5c0 .5.1 1 .3 1.4A3.5 3.5 0 0 0 4 10.5c0 1 .4 1.9 1.1 2.5A3.5 3.5 0 0 0 4 15.5a3.5 3.5 0 0 0 2.6 3.4A3.5 3.5 0 0 0 10 22h1V12H9.5a3.5 3.5 0 0 1 0-7h1V2h-.5a3.49 3.49 0 0 0-.5 0z" />
                      <path d="M14.5 2a3.5 3.5 0 0 1 3.5 3.5c0 .5-.1 1-.3 1.4A3.5 3.5 0 0 1 20 10.5c0 1-.4 1.9-1.1 2.5A3.5 3.5 0 0 1 20 15.5a3.5 3.5 0 0 1-2.6 3.4A3.5 3.5 0 0 1 14 22h-1V12h1.5a3.5 3.5 0 0 0 0-7H13V2h.5a3.49 3.49 0 0 1 .5 0z" />
                    </svg>
                  </div>

                  {/* Connector line */}
                  <div className="w-6 h-px bg-gradient-to-r from-neon/20 to-neon/40 hidden md:block" />

                  <div className="border border-neon/25 rounded-xl p-5 text-center bg-surface/50 hover:border-neon/40 hover:bg-neon/[0.03] transition-all w-48">
                    <span className="font-heading text-sm font-bold tracking-[0.1em] block mb-1 text-off-white">Halo Effect</span>
                    <span className="text-silver text-xs">Developer Synergy</span>
                  </div>
                </div>

                {/* Connector line down */}
                <div className="flex justify-center"><div className="w-px h-6 bg-gradient-to-b from-neon/20 to-neon/40" /></div>

                {/* Bottom node: Loss Aversion */}
                <div className="flex justify-center mt-6">
                  <div className="border border-neon/25 rounded-xl p-5 text-center bg-surface/50 hover:border-neon/40 hover:bg-neon/[0.03] transition-all w-56">
                    <span className="font-heading text-sm font-bold tracking-[0.1em] block mb-1 text-off-white">Loss Aversion</span>
                    <span className="text-silver text-xs">FOMO Loops</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Quote below brain structure */}
            <ScrollReveal delay={200} className="mt-10">
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-silver italic text-lg leading-relaxed">
                  &ldquo;We don&apos;t just shoot videos&rdquo;
                </p>
                <p className="text-neon-bright font-heading text-sm tracking-[0.15em] uppercase mt-3">
                  We map human triggers into every frame.
                </p>
                <p className="text-silver/70 text-sm mt-4 max-w-lg mx-auto">
                  By engineering dopamine spikes and pattern interruptions, we force the brain
                  to stop scrolling and start listening.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Video Engineering Lab */}
        <section className="py-20 md:py-28 px-6 bg-abyss relative overflow-hidden">
          <div className="orbital-lines" />
          <div className="max-w-6xl mx-auto relative z-10">
            <ScrollReveal className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold italic text-glow">
                Video Engineering Lab
              </h2>
              <p className="text-silver mt-3 tracking-[0.15em] uppercase text-[11px] font-heading">
                60-Second Content Architecture
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="flex flex-col md:flex-row rounded-xl overflow-hidden mb-10">
                <div className="flex-1 p-5 md:p-6 bg-neon/10 border border-neon/20">
                  <p className="font-heading text-xs font-bold text-neon-bright italic">0-2s: HOOK</p>
                  <p className="text-silver/70 text-[10px] mt-1">Pattern Interrupt</p>
                </div>
                <div className="flex-[2] p-5 md:p-6 bg-neon/[0.06] border border-neon/15">
                  <p className="font-heading text-xs font-bold text-neon-bright/80 italic">2-30s: TENSION & STORYTELLING</p>
                  <p className="text-silver/70 text-[10px] mt-1">(Dopamine Loop Initiation)</p>
                </div>
                <div className="flex-[2] p-5 md:p-6 bg-neon/[0.03] border border-neon/10">
                  <p className="font-heading text-xs font-bold text-neon-bright/60 italic">30-60s: REWARD / CTA</p>
                  <p className="text-silver/70 text-[10px] mt-1">(Data-Driven Conversion)</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "R&D Lab", desc: "Constant correction loop based on retention analytics." },
                  { title: "Cognitive Capture", desc: "Securing mindshare over market noise." },
                  { title: "Pattern Interrupt", desc: "Disrupting the scroll to capture passive attention." },
                ].map((item) => (
                  <div key={item.title} className="bg-surface border border-neon/15 rounded-xl p-7 text-center card-glow">
                    <h3 className="font-heading text-lg font-bold mb-2 text-off-white">{item.title}</h3>
                    <p className="text-silver text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Impact Calculus */}
        <section className="py-20 md:py-28 px-6 relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10">
            <ScrollReveal className="mb-10">
              <h2 className="font-heading text-3xl md:text-5xl font-bold italic text-glow">
                The Impact Calculus
              </h2>
              <p className="text-silver mt-3 tracking-[0.15em] uppercase text-[11px] font-heading">
                Community Trust vs. Lead Quality (12-Month Projection)
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-surface rounded-xl p-6 md:p-10 relative border border-neon/10">
                <svg viewBox="0 0 800 320" className="w-full h-auto" fill="none">
                  <line x1="80" y1="20" x2="80" y2="260" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                  <line x1="80" y1="260" x2="760" y2="260" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

                  {/* Grid lines */}
                  {[65, 130, 195].map((y) => (
                    <line key={y} x1="80" y1={y} x2="760" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
                  ))}

                  <path
                    d="M 80 250 Q 200 245, 280 235 Q 360 220, 430 190 Q 500 140, 560 100 Q 620 65, 680 40 L 760 25"
                    stroke="url(#gl)"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_8px_rgba(167,139,250,0.5)]"
                  />
                  <path
                    d="M 80 250 Q 200 245, 280 235 Q 360 220, 430 190 Q 500 140, 560 100 Q 620 65, 680 40 L 760 25 L 760 260 L 80 260 Z"
                    fill="url(#gf)"
                    opacity="0.15"
                  />

                  {/* Interactive data points with hover targets */}
                  {[
                    { cx: 80, cy: 250, label: "Baseline" },
                    { cx: 280, cy: 235, label: "Traction" },
                    { cx: 430, cy: 190, label: "Growth" },
                    { cx: 560, cy: 100, label: "Acceleration" },
                    { cx: 760, cy: 25, label: "Dominance" },
                  ].map((pt, i) => (
                    <g key={i} className="group cursor-pointer">
                      {/* Larger invisible hover target */}
                      <circle cx={pt.cx} cy={pt.cy} r="20" fill="transparent" className="pointer-events-auto" />
                      {/* Pulse ring on hover */}
                      <circle cx={pt.cx} cy={pt.cy} r="12" fill="none" stroke="#a78bfa" strokeWidth="0.5" opacity="0" className="group-hover:opacity-60 transition-opacity">
                        <animate attributeName="r" from="8" to="20" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx={pt.cx} cy={pt.cy} r="5" fill="none" stroke={i < 2 ? "#7c3aed" : "#a78bfa"} strokeWidth="1" opacity="0.3" />
                      <circle cx={pt.cx} cy={pt.cy} r="3" fill={i < 2 ? "#7c3aed" : "#a78bfa"} className="group-hover:r-[5] transition-all" />
                      {/* Tooltip on hover */}
                      <text x={pt.cx} y={pt.cy - 15} fill="#a78bfa" fontSize="10" fontFamily="Orbitron" textAnchor="middle" opacity="0" className="group-hover:opacity-100 transition-opacity">
                        {pt.label}
                      </text>
                    </g>
                  ))}

                  {/* Quote top-left corner */}
                  <text x="95" y="42" fill="#a78bfa" fontSize="10" fontFamily="Orbitron" textAnchor="start" opacity="0.6">
                    &quot;Exponential growth in lead quality
                  </text>
                  <text x="95" y="56" fill="#a78bfa" fontSize="10" fontFamily="Orbitron" textAnchor="start" opacity="0.6">
                    as community trust solidifies.&quot;
                  </text>

                  {/* Y-axis labels */}
                  <text x="70" y="260" fill="#6b7280" fontSize="9" fontFamily="Orbitron" textAnchor="end">Low</text>
                  <text x="70" y="140" fill="#6b7280" fontSize="9" fontFamily="Orbitron" textAnchor="end">Med</text>
                  <text x="70" y="30" fill="#6b7280" fontSize="9" fontFamily="Orbitron" textAnchor="end">High</text>

                  {["Month 1", "Month 3", "Month 6", "Month 9", "Month 12"].map((label, i) => (
                    <text key={label} x={80 + i * 170} y="285" fill="#9ca3af" fontSize="11" fontFamily="Orbitron" textAnchor="middle">
                      {label}
                    </text>
                  ))}

                  {/* Axis labels */}
                  <text x="420" y="310" fill="#6b7280" fontSize="10" fontFamily="Orbitron" textAnchor="middle" letterSpacing="0.15em">
                    COMMUNITY TRUST → LEAD QUALITY
                  </text>

                  <defs>
                    <linearGradient id="gl" x1="80" y1="250" x2="760" y2="25">
                      <stop offset="0%" stopColor="#4c1d95" />
                      <stop offset="100%" stopColor="#a78bfa" />
                    </linearGradient>
                    <linearGradient id="gf" x1="400" y1="25" x2="400" y2="260">
                      <stop offset="0%" stopColor="#a78bfa" />
                      <stop offset="100%" stopColor="#4c1d95" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* The Advantage */}
        <section className="py-20 md:py-28 px-6 bg-abyss relative overflow-hidden">
          <div className="orbital-lines" />
          <div className="max-w-6xl mx-auto relative z-10">
            <ScrollReveal className="text-center mb-14">
              <h2 className="font-heading text-3xl md:text-5xl font-bold italic text-glow">
                The LEA Advantage
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal>
                <div className="bg-surface/50 border border-white/[0.06] rounded-xl p-8 h-full">
                  <span className="inline-block px-3 py-1 bg-steel/30 text-silver text-[10px] font-heading font-bold tracking-[0.2em] uppercase mb-6 rounded-sm">
                    Other Agencies
                  </span>
                  <ul className="space-y-3">
                    {[
                      { label: '"Shoot & Edit"', sub: "Zero strategy behind the content" },
                      { label: "Vanity Metrics Focus", sub: "Chasing likes over conversions" },
                      { label: "Manual, Slow Growth", sub: "No systems or automation" },
                      { label: "Guessing the Niche", sub: "No research-backed positioning" },
                    ].map((item) => (
                      <li key={item.label} className="flex items-start gap-3">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted/40 mt-0.5 shrink-0">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        <div>
                          <p className="text-silver/70 text-sm font-medium">{item.label}</p>
                          <p className="text-silver/50 text-xs">{item.sub}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="bg-surface/50 border border-neon/20 rounded-xl p-8 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon/[0.04] to-transparent pointer-events-none" />
                  <span className="inline-block px-3 py-1 bg-neon/20 text-neon-bright text-[10px] font-heading font-bold tracking-[0.2em] uppercase mb-6 rounded-sm relative z-10">
                    LEA Labs
                  </span>
                  <ul className="space-y-3 relative z-10">
                    {[
                      { label: "Psychological R&D Lab", sub: "Strategy-first execution" },
                      { label: "Community Engineering", sub: "Building ecosystems, not audiences" },
                      { label: "Behavioral Lead Generation", sub: "Conversion through psychology" },
                      { label: "Authority Scaling", sub: "Compounding influence" },
                    ].map((item) => (
                      <li key={item.label} className="flex items-start gap-3">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neon-bright mt-0.5 shrink-0">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <div>
                          <p className="text-off-white text-sm font-medium">{item.label}</p>
                          <p className="text-silver text-xs">{item.sub}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <CTASection heading="Ready to Enter the Lab?" />
      </main>
      <Footer />
    </>
  );
}
