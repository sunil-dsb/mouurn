import type { Metadata } from "next";
import Image from "next/image";
import Kicker from "../../components/improved/Kicker";

export const metadata: Metadata = {
  title: "mouurn — Design System",
  description: "The mouurn design system: warmth, restraint, and a flicker of light.",
};

/* ----------------------------- data ----------------------------- */

const surfaces = [
  { name: "Paper", hex: "#FCFBF8", classes: ["bg-paper"], use: "Crisp surfaces" },
  { name: "Oat", hex: "#F5F2EC", classes: ["bg-oat"], use: "Primary warm background" },
  { name: "Sand", hex: "#EDE7DB", classes: ["bg-sand"], use: "Layered / alternating sections" },
  { name: "Clay", hex: "#DED7C9", classes: ["bg-clay"], use: "Quiet cards & blocks" },
];

const coverImages = [
  { src: "/bg.webp", alt: "Flowers left at a door" },
  { src: "/bg-4.png", alt: "A soft, open sky" },
  { src: "/bg-3.png", alt: "A quiet scattering of stars" },
  { src: "/bg-5.png", alt: "Clouds drifting at dusk" },
];

const darks = [
  { name: "Ink", hex: "#1A1816", classes: ["text-ink", "bg-ink"], use: "Primary text", dark: true },
  { name: "Bark", hex: "#2A241D", classes: ["bg-bark"], use: "Warm dark sections, footer", dark: true },
];

const accent = [
  { name: "Marigold", hex: "#C18A45", classes: ["bg-amber", "text-amber"], use: "Marks, rules, accents — sparingly" },
  { name: "Marigold deep", hex: "#8F5E22", classes: ["text-amber-deep"], use: "Accent text (passes contrast)" },
];

const texts = [
  { name: "Muted", hex: "#8A8480", classes: ["text-muted"], use: "Secondary — large text only" },
  { name: "Soft", hex: "#C8C4BC", classes: ["text-soft"], use: "Decorative / placeholders only" },
];

const hairlines = [
  { name: "Rule", hex: "rgba(26,24,22,.08)", classes: ["border-rule"], use: "Default 0.5px dividers" },
  { name: "Strong", hex: "rgba(26,24,22,.15)", classes: ["border-strong"], use: "Field underlines, nav" },
];

const serifScale = [
  { token: "text-display", meta: "72px · 1.02", role: "Editorial display (v2)", sample: "A place to be held." },
  { token: "text-hero", meta: "52px · 1.05", role: "Hero headline", sample: "When words aren't enough." },
  { token: "text-path", meta: "44px · 1.05", role: "Path heading", sample: "I am grieving." },
  { token: "text-story", meta: "36px · 1.2", role: "Story heading", sample: "No one teaches us how." },
  { token: "text-newsletter", meta: "36px · 1.1", role: "Newsletter heading", sample: "Words for the hardest days." },
  { token: "text-mission", meta: "30px · 1.5", role: "Mission heading", sample: "People want to help." },
  { token: "text-lead", meta: "22px · 1.6", role: "Serif lead / intro (v2)", sample: "Real ways to help, and a place to hold it all." },
  { token: "text-prose", meta: "18px · 1.9", role: "Serif body", sample: "Real ways to help, real words to say." },
  { token: "text-teaser", meta: "18px · 1.2", role: "Teaser heading", sample: "What you actually need." },
];

const sansScale = [
  { token: "text-body", meta: "13px · 2.0", role: "Body copy, fields", sample: "A registry for grief, set up in five minutes." },
  { token: "text-sub", meta: "12px · 1.95", role: "Sub-copy", sample: "In service of one act showing up." },
  { token: "text-small", meta: "11px · 1.9", role: "Teaser copy, footer links", sample: "Beyond flowers and lasagna." },
  { token: "text-nav", track: "tracking-nav", meta: "10px · 0.12em", role: "Nav links", sample: "REGISTRY", upper: true },
  { token: "text-label", track: "tracking-eyebrow", meta: "9px · 0.24em", role: "Eyebrows, labels", sample: "WHY MOUURN EXISTS", upper: true },
];

// The elevated scale shipped on /improved — same token names, re-scoped on
// the .improved-type wrapper to fluid clamp() sizes with tighter leading.
const elevatedScale: {
  font: "serif" | "sans";
  token: string;
  track?: string;
  meta: string;
  role: string;
  sample: string;
  upper?: boolean;
}[] = [
  { font: "serif", token: "text-hero", meta: "44 → 72px · 1.06", role: "Hero headline (the single largest)", sample: "When words aren't enough." },
  { font: "serif", token: "text-path", meta: "36 → 48px · 1.08", role: "Path / section heading", sample: "I am grieving." },
  { font: "serif", token: "text-newsletter", meta: "32 → 44px · 1.08", role: "Newsletter heading", sample: "Words for the hardest days." },
  { font: "serif", token: "text-story", meta: "30 → 40px · 1.12", role: "Story heading", sample: "No one teaches us how." },
  { font: "serif", token: "text-mission", meta: "26 → 32px · 1.35", role: "Mission heading", sample: "People want to help." },
  { font: "serif", token: "text-lead", meta: "19 → 23px · 1.6", role: "Serif lead / intro", sample: "Real ways to help, and a place to hold it all." },
  { font: "serif", token: "text-prose", meta: "19px · 1.7", role: "Serif body", sample: "Real words to say, real ways to help." },
  { font: "sans", token: "text-body", meta: "15px · 1.7", role: "Body copy, fields", sample: "A registry for grief, set up in five minutes." },
  { font: "sans", token: "text-label", track: "tracking-eyebrow", meta: "11px · 0.24em", role: "Eyebrows, labels (11px floor)", sample: "WHY MOUURN EXISTS", upper: true },
];

const tracking = [
  { token: "tracking-fine", val: "0.06em", role: "Footer copyright" },
  { token: "tracking-sub", val: "0.08em", role: "Hero sub-line" },
  { token: "tracking-nav", val: "0.12em", role: "Nav links" },
  { token: "tracking-cta", val: "0.18em", role: "CTA / arrow links" },
  { token: "tracking-label", val: "0.2em", role: "Footer labels" },
  { token: "tracking-eyebrow", val: "0.24em", role: "Eyebrows" },
  { token: "tracking-logo", val: "0.32em", role: "Logo wordmark" },
];

const spacing = [8, 12, 16, 20, 24, 28, 32, 40, 48, 60, 72, 80];

const a11y = [
  { color: "text-ink", bg: "bg-paper", ratio: "17:1", verdict: "pass" },
  { color: "text-amber-deep", bg: "bg-paper", ratio: "4.7:1", verdict: "pass" },
  { color: "text-quiet", bg: "bg-paper", ratio: "5.0:1", verdict: "pass" },
  { color: "text-muted", bg: "bg-paper", ratio: "3.7:1", verdict: "large" },
  { color: "text-soft", bg: "bg-paper", ratio: "1.7:1", verdict: "fail" },
];

/* --------------------------- helpers ---------------------------- */

function Code({ children }: { children: React.ReactNode }) {
  return (
    <span className="mr-1.5 inline-block bg-ink px-2 py-1 font-mono text-nav leading-none text-oat">
      {children}
    </span>
  );
}

function Verdict({ v }: { v: string }) {
  const map: Record<string, string> = {
    pass: "Passes AA",
    large: "Large text only",
    fail: "Fails decorative",
  };
  const dot = v === "pass" ? "●" : v === "large" ? "◐" : "○";
  return (
    <span className="inline-flex items-center gap-1.5 text-nav uppercase tracking-nav text-ink">
      <span aria-hidden="true" className={v === "pass" ? "text-amber" : ""}>
        {dot}
      </span>
      {map[v]}
    </span>
  );
}

function Section({
  num,
  eyebrow,
  title,
  note,
  tone = "paper",
  tight = false,
  className = "",
  children,
}: {
  num: string;
  eyebrow: string;
  title: string;
  note?: string;
  tone?: "paper" | "oat" | "sand";
  tight?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const bg = tone === "oat" ? "bg-oat" : tone === "sand" ? "bg-sand" : "bg-paper";
  const padY = tight ? "py-12 md:py-16" : "py-20 md:py-28";
  return (
    <section className={`${bg} border-b-[0.5px] border-rule px-6 ${padY} sm:px-10 md:px-15 ${className}`}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-nav text-amber-deep">{num}</span>
        <span className="text-nav uppercase tracking-eyebrow text-quiet">{eyebrow}</span>
      </div>
      <h2 className="mt-5 font-serif text-path font-light leading-[1.05] text-ink md:text-hero">
        {title}
      </h2>
      {note && <p className="mt-5 max-w-2xl text-lead font-light text-quiet">{note}</p>}
      <div className={tight ? "mt-8" : "mt-14"}>{children}</div>
    </section>
  );
}

function Swatch({
  name,
  hex,
  classes,
  use,
  dark = false,
}: {
  name: string;
  hex: string;
  classes: string[];
  use: string;
  dark?: boolean;
}) {
  return (
    <div className="border-[0.5px] border-rule bg-paper">
      <div className="h-24" style={{ background: hex }} />
      <div className={`border-t-[0.5px] border-rule px-4 py-4 ${dark ? "bg-ink" : ""}`}>
        <div className={`font-serif text-teaser leading-none ${dark ? "text-oat" : "text-ink"}`}>
          {name}
        </div>
        <div className={`mt-2 font-mono text-nav ${dark ? "text-footer-link" : "text-quiet"}`}>
          {hex}
        </div>
        <div className="mt-3 flex flex-wrap gap-y-1.5">
          {classes.map((c) => (
            <Code key={c}>{c}</Code>
          ))}
        </div>
        <div className={`mt-3 text-small leading-snug ${dark ? "text-footer-link" : "text-ink"}`}>
          {use}
        </div>
      </div>
    </div>
  );
}

function ColorRow({ items }: { items: typeof surfaces }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map((c) => (
        <Swatch key={c.name} {...c} />
      ))}
    </div>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-6 text-nav uppercase tracking-label text-amber-deep">{children}</p>;
}

function TypeRow({
  font,
  token,
  track,
  meta,
  role,
  sample,
  upper,
}: {
  font: "serif" | "sans";
  token: string;
  track?: string;
  meta: string;
  role: string;
  sample: string;
  upper?: boolean;
}) {
  const fam = font === "serif" ? "font-serif font-light" : "font-sans font-light";
  return (
    <div className="grid grid-cols-1 gap-3 border-b-[0.5px] border-rule pb-8 md:grid-cols-[240px_1fr] md:items-baseline">
      <div className="text-small">
        <div className="mb-2 flex flex-wrap gap-y-1.5">
          <Code>{token}</Code>
          {track && <Code>{track}</Code>}
        </div>
        <div className="font-mono text-nav text-ink">{meta}</div>
        <div className="mt-1 text-quiet">{role}</div>
      </div>
      <div className={`${fam} ${token} ${track ?? ""} ${upper ? "uppercase" : ""} text-ink`}>
        {sample}
      </div>
    </div>
  );
}

/* ----------------------------- page ----------------------------- */

export default function StyleGuide() {
  return (
    <main className="mx-auto max-w-site bg-paper">
      {/* Cover */}
      <header className="relative overflow-hidden border-b-[0.5px] border-strong bg-oat px-6 pt-8 pb-0 text-center sm:px-10 md:px-15 md:pt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(60% 50% at 50% 0%, rgba(193,138,69,0.10), transparent 70%)",
          }}
        />
        <div className="grain" aria-hidden="true" />
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-amber" />
            <span className="text-nav uppercase tracking-eyebrow text-amber-deep">
              Mouurns Design System
            </span>
            <span className="h-px w-8 bg-amber" />
          </div>
          <Image
            src="/sunflower.webp"
            alt="A single sunflower"
            width={110}
            height={159}
            priority
            className="mx-auto mt-5 h-auto w-16 md:w-20"
          />
          <h1 className="mx-auto mt-5 max-w-3xl font-serif text-story font-light leading-[1.1] text-ink md:text-path">
            Warmth, restraint, <em className="italic">and a flicker of light.</em>
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-serif text-prose font-light text-quiet">
            A grief brand should feel held, not loud. This is the language we build
            with quiet neutrals, one warm light, and type that breathes.
          </p>
          <p className="mx-auto mt-4 max-w-md text-sub text-quiet">
            Every value is a token, defined once in{" "}
            <span className="font-mono text-[13px] text-ink">app/globals.css</span>.
          </p>
        </div>

        {/* A slim image band across the foot of the cover — small height, a
            warm duotone wash unifying every photo into the marigold family. */}
        <div className="relative z-10 mt-8 -mx-6 sm:-mx-10 md:-mx-15 md:mt-10">
          <div className="grid grid-cols-2 gap-px bg-rule sm:grid-cols-4">
            {coverImages.map((img) => (
              <div
                key={img.src}
                className="relative h-24 overflow-hidden bg-sand md:h-28"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover object-center"
                  style={{ filter: "saturate(0.9) contrast(0.96)" }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-amber/25 mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Color */}
      <Section
        num="01"
        eyebrow="Color"
        title="A warm, quiet palette."
        note="Layered neutrals give depth; a single earthy light, marigold, carries warmth and remembrance, used sparingly."
      >
        <GroupLabel>Surfaces</GroupLabel>
        <ColorRow items={surfaces} />
        <div className="mt-14">
          <GroupLabel>Darks</GroupLabel>
        </div>
        <ColorRow items={darks} />
        <div className="mt-14">
          <GroupLabel>Accent — the one light</GroupLabel>
        </div>
        <ColorRow items={accent} />
        <div className="mt-14">
          <GroupLabel>Text &amp; hairlines</GroupLabel>
        </div>
        <ColorRow items={[...texts, ...hairlines]} />
      </Section>

      {/* Typography — serif */}
      <Section
        num="02"
        eyebrow="Typography"
        title="Cormorant Garamond."
        tight
        note="The literary voice. Large and delicate, with italics for tenderness. These are the reference sizes used by the faithful clone at / — see §07 for the elevated /improved scale."
        tone="oat"
      >
        <div className="flex flex-col gap-8">
          {serifScale.map((t) => (
            <TypeRow key={t.token + t.role} font="serif" {...t} />
          ))}
        </div>
      </Section>

      {/* Typography — sans */}
      <Section
        num="02"
        eyebrow="Typography"
        title="Jost."
        tight
        note="The calm, modern counterpoint: body, navigation, and quiet labels."
      >
        <div className="flex flex-col gap-8">
          {sansScale.map((t) => (
            <TypeRow key={t.token + t.role} font="sans" {...t} />
          ))}
        </div>
      </Section>

      {/* Tracking */}
      <Section
        num="03"
        tight
        eyebrow="Tracking"
        title="Letter-spacing."
        note="The tokens available: pair tracking-* with any text."
        tone="sand"
      >
        <div className="grid gap-x-12 gap-y-4 sm:grid-cols-2">
          {tracking.map((tr) => (
            <div
              key={tr.token}
              className="flex items-center justify-between gap-4 border-b-[0.5px] border-rule pb-3"
            >
              <div className="flex items-center gap-2">
                <Code>{tr.token}</Code>
                <span className="font-mono text-nav text-ink">{tr.val}</span>
              </div>
              <span className="text-small text-quiet">{tr.role}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Spacing */}
      <Section
        num="04"
        eyebrow="Spacing"
        title="Room to breathe."
        note="Space is the brand. Generous, rhythmic, never cramped."
      >
        <div className="grid grid-cols-4 gap-4 md:grid-cols-6">
          {spacing.map((s) => (
            <div key={s} className="border-[0.5px] border-rule p-4">
              <div className="font-mono text-nav text-ink">{s}px</div>
              <div className="mt-3 h-1.5 bg-amber" style={{ width: s }} />
            </div>
          ))}
        </div>
      </Section>

      {/* Accessibility */}
      <Section
        num="05"
        tight
        eyebrow="Accessibility"
        title="Legible, with care."
        note="Measured WCAG contrast. The marigold accent passes AA on light, soft stays decorative."
        tone="oat"
      >
        <div className="grid gap-px border-[0.5px] border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {a11y.map((r) => (
            <div key={r.color} className={`${r.bg} p-6`}>
              <div className={`font-serif text-teaser ${r.color}`}>The quick brown fox</div>
              <div className="mt-4 flex flex-wrap gap-y-1.5">
                <Code>{r.color}</Code>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-mono text-nav text-ink">{r.ratio}</span>
                <Verdict v={r.verdict} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Components */}
      <Section
        num="06"
        tight
        eyebrow="Components"
        title="The pieces."
        className="pb-24 md:pb-32"
        note="Reusable @utility primitives use the class name directly."
        tone="oat"
      >
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          <div>
            <div className="mb-4">
              <Code>btn-primary</Code>
            </div>
            <button className="btn-primary">Subscribe →</button>
          </div>
          <div>
            <div className="mb-4">
              <Code>cta-link</Code>
            </div>
            <a href="#" className="cta-link">
              Read our story →
            </a>
          </div>
          <div>
            <div className="mb-4">
              <Code>arrow-link</Code>
            </div>
            <a href="#" className="arrow-link">
              Find your way in →
            </a>
          </div>
          <div>
            <div className="mb-4">
              <Code>eyebrow</Code>
            </div>
            <div className="eyebrow">Why mouurn exists</div>
          </div>
          <div>
            <div className="mb-4">
              <Code>nav-link</Code>
            </div>
            <a href="#" className="nav-link">Registry</a>
          </div>
          <div>
            <div className="mb-4">
              <Code>badge</Code>
            </div>
            <span className="badge">Coming soon</span>
          </div>
          <div>
            <div className="mb-4">
              <Code>icon-button</Code>
            </div>
            <button className="icon-button border-[0.5px] border-rule" aria-label="Search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
            </button>
          </div>
        </div>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4">
              <Code>field</Code>
            </div>
            <input className="field" placeholder="your@email.com" aria-label="Email" />
          </div>
          <div className="bg-bark p-8">
            <div className="mb-4">
              <Code>field-dark</Code>
            </div>
            <input className="field-dark" placeholder="your@email.com" aria-label="Email" />
          </div>
        </div>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4">
              <Code>card</Code>
            </div>
            <div className="card">
              <div className="eyebrow">Registry</div>
              <div className="mt-3 font-serif text-teaser text-ink">What you actually need.</div>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <Code>measure</Code>
            </div>
            <p className="measure text-body text-quiet">
              A readable line length keeps body text comfortable never running so
              wide that the eye loses its place between lines.
            </p>
          </div>
        </div>
      </Section>

      {/* Elevated — /improved */}
      <Section
        num="07"
        tight
        eyebrow="Elevated"
        title="The /improved layer."
        tone="sand"
        className="pb-24 md:pb-32"
        note="Same token names, re-scoped on the .improved-type wrapper: one fluid scale (clamp), tighter leading, an 11px label floor, plus section rhythm and soft elevation. The faithful clone at / keeps the reference scale shown above — nothing here is a new class, only new values."
      >
        <div className="improved-type">
          <GroupLabel>Type scale — fluid &amp; tighter</GroupLabel>
          <div className="flex flex-col gap-8">
            {elevatedScale.map((t) => (
              <TypeRow key={t.token + t.role} {...t} />
            ))}
          </div>

          <div className="mt-16">
            <GroupLabel>CTA tiers</GroupLabel>
            <div className="grid gap-10 sm:grid-cols-3">
              <div>
                <div className="mb-4 text-small text-quiet">
                  Primary — the core action
                </div>
                <button className="inline-flex items-center bg-amber-deep px-7 py-3 font-serif text-[16px] font-normal leading-none text-oat transition-opacity hover:opacity-90">
                  Start a registry
                </button>
              </div>
              <div>
                <div className="mb-4 text-small text-quiet">
                  Secondary — outline
                </div>
                <button className="border border-ink/20 px-6 py-2.5 text-label uppercase tracking-cta text-ink transition-colors duration-200 hover:border-amber-deep hover:bg-amber-deep hover:text-oat">
                  Find your way in →
                </button>
              </div>
              <div>
                <div className="mb-4 text-small text-quiet">
                  Tertiary — quiet link
                </div>
                <a
                  href="#"
                  className="inline-block border-b border-amber pb-1 text-label uppercase tracking-cta text-amber-deep transition-opacity hover:opacity-70"
                >
                  Read our story →
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <div>
              <GroupLabel>Kicker</GroupLabel>
              <Kicker>Why mouurn exists</Kicker>
              <div className="mt-5 flex">
                <Code>Kicker</Code>
              </div>
            </div>
            <div>
              <GroupLabel>Elevation</GroupLabel>
              <div className="bg-paper p-8 shadow-soft">
                <div className="font-serif text-teaser text-ink">
                  Lifted, not boxed.
                </div>
                <div className="mt-3 text-small text-quiet">
                  A warm, low shadow so cards read as paper.
                </div>
              </div>
              <div className="mt-5 flex">
                <Code>shadow-soft</Code>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <GroupLabel>Section rhythm</GroupLabel>
            <div className="grid gap-x-12 gap-y-4 sm:grid-cols-2">
              <div className="flex items-center justify-between gap-4 border-b-[0.5px] border-rule pb-3">
                <div className="flex items-center gap-2">
                  <Code>section-y</Code>
                  <span className="font-mono text-nav text-ink">72 → 136px</span>
                </div>
                <span className="text-small text-quiet">Standard section</span>
              </div>
              <div className="flex items-center justify-between gap-4 border-b-[0.5px] border-rule pb-3">
                <div className="flex items-center gap-2">
                  <Code>section-y-sm</Code>
                  <span className="font-mono text-nav text-ink">56 → 96px</span>
                </div>
                <span className="text-small text-quiet">Tighter band</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-bark px-6 py-16 text-center sm:px-10 md:px-15">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/stars.png')" }}
        />
        <Image
          src="/cloud-1.webp"
          alt=""
          aria-hidden="true"
          width={180}
          height={119}
          className="pointer-events-none absolute -bottom-4 -left-8 h-auto w-30 opacity-80 md:w-45"
        />
        <Image
          src="/cloud-1.webp"
          alt=""
          aria-hidden="true"
          width={180}
          height={119}
          className="pointer-events-none absolute -right-12 -top-8 h-auto w-30 -scale-x-100 opacity-80 md:w-56 rotate-180"
        />
        <div className="grain" aria-hidden="true" />
        <div className="relative z-10">
          <span className="mx-auto block h-px w-8 bg-amber" />
          <div className="mt-6 font-serif text-logo-sm font-light tracking-label text-oat">
            mouurn
          </div>
          <p className="mt-3 text-small text-footer-link">
            Design system · Full Stop Productions LLC
          </p>
        </div>
      </footer>
    </main>
  );
}
