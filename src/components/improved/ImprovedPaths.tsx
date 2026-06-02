import Link from "next/link";
import Kicker from "./Kicker";

const pathItems = [
  {
    eyebrow: "For you",
    title: "I am",
    titleEmphasis: "grieving.",
    description:
      "I need support, a registry, help planning, or I don't know where to start.",
    cta: "Find your way in →",
    href: "#",
  },
  {
    eyebrow: "For someone you love",
    title: "I want to help",
    titleEmphasis: "someone grieving.",
    description:
      "I want to show up - with the right gift, the right words, or by building a registry.",
    cta: "Show me how →",
    href: "#",
  },
];

export default function ImprovedPaths() {
  return (
    <section className="bg-paper border-b-[0.5px] border-rule">
      <div className="shell-wide grid grid-cols-1 md:grid-cols-2">
        {pathItems.map((item, i) => (
          <Link
            key={item.eyebrow}
            href={item.href}
            className={`group flex flex-col justify-between section-y transition-colors duration-200 hover:bg-hover ${
              i === 0
                ? "border-b-[0.5px] border-rule md:border-b-0 md:border-r-[0.5px] md:pr-16"
                : "md:pl-16"
            }`}
          >
            <div>
              <Kicker className="mb-5">{item.eyebrow}</Kicker>
              <h3 className="font-serif text-path font-light leading-[1.05] text-ink">
                {item.title}{" "}
                <em className="italic text-amber-deep">{item.titleEmphasis}</em>
              </h3>
              <p className="mt-5 max-w-105 text-body md:text-prose font-light text-quiet">
                {item.description}
              </p>
            </div>
            <span className="mt-10 inline-flex w-fit items-center self-start border border-ink/20 px-6 py-2.5 text-label uppercase tracking-cta text-ink transition-colors duration-200 group-hover:border-amber-deep group-hover:bg-amber-deep group-hover:text-oat">
              {item.cta}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
