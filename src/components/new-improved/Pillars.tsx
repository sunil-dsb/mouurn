type Pillar = { title: React.ReactNode; description: string; icon: React.ReactNode };

const pillars: Pillar[] = [
  {
    title: <em className="italic">Registry</em>,
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
    title: <em className="italic">Gather</em>,
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
    title: <em className="italic">Plan</em>,
    description:
      "A few gentle questions, and a clear plan for what to say, what to bring, and what to do next - so no one has to figure it out alone.",
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
        Read &amp; <em className="italic">Reflect</em>
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
    title: <em className="italic">Shop</em>,
    description:
      "Things that truly help - from the practical to the beautiful, at every price, for every kind of loss.",
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
    <section className="border-b-[0.5px] border-new-rule bg-new-cream section-y">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12">
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3.5">
            <span className="h-px w-7 shrink-0 bg-new-gold" />
            <span className="font-sans text-[11px] uppercase tracking-[0.24em] text-new-muted">
              What mouurn offers
            </span>
          </div>
          <h2 className="font-serif text-[clamp(28px,3vw,42px)] font-light leading-[1.18] text-new-ink">
            Everything built around{" "}
            <em className="italic">showing up.</em>
          </h2>
        </div>

        {/* gap-px over a rule background = clean hairlines at 1/2/3 columns */}
        <div className="grid grid-cols-1 gap-px bg-new-rule sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex h-full flex-col bg-new-white px-10 py-12"
            >
              <div className="mb-7 h-10 w-10 text-new-ink">{pillar.icon}</div>
              <h3 className="mb-3 font-serif text-[22px] font-light text-new-ink">
                {pillar.title}
              </h3>
              <p className="text-[14px] font-light leading-[1.9] text-new-muted">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
