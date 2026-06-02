"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const navLinks = [
  { label: "For Them", href: "#" },
  { label: "Registry", href: "/registry" },
  { label: "Shop", href: "/shop" },
  { label: "Plan", href: "/plan" },
  { label: "Read", href: "/read" },
  { label: "About", href: "/about" },
];

// Improved nav link - bigger, darker (ink, not faint gray), Jost 400,
// warm marigold on hover.
const linkBase =
  "text-[12px] font-normal uppercase tracking-[0.1em] text-ink hover:text-amber-deep transition-colors duration-150 whitespace-nowrap";

// Desktop adds a center-out marigold underline that grows to both edges on
// hover and retracts to the centre on mouse-out.
const linkDesktop = `${linkBase} relative after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:origin-center after:scale-x-0 after:bg-amber after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100`;

const iconProps = {
  width: 15,
  height: 15,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function SearchIcon() {
  return (
    <svg {...iconProps}>
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M21 21l-6 -6" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg {...iconProps}>
      <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.966 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
      <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg {...iconProps} width={18} height={18} strokeWidth={1.5}>
      <path d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"} />
    </svg>
  );
}

export default function ImprovedNavBar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const searchWrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen && inputRef.current) inputRef.current.focus();
  }, [searchOpen]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (searchWrapRef.current && !searchWrapRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-100 bg-white">
      {/* 3-part row: left + right share equal flex so the centre links sit at
          the true horizontal centre of the page. */}
      <div className="flex items-center py-2.5 px-6 sm:px-10 md:px-15 hairline-b-strong">
        {/* Left - hamburger on mobile, empty spacer on desktop */}
        <div className="flex flex-1 items-center">
          <button
            type="button"
            className="icon-button -ml-2 md:hidden"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        {/* Centre - links */}
        <div className="hidden items-center justify-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={linkDesktop}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right - icons */}
        <div className="flex flex-1 items-center justify-end">
          <div className="relative" ref={searchWrapRef}>
            <button
              type="button"
              className="icon-button transition-colors duration-150 md:hover:bg-sand"
              onClick={() => setSearchOpen((p) => !p)}
              aria-label="Search"
              aria-expanded={searchOpen}
            >
              <SearchIcon />
            </button>
            <div
              className={`absolute right-0 top-[calc(100%+12px)] w-70 sm:w-75 bg-white hairline-box-strong p-4 z-200 shadow-[0_8px_32px_rgba(26,24,22,0.06)] transition-all duration-200 ${
                searchOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <input
                ref={inputRef}
                type="search"
                placeholder="Search mouurn"
                aria-label="Search mouurn"
                className="field py-2.5 rounded-none shadow-none"
              />
            </div>
          </div>
          <button
            type="button"
            className="icon-button transition-colors duration-150 md:hover:bg-sand"
            aria-label="Bag"
          >
            <BagIcon />
          </button>

          {/* Primary CTA - the brand's core action */}
          <Link
            href="/registry"
            className="ml-3 hidden items-center bg-amber-deep px-5 py-2 font-serif text-[16px] font-normal leading-none tracking-[0.01em] text-oat transition-opacity hover:opacity-90 focus-visible:[outline:2px_solid_var(--color-ink)] focus-visible:outline-offset-2 md:inline-flex"
          >
            Start a registry
          </Link>
        </div>
      </div>

      {/* Mobile menu — grid-rows 0fr→1fr animates to the true content height
          (no fixed max-height guess), so open + close feel equally smooth.
          `inert` keeps the hidden links out of the tab order when closed. */}
      <div
        className={`md:hidden grid transition-[grid-template-rows,opacity] duration-300 ease-gentle ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        inert={!menuOpen}
      >
        <div className="overflow-hidden">
        <div className="flex flex-col px-6 pb-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`${linkBase} py-3.5 text-[13px] ${
                i < navLinks.length - 1 ? "hairline-b" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/registry"
            onClick={() => setMenuOpen(false)}
            className="mb-2 mt-4 inline-flex items-center justify-center bg-amber-deep px-5 py-3.5 font-serif text-[17px] font-normal leading-none text-oat"
          >
            Start a registry
          </Link>
        </div>
        </div>
      </div>
    </nav>
  );
}
