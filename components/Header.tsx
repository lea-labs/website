"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-void/80 backdrop-blur-xl border-b border-white/[0.04]">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-text.png"
            alt="LEA LABS"
            width={140}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/our-lab", label: "Our Lab" },
            { href: "/about", label: "About" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-heading font-medium tracking-[0.15em] uppercase text-silver hover:text-neon-bright transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:hello@thelealabs.com"
            className="text-xs font-heading font-semibold tracking-[0.15em] uppercase px-6 py-3 border border-neon/30 rounded-full text-neon-bright hover:bg-neon/10 hover:border-neon/50 transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-px bg-off-white transition-transform ${open ? "rotate-45 translate-y-[3.5px]" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-off-white transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-off-white transition-transform ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-void/95 backdrop-blur-xl border-t border-white/[0.04]">
          <div className="px-6 py-6 flex flex-col gap-4">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/our-lab", label: "Our Lab" },
              { href: "/about", label: "About" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-heading tracking-wider text-silver hover:text-neon-bright transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:hello@thelealabs.com"
              className="text-sm font-heading tracking-wider text-neon-bright"
            >
              hello@thelealabs.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
