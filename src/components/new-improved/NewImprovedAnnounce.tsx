"use client";

import Link from "next/link";
import { useState } from "react";

export default function NewImprovedAnnounce() {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;

  return (
    <div className="relative bg-new-ink">
      <div className="mx-auto flex max-w-[1320px] items-center justify-center px-6 md:px-12 py-3">
        <p className="text-center font-sans text-[12px] font-light uppercase tracking-[0.15em] text-new-gold-lt">
          Introducing{" "}
          <Link
            href="/registry"
            className="group inline-flex items-baseline gap-1.5 align-baseline text-new-gold-lt focus-visible:[outline:2px_solid_var(--color-new-gold-lt)] focus-visible:outline-offset-2"
          >
            <span className="font-serif text-[16px] font-normal italic normal-case tracking-normal underline decoration-new-gold-lt/60 underline-offset-[3px]">
              mouurn Registry
            </span>
            <span className="text-[10px]">→</span>
          </Link>
          <span>
            {" "}
            a new way to give and receive support in grief.
          </span>
        </p>
      </div>

      <button
        type="button"
        onClick={() => setHidden(true)}
        aria-label="Dismiss announcement"
        className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center text-new-gold-lt/65 focus-visible:[outline:2px_solid_var(--color-new-gold-lt)] focus-visible:outline-offset-2"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M6 6l12 12M6 18L18 6" />
        </svg>
      </button>
    </div>
  );
}
