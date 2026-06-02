"use client";

import { useState } from "react";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${name || "friend"}!`);
    setName("");
    setEmail("");
  };

  return (
    <section className="bg-new-ink py-30">
      <div className="shell grid grid-cols-1 md:grid-cols-2 items-center gap-22.5">
        {/* Left — copy */}
        <div>
          {/* Eyebrow with gold-lt line prefix */}
          <div className="flex items-center gap-3.5 font-sans text-label tracking-[0.28em] uppercase mb-5 text-new-gold-lt font-normal">
            <span className="block w-7 h-px bg-new-gold-lt shrink-0 " />
            mouurn with me
          </div>

          <h2 className="font-serif font-light text-[clamp(26px,2.6vw,36px)] leading-[1.12] text-new-oat mb-4.5">
            Words for the
            <br />
            hardest{" "}
            <em className="italic text-new-gold-lt">days.</em>
          </h2>

          <p className="text-body text-new-oat/55 font-light">
            A letter on grief, ritual, and how to show up — for the ones in the
            thick of it, and the ones standing beside them.
          </p>
        </div>

        {/* Right — form */}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder="Your name"
            aria-label="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-transparent border-0 border-b-[0.5px] border-b-solid border-b-new-oat/18 outline-none font-sans font-light w-full text-[13px] font-normal text-new-oat py-3.75 mb-4.5 placeholder:text-new-oat/35"
          />
          <input
            type="email"
            placeholder="your@email.com"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-transparent border-0 border-b-[0.5px] border-b-solid border-b-new-oat/18 outline-none font-sans font-normal w-full text-[13px] text-new-oat py-3.75 mb-4.5 placeholder:text-new-oat/35"
          />

          <button
            type="submit"
            className="inline-flex items-center gap-3 self-start font-sans text-nav tracking-label uppercase text-new-ink bg-new-gold-lt font-normal border-none cursor-pointer px-8 py-4"
          >
            Subscribe{" "}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <p className="font-sans italic mt-4 text-new-oat/35 text-note font-normal">
            No noise. One letter, once a month. Unsubscribe any time.
          </p>
        </form>
      </div>
    </section>
  );
}
