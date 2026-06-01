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

export default function NavBar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const searchWrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
  };

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        searchWrapRef.current &&
        !searchWrapRef.current.contains(e.target as Node)
      ) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="nav sticky top-0 bg-white z-[100]">
      {/* Main nav row */}
      <div className="flex items-center py-4 px-6 sm:px-10 md:px-[60px] hairline-b-strong">
        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex items-center justify-center text-soft hover:text-ink transition-colors duration-150 mr-3"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <i className={`ti ${menuOpen ? "ti-x" : "ti-menu-2"} text-[18px]`} />
        </button>

        {/* Desktop nav links */}
        <div className="nav-links hidden md:flex gap-7 items-center justify-center flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className="text-nav tracking-nav text-muted uppercase font-light hover:text-ink transition-colors duration-150 whitespace-nowrap"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Spacer pushes icons right on mobile */}
        <div className="flex-1 md:hidden" />

        <div className="nav-icons flex gap-4 items-center flex-shrink-0 select-none">
          <div className="search-wrap relative" ref={searchWrapRef}>
            <i
              className="ti ti-search cursor-pointer text-[14px] text-soft hover:text-ink transition-colors duration-150"
              onClick={toggleSearch}
              aria-label="Search"
              role="button"
            />
            <div
              className={`search-drop absolute right-0 top-[calc(100%+16px)] w-[280px] sm:w-[300px] bg-white hairline-box-strong p-4 z-[200] shadow-[0_8px_32px_rgba(26,24,22,0.06)] transition-all duration-200 ${
                searchOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto block"
                  : "opacity-0 -translate-y-2 pointer-events-none hidden"
              }`}
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="your@email.com"
                aria-label="Search email"
                className="field py-[10px] rounded-none shadow-none"
              />
            </div>
          </div>
          <i
            className="ti ti-shopping-bag cursor-pointer text-[14px] text-soft hover:text-ink transition-colors duration-150"
            aria-label="Shopping Cart"
            role="button"
          />
        </div>
      </div>

      {/* Mobile menu — slides down */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 pb-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-nav tracking-nav text-muted uppercase font-light hover:text-ink transition-colors duration-150 py-3 ${
                i < navLinks.length - 1 ? "hairline-b" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
