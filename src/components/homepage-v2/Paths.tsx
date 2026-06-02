import Link from "next/link";

const paths = [
  {
    num: "01",
    eyebrow: "For you",
    line1: "I am",
    line2: "grieving.",
    description:
      "You don\u2019t have to figure this out alone. Find support, make a plan, and\u2014when you\u2019re ready\u2014let people know how to help.",
    cta: "Start here",
    href: "/plan",
  },
  {
    num: "02",
    eyebrow: "For someone you love",
    line1: "I want to",
    line2: "help.",
    description:
      "You want to show up. You just don\u2019t know what to do next. Find practical ways to help, thoughtful gifts, meaningful words, and tools that make support easier.",
    cta: "Show me how",
    href: "/shop",
  },
];

export default function Paths() {
  return (
    <section className="paths-section">
      <div className="paths-grid">
        {paths.map((path) => (
          <Link
            key={path.num}
            href={path.href}
            className="path-card"
          >
            <span className="path-card-num">{path.num}</span>
            <div className="path-eyebrow">{path.eyebrow}</div>
            <h2 className="path-h">
              {path.line1}
              <br />
              <em>{path.line2}</em>
            </h2>
            <p className="path-p">{path.description}</p>
            <div className="path-footer">
              <span className="path-arrow-link font-normal">
                {path.cta}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
