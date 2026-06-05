"use client";

import { useState } from "react";

/**
 * Newsletter signup — a left-aligned invitation block that lives in the left
 * column of the merged footer. No standalone section, no own background.
 */
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    setEmail("");
  };

  return (
    <div className="max-w-[460px]">
      <div className="mb-5 flex items-center gap-3.5 font-sans text-[11px] uppercase tracking-eyebrow text-new-gold-lt">
        <span className="h-px w-7 shrink-0 bg-new-gold-lt/55" />
        mouurn with me
      </div>
      <h2 className="mb-4 font-serif text-[clamp(28px,2.8vw,40px)] font-normal leading-[1.1] text-new-oat">
        Words for the hardest{" "}
        <em className="italic text-new-gold-lt">days.</em>
      </h2>
      <p className="mb-8 text-[14px] font-light leading-[1.7] text-new-oat/65">
        A letter on grief, ritual, and how to show up - for the ones in the
        thick of it, and the ones standing beside them.
      </p>

      {done ? (
        <p className="font-serif text-[18px] font-light italic text-new-oat/80">
          Thank you. Look for a gentle note in your inbox soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex max-w-[420px] items-stretch gap-3">
          <label htmlFor="nl-email" className="sr-only">
            Email address
          </label>
          <input
            id="nl-email"
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 border-0 border-b-[0.5px] border-new-oat/30 bg-transparent py-3 font-sans text-[14px] font-light text-new-oat outline-none placeholder:text-new-oat/40 focus:border-new-gold-lt"
          />
          <button
            type="submit"
            className="whitespace-nowrap bg-new-oat px-6 py-3 font-sans text-[10px] uppercase tracking-cta text-new-ink transition-opacity duration-200 hover:opacity-85 focus-visible:[outline:2px_solid_var(--color-new-gold-lt)] focus-visible:outline-offset-2"
          >
            Subscribe
          </button>
        </form>
      )}

      <p className="mt-5 font-sans text-[11px] italic text-new-oat/45">
        No noise. One letter, once a month. Unsubscribe any time.
      </p>
    </div>
  );
}
