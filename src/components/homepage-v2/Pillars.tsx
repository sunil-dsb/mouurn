import React from "react";

const pillars = [
  {
    title: (
      <>
        <em className="italic text-new-gold">Registry</em>
      </>
    ),
    description:
      "A simple way to let your people know exactly how to show up. Because care is easier to give when it has somewhere to go.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: (
      <>
        <em className="italic text-new-gold">Gather</em>
      </>
    ),
    description:
      "Bring together everyone who loved them. Share memories, post updates, and create a place to return to.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: (
      <>
        <em className="italic text-new-gold">Plan</em>
      </>
    ),
    description:
      "A few gentle questions, and a clear plan for what to say, what to bring, and what to do next \u2014 so no one has to figure it out alone.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    title: (
      <>
        Read &amp;{" "}
        <em className="italic text-new-gold">Reflect</em>
      </>
    ),
    description: "Essays on grief, ritual, and what comes after.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: (
      <>
        <em className="italic text-new-gold">Shop</em>
      </>
    ),
    description:
      "Things that truly help \u2014 from the practical to the beautiful, at every price, for every kind of loss.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

export default function Pillars() {
  return (
    <section className="hairline-b bg-new-cream py-[130px]">
      <div className="shell">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-[14px] mb-4">
            <span className="block w-[28px] h-px bg-new-gold flex-shrink-0" />
            <span className="font-sans text-label tracking-[0.28em] uppercase text-new-soft font-normal">
              What mouurn offers
            </span>
          </div>
          <h2 className="font-serif font-light text-[clamp(26px,2.8vw,38px)] leading-[1.2] text-new-ink mt-[18px]">
            Everything built around{" "}
            <em className="italic text-new-gold">showing up.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 hairline-t hairline-l">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="relative hairline-r hairline-b bg-new-white py-13 px-11"
            >
              <div className="w-10 h-10 mb-[26px] text-new-gold">
                {pillar.icon}
              </div>

              <h3 className="font-serif font-light text-item-name text-new-ink mb-3">
                {pillar.title}
              </h3>

              <p className="text-sub text-new-muted leading-[1.9] font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
