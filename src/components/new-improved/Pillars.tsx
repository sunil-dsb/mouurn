import Link from "next/link";

type Pillar = { title: React.ReactNode; description: string; icon: React.ReactNode; href: string; cta: string };

const pillars: Pillar[] = [
  {
    title: <em className="italic">Registry</em>,
    description:
      "A simple way to let your people know exactly how to show up. Because care is easier to give when it has somewhere to go.",
    cta: "Start a registry",
    href: "/registry",
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
    cta: "Start gathering",
    href: "/gather",
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
    cta: "Make a plan",
    href: "/plan",
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
    cta: "Read the essays",
    href: "/read",
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
    cta: "Browse gifts",
    href: "/shop",
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
    <section className="border-b-[0.5px] border-new-rule bg-new-cream py-14 md:py-20">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12">

        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3.5">
            <span className="h-px w-7 shrink-0 bg-new-gold" />
            <span className="font-sans text-[11px] uppercase tracking-[0.24em] text-new-muted">
              What mouurn offers
            </span>
            <span className="h-px w-7 shrink-0 bg-new-gold" />
          </div>
          <h2 className="font-serif text-[clamp(28px,3vw,42px)] font-light leading-[1.18] text-new-ink">
            Everything built around{" "}
            <em className="italic">showing up.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-new-rule sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative flex h-full flex-col overflow-hidden bg-new-white px-8 py-11 transition-colors duration-200 hover:bg-new-cream hover:cursor-pointer"
            >
              <div className="relative z-10 flex h-full flex-col">
                {/* Icon */}
                <div className="mb-5 h-9 w-9 text-new-ink">{pillar.icon}</div>

                {/* Title */}
                <h3 className="mb-3 font-serif text-[clamp(18px,1.5vw,22px)] font-light leading-[1.2] text-new-ink">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="mb-8 flex-1 text-[13px] font-light leading-[1.85] text-new-muted">
                  {pillar.description}
                </p>

                {/* CTA */}
                <Link
                  href={pillar.href}
                  className="mt-auto inline-flex items-center gap-2.5 self-start border-b-[0.5px] border-new-gold pb-1 font-sans text-[11px] uppercase tracking-cta text-new-ink focus-visible:[outline:2px_solid_var(--color-new-gold)] focus-visible:outline-offset-4"
                >
                  {pillar.cta}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}