"use client";

import { useState } from "react";

const field =
  "w-full border-0 border-b-[0.5px] border-new-oat/20 bg-transparent py-3.5 font-sans text-[14px] font-light text-new-oat outline-none transition-colors placeholder:text-new-oat/35 focus:border-new-gold-lt";

export default function Newsletter() {
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
    <section id="newsletter" className="bg-new-ink section-y">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-12">
        <div>
          <div className="mb-5 flex items-center gap-3.5 font-sans text-[11px] uppercase tracking-[0.24em] text-new-gold-lt">
            <span className="h-px w-7 shrink-0 bg-new-gold-lt" />
            mouurn with me
          </div>
          <h2 className="mb-5 font-serif text-[clamp(28px,2.8vw,40px)] font-light leading-[1.12] text-new-oat">
            Words for the
            <br />
            hardest <em className="italic text-new-gold-lt">days.</em>
          </h2>
          <p className="max-w-[46ch] text-[15px] font-light leading-[1.7] text-new-oat/65">
            A letter on grief, ritual, and how to show up - whether you&apos;re
            in the thick of it, or standing beside someone who is.
          </p>
        </div>

        {done ? (
          <p className="font-serif text-[20px] font-light italic leading-relaxed text-new-oat/80">
            Thank you. Look for a gentle note in your inbox soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="ni-name" className="sr-only">
              Your name
            </label>
            <input
              id="ni-name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={`${field} mb-5`}
            />
            <label htmlFor="ni-email" className="sr-only">
              Email address
            </label>
            <input
              id="ni-email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`${field} mb-7`}
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2.5 self-start bg-new-gold-lt px-8 py-4 font-sans text-[11px] uppercase tracking-[0.18em] text-new-ink transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-new-gold-lt"
            >
              Send me the letter →
            </button>
            <p className="mt-4 font-sans text-[12px] italic text-new-oat/40">
              No noise. One letter, once a month. Unsubscribe any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
