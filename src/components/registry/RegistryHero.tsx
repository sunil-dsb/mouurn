import Image from "next/image";

export default function RegistryHero() {
  return (
    <div className="relative h-[72vh] min-h-[480px] overflow-hidden hairline-b">
      <Image
        src="/images/registry_hero.jpg"
        alt="Flowers"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 py-10 md:px-[60px] md:py-[48px] bg-gradient-to-t from-ink/72 via-ink/8 to-transparent">
        <div className="text-label tracking-[0.28em] text-oat/55 uppercase mb-[14px]">
          Registry
        </div>
        <h1 className="font-serif text-path-sm leading-[1.1] sm:text-path-md md:text-hero md:leading-[1.05] font-light text-oat max-w-[580px]">
          What you <em className="italic">actually</em><br />need right now.
        </h1>
        <div className="text-sub text-oat/58 font-light tracking-[0.06em] mt-[12px] max-w-[440px] leading-[1.9]">
          A grief registry built for the people who love you — and don't know how to help.
        </div>
      </div>
    </div>
  );
}
