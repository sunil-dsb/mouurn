import Link from "next/link";
import Kicker from "./Kicker";

export default function ImprovedStory() {
  return (
    <section className="bg-oat border-b-[0.5px] border-rule section-y">
      <div className="shell-wide grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
        {/* Left — kicker + heading */}
        <div className="md:col-span-5">
          <Kicker className="mb-6">Why mouurn exists</Kicker>
          <h2 className="font-serif text-story md:text-path font-light leading-[1.1] text-ink">
            No one teaches us how{" "}
            <em className="italic">to show up for grief.</em>
          </h2>
        </div>

        {/* Right — prose + CTA */}
        <div className="md:col-span-6 md:col-start-7">
          <div className="space-y-5">
            <p className="font-serif text-prose md:text-lead font-light text-ink">
              So we send flowers. We bake a lasagna. We say &quot;let me know if
              you need anything.&quot; We mean it - and then we go quiet, because
              we don&apos;t know what else to do. The people we love are left
              alone inside the hardest thing that&apos;s ever happened to them.
            </p>
            <p className="font-serif text-prose md:text-lead font-light text-ink">
              mouurn exists to change that. Real ways to help, real words to say,
              and a place to hold it all - for the grieving, and for everyone who
              loves them.
            </p>
          </div>
          <Link
            href="/about"
            className="mt-10 inline-block border-b border-amber pb-1 text-label uppercase tracking-cta text-amber-deep transition-opacity hover:opacity-70"
          >
            Read our story →
          </Link>
        </div>
      </div>
    </section>
  );
}
