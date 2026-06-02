import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-new-ink overflow-hidden">
      <div
        className={[
          /* layout */
          "relative w-full flex items-end justify-start bg-cover max-h-250",
          /* height — mobile-first */
          "h-[56vh] min-[481px]:h-[60vh] md:h-[62vh] lg:h-[88vh] min-[1400px]:h-[72vh]",
          /* min-height */
          "min-h-[440px] md:min-h-[620px]",
          /* background-position — mobile-first */
          "bg-position-[64%_36%]",
          "min-[481px]:bg-position-[62%_38%]",
          "md:bg-position-[center_40%]",
          "lg:bg-position-[center_44%]",
          "min-[1400px]:bg-position-[center_44%]",
          "[background-image:linear-gradient(to_right,rgba(20,18,16,0.55)_0%,rgba(20,18,16,0.15)_38%,rgba(20,18,16,0)_60%),url('/images/hero-flowers.jpg')]",
        ].join(" ")}
      >
        {/* Text overlay — bottom-left, responsive max-width + padding */}
        <div
          className={[
            /* max-width */
            "max-w-[90%] md:max-w-[75%] lg:max-w-[60%]",
            /* padding: bottom + left shift with vh/vw arbitrary values */
            "pb-[8vh] pl-[6vw] md:pb-[9vh] md:pl-[5vw]",
          ].join(" ")}
        >
          {/* Heading */}
          <h1 className="font-serif font-light text-[clamp(38px,4.8vw,72px)] leading-[1.08] text-new-cream mb-3 [text-shadow:0_2px_30px_rgba(0,0,0,0.45)]">
            When someone you love
            <br />
            is grieving.
          </h1>

          {/* Tag line */}
          <p className="font-serif italic mb-6.5 font-normal text-[clamp(15px,1.5vw,21px)] text-[rgba(251,249,245,0.92)] [text-shadow:0_2px_18px_rgba(0,0,0,0.5)]">
            We help you show up.
          </p>

          {/* CTA — gap 18px ≤768px, 24px above */}
          <div className="flex items-center flex-wrap gap-4.5 md:gap-6">
            <Link
              href="/registry"
              className="inline-flex items-center font-sans font-normal text-nav tracking-label uppercase py-3.75 px-8 text-new-ink bg-[#F0E4CE]"
            >
              Create a Registry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
