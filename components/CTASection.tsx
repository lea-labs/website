"use client";

import ScrollReveal from "./ScrollReveal";
import { InstagramIcon, LinkedInIcon, SnapchatIcon } from "./SocialIcons";

const socials = [
  { href: "https://instagram.com/thelealabs", label: "Instagram", Icon: InstagramIcon },
  { href: "https://www.linkedin.com/company/the-lea-labs/about/", label: "LinkedIn", Icon: LinkedInIcon },
  { href: "https://snapchat.com/add/thelealabs", label: "Snapchat", Icon: SnapchatIcon },
];

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
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-5 text-glow">
            {heading}
          </h2>
          <p className="text-silver text-base md:text-lg mb-10">{subtext}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:hello@lealabs.com"
              className="px-10 py-4 bg-neon text-white font-heading font-semibold text-sm tracking-[0.15em] uppercase rounded-full hover:bg-neon-bright hover:shadow-lg hover:shadow-neon/20 transition-all"
            >
              hello@lealabs.com
            </a>
            <a
              href="tel:+971509424277"
              className="px-10 py-4 border border-white/10 text-silver font-heading font-semibold text-sm tracking-[0.15em] uppercase rounded-full hover:border-neon/30 hover:text-neon-bright transition-all"
            >
              +971 50 942 4277
            </a>
          </div>

          <div className="flex justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-neon-bright hover:border-neon/30 hover:bg-neon/5 transition-all"
              >
                <s.Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
