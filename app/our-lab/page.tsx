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

            <ScrollReveal delay={300} className="mt-8">
              <blockquote className="border-l-2 border-neon/40 pl-6">
                <p className="text-silver italic text-base">
                  &ldquo;Guerilla marketing grabs attention. Community building keeps it.&rdquo;
                </p>
                <cite className="block mt-2 text-neon-bright/70 text-sm font-heading tracking-wider not-italic">
                  &mdash; Lea Labs
                </cite>
              </blockquote>
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
            <ScrollReveal className="mb-6">
              <h2 className="font-heading text-3xl md:text-5xl font-bold italic text-glow">
                The Conversion Path
              </h2>
              <p className="text-silver mt-3 tracking-[0.2em] uppercase text-[11px] font-heading">
                The Creative &rarr; Bank Account Pipeline
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex flex-col lg:flex-row items-center gap-0">
                {[
                  { label: "REACH", sub: "Viral Reels & Exposure" },
                  { label: "TRUST", sub: "Community Nurturing" },
                  { label: "INTENT", sub: "Data-Backed Engagement" },
                  { label: "LEAD", sub: "High-Intent Conversion" },
                ].map((stage, i) => (
                  <div key={stage.label} className="flex items-center">
                    <div className="bg-surface border border-neon/15 rounded-xl overflow-hidden card-glow w-full lg:w-48">
                      <div className="h-1.5" style={{ background: `rgba(124,58,237,${0.3 + i * 0.2})` }} />
                      <div className="p-6 text-center">
                        <h3 className="font-heading text-lg font-bold tracking-[0.15em] mb-2 text-off-white">
                          {stage.label}
                        </h3>
                        <p className="text-silver text-[10px] tracking-wider uppercase">{stage.sub}</p>
                      </div>
                    </div>
                    {i < 3 && (
                      <div className="flex items-center justify-center px-2 py-3 lg:py-0">
                        {/* Arrow - rotated on mobile */}
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-neon-bright/60 rotate-90 lg:rotate-0">
                          <path d="M8 16H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M18 10L24 16L18 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
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
                  <div className="relative w-24 h-24 md:w-28 md:h-28 shrink-0">
                    <div className="absolute inset-0 rounded-full bg-neon/10 animate-pulse" />
                    <div className="absolute inset-2 rounded-full border border-neon/30 flex items-center justify-center bg-surface/80">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-neon-bright">
                        <path d="M12 2a5 5 0 0 1 5 5c0 1.5-.5 2.5-1.5 3.5L12 14l-3.5-3.5C7.5 9.5 7 8.5 7 7a5 5 0 0 1 5-5z" />
                        <path d="M7 7c0-1 .5-2 1.5-2.5" />
                        <path d="M17 7c0-1-.5-2-1.5-2.5" />
                        <path d="M8.5 14.5C6 15.5 4 17 4 19c0 1.5 1 2.5 2 3" />
                        <path d="M15.5 14.5C18 15.5 20 17 20 19c0 1.5-1 2.5-2 3" />
                        <path d="M12 14v8" />
                        <path d="M9 18c-1 0-2 .5-2 1.5" />
                        <path d="M15 18c1 0 2 .5 2 1.5" />
                      </svg>
                    </div>
                    <div className="absolute -inset-2 rounded-full border border-neon/[0.08]" />
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
                <div className="flex-1 p-5 md:p-6 border-l-4 border-l-emerald-400 bg-emerald-400/[0.06] border border-emerald-400/20">
                  <p className="font-heading text-xs font-bold text-emerald-400 italic">0-2s: HOOK</p>
                  <p className="text-silver/70 text-[10px] mt-1">Pattern Interrupt</p>
                </div>
                <div className="flex-[2] p-5 md:p-6 border-l-4 border-l-pink-400 bg-pink-400/[0.06] border border-pink-400/20">
                  <p className="font-heading text-xs font-bold text-pink-400 italic">2-30s: TENSION & STORYTELLING</p>
                  <p className="text-silver/70 text-[10px] mt-1">(Dopamine Loop Initiation)</p>
                </div>
                <div className="flex-[2] p-5 md:p-6 border-l-4 border-l-cyan-400 bg-cyan-400/[0.06] border border-cyan-400/20">
                  <p className="font-heading text-xs font-bold text-cyan-400 italic">30-60s: REWARD / CTA</p>
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

                  {/* Quote inside graph */}
                  <text x="420" y="170" fill="#a78bfa" fontSize="11" fontFamily="Orbitron" textAnchor="middle" opacity="0.5">
                    &quot;Exponential growth in lead quality
                  </text>
                  <text x="420" y="185" fill="#a78bfa" fontSize="11" fontFamily="Orbitron" textAnchor="middle" opacity="0.5">
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
                <div className="bg-surface/50 border border-white/[0.06] rounded-xl p-8">
                  <span className="inline-block px-3 py-1 bg-steel/30 text-silver text-[10px] font-heading font-bold tracking-[0.2em] uppercase mb-6 rounded-sm">
                    Other Agencies
                  </span>
                  <ul className="space-y-3">
                    {[
                      '"Shoot & Edit" (Zero Strategy)',
                      "Vanity Metrics Focus (Likes)",
                      "Manual, Slow Growth",
                      "Guessing the Niche",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted/40 shrink-0">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        <span className="text-silver/70 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="bg-surface/50 border border-neon/20 rounded-xl p-8 relative overflow-hidden">
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
