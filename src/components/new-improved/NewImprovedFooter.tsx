import Link from "next/link";

const linkCls =
  "block text-[15px] font-light leading-relaxed text-new-oat/85 no-underline hover:text-new-oat focus-visible:[outline:2px_solid_var(--color-new-gold)] focus-visible:outline-offset-2";
const labelCls =
  "mb-5 text-[11px] uppercase tracking-[0.2em] text-new-gold-lt/85";

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
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-12 px-6 sm:grid-cols-2 md:px-12 lg:grid-cols-[1.7fr_1fr_1fr] lg:gap-16">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            href="/new-improved"
            className="mb-5 block font-serif text-[24px] font-semibold tracking-[0.3em] text-new-oat"
          >
            mouurn
          </Link>
          <p className="mb-6 max-w-[320px] font-serif text-[17px] italic leading-relaxed text-new-oat/75">
            Restoring the rituals of comfort and community around loss.
          </p>
          <a
            href="https://instagram.com/mouurnwithme"
            className="text-[13px] uppercase tracking-[0.16em] text-new-gold-lt no-underline hover:text-new-oat"
          >
            @mouurnwithme
          </a>
        </div>

        {/* Navigate */}
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

        {/* This place */}
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
      </div>

      <div className="mx-auto mt-14 flex max-w-[1320px] flex-col gap-4 border-t-[0.5px] border-new-footer-divider px-6 pt-7 sm:flex-row sm:items-center sm:justify-between md:px-12">
        <span className="text-[11px] tracking-[0.06em] text-new-oat/60">
          &copy; 2026 mouurn &middot; Full Stop Productions LLC
        </span>
        <div className="flex flex-wrap gap-5">
          {bottomLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[11px] tracking-[0.06em] text-new-oat/60 no-underline hover:text-new-oat"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
