import Link from "next/link";

const p = "font-serif text-[18px] font-normal leading-[1.75] text-new-ink/85";

export default function Story() {
  return (
    <section className="border-b-[0.5px] border-new-rule bg-new-oat py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6 md:px-12">
        {/* Eyebrow — full width on top */}
        <div className="mb-8 flex items-center gap-3.5 font-sans text-[11px] font-normal uppercase tracking-eyebrow text-new-muted">
          <span className="h-px w-8 shrink-0 bg-new-gold" />
          Why mouurn exists
        </div>

        {/* Two equal columns, top-aligned: heading | narrative */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
          <h2 className="font-serif text-[clamp(34px,4.2vw,56px)] font-light leading-[1.07] text-new-ink">
            Grief lasts longer than our{" "}
            <em className="italic text-new-gold">rituals.</em>
          </h2>

          <div>
            <div className="space-y-4">
              <p className="font-serif text-[19px] font-normal leading-[1.6] text-new-ink">
                When someone dies, people show up. They send flowers. They bring
                food. They ask what they can do. They mean every word of it.
              </p>
              <p className={p}>And then life resumes.</p>
              <p className={p}>
                Not because people stop caring. Because most of us don&apos;t
                know what comes next.
              </p>
              <p className={p}>
                Long after the funeral is over and the flowers have faded,
                people are still carrying the weight of what happened.
              </p>
              <p className={p}>
                <em className="italic text-new-ink">
                  mouurn was built for that part.
                </em>{" "}
                A place for practical help, meaningful support, and care that
                lasts longer than a moment.
              </p>
            </div>

            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-2.5 border-b-[0.5px] border-new-gold pb-1 font-sans text-[11px] uppercase tracking-cta text-new-ink focus-visible:[outline:2px_solid_var(--color-new-gold)] focus-visible:outline-offset-4"
            >
              Read our story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
