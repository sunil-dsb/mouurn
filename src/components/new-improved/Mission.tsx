import Botanical from "./Botanical";

export default function Mission() {
  return (
    <section className="relative overflow-hidden border-b-[0.5px] border-new-rule bg-new-oat py-16 md:py-20">
      <Botanical className="pointer-events-none absolute -right-10 top-1/2 hidden w-[150px] -translate-y-1/2 rotate-[14deg] text-new-ink opacity-[0.05] lg:block" />

      <div className="relative z-10 mx-auto grid max-w-[1180px] grid-cols-1 gap-y-7 px-6 md:grid-cols-12 md:items-center md:gap-x-16 md:px-12">
        {/* Left — kicker + bridge headline */}
        <div className="md:col-span-7">
          <div className="mb-6 flex items-center gap-3.5 font-sans text-[11px] uppercase tracking-eyebrow text-new-muted">
            <span className="h-px w-7 shrink-0 bg-new-gold" />
            Our mission
          </div>
          <h2 className="font-serif text-[clamp(30px,3.6vw,46px)] font-light leading-[1.12] text-new-ink">
            People want to help.{" "}
            <em className="italic">They just don&apos;t know how.</em>
          </h2>
        </div>

        {/* Right — supporting line */}
        <p className="font-serif text-[19px] font-normal leading-[1.65] text-new-ink/85 md:col-span-5">
          <em className="italic text-new-ink">mouurn is how.</em> Everything we
          make - registries, gifts, plans, the right words - is here to help you
          show up for someone in grief.
        </p>
      </div>
    </section>
  );
}
