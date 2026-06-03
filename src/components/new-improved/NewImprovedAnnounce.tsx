"use client";

import Link from "next/link";
import { useState } from "react";

export default function NewImprovedAnnounce() {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;

  return (
    <div className="relative bg-new-ink">
      <div className="mx-auto flex max-w-[1320px] items-center justify-center px-6 md:px-12 py-3">
        <p className="text-center font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-new-gold-lt">
          Introducing{" "}
          <Link
            href="/registry"
            className="group inline-flex items-center gap-1 font-medium text-new-gold-lt focus-visible:[outline:2px_solid_var(--color-new-gold-lt)] focus-visible:outline-offset-2"
          >
            <span className="underline decoration-new-gold-lt/70 underline-offset-4 transition-colors duration-150 group-hover:decoration-new-gold-lt">
              mouurn Registry
            </span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
          <span className="text-new-gold-lt/85">
            {" "}
            - a new way to give and receive support in grief.
          </span>
        </p>
      </div>

      <button
        type="button"
        onClick={() => setHidden(true)}
        aria-label="Dismiss announcement"
        className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center text-new-gold-lt/55 transition-colors duration-150 hover:text-new-gold-lt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-new-gold-lt"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M6 6l12 12M6 18L18 6" />
        </svg>
      </button>
    </div>
  );
}
