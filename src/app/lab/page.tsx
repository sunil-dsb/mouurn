import type { CSSProperties } from "react";

/* ============================================================
   /lab — refined single direction: warm-neutral palette (the
   colors that feel like mouurn) + a distinctive display serif
   (Fraunces) + finished editorial craft. Personality from type
   and layout, not from a saturated hue. Preview route.
   ============================================================ */

export const metadata = { title: "mouurn — design lab" };

const DISPLAY = "'Fraunces', serif";
const BODY = "'Jost', sans-serif";

const palette = {
  bg: "#F4F0E7",
  surface: "#FAF7F1",
  ink: "#2A2420",
  text: "#5E564C",
  soft: "#B4AA9B",
  accent: "#B07D4A",
  rule: "rgba(42,36,32,0.12)",
  ruleSoft: "rgba(42,36,32,0.07)",
  dark: "#221C17",
} as const;

const PILLARS = [
  {
    t: "Registry",
    d: "A simple way to let your people know exactly how to show up — because care is easier to give when it has somewhere to go.",
    icon: (
      <>
        <path d="M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
        <path d="M12 8l0 13" />
        <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
        <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
      </>
    ),
  },
  {
    t: "Gather",
    d: "A place to come together: share memories, post updates, coordinate care, or simply hold space for someone you love.",
    icon: (
      <>
        <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
        <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <path d="M17 10h2a2 2 0 0 1 2 2v1" />
        <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
      </>
    ),
  },
  {
    t: "Plan",
    d: "A few gentle questions, and a clear plan for what to say, what to bring, and what to do next.",
    icon: (
      <>
        <path d="M8 16l2 -6l6 -2l-2 6l-6 2" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      </>
    ),
  },
  {
    t: "Read & Reflect",
    d: "Essays on grief, ritual, and what comes after.",
    icon: (
      <>
        <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
        <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
        <path d="M3 6l0 13" />
        <path d="M12 6l0 13" />
        <path d="M21 6l0 13" />
      </>
    ),
  },
  {
    t: "Shop",
    d: "Things that truly help, from the practical to the beautiful — at every price, for every kind of loss.",
    icon: (
      <>
        <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.966 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
        <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
      </>
    ),
  },
];

const CATEGORIES = [
  ["the griever", "In the thick of it. Needing practical help, a plan, and people to show up."],
  ["the helper", "The sister, the friend, the coworker who wants to do something real."],
  ["the anticipatory", "Their person is still here, but not for long. Planning ahead with love."],
  ["the long-term", "Two years out. Five years out. Still carrying it, still deserving of a place."],
  ["the separated", "A marriage or partnership ending is a loss — and deserves the same tenderness."],
  ["the diagnosed", "A diagnosis changes everything. We're here for the uncertain middle."],
  ["the complicated", "Grief doesn't require a good relationship. It only requires a loss."],
  ["the displaced", "You lost your home to fire or flood. Starting over is its own kind of grief."],
  ["the ambiguous", "Estrangement. Addiction. Someone still alive, but gone. Grief without a funeral."],
  ["the caregiver", "Exhausted from holding it all together. Your grief matters too."],
  ["the unseen", "Miscarriage, stillbirth, infertility — a loss the world often doesn't see."],
  ["the pet lover", "Their life mattered. Your grief matters. Full stop."],
];

const eyebrow: CSSProperties = {
  fontFamily: BODY,
  fontSize: 11,
  fontWeight: 400,
  letterSpacing: "0.26em",
  textTransform: "uppercase",
  color: palette.soft,
};

const h = (size: number, lh = 1.06): CSSProperties => ({
  fontFamily: DISPLAY,
  fontWeight: 300,
  fontSize: size,
  lineHeight: lh,
  color: palette.ink,
  margin: 0,
  letterSpacing: "-0.01em",
});

const PAD = "0 64px";

export default function Lab() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..500;1,9..144,300..500&display=swap"
      />
      <style>{`
        .lab-nav-link {
          position: relative;
          cursor: pointer;
        }
        .lab-nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -4px;
          height: 0.5px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .lab-nav-link:hover::after { transform: scaleX(1); }
        .lab-btn { transition: opacity 0.2s ease; }
        .lab-btn:hover { opacity: 0.85; }
        .lab-row { transition: background 0.25s ease; }
        .lab-row:hover { background: rgba(250, 247, 241, 0.8); }
        .lab-row .lab-ic { transition: color 0.25s ease; }
        .lab-row:hover .lab-ic { color: #B07D4A; }
        .lab-row .lab-arrow { transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1); }
        .lab-row:hover .lab-arrow { transform: translateX(7px); }
        .lab-card { transition: transform 0.25s ease; }
        .lab-card:hover { transform: translateY(-3px); }
        .lab-foot-link { color: rgba(244,240,231,0.7); transition: color 0.18s ease; cursor: pointer; }
        .lab-foot-link:hover { color: #F4F0E7; }
      `}</style>
      <main style={{ background: palette.bg, color: palette.text, fontFamily: BODY, fontWeight: 300 }}>
        {/* ANNOUNCEMENT BAR */}
        <div style={{ background: palette.dark, color: "#F4F0E7" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 46,
              padding: PAD,
            }}
          >
            <p style={{ margin: 0, fontFamily: BODY, fontSize: 12, fontWeight: 300, letterSpacing: "0.04em", color: "#F4F0E7" }}>
              Introducing the{" "}
              <span
                style={{
                  borderBottom: "0.5px solid rgba(244,240,231,0.55)",
                  paddingBottom: 2,
                  cursor: "pointer",
                }}
              >
                mouurn Registry
              </span>
              {" "}— a new way to give and receive support in grief.
            </p>
          </div>
        </div>

        {/* NAV */}
        <nav
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            height: 76,
            padding: PAD,
            borderBottom: `0.5px solid ${palette.rule}`,
          }}
        >
          <div style={{ display: "flex", gap: 30, fontFamily: BODY, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: palette.ink }}>
            <span className="lab-nav-link">Registry</span>
            <span className="lab-nav-link">Shop</span>
            <span className="lab-nav-link">Plan</span>
            <span className="lab-nav-link">Read</span>
          </div>
          <div style={{ fontFamily: DISPLAY, fontSize: 27, letterSpacing: "0.34em", color: palette.ink, textAlign: "center" }}>
            mouurn
          </div>
          <div style={{ display: "flex", gap: 30, justifyContent: "flex-end", fontFamily: BODY, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: palette.ink }}>
            <span className="lab-nav-link">Gather</span>
            <span className="lab-nav-link">About</span>
            <span style={{ color: palette.ink, fontWeight: 500, borderBottom: `0.5px solid ${palette.accent}`, paddingBottom: 2 }}>Start here</span>
          </div>
        </nav>

        {/* HERO */}
        <section style={{ position: "relative", height: 600, overflow: "hidden", background: palette.dark }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bg-8.png" alt="A wrapped bouquet resting on the handle of a black door" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(34,28,23,0.74), rgba(34,28,23,0.12) 52%, transparent)" }} />
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "0 64px 64px" }}>
            <p style={{ ...eyebrow, color: "rgba(244,240,231,0.82)", marginBottom: 20 }}>For every kind of loss</p>
            <h1 style={{ ...h(62, 1.04), color: "#F4F0E7", maxWidth: 640 }}>
              When someone you love <em style={{ fontStyle: "italic" }}>is grieving.</em>
            </h1>
            <p style={{ fontFamily: DISPLAY, fontStyle: "italic", fontWeight: 300, fontSize: 23, color: "rgba(244,240,231,0.9)", margin: "16px 0 30px" }}>
              We help you show up.
            </p>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 13, background: "#F4F0E7", color: palette.ink, padding: "16px 32px", fontFamily: BODY, fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Create a registry <span style={{ color: palette.accent }}>→</span>
            </span>
          </div>
        </section>

        {/* STORY */}
        <section style={{ padding: "100px 64px", borderBottom: `0.5px solid ${palette.rule}`, display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80, alignItems: "start", maxWidth: 1280, margin: "0 auto" }}>
          <div>
            <p style={{ ...eyebrow, marginBottom: 22 }}>Why mouurn exists</p>
            <h2 style={h(46, 1.1)}>
              Grief lasts longer <br />than our <em style={{ fontStyle: "italic" }}>rituals.</em>
            </h2>
          </div>
          <div style={{ fontFamily: DISPLAY, fontSize: 18, lineHeight: 1.85, color: "#52493F", fontWeight: 300 }}>
            <p style={{ margin: 0 }}>
              When someone dies, people show up. They send flowers. They bring food. They mean every word of it. And then life resumes.
            </p>
            <p style={{ margin: "22px 0 0" }}>
              Not because people stop caring. Because most of us don&apos;t know what comes next. Long after the funeral is over, people are still carrying the weight of what happened.
            </p>
            <p style={{ margin: "22px 0 0" }}>
              mouurn was built for that part — a place for practical help, meaningful support, and care that lasts longer than a moment.
            </p>
            <span style={{ display: "inline-block", marginTop: 32, fontFamily: BODY, fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: palette.ink, borderBottom: `0.5px solid ${palette.accent}`, paddingBottom: 3 }}>
              Read our story →
            </span>
          </div>
        </section>

        {/* FORK */}
        <section style={{ padding: "100px 64px", borderBottom: `0.5px solid ${palette.rule}` }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ ...eyebrow, marginBottom: 16 }}>Where to begin</p>
            <h2 style={h(36, 1.15)}>
              Wherever you&apos;re standing, <em style={{ fontStyle: "italic" }}>there&apos;s a way in.</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", maxWidth: 1080, margin: "0 auto", border: `0.5px solid ${palette.rule}` }}>
            {[
              {
                tag: "For you",
                a: "I am",
                b: "grieving.",
                d: "You don't have to carry this alone. Find support, make a plan, and — when you're ready — let people know how to help.",
                cta: "Start here",
                icon: (
                  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                ),
              },
              {
                tag: "For someone you love",
                a: "I want to",
                b: "help.",
                d: "You want to show up — you just don't know how. Find the right words, the right gift, and simple ways to truly help.",
                cta: "Show me how",
                icon: (
                  <>
                    <path d="M10 9a3 3 0 1 0 -6 0a3 3 0 0 0 6 0" />
                    <path d="M2 20v-1a3 3 0 0 1 3 -3h2a3 3 0 0 1 3 3v1" />
                    <path d="M20 9a3 3 0 1 0 -6 0a3 3 0 0 0 6 0" />
                    <path d="M14 20v-1a3 3 0 0 1 3 -3h2a3 3 0 0 1 3 3v1" />
                  </>
                ),
              },
            ].map((c, i) => (
              <div key={c.b} style={{ background: palette.surface, padding: "60px 52px", position: "relative", borderRight: i === 0 ? `0.5px solid ${palette.rule}` : "none" }}>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ color: palette.soft, position: "absolute", top: 56, right: 52 }}
                >
                  {c.icon}
                </svg>
                <p style={{ ...eyebrow, marginBottom: 22 }}>{c.tag}</p>
                <h3 style={h(46, 1.04)}>
                  {c.a} <em style={{ fontStyle: "italic" }}>{c.b}</em>
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.8, margin: "20px 0 36px", maxWidth: "40ch" }}>{c.d}</p>
                <a
                  className="lab-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    background: palette.ink,
                    color: "#F4F0E7",
                    padding: "12px 24px",
                    fontFamily: BODY,
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  {c.cta} <span style={{ color: palette.accent }}>→</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* BRIDGE — pull quote over a faint warm image */}
        <section style={{ position: "relative", overflow: "hidden", padding: "100px 64px", textAlign: "center", borderBlock: `0.5px solid ${palette.rule}`, background: palette.surface }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/bg-4.png"
            alt=""
            aria-hidden
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
          {/* Heavy oat scrim — the image reads as warmth/texture, not a photo, so ink text stays legible */}
          <div
            aria-hidden
            style={{ position: "absolute", inset: 0, background: "rgba(244,240,231,0.50)" }}
          />
          <div style={{ position: "relative" }}>
            <div
              aria-hidden
              style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: 96, lineHeight: 0, height: 44, color: palette.accent, opacity: 0.45 }}
            >
              &ldquo;
            </div>
            <h2 style={{ ...h(42, 1.18), maxWidth: 840, margin: "0 auto" }}>
              People want to help. <em style={{ fontStyle: "italic" }}>They just don&apos;t know how.</em>
            </h2>
            <p style={{ fontFamily: DISPLAY, fontStyle: "italic", fontSize: 19, lineHeight: 1.8, maxWidth: 580, margin: "28px auto 0", color: "#6B6258" }}>
              mouurn exists to bridge the divide between grief and support. Everything we build is in service of one act: showing up.
            </p>
          </div>
        </section>

        {/* OFFERINGS — editorial 5-row list */}
        <section style={{ padding: "100px 64px", borderBottom: `0.5px solid ${palette.rule}` }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ ...eyebrow, marginBottom: 16 }}>What mouurn offers</p>
            <h2 style={h(36, 1.15)}>
              Everything built around <em style={{ fontStyle: "italic" }}>showing up.</em>
            </h2>
          </div>
          <div style={{ maxWidth: 1000, margin: "0 auto", borderTop: `0.5px solid ${palette.rule}` }}>
            {PILLARS.map((p) => (
              <a
                key={p.t}
                className="lab-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "52px 230px 1fr 44px",
                  alignItems: "center",
                  gap: 28,
                  padding: "32px 20px",
                  borderBottom: `0.5px solid ${palette.rule}`,
                  cursor: "pointer",
                }}
              >
                <svg
                  className="lab-ic"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ color: palette.soft }}
                >
                  {p.icon}
                </svg>
                <h3 style={h(30, 1.05)}>{p.t}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, margin: 0 }}>{p.d}</p>
                <span className="lab-arrow" style={{ color: palette.accent, textAlign: "right", fontSize: 18 }}>→</span>
              </a>
            ))}
          </div>
        </section>

        {/* EVERY LOSS — editorial grid, no pills */}
        <section style={{ padding: "100px 64px", background: palette.dark, color: "rgba(244,240,231,0.62)" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ ...eyebrow, color: palette.accent, marginBottom: 18 }}>Who mouurn is for</p>
            <h2 style={{ ...h(48, 1.1), color: "#F4F0E7", maxWidth: 720, margin: "0 auto 18px" }}>
              Every loss deserves <em style={{ fontStyle: "italic" }}>to be held.</em>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 540, margin: "0 auto" }}>
              No comparison. No hierarchy. Every kind of loss, every kind of griever.
            </p>
          </div>
          <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 5 }}>
            {CATEGORIES.map(([name, desc]) => (
              <div
                key={name}
                className="lab-card"
                style={{ background: "#F4F0E7", padding: "32px 30px", display: "flex", flexDirection: "column", gap: 14 }}
              >
                <span
                  aria-hidden
                  style={{ width: 24, height: "0.5px", background: palette.accent, opacity: 0.7 }}
                />
                <p style={{ fontFamily: DISPLAY, fontStyle: "italic", fontWeight: 400, fontSize: 26, color: palette.ink, margin: 0, lineHeight: 1.1 }}>{name}</p>
                <p style={{ fontFamily: BODY, fontSize: 14, lineHeight: 1.75, margin: 0, color: palette.text }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NEWSLETTER — full-width split card with imagery */}
        <section style={{ padding: "100px 64px", background: palette.bg }}>
          <div
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "0.95fr 1.05fr",
              border: `0.5px solid ${palette.rule}`,
              overflow: "hidden",
              background: palette.surface,
            }}
          >
            {/* Image side */}
            <div style={{ position: "relative", minHeight: 360 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/registry_hero.jpg"
                alt="A kraft-paper parcel tied with twine and a sprig of baby's breath"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Content side */}
            <div style={{ padding: "56px 72px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ ...eyebrow, marginBottom: 18 }}>mouurn with me</p>
              <h2 style={{ ...h(42, 1.1), marginBottom: 20 }}>
                Words for the <em style={{ fontStyle: "italic" }}>hardest days.</em>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, maxWidth: "44ch", margin: "0 0 40px" }}>
                A letter on grief, ritual, and how to show up — for the ones in the thick of it, and the ones standing beside them.
              </p>

              <div style={{ display: "flex", alignItems: "stretch", gap: 12, maxWidth: 460 }}>
                <input
                  type="email"
                  placeholder="Your email"
                  style={{
                    flex: 1,
                    background: "transparent",
                    border: "none",
                    borderBottom: `0.5px solid ${palette.ink}`,
                    fontFamily: BODY,
                    fontSize: 14,
                    fontWeight: 300,
                    color: palette.ink,
                    padding: "12px 2px",
                    outline: "none",
                  }}
                />
                <button
                  className="lab-btn"
                  style={{
                    background: palette.ink,
                    color: "#F4F0E7",
                    border: "none",
                    padding: "13px 26px",
                    fontFamily: BODY,
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  Subscribe
                </button>
              </div>

              <p style={{ fontSize: 11, letterSpacing: "0.04em", color: palette.soft, margin: "22px 0 0" }}>
                No noise. One letter, once a month. Unsubscribe any time.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER — big wordmark base */}
        <footer style={{ background: palette.dark, color: "rgba(244,240,231,0.7)", fontFamily: BODY, overflow: "hidden" }}>
          {/* Link columns */}
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "64px 64px 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
              {[
                { head: "Navigate", items: ["Registry", "Shop", "Plan", "Read", "Gather", "About"] },
                { head: "mouurn", items: ["Our story", "Our team", "Press", "Get in touch"] },
                { head: "Contact", items: ["hello@mouurn.com", "press@mouurn.com", "practitioners@mouurn.com", "corporate@mouurn.com"] },
                { head: "Follow", items: ["Instagram", "@mouurnwithme"] },
              ].map((col) => (
                <div key={col.head}>
                  <p style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: palette.accent, marginBottom: 24 }}>
                    {col.head}
                  </p>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 9, fontSize: 13.5 }}>
                    {col.items.map((l) => (
                      <li key={l}><span className="lab-foot-link">{l}</span></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Giant wordmark — graphic close */}
          <div style={{ maxWidth: 1320, margin: "0 auto", textAlign: "right", padding: "0 64px", lineHeight: 0.74 }}>
            <span
              aria-hidden
              style={{
                fontFamily: DISPLAY,
                fontWeight: 300,
                fontSize: "clamp(60px, 13vw, 200px)",
                letterSpacing: "0.04em",
                color: "rgba(244,240,231,0.16)",
                display: "inline-block",
              }}
            >
              mouurn
            </span>
          </div>

          {/* Legal bar */}
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 64px" }}>
            <div
              style={{
                borderTop: "0.5px solid rgba(244,240,231,0.12)",
                padding: "26px 0 34px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 24,
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: 11.5, letterSpacing: "0.04em", color: "rgba(244,240,231,0.42)" }}>
                © 2026 mouurn · Full Stop Productions LLC
              </span>
              <div style={{ display: "flex", gap: 26, fontSize: 11.5, letterSpacing: "0.04em" }}>
                <span className="lab-foot-link">Privacy</span>
                <span className="lab-foot-link">Terms</span>
                <span className="lab-foot-link">Cookie Policy</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
