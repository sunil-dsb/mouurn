import Link from "next/link";

export default function ItemsGrid() {
  const items = [
    {
      tag: "Comfort",
      name: (
        <>
          Baloo<br />
          <em className="italic">weighted blanket</em>
        </>
      ),
      desc: "100% cotton, lead-free glass beads. Give them something that holds them like a gentle hug. Leave it at their door with a name, a sentiment, or just three words: you are loved.",
      btnText: "Add to registry",
    },
    {
      tag: "Comfort",
      name: (
        <>
          Flamingo Estate<br />
          <em className="italic">personalized candle</em>
        </>
      ),
      desc: "Organic, garden-grown, and made with intention. Personalize it with a name, a sentiment, or simply: you are loved. A ritual you can give.",
      btnText: "Add to registry",
    },
    {
      tag: "Reflection",
      name: (
        <>
          Moleskine<br />
          <em className="italic">journal</em>
        </>
      ),
      desc: "For everything that needs somewhere to go at 3am. Not expensive. Not precious. Just pages, and somewhere for grief to land.",
      btnText: "Add to registry",
    },
    {
      tag: "Books",
      name: (
        <>
          <em className="italic">Moving On Doesn’t Mean Letting Go</em><br />
          book
        </>
      ),
      desc: "Gina Moffa’s essential guide to grief. Honest, warm, and ready for them when they’re ready — because nobody reads a grief book on day one.",
      btnText: "Add to registry",
    },
    {
      tag: "Healing · Fund",
      name: (
        <>
          Claire Bidwell Smith’s<br />
          <em className="italic">Conscious Grieving retreat</em>
        </>
      ),
      desc: "Contribute toward an immersive grief retreat with one of the most trusted voices in grief. The kind of healing that doesn’t happen in an hour.",
      btnText: "Add to registry",
    },
    {
      tag: "Memory · Wearable",
      name: (
        <>
          Adina Reyter<br />
          <em className="italic">initial necklace</em>
        </>
      ),
      desc: "Give them their person’s initial to wear close to their heart. A delicate gold initial necklace — subtle, beautiful, and carried with them every day.",
      btnText: "Add to registry",
    },
    {
      tag: "Comfort · For everyone",
      name: (
        <>
          Alo<br />
          <em className="italic">cashmere hoodie</em>
        </>
      ),
      desc: "A wool cashmere hoodie — elevated, cozy, and something any grieving person will actually wear every day. For him, for her, for anyone who needs something beautiful to wrap around themselves.",
      btnText: "Add to registry",
    },
    {
      tag: "Wellness",
      name: (
        <>
          Theragun<br />
          <em className="italic">percussion therapy</em>
        </>
      ),
      desc: "Grief lives in the body. Tension, sleeplessness, the physical weight of loss. A Theragun gives them somewhere to put it.",
      btnText: "Add to registry",
    },
    {
      tag: "Nourishment",
      name: (
        <>
          Chef of the month<br />
          <em className="italic">subscription</em>
        </>
      ),
      desc: "A different exceptional chef’s meal delivered every month — because grief doesn’t end in a month, and neither should the care. Dinner taken care of, long after everyone else has moved on.",
      btnText: "Add to registry",
    },
    {
      tag: "Practical",
      name: (
        <>
          Packing & organizing —<br />
          <em className="italic">one day</em>
        </>
      ),
      desc: "A professional organizer to help sort, pack, and make sense of a home full of belongings. One of the most practical — and least asked for — things you can offer.",
      btnText: "Add to registry",
    },
    {
      tag: "Presence",
      name: (
        <>
          Make the<br />
          <em className="italic">holiday magic</em>
        </>
      ),
      desc: "Decorate the tree, light the menorah, wrap the gifts, plan the beach barbecue. Show up and make it happen so they don’t have to do it alone.",
      btnText: "Add to registry",
    },
    {
      tag: "mouurn · Coming soon",
      name: (
        <>
          A mouurn<br />
          <em className="italic">memorial vessel</em>
        </>
      ),
      desc: "We are designing our own line of memorial urns and remembrance necklaces — objects beautiful enough to live in the light, not hidden away. Add to your registry now and we’ll notify you when they’re ready.",
      btnText: "Add to registry",
    },
  ];

  return (
    <>
      <div className="p-[40px_60px_28px] hairline-b flex items-baseline justify-between">
        <div>
          <div className="text-label tracking-[0.24em] text-soft uppercase mb-[8px]">
            What you — or they — actually need
          </div>
          <div className="font-serif text-story-sm font-light text-ink">
            Twelve things that <em className="italic">actually help.</em>
          </div>
        </div>
        <Link href="#" className="text-label tracking-[0.16em] text-muted uppercase no-underline hover:text-ink transition-colors">
          See all →
        </Link>
      </div>
      <div className="grid grid-cols-3 hairline-b">
        {items.map((item, i) => {
          const isRightEdge = (i + 1) % 3 === 0;
          const isBottomRow = i >= items.length - 3;

          return (
            <div
              key={i}
              className={`p-[40px_36px] cursor-pointer transition-colors duration-150 hover:bg-hover ${
                isRightEdge ? "" : "hairline-r"
              } ${isBottomRow ? "" : "hairline-b"}`}
            >
              <div className="text-micro tracking-[0.22em] text-soft uppercase mb-[12px]">
                {item.tag}
              </div>
              <div className="font-serif text-item-name font-light text-ink leading-[1.2] mb-[8px]">
                {item.name}
              </div>
              <div className="text-small text-muted leading-[1.9] font-light mb-[20px]">
                {item.desc}
              </div>
              <button className="text-micro tracking-[0.18em] text-muted uppercase inline-flex items-center gap-[6px] cursor-pointer bg-transparent border border-soft p-[8px_14px] font-sans transition-all duration-150 hover:border-ink hover:text-ink">
                <i className="ti ti-plus font-[600!important] text-label! "></i> {item.btnText}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
