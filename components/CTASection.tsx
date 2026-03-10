"use client";

import ScrollReveal from "./ScrollReveal";

export default function CTASection({
  heading = "Ready to Engineer Your Growth?",
  subtext = "Based in Dubai. Working with founders, startups, and established brands worldwide.",
}: {
  heading?: string;
  subtext?: string;
}) {
  return (
    <section className="relative py-24 md:py-32 px-6 starfield overflow-hidden">
      <div className="glow-ambient top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="orbital-lines" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            {heading}
          </h2>
          <p className="text-muted text-base md:text-lg mb-10">{subtext}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:hello@lealabs.com"
              className="px-8 py-3.5 bg-neon text-white font-heading font-medium text-xs tracking-[0.15em] uppercase rounded-full hover:bg-neon-bright transition-colors"
            >
              hello@lealabs.com
            </a>
            <a
              href="tel:+971509424277"
              className="px-8 py-3.5 border border-white/10 text-silver font-heading font-medium text-xs tracking-[0.15em] uppercase rounded-full hover:border-neon/30 hover:text-neon-bright transition-colors"
            >
              +971 50 942 4277
            </a>
          </div>

          <div className="flex justify-center gap-5">
            {[
              { href: "https://instagram.com/thelealabs", label: "IG" },
              { href: "https://www.linkedin.com/company/the-lea-labs/about/", label: "LI" },
              { href: "https://snapchat.com/add/thelealabs", label: "SC" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-neon-bright hover:border-neon/30 transition-all font-mono text-[10px]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
