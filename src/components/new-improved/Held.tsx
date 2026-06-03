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
    <section className="border-b-[0.5px] border-new-rule bg-new-oat py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6 md:px-12">
        <div className="mx-auto mb-14 max-w-[640px] text-center md:mb-16">
          <span className="mx-auto mb-6 block h-px w-10 bg-new-gold" />
          <h2 className="font-serif text-[clamp(28px,3vw,42px)] font-light leading-[1.15] text-new-ink">
            Every loss deserves <em className="italic">to be held.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-[46ch] text-[15px] font-light leading-[1.7] text-new-muted">
            No comparison. No hierarchy. Every kind of loss, every kind of
            griever.
          </p>
        </div>

        {/* gap-px hairline grid — calm, even at 1/2/3 columns */}
        <div className="grid grid-cols-1 gap-px border-[0.5px] border-new-rule bg-new-rule sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="bg-new-white px-8 py-9">
              <h3 className="font-serif text-[20px] font-light text-new-ink">
                {g.title}
              </h3>
              <p className="mt-2.5 text-[13px] font-light leading-[1.8] text-new-muted">
                {g.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
