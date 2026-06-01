"use client";

import { useState } from "react";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing:", { name, email });
    alert(`Thank you for subscribing, ${name || "friend"}!`);
    setName("");
    setEmail("");
  };

  return (
    <section className="newsletter bg-oat hairline-b px-8 py-20 md:px-[60px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
      <div>
        <div className="eyebrow mb-4">mouurn with me</div>
        <h2 className="nl-h font-serif text-newsletter-sm md:text-newsletter font-light text-ink">
          Words for the<br />
          hardest <em className="italic">days.</em>
        </h2>
        <p className="nl-p text-body text-muted font-light mt-3.5">
          A letter on grief, ritual, and how to show up — for yourself, or
          someone you love. Written for the ones in the thick of it, and the
          ones standing beside them.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-0 select-none">
        <input
          type="text"
          className="field mb-5"
          placeholder="Your name"
          aria-label="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="field mb-5"
          placeholder="your@email.com"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary self-start">
          Subscribe →
        </button>
        <p className="nl-note text-note text-soft mt-3 font-sans font-medium">
          No noise. One letter, once a month. Unsubscribe any time.
        </p>
      </form>
    </section>
  );
}
