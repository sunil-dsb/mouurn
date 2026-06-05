import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-[88vh] min-h-150 items-end overflow-hidden bg-new-ink">
      <Image
        src="/bg-6.png"
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
        className="absolute inset-0 bg-linear-to-r from-new-ink/55 via-new-ink/12 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-6 pb-[15vh] md:px-12 md:pb-[16vh]">
        <div className="max-w-[90%] md:max-w-[68%]">
          <p className="mb-5 font-sans text-[11px] font-normal uppercase tracking-eyebrow text-new-cream/80 [text-shadow:0_2px_18px_rgba(0,0,0,0.45)]">
            For every kind of loss
          </p>
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
            className="group inline-flex items-center gap-3 bg-new-cream px-8 py-4 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-new-ink focus-visible:[outline:2px_solid_var(--color-new-cream)] focus-visible:outline-offset-4"
          >
            Create a registry
            <svg
              width="22"
              height="10"
              viewBox="0 0 22 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="text-new-gold"
            >
              <path d="M0 5h20M16 1l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
