import Botanical from "./Botanical";
import Flower from "./Flower";

const groups = [
  {
    title: "The griever",
    body: "In the thick of it. Needing practical help, a plan, and people to show up.",
  },
  {
    title: "The helper",
    body: "The sister, the best friend, the coworker who wants to do something real.",
  },
  {
    title: "The anticipatory",
    body: "Someone whose person is still here, but not for long. Planning ahead with love.",
  },
  {
    title: "The long-term",
    body: "Two years out. Five years out. Still carrying it. Still deserving of a place.",
  },
  {
    title: "The separated",
    body: "A marriage or partnership ending is a loss. It deserves the same tenderness and ritual.",
  },
  {
    title: "The diagnosed",
    body: "A diagnosis changes everything, for you or someone you love. We're here for the uncertain middle.",
  },
  {
    title: "The complicated",
    body: "Grief doesn't require a good relationship. It only requires a loss. You belong here.",
  },
  {
    title: "The displaced",
    body: "You lost your home to fire, flood, or disaster. Starting over is its own kind of grief.",
  },
  {
    title: "The ambiguous",
    body: "Estrangement. Addiction. Someone still alive but gone. Grief without a funeral.",
  },
  {
    title: "The caregiver",
    body: "Exhausted from holding it all together. Your grief matters too, even while they're still here.",
  },
  {
    title: "The unseen",
    body: "Miscarriage, stillbirth, infertility. A loss the world often doesn't see, and doesn't know how to hold.",
  },
  {
    title: "The pet lover",
    body: "Their life mattered. Your grief matters. Full stop.",
  },
];

export default function Held() {
  return (
    <section className="relative overflow-hidden border-b-[0.5px] border-new-rule bg-new-oat pt-12 pb-20 md:pt-14 md:pb-28">
      {/* Tactile paper grain texture */}
      <div className="grain" aria-hidden="true" />

      {/* Gentle leaf sprigs in the empty margins (desktop only) */}
      <Botanical className="pointer-events-none absolute -bottom-16 -right-12 w-[180px] rotate-[15deg] text-new-ink opacity-[0.10] hidden lg:block" />
      <Botanical className="pointer-events-none absolute -bottom-16 -left-12 w-[180px] -rotate-[15deg] text-new-ink opacity-[0.10] hidden lg:block" />

      {/* Aligned container width with Paths.tsx */}
      <div className="relative z-10 mx-auto max-w-[1320px] px-6 md:px-12">

        {/* Cohesive header kicker styling */}
        <div className="mx-auto mb-14 max-w-[640px] text-center md:mb-16">
          <Flower className="w-[64px] h-[102px] text-new-soft mx-auto mb-6" isStatic />

          <div className="mb-4 flex items-center justify-center gap-3.5">
            <span className="h-px w-7 shrink-0 bg-new-gold" />
            <span className="font-sans text-[11px] uppercase tracking-[0.24em] text-new-muted">
              A Place for Everyone
            </span>
            <span className="h-px w-7 shrink-0 bg-new-gold" />
          </div>
          <h2 className="font-serif text-[clamp(28px,3vw,42px)] font-light leading-[1.15] text-new-ink">
            Every loss deserves{" "}
            <span className="bg-new-gold-lt/15 px-2.5 py-0.5 rounded-[3px] box-decoration-clone">
              <em className="italic">to be held.</em>
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[46ch] text-[15px] font-light leading-[1.7] text-new-muted">
            No comparison. No hierarchy. Every kind of loss, every kind of
            griever.
          </p>
        </div>

        {/* One white surface, divided by hairlines (not gaps) — a quiet
            directory of who belongs here. */}
        <div className="grid grid-cols-1 gap-px overflow-hidden border-[0.5px] border-new-rule bg-new-rule sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="bg-new-white px-8 py-9 md:px-9">
              <h3 className="font-serif text-[20px] font-light leading-[1.2] text-new-ink">
                {g.title}
              </h3>
              <p className="mt-3 text-[14px] font-normal leading-[1.7] text-new-ink/75">
                {g.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
