"use client";

import { useState } from "react";
import Kicker from "./Kicker";

export default function ImprovedNewsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    setName("");
    setEmail("");
  };

  return (
    <section className="bg-oat border-b-[0.5px] border-rule section-y">
      <div className="shell-wide grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <Kicker className="mb-5">mouurn with me</Kicker>
          <h2 className="font-serif text-newsletter font-light leading-[1.05] text-ink">
            Words for the hardest <em className="italic">days.</em>
          </h2>
          <p className="mt-4 max-w-115 text-body md:text-prose font-light text-quiet">
            A letter on grief, ritual, and how to show up - whether you&apos;re
            in the thick of it, or standing beside someone who is.
          </p>
        </div>

        {/* The form, set as a quiet paper card — like a letter being handed over */}
        <div className="border-[0.5px] border-rule bg-paper p-8 shadow-soft md:p-10">
          {done ? (
            <p className="font-serif text-prose md:text-lead font-light leading-[1.6] text-ink">
              Thank you. Look for a gentle note in your inbox soon. ✺
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full flex-col">
              <label className="mb-1.5 text-micro uppercase tracking-eyebrow text-ink">
                Your name
              </label>
              <input
                type="text"
                className="field mb-6"
                placeholder="Jane Sizlo"
                aria-label="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label className="mb-1.5 text-micro uppercase tracking-eyebrow text-ink">
                Email
              </label>
              <input
                type="email"
                className="field mb-8"
                placeholder="your@email.com"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center self-start bg-amber-deep px-7 py-3 font-serif text-[16px] font-normal leading-none tracking-[0.01em] text-oat transition-opacity hover:opacity-90 focus-visible:[outline:2px_solid_var(--color-ink)] focus-visible:outline-offset-2"
              >
                Subscribe
              </button>
              <p className="mt-5 text-note text-quiet">
                No noise. One letter, once a month. Unsubscribe any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
