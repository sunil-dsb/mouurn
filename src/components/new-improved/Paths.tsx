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
    <section className="border-b-[0.5px] border-new-rule">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 md:grid-cols-2">
        {paths.map((path, i) => (
          <div
            key={path.key}
            className={
              i === 0
                ? "border-b-[0.5px] border-new-rule md:border-b-0 md:border-r-[0.5px]"
                : ""
            }
          >
            <Link
              href={path.href}
              className="group relative flex h-full flex-col overflow-hidden bg-new-white px-8 py-16 transition-colors duration-200 hover:bg-new-cream md:px-15 md:py-24"
            >
              {/* Faint leaf-sprig in the empty lower corner */}
              <Botanical className="pointer-events-none absolute -bottom-8 right-2 w-[150px] rotate-[8deg] text-new-ink opacity-[0.06]" />

              <div className="relative z-10 flex h-full flex-col">
                <span className="mb-8 text-new-ink">
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {path.icon}
                  </svg>
                </span>

                <div className="mb-4 flex items-center gap-3.5 font-sans text-[11px] uppercase tracking-eyebrow text-new-muted">
                  <span className="h-px w-7 shrink-0 bg-new-gold" />
                  {path.eyebrow}
                </div>

                <h2 className="mb-4 font-serif text-[clamp(28px,3vw,40px)] font-light leading-[1.08] text-new-ink">
                  {path.line1}
                  <br />
                  <em className="italic">{path.line2}</em>
                </h2>

                <p className="mb-9 max-w-[40ch] text-[14px] font-light leading-[1.9] text-new-muted">
                  {path.description}
                </p>

                <span className="mt-auto inline-flex items-center gap-2.5 font-sans text-[11px] uppercase tracking-cta text-new-ink">
                  {path.cta}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
