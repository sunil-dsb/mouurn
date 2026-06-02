"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Kicker from "./Kicker";

export default function ImprovedHero() {
  const imgRef = useRef<HTMLDivElement>(null);

  // Gentle parallax — the image drifts slower than the scroll. Disabled for
  // reduced-motion users.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (imgRef.current) {
          imgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.1}px, 0)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative h-[90vh] min-h-155 overflow-hidden hairline-b bg-ink">
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/bg.webp"
          alt="Flowers left at a door"
          fill
          priority
          sizes="100vw"
          quality={82}
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 px-6 py-10 sm:px-10 sm:py-12 md:px-15 md:py-16 bg-linear-to-t from-ink/85 via-ink/30 to-transparent">
        <Kicker tone="overlay" className="rise mb-7">
          For every kind of loss
        </Kicker>

        <h1
          className="rise font-serif text-hero font-light text-oat max-w-175"
          style={{ animationDelay: "0.08s" }}
        >
          When someone you love is in pain{" "}
          <em className="italic">and words aren&apos;t enough.</em>
        </h1>

        <p
          className="rise mt-6 max-w-130 text-body font-light text-oat/75"
          style={{ animationDelay: "0.16s" }}
        >
          mouurn helps you show up for them - with a registry for what they
          really need, gifts that actually comfort, a simple plan to follow, and
          the right words when you can&apos;t find your own.
        </p>

        <Link
          href="#"
          className="rise mt-9 inline-flex items-center gap-2.5 bg-oat px-8 py-3.5 text-label uppercase tracking-cta text-ink transition-colors duration-200 hover:bg-white"
          style={{ animationDelay: "0.24s" }}
        >
          Find your way in →
        </Link>
      </div>
    </section>
  );
}
