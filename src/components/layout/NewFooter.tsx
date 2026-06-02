import Link from "next/link";

const linkClass = "block text-sub text-new-oat/60 mb-1.25 font-normal";
const labelClass = "text-label tracking-btn uppercase text-new-oat/35 mb-5 font-normal";

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
  { label: "Get in touch", href: "mailto:hello@mouurn.com", external: true },
];

const bottomLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string; external?: boolean }[] }) {
  return (
    <div>
      <div className={labelClass}>{title}</div>
      {links.map((link) =>
        link.external ? (
          <a key={link.label} href={link.href} className={linkClass}>{link.label}</a>
        ) : (
          <Link key={link.label} href={link.href} className={linkClass}>{link.label}</Link>
        )
      )}
    </div>
  );
}

export default function NewFooter() {
  return (
    <footer className="bg-new-ink pt-18 hairline-t-new-footer">
      <div className="max-w-[1320px] mx-auto px-[48px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-16">
        <div>
          <Link href="/new" className="font-serif text-[22px] tracking-[0.3em] text-new-oat mb-4 block">
            mouurn
          </Link>
          <p className="font-serif text-quote italic text-new-oat/45 leading-[1.7]">
            Restoring the rituals of comfort
            <br />
            and community around loss.
          </p>
        </div>

        <LinkColumn title="Navigate" links={navigateLinks} />
        <LinkColumn title="This place" links={thisPlaceLinks} />

        <div>
          <div className={labelClass}>mouurn with me</div>
          <p className="text-small leading-[1.8] text-new-oat/40 mb-[18px] font-normal">
            On love, loss, and what comes after.
          </p>
          <input
            type="email"
            placeholder="your@email.com"
            aria-label="Email address"
            className="bg-transparent border-0 border-b-[0.5px] border-b-solid border-b-new-oat/18 outline-none font-sans font-light w-full text-[11px] text-new-oat py-3.75 placeholder:text-new-oat/35"
          />
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto mt-14 px-[48px] py-6 hairline-t-new-footer-divider flex justify-between font-normal">
        <span className="text-label text-new-oat/30">
          &copy; 2026 mouurn &middot; Full Stop Productions LLC
        </span>
        <div className="flex gap-6">
          {bottomLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-label text-new-oat/30 font-normal">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}