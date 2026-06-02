import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "mouurn — Page Not Found",
};

const links = [
  { label: "The Registry", href: "/registry", icon: "ti-heart" },
  { label: "Browse Shop", href: "/shop", icon: "ti-shopping-bag" },
  { label: "Create a Plan", href: "/plan", icon: "ti-compass" },
  { label: "Read Journal", href: "/read", icon: "ti-book-2" },
  { label: "About mouurn", href: "/about", icon: "ti-info-circle" },
];

export default function NotFound() {
  return (
    <section className="relative min-h-[84vh] flex items-center justify-center overflow-hidden bg-oat hairline-b">
      {/* Ghosted 404 — decorative background numeral */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        aria-hidden="true"
      >
        <span
          className="font-serif font-light leading-none text-ink"
          style={{
            fontSize: "clamp(180px, 32vw, 360px)",
            opacity: 0.045,
            letterSpacing: "-0.02em",
          }}
        >
          404
        </span>
      </div>

      {/* Main content column */}
      <div className="relative z-10 w-full max-w-[580px] mx-auto px-6 sm:px-10 py-20 flex flex-col items-center text-center">
        {/* Botanical illustration */}
        <svg
          className="w-11 h-[68px] text-soft mb-10"
          viewBox="0 0 44 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <style>{`
            @keyframes gentle-sway-404 {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(2deg); }
            }
            .sway-404 {
              transform-origin: 22px 70px;
              animation: gentle-sway-404 8s ease-in-out infinite;
            }
          `}</style>
          <g className="sway-404">
            <path
              d="M22,70 Q18,44 24,11"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeLinecap="round"
            />
            <path
              d="M20,52 C9,46 11,34 21,42"
              stroke="currentColor"
              strokeWidth="0.65"
              strokeLinecap="round"
            />
            <path
              d="M22,36 C33,30 32,19 22,27"
              stroke="currentColor"
              strokeWidth="0.65"
              strokeLinecap="round"
            />
            <path
              d="M23,21 C14,16 16,7 23,14"
              stroke="currentColor"
              strokeWidth="0.65"
              strokeLinecap="round"
            />
            <circle cx="24" cy="11" r="2" fill="currentColor" opacity="0.55" />
            <circle cx="22" cy="8" r="1.2" fill="currentColor" opacity="0.3" />
            <circle cx="27" cy="13" r="1.2" fill="currentColor" opacity="0.3" />
          </g>
          <line
            x1="6"
            y1="70"
            x2="38"
            y2="70"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.22"
            strokeDasharray="2.5 2.5"
          />
        </svg>

        {/* Eyebrow */}
        <span className="eyebrow mb-5 block">404 · Page not found</span>

        {/* Heading */}
        <h1 className="font-serif text-story-sm sm:text-story-md md:text-story font-light leading-[1.2] text-ink mb-5 max-w-[420px]">
          This path is{" "}
          <em className="italic">quiet.</em>
        </h1>

        {/* Body copy */}
        <p className="font-sans text-body leading-[2] text-muted font-light max-w-[360px] mb-10">
          The page you&apos;re looking for has been moved, renamed, or perhaps
          never existed. Whatever brought you here — we&apos;ll help you find
          your way back.
        </p>

        {/* Primary CTA */}
        <Link
          href="/"
          className="btn-primary transition-opacity hover:opacity-75"
        >
          Return Home
        </Link>

        {/* Hairline divider */}
        <div className="w-[200px] hairline-b my-10" />

        {/* Secondary navigation label */}
        <span className="eyebrow mb-6 block">Or find your way</span>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-x-7 gap-y-3.5">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="arrow-link hover:text-ink transition-colors duration-150 flex items-center gap-1.5"
            >
              <i className={`ti ${link.icon} text-[9px]`} />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}