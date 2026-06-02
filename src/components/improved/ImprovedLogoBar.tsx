import Link from "next/link";

// Tighter than the clone's logo bar (pt-8 pb-[26px] → py-4) so it doesn't
// hog vertical white space above the nav.
export default function ImprovedLogoBar() {
  return (
    <div className="py-4 text-center hairline-b">
      <Link
        href="/"
        className="font-serif text-logo tracking-logo text-ink font-light transition-opacity hover:opacity-80"
      >
        mouurn
      </Link>
    </div>
  );
}
