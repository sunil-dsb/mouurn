import Link from "next/link";
import Reveal from "./Reveal";

type Item = {
  key: "for-them" | "registry" | "shop" | "plan" | "read";
  eyebrow: string;
  title: string;
  titleEmphasis: string;
  description: string;
  cta: string;
  href: string | null;
};

const items: Item[] = [
  {
    key: "for-them",
    eyebrow: "For Them",
    title: "A page for",
    titleEmphasis: "them.",
    description: "Share their story. Post updates. Gather your community around this loss.",
    cta: "Coming soon",
    href: null,
  },
  {
    key: "registry",
    eyebrow: "Registry",
    title: "What you",
    titleEmphasis: "actually need.",
    description: "A registry for grief. Set up in five minutes. Share one link.",
    cta: "Create a registry",
    href: "#",
  },
  {
    key: "shop",
    eyebrow: "Shop",
    title: "Gifts that",
    titleEmphasis: "actually help.",
    description: "Beyond flowers and lasagna. Curated for every kind of loss.",
    cta: "Shop gifts",
    href: "#",
  },
  {
    key: "plan",
    eyebrow: "Plan",
    title: "You don't have to figure this",
    titleEmphasis: "out alone.",
    description: "A few gentle questions. A complete, personalized plan.",
    cta: "Begin",
    href: "#",
  },
  {
    key: "read",
    eyebrow: "Read",
    title: "On love, loss",
    titleEmphasis: "and what comes after.",
    description: "Essays, history, ritual. Grief taken seriously.",
    cta: "Read the journal",
    href: "#",
  },
];

function Icon({ name }: { name: Item["key"] }) {
  const p = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "for-them":
      return (
        <svg {...p}>
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
      );
    case "registry":
      return (
        <svg {...p}>
          <path d="M9 6h11M9 12h11M9 18h11M5 6h.01M5 12h.01M5 18h.01" />
        </svg>
      );
    case "shop":
      return (
        <svg {...p}>
          <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.966 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
          <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
        </svg>
      );
    case "plan":
      return (
        <svg {...p}>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M8 16l2 -6l6 -2l-2 6l-6 2" />
        </svg>
      );
    case "read":
      return (
        <svg {...p}>
          <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
          <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
          <path d="M3 6v13M12 6v13M21 6v13" />
        </svg>
      );
  }
}

export default function ImprovedTeasers() {
  return (
    <section className="bg-sand border-b-[0.5px] border-rule">
      <div className="shell-wide">
        {/* gap-px over a rule-coloured grid draws clean 1px hairlines in every
            direction — identical at 1, 2 or 5 columns, responsive by design. */}
        <div className="grid grid-cols-1 gap-px bg-rule sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item, idx) => {
            const inner = (
              <>
                <div>
                  <span className="text-amber-deep">
                    <Icon name={item.key} />
                  </span>
                  <div className="mt-5 text-micro uppercase tracking-eyebrow text-amber-deep">
                    {item.eyebrow}
                  </div>
                  <h4 className="mt-3 font-serif text-teaser font-light text-ink">
                    {item.title}{" "}
                    <em className="italic">{item.titleEmphasis}</em>
                  </h4>
                  <p className="mt-3 text-small font-light text-quiet">
                    {item.description}
                  </p>
                </div>
                {item.href ? (
                  <span className="mt-7 inline-flex items-center gap-1.5 text-label uppercase tracking-cta text-amber-deep">
                    {item.cta}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                ) : (
                  <span className="mt-7 text-label uppercase tracking-cta text-quiet">
                    {item.cta}
                  </span>
                )}
              </>
            );

            // The flagship "For Them" tile is gently featured — a paper fill
            // (#FCFBF8) lifts it off the surrounding sand tiles.
            const featured = item.key === "for-them";
            const cardCls = `group flex h-full flex-col justify-between p-10 px-8 ${
              featured ? "bg-paper" : "bg-sand"
            } ${item.href ? "transition-colors duration-150 hover:bg-hover" : ""}`;

            return (
              <Reveal key={item.key} delay={idx * 70}>
                {item.href ? (
                  <Link href={item.href} className={cardCls}>
                    {inner}
                  </Link>
                ) : (
                  <div className={cardCls}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
