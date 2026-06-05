import Link from "next/link";
import Botanical from "./Botanical";

const paths = [
  {
    key: "grieving",
    eyebrow: "For you",
    line1: "I am",
    line2: "grieving.",
    description:
      "You don’t have to carry this alone. Find support, make a plan, and - when you’re ready - let people know how to help.",
    cta: "Start here",
    href: "/plan",
    icon: (
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    ),
  },
  {
    key: "helping",
    eyebrow: "For someone you love",
    line1: "I want to",
    line2: "help.",
    description:
      "You want to show up - you just don’t know how. Find the right words, the right gift, and simple ways to truly help.",
    cta: "Show me how",
    href: "/shop",
    icon: (
      <>
        <path d="M10 9a3 3 0 1 0 -6 0a3 3 0 0 0 6 0" />
        <path d="M2 20v-1a3 3 0 0 1 3 -3h2a3 3 0 0 1 3 3v1" />
        <path d="M20 9a3 3 0 1 0 -6 0a3 3 0 0 0 6 0" />
        <path d="M14 20v-1a3 3 0 0 1 3 -3h2a3 3 0 0 1 3 3v1" />
      </>
    ),
  },
];

export default function Paths() {
  return (
    <section className="border-b-[0.5px] border-new-rule bg-new-oat py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12">
        <div className="mb-12 text-center md:mb-14">
          <div className="mb-4 inline-flex items-center gap-3.5 font-sans text-[11px] uppercase tracking-eyebrow text-new-muted">
            <span className="h-px w-7 shrink-0 bg-new-gold" />
            Where to begin
            <span className="h-px w-7 shrink-0 bg-new-gold" />
          </div>
          <h2 className="font-serif text-[clamp(26px,2.6vw,36px)] font-normal leading-[1.15] text-new-ink">
            Wherever you&apos;re standing,{" "}
            <em className="italic text-new-gold">there&apos;s a way in.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-3">
          {paths.map((path) => (
            <Link
              key={path.key}
              href={path.href}
              className="relative flex flex-col justify-between overflow-hidden border border-new-rule/80 bg-new-white p-8 md:p-10"
            >
              <div className="relative z-10">
                {/* Top row — icon left, category tag top-right */}
                <div className="mb-8 flex items-center justify-between gap-4">
                  <span className="text-new-gold">
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {path.icon}
                    </svg>
                  </span>
                  <span className="font-sans text-[11px] uppercase tracking-eyebrow text-new-muted">
                    {path.eyebrow}
                  </span>
                </div>

                <h3 className="font-serif text-[clamp(30px,2.6vw,40px)] font-light leading-[1.08] text-new-ink">
                  {path.line1}{" "}
                  <em className="italic text-new-gold">{path.line2}</em>
                </h3>

                <p className="mt-5 max-w-[42ch] text-[15px] font-normal leading-[1.75] text-new-muted">
                  {path.description}
                </p>
              </div>

              <div className="relative z-10 mt-8 flex items-center gap-2.5 font-sans text-[11px] font-medium uppercase tracking-cta text-new-ink">
                <span className="border-b-[0.5px] border-new-gold/60 pb-0.5">
                  {path.cta}
                </span>
                <span className="text-new-gold">→</span>
              </div>

              <Botanical className="pointer-events-none absolute -bottom-8 -right-6 w-[150px] rotate-[10deg] text-new-ink opacity-[0.05]" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
