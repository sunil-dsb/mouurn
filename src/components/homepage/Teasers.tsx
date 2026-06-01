import Link from "next/link";

import { TeaserItem } from "@/src/types";

const items: TeaserItem[] = [
  {
    eyebrow: "For Them",
    title: "A page for",
    titleEmphasis: "them.",
    description: "Share their story. Post updates. Gather your community around this loss.",
    cta: "Coming soon",
    href: null,
  },
  {
    eyebrow: "Registry",
    title: "What you",
    titleEmphasis: "actually need.",
    description: "A registry for grief. Set up in five minutes. Share one link.",
    cta: "Create a registry →",
    href: "/registry",
  },
  {
    eyebrow: "Shop",
    title: "Gifts that",
    titleEmphasis: "actually help.",
    description: "Beyond flowers and lasagna. Curated for every kind of loss.",
    cta: "Shop gifts →",
    href: "/shop",
  },
  {
    eyebrow: "Plan",
    title: "You don't have to figure this",
    titleEmphasis: "out alone.",
    description: "A few gentle questions. A complete, personalized plan.",
    cta: "Begin →",
    href: "/plan",
  },
  {
    eyebrow: "Read",
    title: "On love, loss",
    titleEmphasis: "and what comes after.",
    description: "Essays, history, ritual. Grief taken seriously.",
    cta: "Read the journal →",
    href: "/read",
  },
];

export default function Teasers() {
  return (
    <section className="teasers grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 hairline-b bg-white">
      {items.map((item, idx) => {
        const cardClass = [
          "teaser flex flex-col justify-between p-10 px-7 hover:bg-hover transition-colors duration-150",
          idx < items.length - 1 ? "hairline-b lg:border-b-0 lg:hairline-r" : "",
          idx === 0 ? "pointer-events-none hover:bg-transparent" : "cursor-pointer",
        ].join(" ");

        const inner = (
          <>
            <div>
              <div className="eyebrow mb-3">{item.eyebrow}</div>
              <h4 className="teaser-h font-serif text-teaser font-light text-ink mb-3">
                {item.title} <em className="italic">{item.titleEmphasis}</em>
              </h4>
              <p className="teaser-p text-small text-muted font-sans font-light mb-5">
                {item.description}
              </p>
            </div>
            <div className="arrow-link">{item.cta}</div>
          </>
        );

        if (!item.href) {
          return (
            <div key={item.eyebrow} className={cardClass}>
              {inner}
            </div>
          );
        }

        return (
          <Link key={item.eyebrow} href={item.href} className={cardClass}>
            {inner}
          </Link>
        );
      })}
    </section>
  );
}
