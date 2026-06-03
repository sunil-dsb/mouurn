"use client";

import { useEffect, useState } from "react";
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

// Center-out gold underline that grows to both edges on hover.
const link = `relative font-sans text-[11px] uppercase tracking-[0.14em] text-new-ink/75 transition-colors duration-150 hover:text-new-ink after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:origin-center after:scale-x-0 after:bg-new-gold after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100 ${focusRing}`;

export default function NewImprovedNavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Nav gains a soft elevation once the hero scrolls past — a quiet premium cue.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b-[0.5px] backdrop-blur-md transition-shadow duration-300 ${
        scrolled
          ? "border-new-rule-md bg-[rgba(251,249,245,0.96)] shadow-[0_6px_24px_rgba(42,38,34,0.06)]"
          : "border-new-rule bg-[rgba(251,249,245,0.88)]"
      }`}
    >
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
          className="font-serif text-[26px] font-normal tracking-logo text-new-ink"
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
            className="bg-new-ink px-5 py-2.5 font-sans text-[11px] uppercase tracking-[0.18em] text-new-cream transition-opacity duration-150 hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-new-gold"
          >
            Start here
          </Link>
        </div>
        <div className="md:hidden" />
      </nav>

      {/* Mobile menu — grid-rows 0fr→1fr animates to true height */}
      <div
        className={`grid overflow-hidden border-t-[0.5px] border-new-rule transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        inert={!open}
      >
        <div className="overflow-hidden">
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
      </div>
    </header>
  );
}
