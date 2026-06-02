import { PathItem } from "@/src/types";
import Link from "next/link";

const pathItems: PathItem[] = [
  {
    eyebrow: "For you",
    title: "I am",
    titleEmphasis: "grieving.",
    description: "I need support, a registry, help planning, or I don't know where to start.",
    cta: "Find your way in →",
    href: "/plan",
    borderClass: "hairline-b md:border-b-0 md:hairline-r",
  },
  {
    eyebrow: "For someone you love",
    title: "I want to help",
    titleEmphasis: "someone grieving.",
    description: "I want to show up with the right gift, the right words, or by building a registry.",
    cta: "Show me how →",
    href: "/shop",
    borderClass: "",
  },
];

export default function Paths() {
  return (
    <section className="paths flex flex-col md:grid md:grid-cols-2 min-h-[360px] hairline-b bg-white">
      {pathItems.map((item) => (
        <Link
          key={item.eyebrow}
          href={item.href}
          className={`path group flex flex-col justify-between p-8 sm:p-12 md:p-[72px_60px] hover:bg-hover transition-colors duration-200 ${item.borderClass}`}
        >
          <div>
            <div className="eyebrow mb-5">{item.eyebrow}</div>
            <h3 className="path-h font-serif text-story-md sm:text-path-sm md:text-path font-light text-ink mb-4">
              {item.title} <em className="italic">{item.titleEmphasis}</em>
            </h3>
            <p className="path-p text-body text-muted font-light max-w-[340px] mb-9">
              {item.description}
            </p>
          </div>
          <div className="arrow-link group-hover:text-ink transition-colors duration-150">
            {item.cta}
          </div>
        </Link>
      ))}
    </section>
  );
}
