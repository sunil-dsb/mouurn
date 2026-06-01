import Link from "next/link";

export default function LogoBar() {
  return (
    <div className="pt-8 pb-[26px] px-6 sm:px-10 md:px-[60px] text-center hairline-b">
      <Link
        href="/"
        className="font-serif text-logo tracking-logo text-ink font-light select-none hover:opacity-80 transition-opacity"
      >
        mouurn
      </Link>
    </div>
  );
}
