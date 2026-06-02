import Link from "next/link";
import Kicker from "./Kicker";
import Reveal from "./Reveal";

export default function ImprovedMission() {
  return (
    <section className="relative bg-paper border-b-[0.5px] border-rule section-y overflow-hidden">

      {/* Botanical flower — top right, large */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 w-[420px] rotate-[15deg] text-ink opacity-[0.07]"
        viewBox="0 0 300 300"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(150,150)">
          {/* Outer ring — 8 petals */}
          <ellipse cx="0" cy="-80" rx="22" ry="60" strokeWidth="0.65" />
          <ellipse cx="0" cy="-80" rx="22" ry="60" strokeWidth="0.65" transform="rotate(45)" />
          <ellipse cx="0" cy="-80" rx="22" ry="60" strokeWidth="0.65" transform="rotate(90)" />
          <ellipse cx="0" cy="-80" rx="22" ry="60" strokeWidth="0.65" transform="rotate(135)" />
          <ellipse cx="0" cy="-80" rx="22" ry="60" strokeWidth="0.65" transform="rotate(180)" />
          <ellipse cx="0" cy="-80" rx="22" ry="60" strokeWidth="0.65" transform="rotate(225)" />
          <ellipse cx="0" cy="-80" rx="22" ry="60" strokeWidth="0.65" transform="rotate(270)" />
          <ellipse cx="0" cy="-80" rx="22" ry="60" strokeWidth="0.65" transform="rotate(315)" />
          {/* Inner ring — 8 petals, offset 22.5° */}
          <ellipse cx="0" cy="-50" rx="13" ry="36" strokeWidth="0.5" transform="rotate(22.5)" />
          <ellipse cx="0" cy="-50" rx="13" ry="36" strokeWidth="0.5" transform="rotate(67.5)" />
          <ellipse cx="0" cy="-50" rx="13" ry="36" strokeWidth="0.5" transform="rotate(112.5)" />
          <ellipse cx="0" cy="-50" rx="13" ry="36" strokeWidth="0.5" transform="rotate(157.5)" />
          <ellipse cx="0" cy="-50" rx="13" ry="36" strokeWidth="0.5" transform="rotate(202.5)" />
          <ellipse cx="0" cy="-50" rx="13" ry="36" strokeWidth="0.5" transform="rotate(247.5)" />
          <ellipse cx="0" cy="-50" rx="13" ry="36" strokeWidth="0.5" transform="rotate(292.5)" />
          <ellipse cx="0" cy="-50" rx="13" ry="36" strokeWidth="0.5" transform="rotate(337.5)" />
          {/* Center detail */}
          <circle cx="0" cy="0" r="22" strokeWidth="0.65" />
          <circle cx="0" cy="0" r="13" strokeWidth="0.45" />
          <circle cx="0" cy="0" r="5" strokeWidth="0.4" />
          <circle cx="0" cy="-8" r="1.8" fill="currentColor" />
          <circle cx="6.9" cy="4" r="1.8" fill="currentColor" />
          <circle cx="-6.9" cy="4" r="1.8" fill="currentColor" />
        </g>
      </svg>

      {/* Botanical flower — bottom left, medium */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-35 w-[420px] -rotate-[8deg] text-ink opacity-[0.055]"
        viewBox="0 0 300 300"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(150,150)">
          {/* 6-petal outer ring */}
          <ellipse cx="0" cy="-72" rx="20" ry="54" strokeWidth="0.65" />
          <ellipse cx="0" cy="-72" rx="20" ry="54" strokeWidth="0.65" transform="rotate(60)" />
          <ellipse cx="0" cy="-72" rx="20" ry="54" strokeWidth="0.65" transform="rotate(120)" />
          <ellipse cx="0" cy="-72" rx="20" ry="54" strokeWidth="0.65" transform="rotate(180)" />
          <ellipse cx="0" cy="-72" rx="20" ry="54" strokeWidth="0.65" transform="rotate(240)" />
          <ellipse cx="0" cy="-72" rx="20" ry="54" strokeWidth="0.65" transform="rotate(300)" />
          {/* 6-petal inner ring, offset 30° */}
          <ellipse cx="0" cy="-44" rx="12" ry="32" strokeWidth="0.5" transform="rotate(30)" />
          <ellipse cx="0" cy="-44" rx="12" ry="32" strokeWidth="0.5" transform="rotate(90)" />
          <ellipse cx="0" cy="-44" rx="12" ry="32" strokeWidth="0.5" transform="rotate(150)" />
          <ellipse cx="0" cy="-44" rx="12" ry="32" strokeWidth="0.5" transform="rotate(210)" />
          <ellipse cx="0" cy="-44" rx="12" ry="32" strokeWidth="0.5" transform="rotate(270)" />
          <ellipse cx="0" cy="-44" rx="12" ry="32" strokeWidth="0.5" transform="rotate(330)" />
          {/* Center */}
          <circle cx="0" cy="0" r="20" strokeWidth="0.65" />
          <circle cx="0" cy="0" r="11" strokeWidth="0.45" />
          <circle cx="0" cy="0" r="4" strokeWidth="0.4" />
        </g>
      </svg>

      {/* Content */}
      <div className="shell-wide flex flex-col items-center text-center gap-10">
        <Reveal>
          <Kicker center className="mb-6">Our mission</Kicker>
          <h2 className="font-serif text-story md:text-path font-light leading-[1.08] text-ink">
            People want to help.
            <br />
            <em className="italic">They just don&apos;t know how.</em>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="font-serif text-prose md:text-lead font-light text-quiet max-w-xl">
            mouurn is how. Everything we make — registries, gifts, plans, the
            right words — is here to help you show up for someone in grief.
          </p>
          <Link
            href="/about"
            className="mt-10 inline-block border-b border-amber pb-1 text-label uppercase tracking-cta text-amber-deep transition-opacity hover:opacity-70"
          >
            Read our story →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}