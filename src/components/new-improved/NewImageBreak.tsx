import Image from "next/image";

/**
 * Full-bleed atmospheric image break — a visual "breath" between text
 * sections. Warm duotone wash keeps any photo in the oat/gold family, so
 * Natasha's real shoot drops straight in. Soft, never loud.
 */
export default function NewImageBreak({
  src = "/bg-3.png",
  alt = "A soft, open sky",
  line,
}: {
  src?: string;
  alt?: string;
  line: string;
}) {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-new-ink">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        quality={75}
        className="object-cover object-center"
      />
      {/* Warm wash → ties any photo to the palette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-new-gold/20 mix-blend-multiply"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-new-ink/75 via-new-ink/25 to-new-ink/10"
      />

      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto max-w-[1320px] px-6 pb-14 text-center md:px-12 md:pb-16">
          <span className="mx-auto mb-6 block h-px w-10 bg-new-gold-lt" />
          <p className="mx-auto max-w-[22ch] font-serif text-[clamp(26px,3.2vw,44px)] font-light leading-[1.15] text-new-cream [text-shadow:0_2px_24px_rgba(0,0,0,0.4)]">
            {line}
          </p>
        </div>
      </div>
    </section>
  );
}
