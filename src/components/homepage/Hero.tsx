import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero relative h-[75vh] min-h-[500px] overflow-hidden hairline-b bg-ink">
      <Image
        src="/images/hero-flowers.jpg"
        alt="Flowers left at a door"
        fill
        priority
        sizes="100vw"
        className="object-contain object-center"
      />
      <div className="hero-overlay absolute bottom-0 left-0 right-0 py-8 px-6 sm:px-10 sm:py-10 md:px-[60px] md:py-[48px] bg-gradient-to-t from-ink/[78%] via-ink/10 to-transparent">
        <h1 className="hero-h font-serif text-[38px] leading-[1.1] sm:text-[42px] md:text-[52px] md:leading-[1.05] font-light text-oat max-w-[560px]">
          When someone you love is in pain <em className="italic">and words aren't enough.</em>
        </h1>
        <div className="hero-sub text-[12px] text-oat/60 font-light tracking-[0.08em] mt-2 md:mt-[10px]">
          We help you show up.
        </div>
      </div>
    </section>
  );
}
