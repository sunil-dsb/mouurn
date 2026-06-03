import Botanical from "./Botanical";

export default function Mission() {
  return (
    <section className="relative overflow-hidden border-b-[0.5px] border-new-rule bg-new-oat py-24 md:py-32">
      {/* Botanical sprigs flanking the quote in the wide empty margins */}
      <Botanical className="pointer-events-none absolute left-0 top-1/2 hidden w-[150px] -translate-y-1/2 -rotate-[14deg] text-new-ink opacity-[0.06] lg:block" />
      <Botanical className="pointer-events-none absolute right-0 top-1/2 hidden w-[150px] -translate-y-1/2 rotate-[14deg] text-new-ink opacity-[0.06] lg:block" />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 text-center md:px-12 lg:flex lg:items-center lg:justify-between">
        <div className="mx-auto max-w-[52ch]">
          <div className="mb-7 inline-flex items-center gap-3.5 font-sans text-[11px] uppercase tracking-eyebrow text-new-muted">
            <span className="h-px w-7 shrink-0 bg-new-gold" />
            Our mission
            <span className="h-px w-7 shrink-0 bg-new-gold" />
          </div>

          <h2 className="mx-auto max-w-[15ch] font-serif text-[clamp(28px,3.2vw,44px)] font-light leading-[1.12] text-new-ink">
            People want to help.{" "}
            <em className="italic">They just don&apos;t know how.</em>
          </h2>
        </div>

        <p className="mx-auto mt-7 max-w-[52ch] font-serif text-[19px] font-light leading-[1.65] text-story-body">
          mouurn is how. Everything we make - registries, gifts, plans, the
          right words - is here to help you show up for someone in grief.
        </p>
      </div>
    </section>
  );
}
