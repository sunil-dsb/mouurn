import Image from "next/image";
import Kicker from "./Kicker";
import Reveal from "./Reveal";

/**
 * Full-bleed atmospheric interstitial - a quiet "breath" between sections.
 * A warm duotone wash (amber multiply + bark gradient) folds any photograph
 * into the marigold / oat family, so mixed imagery - including the real
 * photo shoot later - reads as one set. Soft, never loud.
 */
export default function ImprovedImageBreak({
  src,
  alt,
  caption,
  eyebrow,
}: {
  src: string;
  alt: string;
  caption: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative h-[58vh] min-h-100 overflow-hidden bg-sand hairline-b">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        quality={74}
        className="object-cover object-center"
        style={{ filter: "saturate(0.9) contrast(0.96)" }}
      />
      {/* Warm tint - unifies the palette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-amber/25 mix-blend-multiply"
      />
      {/* Depth for the caption to sit against */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-bark/60 via-bark/15 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0">
        <div className="shell-wide pb-12 md:pb-16">
          <Reveal>
            {eyebrow ? (
              <Kicker tone="overlay" className="mb-5">
                {eyebrow}
              </Kicker>
            ) : null}
            <p className="max-w-150 font-serif text-story md:text-path font-light leading-[1.15] text-oat">
              {caption}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
