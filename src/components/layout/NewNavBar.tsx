import Link from "next/link";

const links = {
  left: [
    { href: "/registry", label: "Registry" },
    { href: "/shop", label: "Shop" },
    { href: "/plan", label: "Plan" },
  ],
  right: [
    { href: "/read", label: "Read" },
    { href: "/gather", label: "Gather" },
    { href: "/about", label: "About" },
  ],
} as const;

export default function NewNavBar() {
  return (
    <div className="nav-container sticky top-0 z-70">
      <nav className="nav-inner">
        <div className="hidden md:flex items-center gap-8">
          {links.left.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link font-normal">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex md:hidden" />

        <Link href="/new" className="nav-logo">
          mouurn
        </Link>

        <div className="hidden md:flex items-center gap-6 justify-end">
          {links.right.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link font-normal">
              {link.label}
            </Link>
          ))}
          <Link href="/registry" className="btn-nav-cta font-normal">
            Start Here
          </Link>
        </div>

        <div className="flex md:hidden justify-end">
          <i className="ti ti-menu-2 nav-hamburger" />
        </div>
      </nav>
    </div>
  );
}