import Link from "next/link";
import Newsletter from "./Newsletter";

const columns = [
  {
    head: "Navigate",
    items: [
      { label: "Registry", href: "/registry" },
      { label: "Shop", href: "/shop" },
      { label: "Plan", href: "/plan" },
      { label: "Read", href: "/read" },
      { label: "Gather", href: "/gather" },
      { label: "About", href: "/about" },
    ],
  },
  {
    head: "mouurn",
    items: [
      { label: "Our story", href: "/about" },
      { label: "Our team", href: "/about" },
      { label: "Press", href: "/press" },
      { label: "Get in touch", href: "mailto:hello@mouurn.com" },
      { label: "@mouurnwithme", href: "https://instagram.com/mouurnwithme" },
    ],
  },
];

const bottomLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

export default function NewImprovedFooter() {
  return (
    <footer className="bg-new-ink">
      <div className="mx-auto max-w-[1320px] px-6 pt-16 pb-8 md:px-12 md:pt-20">
        {/* Merged: newsletter (left) · nav columns (right) */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          <Newsletter />

          <div className="grid grid-cols-2 gap-8 md:justify-items-end md:pl-10">
            {columns.map((col) => (
              <div key={col.head}>
                <div className="mb-6 text-[11px] uppercase tracking-[0.22em] text-new-gold-lt">
                  {col.head}
                </div>
                <div className="flex flex-col gap-2.5">
                  {col.items.map((l) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      className="text-[13.5px] font-light leading-relaxed text-new-oat/70 no-underline transition-colors duration-200 hover:text-new-oat"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal bar */}
        <div className="mt-16 flex flex-col gap-4 border-t-[0.5px] border-new-footer-divider pt-7 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-serif text-[18px] tracking-[0.28em] text-new-oat/85">
            mouurn
          </span>
          <span className="text-[11.5px] tracking-[0.04em] text-new-oat/45">
            &copy; 2026 mouurn &middot; Full Stop Productions LLC
          </span>
          <div className="flex flex-wrap gap-6">
            {bottomLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[11.5px] tracking-[0.04em] text-new-oat/45 no-underline transition-colors duration-200 hover:text-new-oat"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
