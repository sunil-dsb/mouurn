"use client";

import React, { useState } from "react";
import Link from "next/link";

const navigateLinks = [
  { label: "For Them", href: "#" },
  { label: "Registry", href: "/registry" },
  { label: "Shop", href: "/shop" },
  { label: "Plan", href: "/plan" },
  { label: "Read", href: "/read" },
  { label: "About mouurn", href: "/about" },
];

const thisPlaceLinks = [
  { label: "About mouurn", href: "/about" },
  { label: "Our team", href: "/about" },
  { label: "For grief practitioners", href: "#" },
  { label: "For companies & HR teams", href: "#" },
  { label: "Press", href: "/press" },
  { label: "Get in touch", href: "mailto:hello@mouurn.com" },
];

const bottomLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Shipping", href: "#" },
  { label: "Help", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing footer:", email);
    alert(`Thank you for subscribing: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-ink pt-[60px] pb-10 px-6 sm:px-10 md:px-[60px] select-none text-left">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Column 1: Info and Subscription */}
        <div>
          <div className="f-logo font-serif text-logo-sm tracking-label text-oat mb-3 font-light select-none">
            mouurn
          </div>
          <div
            className="text-small text-footer-link mb-5 font-light font-serif italic"
          >
            Restoring the rituals of comfort and community around loss.
          </div>
          <div className="f-col-t text-label tracking-label text-footer-label uppercase mb-3.5 font-sans font-light">
            mouurn with me
          </div>
          <div
            className="text-small text-footer-link mb-3 font-light font-sans"
          >
            On love, loss, and what comes after.
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col select-none">
            <input
              type="email"
              className="field-dark mb-2"
              placeholder="your@email.com"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="f-sub text-label tracking-sm text-footer-label bg-none border-none cursor-pointer uppercase mb-2.5 block hover:text-oat transition-colors duration-150 self-start p-0">
              Subscribe →
            </button>
          </form>
          <p className="f-legal text-label text-footer-link mt-2 font-sans font-light">
            By subscribing you agree to receive emails from mouurn and accept our{" "}
            <Link href="#" className="text-footer-link underline underline-offset-2 hover:text-footer-label transition-colors">Terms of Use</Link>,{" "}
            <Link href="#" className="text-footer-link underline underline-offset-2 hover:text-footer-label transition-colors">Privacy Policy</Link> and{" "}
            <Link href="#" className="text-footer-link underline underline-offset-2 hover:text-footer-label transition-colors">Cookie Policy</Link>. Terms apply.
          </p>
        </div>

        {/* Column 2: Navigate */}
        <div>
          <div className="text-label tracking-label text-footer-label uppercase mb-3.5 font-sans font-light">
            Navigate
          </div>
          {navigateLinks.map((link) => (
            <Link
              key={link.label}
              className="text-small text-footer-link block mb-2 font-sans font-light no-underline hover:text-oat transition-colors duration-150"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Column 3: This Place & Follow */}
        <div>
          <div className="text-label tracking-label text-footer-label uppercase mb-3.5 font-sans font-light">
            This Place
          </div>
          {thisPlaceLinks.map((link) => (
            <Link
              key={link.label}
              className="text-small text-footer-link block mb-2 font-sans font-light no-underline hover:text-oat transition-colors duration-150"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-5">
            <div className="text-label tracking-label text-footer-label uppercase mb-3.5 font-sans font-light">
              Follow
            </div>
            <Link
              className="text-small text-footer-link block mb-2 font-sans font-light no-underline hover:text-oat transition-colors duration-150"
              href="https://instagram.com/mouurnwithme"
            >
              @mouurnwithme
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="hairline-t-footer pt-6 mt-3 flex justify-between items-center flex-wrap gap-3">
        <span className="text-label text-footer-link tracking-fine font-sans font-light">
          © 2026 mouurn · Full Stop Productions LLC
        </span>
        <div className="flex gap-5">
          {bottomLinks.map((link) => (
            <Link
              key={link.label}
              className="text-label text-footer-link no-underline tracking-fine hover:text-footer-label transition-colors duration-150"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
