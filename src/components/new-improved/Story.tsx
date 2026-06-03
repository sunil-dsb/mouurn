import Link from "next/link";
import Botanical from "./Botanical";

const p = "font-serif text-[18px] font-light leading-[1.7] text-story-body";
const sprig = "text-new-ink opacity-[0.10]";

export default function Story() {
  return (
    <section className="relative overflow-hidden border-b-[0.5px] border-new-rule bg-new-oat py-20 md:py-26">
      {/* Faint leaf sprigs in the empty side margins (desktop only) */}
      <Botanical className={`absolute -bottom-4 right-6 hidden w-[150px] rotate-[8deg] lg:block ${sprig}`} />
      <Botanical className={`absolute -bottom-4 left-6 hidden w-[135px] -rotate-[8deg] lg:block ${sprig}`} />
      <Botanical className={`absolute -bottom-10 left-[40%] hidden w-[115px] rotate-[10deg] lg:block ${sprig}`} />
      <Botanical className={`absolute -bottom-10 left-[51%] hidden w-[105px] -rotate-[7deg] lg:block ${sprig}`} />

      <div className="relative z-10 mx-auto max-w-[640px] px-6 md:px-12">
        {/* Kicker — small gold rule, muted label */}
        <div className="mb-6 flex items-center! justify-center gap-3.5 font-sans text-[11px] font-normal uppercase tracking-eyebrow text-new-muted">
          <span className="h-px w-8 shrink-0 bg-new-gold" />
          Why mouurn exists
          <span className="h-px w-8 shrink-0 bg-new-gold" />
        </div>

        {/* Second-largest on the page (after the hero) */}
        <h2 className="mb-7 font-serif text-[clamp(34px,4vw,54px)] font-light leading-[1.12] text-new-ink">
          Grief lasts longer than our{" "}
          <em className="italic text-new-gold">rituals.</em>
        </h2>

        <div className="space-y-4">
          {/* Lead — a touch larger, still left-aligned prose */}
          <p className="font-serif text-[20px] font-light leading-[1.6] text-new-ink">
            <span className="text-new-gold">
              When someone dies, people show up.
            </span>{" "}
            They send flowers. They bring food. They ask what they can do. They
            mean every word of it.
          </p>
          <p className={p}>And then life resumes.</p>
          <p className={p}>
            Not because people stop caring. Because most of us don&apos;t know
            what comes next.
          </p>
          <p className={p}>
            Long after the funeral is over and the flowers have faded, people
            are still carrying the weight of what happened.
          </p>
          <p className={p}>
            <span>
              <em className="italic">mouurn was built for that part.</em>
            </span>{" "}
            A place for practical help, meaningful support, and care that lasts
            longer than a moment.
          </p>
        </div>

        <Link
          href="/about"
          className="mt-9 inline-flex items-center gap-2.5 border-b-[0.5px] border-new-gold pb-1 font-sans text-[11px] uppercase tracking-cta text-new-ink transition-opacity hover:opacity-70 focus-visible:[outline:2px_solid_var(--color-new-gold)] focus-visible:outline-offset-4"
        >
          Read our story →
        </Link>
      </div>
    </section>
  );
}
