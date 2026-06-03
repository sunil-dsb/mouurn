import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-[88vh] min-h-150 items-end overflow-hidden bg-new-ink">
      <Image
        src="/bg.webp"
        alt="A wrapped bouquet resting on the handle of a black door"
        fill
        priority
        sizes="100vw"
        quality={75}
        className="object-cover object-center"
      />
      {/* Warm left-to-right wash for legibility — text sits in negative space */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-new-ink/70 via-new-ink/25 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-6 pb-[9vh] md:px-12">
        <div className="max-w-[90%] md:max-w-[68%]">
          <h1 className="mb-3 font-serif text-[clamp(40px,5.2vw,80px)] font-light leading-[1.06] text-new-cream [text-shadow:0_2px_30px_rgba(0,0,0,0.45)]">
            When someone you love
            <br />
            is grieving.
          </h1>
          <p className="mb-8 font-serif text-[clamp(16px,1.6vw,22px)] italic text-new-cream/90 [text-shadow:0_2px_18px_rgba(0,0,0,0.5)]">
            We help you show up.
          </p>
          <Link
            href="/registry"
            className="inline-flex items-center gap-2.5 bg-gold-cta px-8 py-3.5 font-sans text-[11px] uppercase tracking-[0.18em] text-new-ink transition-opacity duration-200 hover:opacity-90 focus-visible:[outline:2px_solid_var(--color-gold-cta)] focus-visible:outline-offset-4"
          >
            Create a registry →
          </Link>
        </div>
      </div>
    </section>
  );
}
