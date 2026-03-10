"use client";

import { useState } from "react";
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
  showEnquiry = false,
}: {
  heading?: string;
  subtext?: string;
  showEnquiry?: boolean;
}) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Open mailto with pre-filled body
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:hello@thelealabs.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section className="relative py-24 md:py-32 px-6 starfield overflow-hidden">
      <div className="glow-ambient top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="orbital-lines" />

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-5 text-glow">
            {heading}
          </h2>
          <p className="text-silver text-base md:text-lg mb-10">{subtext}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:hello@thelealabs.com"
              className="px-10 py-4 bg-neon text-white font-heading font-semibold text-sm tracking-[0.15em] uppercase rounded-full hover:bg-neon-bright hover:shadow-lg hover:shadow-neon/20 transition-all"
            >
              hello@thelealabs.com
            </a>
          </div>

          <div className="flex justify-center gap-4 mb-14">
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

        {/* Enquiry Form */}
        {showEnquiry && (
          <ScrollReveal delay={200}>
            <div className="max-w-xl mx-auto border border-neon/15 rounded-2xl bg-surface/50 backdrop-blur-sm p-8 md:p-10">
              <h3 className="font-heading text-lg font-bold text-center mb-6 tracking-wider uppercase text-off-white">
                Send an Enquiry
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[11px] font-heading tracking-[0.2em] uppercase text-silver/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-void/60 border border-white/[0.08] rounded-lg px-4 py-3 text-off-white text-sm focus:outline-none focus:border-neon/40 focus:ring-1 focus:ring-neon/20 transition-all placeholder:text-muted/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-heading tracking-[0.2em] uppercase text-silver/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-void/60 border border-white/[0.08] rounded-lg px-4 py-3 text-off-white text-sm focus:outline-none focus:border-neon/40 focus:ring-1 focus:ring-neon/20 transition-all placeholder:text-muted/50"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-heading tracking-[0.2em] uppercase text-silver/70 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-void/60 border border-white/[0.08] rounded-lg px-4 py-3 text-off-white text-sm focus:outline-none focus:border-neon/40 focus:ring-1 focus:ring-neon/20 transition-all resize-none placeholder:text-muted/50"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 bg-neon text-white font-heading font-semibold text-sm tracking-[0.15em] uppercase rounded-lg hover:bg-neon-bright hover:shadow-lg hover:shadow-neon/20 transition-all disabled:opacity-50"
                >
                  {sent ? "Email Client Opened!" : sending ? "Opening..." : "Send Enquiry"}
                </button>
              </form>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
