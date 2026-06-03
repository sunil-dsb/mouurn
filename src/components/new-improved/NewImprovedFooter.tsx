import Link from "next/link";

const linkCls =
  "block text-[14px] font-light leading-relaxed text-new-oat/70 no-underline transition-colors duration-150 hover:text-new-oat focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-new-gold";
const labelCls =
  "mb-5 text-[11px] uppercase tracking-[0.2em] text-new-oat/45";

const navigateLinks = [
  { label: "Registry", href: "/registry" },
  { label: "Shop", href: "/shop" },
  { label: "Plan", href: "/plan" },
  { label: "Read", href: "/read" },
  { label: "Gather", href: "/gather" },
  { label: "About", href: "/about" },
];
const thisPlaceLinks = [
  { label: "Our story", href: "/about" },
  { label: "Our team", href: "/about" },
  { label: "Press", href: "/press" },
  { label: "Get in touch", href: "mailto:hello@mouurn.com" },
];
const bottomLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

export default function NewImprovedFooter() {
  return (
    <footer className="border-t-[0.5px] border-new-footer-rule bg-new-ink pt-18 pb-10">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-14 px-6 sm:grid-cols-2 md:px-12 lg:grid-cols-[2fr_1fr_1fr_1.2fr]">
        <div>
          <Link
            href="/new-improved"
            className="mb-4 block font-serif text-[22px] font-normal tracking-[0.3em] text-new-oat"
          >
            mouurn
          </Link>
          <p className="max-w-[300px] font-serif text-[16px] italic leading-relaxed text-new-oat/55">
            Restoring the rituals of comfort and community around loss.
          </p>
        </div>

        <div>
          <div className={labelCls}>Navigate</div>
          <div className="flex flex-col gap-3">
            {navigateLinks.map((l) => (
              <Link key={l.label} href={l.href} className={linkCls}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className={labelCls}>This place</div>
          <div className="flex flex-col gap-3">
            {thisPlaceLinks.map((l) => (
              <Link key={l.label} href={l.href} className={linkCls}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className={labelCls}>mouurn with me</div>
          <p className="mb-5 text-[13px] leading-relaxed text-new-oat/50 font-light">
            On love, loss, and what comes after.
          </p>
          <Link
            href="#newsletter"
            className="inline-block border-b-[0.5px] border-new-gold pb-1 text-[11px] uppercase tracking-[0.18em] text-new-gold-lt transition-opacity hover:opacity-75"
          >
            Read the letter →
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1320px] flex-col gap-4 border-t-[0.5px] border-new-footer-divider px-6 pt-7 sm:flex-row sm:items-center sm:justify-between md:px-12">
        <span className="text-[11px] tracking-[0.06em] text-new-oat/40">
          &copy; 2026 mouurn &middot; Full Stop Productions LLC
        </span>
        <div className="flex flex-wrap gap-5">
          {bottomLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[11px] tracking-[0.06em] text-new-oat/40 no-underline transition-colors duration-150 hover:text-new-oat/70"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
