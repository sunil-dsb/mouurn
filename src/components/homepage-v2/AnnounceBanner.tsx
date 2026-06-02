import Link from "next/link";

export default function AnnounceBanner() {
  return (
    <div className="bg-new-ink text-new-gold-lt text-center py-2.5 px-6 font-sans text-[10px] tracking-btn uppercase font-light">
      Introducing{" "}
      <Link href="/registry" className="announce-link">
        mouurn Registry
      </Link>{" "}
      — a new way to give and receive support in grief.
    </div>
  );
}