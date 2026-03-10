import Link from "next/link";
import Image from "next/image";

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
            <p className="text-muted text-sm leading-relaxed max-w-sm">
              Engineering brand perception. We don&apos;t just market brands — we
              architect systems that compound influence, trust, and revenue.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-[10px] font-semibold tracking-[0.3em] uppercase text-silver mb-5">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/our-lab", label: "Our Lab" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-neon-bright transition-colors"
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
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:hello@lealabs.com" className="text-sm text-muted hover:text-neon-bright transition-colors">
                  hello@lealabs.com
                </a>
              </li>
              <li>
                <a href="tel:+971509424277" className="text-sm text-muted hover:text-neon-bright transition-colors">
                  +971 50 942 4277
                </a>
              </li>
              <li>
                <a href="https://instagram.com/thelealabs" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-neon-bright transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/the-lea-labs/about/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-neon-bright transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://snapchat.com/add/thelealabs" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-neon-bright transition-colors">
                  Snapchat
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted/60">
            Dubai, UAE
          </p>
          <p className="text-[10px] tracking-wider text-muted/60">
            &copy; {new Date().getFullYear()} LEA Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
