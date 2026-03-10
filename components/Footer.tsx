import Link from "next/link";
import Image from "next/image";
import { InstagramIcon, LinkedInIcon, SnapchatIcon } from "./SocialIcons";

const socials = [
  { href: "https://instagram.com/thelealabs", label: "Instagram", Icon: InstagramIcon },
  { href: "https://www.linkedin.com/company/the-lea-labs/about/", label: "LinkedIn", Icon: LinkedInIcon },
  { href: "https://snapchat.com/add/thelealabs", label: "Snapchat", Icon: SnapchatIcon },
];

export default function Footer() {
  return (
    <footer className="relative bg-abyss border-t border-white/[0.04]">
      <div className="orbital-lines" />
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Image
              src="/images/logo-text.png"
              alt="LEA LABS"
              width={140}
              height={40}
              className="h-8 w-auto mb-4"
            />
            <p className="text-silver text-sm leading-relaxed max-w-sm">
              Engineering brand perception. We don&apos;t just market brands, we
              architect systems that compound influence, trust, and revenue.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-muted hover:text-neon-bright hover:border-neon/30 hover:bg-neon/5 transition-all"
                >
                  <s.Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-[10px] font-semibold tracking-[0.3em] uppercase text-silver mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/our-lab", label: "Our Lab" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver/70 hover:text-neon-bright transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-[10px] font-semibold tracking-[0.3em] uppercase text-silver mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@lealabs.com" className="text-sm text-silver/70 hover:text-neon-bright transition-colors">
                  hello@lealabs.com
                </a>
              </li>
              <li>
                <a href="tel:+971509424277" className="text-sm text-silver/70 hover:text-neon-bright transition-colors">
                  +971 50 942 4277
                </a>
              </li>
              <li>
                <span className="text-[10px] font-heading tracking-[0.2em] uppercase text-muted/60 mt-2 block">
                  Dubai, UAE
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-wider text-muted/50 hover:text-neon-bright transition-colors"
              >
                @thelealabs
              </a>
            ))}
          </div>
          <p className="text-[10px] tracking-wider text-muted/60">
            &copy; {new Date().getFullYear()} LEA Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
