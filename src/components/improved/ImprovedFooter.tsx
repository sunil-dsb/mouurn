import Link from "next/link";

const navigateLinks = [
  { label: "For Them", href: "#" },
  { label: "Registry", href: "/registry" },
  { label: "Shop", href: "/shop" },
  { label: "Plan", href: "/plan" },
  { label: "Read", href: "/read" },
  { label: "About mouurn", href: "/about" },
];

const thisPlaceLinks = [
  { label: "About mouurn", href: "/about" },
  { label: "Our team", href: "/about" },
  { label: "For grief practitioners", href: "#" },
  { label: "For companies & HR teams", href: "#" },
  { label: "Press", href: "/press" },
  { label: "Get in touch", href: "mailto:hello@mouurn.com" },
];

const bottomLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Shipping", href: "#" },
  { label: "Help", href: "#" },
];

const colTitle = "mb-5 text-label uppercase tracking-label text-oat/55";
const colLink =
  "block text-sub font-light leading-snug text-oat/75 no-underline transition-colors duration-150 hover:text-oat";

export default function ImprovedFooter() {
  return (
    <footer className="bg-bark pt-16 pb-10 text-left md:pt-20">
      <div className="shell-wide">
        <span className="mb-12 block h-px w-10 bg-amber" />

        <div className="grid grid-cols-1 gap-12 pb-14 sm:grid-cols-2 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="font-serif text-logo-sm tracking-label text-oat font-light">
              mouurn
            </div>
            <p className="mt-4 max-w-[320px] font-serif italic text-[16px] leading-[1.7] text-oat/65">
              Restoring the rituals of comfort and community around loss.
            </p>
            <Link
              href="https://instagram.com/mouurnwithme"
              className="mt-7 inline-block text-sub font-light text-oat/75 no-underline transition-colors duration-150 hover:text-oat"
            >
              @mouurnwithme
            </Link>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3 md:col-start-7">
            <div className={colTitle}>Navigate</div>
            <div className="flex flex-col gap-3.5">
              {navigateLinks.map((l) => (
                <Link key={l.label} href={l.href} className={colLink}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* This Place */}
          <div className="md:col-span-3">
            <div className={colTitle}>This Place</div>
            <div className="flex flex-col gap-3.5">
              {thisPlaceLinks.map((l) => (
                <Link key={l.label} href={l.href} className={colLink}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hairline-t-footer flex flex-col gap-4 pt-7 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <span className="text-label text-oat/55 tracking-fine">
            &copy; 2026 mouurn &middot; Full Stop Productions LLC
          </span>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {bottomLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-label text-oat/55 tracking-fine no-underline transition-colors duration-150 hover:text-oat"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
