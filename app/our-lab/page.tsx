import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

export default function OurLabPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 starfield overflow-hidden">
          <div className="orbital-lines" />
          <div className="glow-ambient top-20 left-1/2 -translate-x-1/2" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="font-heading text-[10px] tracking-[0.4em] uppercase text-neon-bright mb-4">
              The Blueprint for Dominance
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Our Lab
            </h1>
            <p className="text-silver text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Inside the strategic engine that powers every LEA Labs engagement.
            </p>
          </div>
        </section>

        {/* The Strategic Gap */}
        <section className="py-20 md:py-28 px-6 bg-abyss relative overflow-hidden">
          <div className="orbital-lines" />
          <div className="max-w-6xl mx-auto relative z-10">
            <ScrollReveal className="mb-14">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-3">
                The Strategic Gap
              </h2>
              <p className="text-silver text-sm md:text-base">
                Why is &ldquo;business as usual&rdquo; failing in the modern market?
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal>
                <div className="bg-surface/50 border border-white/[0.04] rounded-lg p-8">
                  <span className="inline-block px-3 py-1 bg-steel/50 text-muted text-[9px] font-heading font-bold tracking-[0.2em] uppercase mb-6 rounded-sm">
                    Current Stand (Failures)
                  </span>
                  <ul className="space-y-4">
                    {[
                      "Guerilla Marketing (Short-Term Noise)",
                      "Unaligned Branding (Identity Crisis)",
                      "Face-First Focus Without Trust-Shield",
                      "Passive Posting (Zero Community)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted/40 mt-0.5 shrink-0">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        <span className="text-muted text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="bg-surface/50 border border-neon/20 rounded-lg p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon/[0.03] to-transparent pointer-events-none" />
                  <span className="inline-block px-3 py-1 bg-neon/20 text-neon-bright text-[9px] font-heading font-bold tracking-[0.2em] uppercase mb-6 rounded-sm relative z-10">
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
                        <span className="text-silver text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={300} className="mt-8">
              <blockquote className="border-l-2 border-neon/30 pl-6">
                <p className="text-silver/80 italic text-sm">
                  &ldquo;Guerilla marketing grabs attention. Community building keeps it.&rdquo;
                </p>
              </blockquote>
            </ScrollReveal>
          </div>
        </section>

        {/* The Conversion Catalyst */}
        <section className="py-20 md:py-28 px-6 relative overflow-hidden">
          <div className="glow-ambient -bottom-40 -left-40" />
          <div className="max-w-5xl mx-auto relative z-10">
            <ScrollReveal className="text-center mb-14">
              <h2 className="font-heading text-3xl md:text-5xl font-bold">
                The Conversion Catalyst
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="flex flex-col items-center gap-8">
                <div className="w-full max-w-2xl">
                  <span className="inline-block px-3 py-1 bg-neon/20 text-neon-bright text-[9px] font-heading font-bold tracking-[0.2em] uppercase mb-3 rounded-sm">
                    Marketing Goal
                  </span>
                  <div className="bg-surface border border-neon/10 rounded-lg p-8 text-center">
                    <h3 className="font-heading text-2xl md:text-4xl font-bold text-neon-bright mb-4">
                      Community Building
                    </h3>
                    <p className="text-muted text-sm max-w-lg mx-auto">
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
                  <span className="inline-block px-3 py-1 bg-neon-dim/30 text-neon-bright text-[9px] font-heading font-bold tracking-[0.2em] uppercase mb-3 rounded-sm">
                    Company Goal
                  </span>
                  <div className="bg-surface border border-neon-dim/20 rounded-lg p-8 text-center">
                    <h3 className="font-heading text-2xl md:text-4xl font-bold bg-gradient-to-r from-neon to-neon-bright bg-clip-text text-transparent mb-4">
                      Revenue
                    </h3>
                    <p className="text-muted text-sm max-w-lg mx-auto">
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
              <h2 className="font-heading text-3xl md:text-5xl font-bold italic">
                The Conversion Path
              </h2>
              <p className="text-muted mt-3 tracking-[0.2em] uppercase text-[10px] font-heading">
                The Creative → Bank Account Pipeline
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "REACH", sub: "Viral Reels & Exposure", shade: "neon-dim" },
                  { label: "TRUST", sub: "Community Nurturing", shade: "neon" },
                  { label: "INTENT", sub: "Data-Backed Engagement", shade: "neon-glow" },
                  { label: "LEAD", sub: "High-Intent Conversion", shade: "neon-bright" },
                ].map((stage, i) => (
                  <div key={stage.label} className="bg-surface border border-neon/10 rounded-lg overflow-hidden card-glow">
                    <div className={`h-1 bg-${stage.shade}`} style={{ background: `rgba(124,58,237,${0.3 + i * 0.2})` }} />
                    <div className="p-6 text-center">
                      <h3 className="font-heading text-xl font-bold tracking-[0.15em] mb-2">
                        {stage.label}
                      </h3>
                      <p className="text-muted text-xs tracking-wider uppercase">{stage.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} className="mt-10">
              <blockquote className="border-l-2 border-neon/30 pl-6 max-w-2xl">
                <p className="text-silver/80 italic text-sm">
                  &ldquo;By building a community, we ensure leads are{" "}
                  <span className="underline decoration-neon">pre-qualified</span> by our
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
              <h2 className="font-heading text-3xl md:text-5xl font-bold">
                Neural Capture Mapping
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <span className="inline-block px-3 py-1 bg-neon/20 text-neon-bright text-[9px] font-heading font-bold tracking-[0.2em] uppercase mb-6 rounded-sm">
                  Engineering Interest
                </span>
                <h3 className="font-heading text-2xl md:text-4xl font-bold italic leading-tight mb-6">
                  We Don&apos;t Just
                  <br />
                  <span className="text-neon-bright">&ldquo;Shoot Videos&rdquo;</span>
                </h3>
                <div className="border-l-2 border-muted/20 pl-6">
                  <p className="text-muted text-sm leading-relaxed">
                    We map human triggers into every frame. By engineering dopamine spikes
                    and pattern interruptions, we force the brain to stop scrolling and
                    start listening.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Mere Exposure", sub: "Brand Familiarity" },
                    { label: "Authority Bias", sub: "Legacy & Trust" },
                    { label: "Halo Effect", sub: "Developer Synergy" },
                    { label: "Loss Aversion", sub: "FOMO Loops" },
                  ].map((node) => (
                    <div
                      key={node.label}
                      className="border border-neon/15 rounded-lg p-5 text-center bg-surface/50 hover:border-neon/30 transition-colors"
                    >
                      <span className="font-heading text-xs font-bold tracking-[0.1em] block mb-1">
                        {node.label}
                      </span>
                      <span className="text-muted text-[10px]">{node.sub}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-surface border border-white/[0.04] rounded-lg p-6 text-center">
                  <p className="font-heading text-[10px] tracking-[0.2em] uppercase text-neon/50 mb-2">
                    Cognitive Engine
                  </p>
                  <p className="text-sm text-silver leading-relaxed">
                    Turn passive scrollers into a &ldquo;tribe&rdquo; of loyalists who view your
                    brand as the{" "}
                    <span className="text-neon-bright font-semibold underline decoration-neon/50">
                      only logical choice
                    </span>{" "}
                    in the market.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Video Engineering Lab */}
        <section className="py-20 md:py-28 px-6 bg-abyss relative overflow-hidden">
          <div className="orbital-lines" />
          <div className="max-w-6xl mx-auto relative z-10">
            <ScrollReveal className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold italic">
                Video Engineering Lab
              </h2>
              <p className="text-muted mt-3 tracking-[0.15em] uppercase text-[10px] font-heading">
                60-Second Content Architecture
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="flex rounded-lg overflow-hidden mb-10">
                <div className="flex-1 bg-neon/10 border border-neon/20 p-4 md:p-6">
                  <p className="font-heading text-xs font-bold text-neon-bright italic">0-2s: HOOK</p>
                </div>
                <div className="flex-[2] bg-neon/[0.06] border border-neon/15 p-4 md:p-6">
                  <p className="font-heading text-xs font-bold text-neon-bright/80 italic">2-30s: TENSION & STORYTELLING</p>
                  <p className="text-muted text-[10px] mt-1">(Dopamine Loop Initiation)</p>
                </div>
                <div className="flex-[2] bg-neon/[0.03] border border-neon/10 p-4 md:p-6">
                  <p className="font-heading text-xs font-bold text-neon-bright/60 italic">30-60s: REWARD / CTA</p>
                  <p className="text-muted text-[10px] mt-1">(Data-Driven Conversion)</p>
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
                  <div key={item.title} className="bg-surface border border-neon/10 rounded-lg p-6 text-center card-glow">
                    <h3 className="font-heading text-base font-bold mb-2">{item.title}</h3>
                    <p className="text-muted text-sm">{item.desc}</p>
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
              <h2 className="font-heading text-3xl md:text-5xl font-bold italic">
                The Impact Calculus
              </h2>
              <p className="text-muted mt-3 tracking-[0.15em] uppercase text-[10px] font-heading">
                Community Trust vs. Lead Quality (12-Month Projection)
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-surface border border-neon/10 rounded-lg p-6 mb-8 max-w-md">
                <p className="text-silver italic text-sm font-heading">
                  &ldquo;Exponential growth in lead quality as community trust solidifies.&rdquo;
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 md:p-10">
                <svg viewBox="0 0 800 300" className="w-full h-auto" fill="none">
                  <line x1="80" y1="20" x2="80" y2="260" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="80" y1="260" x2="760" y2="260" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

                  <path
                    d="M 80 250 Q 200 245, 280 235 Q 360 220, 430 190 Q 500 140, 560 100 Q 620 65, 680 40 L 760 25"
                    stroke="url(#gl)"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 80 250 Q 200 245, 280 235 Q 360 220, 430 190 Q 500 140, 560 100 Q 620 65, 680 40 L 760 25 L 760 260 L 80 260 Z"
                    fill="url(#gf)"
                    opacity="0.1"
                  />

                  {[
                    [80, 250], [280, 235], [430, 190], [560, 100], [760, 25],
                  ].map(([cx, cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r="3.5" fill={i < 2 ? "#7c3aed" : "#a78bfa"} />
                  ))}

                  {["Month 1", "Month 3", "Month 6", "Month 9", "Month 12"].map((label, i) => (
                    <text
                      key={label}
                      x={80 + i * 170}
                      y="285"
                      fill="#6b7280"
                      fontSize="11"
                      fontFamily="Space Grotesk"
                      textAnchor="middle"
                    >
                      {label}
                    </text>
                  ))}

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
              <h2 className="font-heading text-3xl md:text-5xl font-bold italic">
                The LEA Advantage
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal>
                <div className="bg-surface/50 border border-white/[0.04] rounded-lg p-8">
                  <span className="inline-block px-3 py-1 bg-steel/30 text-muted text-[9px] font-heading font-bold tracking-[0.2em] uppercase mb-6 rounded-sm">
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
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted/30 shrink-0">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        <span className="text-muted text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="bg-surface/50 border border-neon/20 rounded-lg p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon/[0.03] to-transparent pointer-events-none" />
                  <span className="inline-block px-3 py-1 bg-neon/20 text-neon-bright text-[9px] font-heading font-bold tracking-[0.2em] uppercase mb-6 rounded-sm relative z-10">
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
                          <p className="text-silver text-sm font-medium">{item.label}</p>
                          <p className="text-muted text-xs">{item.sub}</p>
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
