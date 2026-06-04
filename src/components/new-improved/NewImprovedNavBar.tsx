"use client";

import { useState } from "react";
import Link from "next/link";

const leftLinks = [
  { href: "/registry", label: "Registry" },
  { href: "/shop", label: "Shop" },
  { href: "/plan", label: "Plan" },
];
const rightLinks = [
  { href: "/read", label: "Read" },
  { href: "/gather", label: "Gather" },
  { href: "/about", label: "About" },
];
const allLinks = [...leftLinks, ...rightLinks];

const focusRing =
  "focus-visible:[outline:2px_solid_var(--color-new-gold)] focus-visible:outline-offset-4";

const link = `font-sans text-[12px] uppercase tracking-[0.14em] text-black font-normal underline-offset-[6px] decoration-[0.5px] decoration-new-gold hover:underline ${focusRing}`;

export default function NewImprovedNavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[0.5px] border-new-rule-md bg-[rgba(251,249,245,0.96)] backdrop-blur-md">
      <nav className="mx-auto grid h-18 max-w-[1320px] grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 md:px-12">
        {/* Left — links (desktop) / hamburger (mobile) */}
        <div className="flex items-center gap-8">
          <button
            type="button"
            onClick={() => setOpen((p) => !p)}
            aria-label="Menu"
            aria-expanded={open}
            className="-ml-2 inline-flex h-11 w-11 items-center justify-center text-new-ink md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </button>
          <div className="hidden items-center gap-8 md:flex">
            {leftLinks.map((l) => (
              <Link key={l.href} href={l.href} className={link}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Center — wordmark */}
        <Link
          href="/new-improved"
          className="font-serif text-[26px] font-semibold tracking-logo text-black"
        >
          mouurn
        </Link>

        {/* Right — links + CTA (desktop) */}
        <div className="hidden items-center justify-end gap-7 md:flex">
          {rightLinks.map((l) => (
            <Link key={l.href} href={l.href} className={link}>
              {l.label}
            </Link>
          ))}
          <Link
            href="/registry"
            className="bg-new-ink px-5 py-2.5 font-sans text-[11px] uppercase tracking-[0.18em] text-new-cream focus-visible:[outline:2px_solid_var(--color-new-gold)] focus-visible:outline-offset-2"
          >
            Start here
          </Link>
        </div>
        <div className="md:hidden" />
      </nav>

      {/* Mobile menu — shown/hidden instantly */}
      {open && (
        <div className="border-t-[0.5px] border-new-rule md:hidden">
          <div className="flex flex-col px-6 py-2">
            {allLinks.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-3.5 text-[13px] ${link} ${
                  i < allLinks.length - 1 ? "border-b-[0.5px] border-new-rule" : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/registry"
              onClick={() => setOpen(false)}
              className="mb-3 mt-4 inline-flex items-center justify-center bg-new-ink px-5 py-3.5 font-sans text-[12px] uppercase tracking-[0.18em] text-new-cream"
            >
              Start here
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
