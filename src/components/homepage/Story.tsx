import Link from "next/link";

export default function Story() {
  return (
    <section className="story bg-oat hairline-b px-8 py-20 md:px-[60px]">
      <div className="story-inner max-w-[680px] mx-auto text-center">
        <div className="eyebrow mb-6">Why mouurn exists</div>
        <h2 className="story-h font-serif text-story-sm sm:text-story-md md:text-story font-light text-ink mb-8">
          No one teaches us how<br />
          <em className="italic">to show up for grief.</em>
        </h2>
        <p className="story-p font-serif text-prose-sm md:text-prose font-light text-ink mb-5 text-left">
          So we send flowers. We bake a lasagna. We say &quot;let me know if you need
          anything.&quot; We mean it — and then we go quiet, because we don&apos;t know
          what else to do. The people we love are left alone inside the hardest
          thing that&apos;s ever happened to them.
        </p>
        <p className="story-p font-serif text-prose-sm md:text-prose font-light text-ink mb-5 text-left">
          mouurn exists to change that. Real ways to help, real words to say,
          and a place to hold it all — for the grieving, and for everyone who
          loves them.
        </p>
        <Link className="cta-link text-ink border-ink" href="/about">
          Read our story →
        </Link>
      </div>
    </section>
  );
}
