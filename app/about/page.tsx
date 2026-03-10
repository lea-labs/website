import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  "Strategy Before Execution",
  "Systems Over Tactics",
  "Engineered Perception",
  "Compounding Influence",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-24 px-6 starfield overflow-hidden">
          <div className="orbital-lines" />
          <div className="glow-ambient top-20 left-1/2 -translate-x-1/2" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow">
              We Are LEA Labs
            </h1>
            <p className="text-silver text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A brand strategy, growth systems & digital influence consultancy
              based in Dubai.
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 md:py-28 px-6 relative overflow-hidden">
          <div className="orbital-lines" />
          <div className="max-w-4xl mx-auto relative z-10">
            <ScrollReveal>
              <p className="font-heading text-[11px] tracking-[0.4em] uppercase text-neon-bright mb-4">
                Our Philosophy
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8 text-glow">
                Why LEA Labs Exists
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="space-y-6">
                <p className="text-silver text-base md:text-lg leading-relaxed">
                  The consultancy market is full of agencies that execute without
                  strategy. They chase vanity metrics, run disconnected campaigns, and
                  deliver template-based branding that disappears into market noise.
                </p>
                <p className="text-silver text-base md:text-lg leading-relaxed">
                  LEA Labs was founded on a different principle:{" "}
                  <span className="text-neon-bright font-semibold">
                    brand growth is not about tactics — it&apos;s about systems.
                  </span>
                </p>
                <p className="text-silver text-base md:text-lg leading-relaxed">
                  We help founders, startups, and established companies design brand
                  perception, digital ecosystems, and scalable influence systems that
                  drive long-term growth. We don&apos;t just market brands — we engineer
                  them to grow systematically.
                </p>
                <p className="text-silver text-base md:text-lg leading-relaxed">
                  The{" "}
                  <span className="font-heading font-semibold text-off-white">LEA Framework</span> —
                  Locate, Engineer, Amplify — is the result of studying what actually
                  compounds brand equity and revenue over time.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Dubai */}
        <section className="py-20 md:py-28 px-6 bg-abyss relative overflow-hidden">
          <div className="orbital-lines" />
          <div className="max-w-4xl mx-auto relative z-10">
            <ScrollReveal>
              <h2 className="font-heading text-2xl md:text-4xl font-bold mb-6 text-off-white">
                Dubai-Based, Globally Minded
              </h2>
              <p className="text-silver text-base md:text-lg leading-relaxed">
                Operating from the UAE&apos;s dynamic business hub, we understand the
                unique dynamics of brand building in the region — where luxury meets
                innovation, and speed meets sophistication. Our frameworks serve both
                the local market and international clients looking to establish
                presence.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 px-6 relative overflow-hidden starfield">
          <div className="orbital-lines" />
          <div className="max-w-6xl mx-auto relative z-10">
            <ScrollReveal className="text-center mb-14">
              <p className="font-heading text-[11px] tracking-[0.4em] uppercase text-neon-bright mb-3">
                What We Stand For
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-glow">
                Our Values
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((value, i) => (
                <ScrollReveal key={value} delay={i * 100}>
                  <div className="border border-white/[0.06] rounded-xl p-10 text-center hover:border-neon/25 transition-all card-glow">
                    <p className="font-heading text-xl md:text-3xl font-bold tracking-wide text-off-white">
                      {value}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection heading="Ready to Work with Us?" />
      </main>
      <Footer />
    </>
  );
}
