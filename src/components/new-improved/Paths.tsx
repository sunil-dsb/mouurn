import Link from "next/link";
import Botanical from "./Botanical";

const paths = [
  {
    key: "grieving",
    eyebrow: "For you",
    line1: "I am",
    line2: "grieving.",
    description:
      "You don’t have to carry this alone. Find support, make a plan, and—when you’re ready—let people know how to help.",
    cta: "Start here",
    href: "/plan",
  },
  {
    key: "helping",
    eyebrow: "For someone you love",
    line1: "I want to",
    line2: "help.",
    description:
      "You want to show up—you just don’t know how. Find the right words, the right gift, and simple ways to truly help.",
    cta: "Show me how",
    href: "/shop",
  },
];

export default function Paths() {
  return (
    <section className="relative overflow-hidden border-b-[0.5px] border-new-rule bg-new-cream py-20 md:py-28">
      {/* Decorative background leaf sprigs in the outer margins */}
      <Botanical className="pointer-events-none absolute -left-12 top-10 w-[180px] -rotate-[12deg] text-new-ink opacity-[0.03] lg:block hidden" />
      <Botanical className="pointer-events-none absolute -right-12 bottom-10 w-[180px] rotate-[12deg] text-new-ink opacity-[0.03] lg:block hidden" />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {paths.map((path) => (
            <Link
              key={path.key}
              href={path.href}
              className="group relative flex flex-col justify-between overflow-hidden bg-new-white p-8 md:p-14 border border-new-rule/80 transition-all duration-500 ease-gentle  hover:border-new-gold/40 min-h-[340px]"
            >
              <div>
                {/* Eyebrow with gold rule accent */}
                <div className="mb-7 flex items-center gap-3 font-sans text-[11px] uppercase tracking-eyebrow text-new-muted">
                  <span className="h-px w-6 bg-new-gold/70" />
                  {path.eyebrow}
                </div>

                {/* Heading */}
                <h3 className="mb-4 font-serif text-[clamp(28px,2.5vw,38px)] font-light leading-[1.1] text-new-ink">
                  {path.line1}{" "}
                  <em className="italic text-new-gold">{path.line2}</em>
                </h3>

                {/* Description */}
                <p className="max-w-[38ch] text-[14px] font-light leading-[1.85] text-new-muted">
                  {path.description}
                </p>
              </div>

              {/* Refined CTA Link */}
              <div className="mt-10 flex items-center gap-2.5 font-sans text-[11px] uppercase tracking-cta text-new-ink font-medium">
                <span className="border-b-[0.5px] border-new-gold/60 pb-0.5 transition-colors duration-300 group-hover:border-new-ink">
                  {path.cta}
                </span>
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5 text-new-gold">
                  →
                </span>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


