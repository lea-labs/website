"use client";

import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    label: "LOCATE",
    desc: "Strategic discovery & positioning",
    detail: "Brand discovery, market analysis, audience insights",
  },
  {
    label: "ENGINEER",
    desc: "Design the brand system",
    detail: "Brand architecture, visual identity, digital ecosystem",
  },
  {
    label: "AMPLIFY",
    desc: "Scale growth & influence",
    detail: "Content systems, marketing channels, community development",
  },
];

export default function FrameworkPreview() {
  return (
    <section className="relative py-24 md:py-32 px-6 starfield">
      <div className="orbital-lines" />
      <div className="glow-ambient top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="font-heading text-[10px] tracking-[0.4em] uppercase text-neon-bright mb-3">
            Our Strategic Framework
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            The LEA Framework
          </h2>
        </ScrollReveal>

        {/* Orbital diagram */}
        <ScrollReveal delay={200}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center">
                <div className="group flex flex-col items-center text-center">
                  <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border border-neon/20 flex items-center justify-center relative group-hover:border-neon/50 transition-all duration-500 cursor-default">
                    <div className="absolute inset-3 rounded-full bg-neon/[0.03] group-hover:bg-neon/[0.08] transition-colors" />
                    <span className="font-heading text-lg md:text-xl font-semibold tracking-[0.15em] relative z-10 text-off-white">
                      {step.label}
                    </span>
                  </div>
                  <div className="mt-5 max-w-[180px]">
                    <p className="text-sm text-silver">{step.desc}</p>
                    <p className="text-xs text-muted mt-2">{step.detail}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <>
                    <div className="hidden md:flex items-center mx-4">
                      <div className="w-12 h-px bg-gradient-to-r from-neon/40 to-neon-bright/40" />
                      <div className="w-1.5 h-1.5 rounded-full bg-neon" />
                      <div className="w-12 h-px bg-gradient-to-r from-neon-bright/40 to-neon/40" />
                    </div>
                    <div className="md:hidden w-px h-6 bg-gradient-to-b from-neon/40 to-neon-bright/40" />
                  </>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400} className="text-center mt-12">
          <p className="text-muted italic text-sm">
            &ldquo;Locate the opportunity. Engineer the system. Amplify the
            influence.&rdquo;
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
