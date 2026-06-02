import Link from "next/link";

const pClass =
  "font-serif font-light text-story-prose text-story-body leading-[1.85] text-left mb-6.5";

export default function Story() {
  return (
    <section className="bg-new-oat py-35 hairline-b">
      <div className="max-w-[760px] mx-auto px-[48px] text-center">

        {/* Eyebrow — gold with lines on both sides */}
        <div className="flex items-center justify-center gap-4 mb-7.5 font-sans text-[9px] tracking-[0.28em] uppercase font-normal text-new-gold">
          <span className="block w-8 h-[0.15] flex-shrink-0 bg-new-gold" />
          Why mouurn exists
          <span className="block w-8 h-[0.15] flex-shrink-0 bg-new-gold" />
        </div>

        <h2 className="font-serif font-light text-[clamp(34px,4vw,56px)] leading-[1.2] text-new-ink mb-9">
          Grief lasts longer
          <br />
          than our{" "}
          <em className="italic text-new-gold">rituals.</em>
        </h2>

        <p className={pClass}>
          When someone dies, people show up. They send flowers. They bring food.
          They ask what they can do. They mean every word of it.
        </p>
        <p className={pClass}>
          And then life resumes.
        </p>
        <p className={pClass}>
          Not because people stop caring. Because most of us don&apos;t know
          what comes next.
        </p>
        <p className={pClass}>
          Long after the funeral is over and the flowers have faded, people are
          still carrying the weight of what happened.
        </p>
        <p className={pClass}>
          <em className="italic text-new-ink">mouurn was built for that part.</em> A
          place for practical help, meaningful support, and care that lasts
          longer than a moment.
        </p>

        <Link
          href="/about"
          className="inline-flex items-center gap-3 font-sans text-[10px] tracking-[0.2em] uppercase pb-1 font-normal text-new-ink border-b-[0.5px] border-b-solid border-new-gold"
        >
          Read our story{" "}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}