import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "mouurn — Style Guide",
  description: "The mouurn design system: color, type, spacing, components.",
};

/* ----------------------------- data ----------------------------- */

const brand = [
  { name: "Oat", token: "--color-oat", hex: "#F5F2EC", use: "Warm section backgrounds" },
  { name: "Ink", token: "--color-ink", hex: "#1A1816", use: "Text, footer, primary button" },
  { name: "Muted", token: "--color-muted", hex: "#8A8480", use: "Body copy, quiet links" },
  { name: "Soft", token: "--color-soft", hex: "#C8C4BC", use: "Eyebrows, placeholders" },
];

const hairlines = [
  { name: "Rule", token: "--color-rule", hex: "rgba(26,24,22,.08)", use: "Default 0.5px dividers" },
  { name: "Strong", token: "--color-strong", hex: "rgba(26,24,22,.15)", use: "Field underlines, nav" },
];

const neutrals = [
  { name: "Hover wash", token: "--color-hover", hex: "#FAFAF8", use: "Card hover background" },
  { name: "Footer label", token: "--color-footer-label", hex: "#AAA8A4", use: "Footer column titles" },
  { name: "Footer link", token: "--color-footer-link", hex: "#9A9693", use: "Footer links" },
  { name: "Footer rule", token: "--color-footer-rule", hex: "#2A2826", use: "Dividers on ink" },
];

const serifScale = [
  { size: 52, lh: 1.05, track: "0", role: "Hero headline", sample: "When words aren't enough." },
  { size: 44, lh: 1.05, track: "0", role: "Path heading", sample: "I am grieving." },
  { size: 36, lh: 1.2, track: "0", role: "Story heading", sample: "No one teaches us how." },
  { size: 36, lh: 1.1, track: "0", role: "Newsletter heading", sample: "Words for the hardest days." },
  { size: 30, lh: 1.5, track: "0", role: "Mission heading", sample: "People want to help." },
  { size: 28, lh: 1.2, track: "0.32em", role: "Logo bar", sample: "mouurn" },
  { size: 20, lh: 1.2, track: "0.2em", role: "Footer logo", sample: "mouurn" },
  { size: 18, lh: 1.9, track: "0", role: "Serif body (story)", sample: "Real ways to help, real words to say." },
  { size: 18, lh: 1.2, track: "0", role: "Teaser heading", sample: "What you actually need." },
];

const sansScale = [
  { size: 13, lh: 2, track: "0", role: "Body copy, fields", sample: "A registry for grief, set up in five minutes." },
  { size: 12, lh: 1.95, track: "0", role: "Sub-copy (mission)", sample: "In service of one act — showing up." },
  { size: 11, lh: 1.9, track: "0", role: "Teaser copy, footer links", sample: "Beyond flowers and lasagna." },
  { size: 10, lh: 1.4, track: "0.12em", role: "Nav links", sample: "REGISTRY" },
  { size: 9, lh: 1.4, track: "0.24em", role: "Eyebrows, buttons, labels", sample: "WHY MOUURN EXISTS" },
  { size: 8, lh: 1.4, track: "0.22em", role: "Micro eyebrow", sample: "FOR THEM" },
];

const tracking = ["0.06em", "0.08em", "0.12em", "0.14em", "0.16em", "0.18em", "0.2em", "0.22em", "0.24em", "0.32em"];

const spacing = [8, 10, 12, 14, 16, 20, 24, 26, 28, 32, 36, 40, 48, 60, 72, 80];

const lineHeights = [
  { lh: 1.05, role: "Display headlines" },
  { lh: 1.1, role: "Newsletter heading" },
  { lh: 1.2, role: "Section / teaser headings" },
  { lh: 1.5, role: "Mission heading" },
  { lh: 1.9, role: "Serif body" },
  { lh: 1.95, role: "Mission sub-copy" },
  { lh: 2.0, role: "Sans body (editorial)" },
];

/* --------------------------- helpers ---------------------------- */

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-hairline border-rule border-b px-6 py-16 sm:px-10 md:px-[60px] md:py-20">
      <div className="eyebrow mb-3">{eyebrow}</div>
      <h2 className="font-serif text-[30px] font-light leading-tight text-ink">
        {title}
      </h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Swatch({
  name,
  token,
  hex,
  use,
  dark = false,
}: {
  name: string;
  token: string;
  hex: string;
  use: string;
  dark?: boolean;
}) {
  return (
    <div className="border-hairline border-rule border">
      <div className="h-24" style={{ background: hex }} />
      <div
        className={`border-hairline border-rule border-t px-4 py-3 ${dark ? "bg-ink" : ""}`}
      >
        <div
          className={`font-serif text-[18px] leading-none ${dark ? "text-oat" : "text-ink"}`}
        >
          {name}
        </div>
        <div className={`mt-1 text-[11px] ${dark ? "text-footer-link" : "text-muted"}`}>
          {hex}
        </div>
        <div className={`mt-1 font-mono text-[10px] ${dark ? "text-footer-link" : "text-soft"}`}>
          {token}
        </div>
        <div className={`mt-2 text-[11px] leading-snug ${dark ? "text-footer-link" : "text-muted"}`}>
          {use}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- page ----------------------------- */

export default function StyleGuide() {
  return (
    <main className="bg-white">
      {/* Masthead */}
      <header className="border-hairline border-strong border-b px-6 py-12 text-center sm:px-10 md:px-[60px] md:py-16">
        <div className="font-serif text-[28px] font-light tracking-[0.32em] text-ink">
          mouurn
        </div>
        <div className="eyebrow mt-5">Design System</div>
        <h1 className="mx-auto mt-3 max-w-xl font-serif text-[40px] font-light leading-tight text-ink">
          The visual language, <em className="italic">in one place.</em>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[12px] leading-relaxed text-muted">
          Every token harvested from the reference pages — color, type, spacing,
          and the components we build with. The single source of truth.
        </p>
      </header>

      {/* Color */}
      <Section eyebrow="01 — Color" title="The palette.">
        <p className="mb-6 text-[12px] text-muted">Brand</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {brand.map((c) => (
            <Swatch key={c.token} {...c} />
          ))}
        </div>

        <p className="mb-6 mt-12 text-[12px] text-muted">Hairline rules</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {hairlines.map((c) => (
            <Swatch key={c.token} {...c} />
          ))}
        </div>

        <p className="mb-6 mt-12 text-[12px] text-muted">UI neutrals (mostly on ink)</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {neutrals.map((c) => (
            <Swatch key={c.token} {...c} dark />
          ))}
        </div>
      </Section>

      {/* Typography — serif */}
      <Section eyebrow="02 — Typography" title="Cormorant Garamond.">
        <p className="mb-10 text-[12px] text-muted">
          Headlines. Light (300) and Regular (400), with italics for emphasis.
        </p>
        <div className="flex flex-col gap-8">
          {serifScale.map((t) => (
            <div
              key={t.size}
              className="border-hairline border-rule grid grid-cols-1 gap-2 border-b pb-8 md:grid-cols-[140px_1fr] md:items-baseline"
            >
              <div className="text-[11px] text-muted">
                <span className="text-ink">{t.size}px</span> · lh {t.lh}
                {t.track !== "0" && ` · ${t.track}`}
                <div className="mt-1 text-soft">{t.role}</div>
              </div>
              <div
                className="font-serif font-light text-ink"
                style={{ fontSize: t.size, lineHeight: t.lh, letterSpacing: t.track }}
              >
                {t.sample}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Typography — sans */}
      <Section eyebrow="02 — Typography" title="Jost.">
        <p className="mb-10 text-[12px] text-muted">
          Body, navigation, and micro-labels. Light (300), Regular (400), Medium (500).
        </p>
        <div className="flex flex-col gap-8">
          {sansScale.map((t) => (
            <div
              key={t.size}
              className="border-hairline border-rule grid grid-cols-1 gap-2 border-b pb-8 md:grid-cols-[140px_1fr] md:items-baseline"
            >
              <div className="text-[11px] text-muted">
                <span className="text-ink">{t.size}px</span> · lh {t.lh} · {t.track}
                <div className="mt-1 text-soft">{t.role}</div>
              </div>
              <div
                className="font-sans font-light text-ink"
                style={{ fontSize: t.size, lineHeight: t.lh, letterSpacing: t.track }}
              >
                {t.sample}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Letter-spacing */}
      <Section eyebrow="03 — Tracking" title="Letter-spacing scale.">
        <div className="flex flex-col gap-5">
          {tracking.map((tr) => (
            <div
              key={tr}
              className="border-hairline border-rule grid grid-cols-[80px_1fr] items-center border-b pb-5"
            >
              <div className="text-[11px] text-muted">{tr}</div>
              <div
                className="text-[11px] uppercase text-ink"
                style={{ letterSpacing: tr }}
              >
                Restoring the rituals of comfort
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Line-height */}
      <Section eyebrow="04 — Rhythm" title="Line-height.">
        <div className="grid gap-8 md:grid-cols-[160px_1fr] md:items-start">
          <div className="flex flex-col gap-2 text-[11px] text-muted">
            {lineHeights.map((l) => (
              <div key={l.lh}>
                <span className="text-ink">{l.lh}</span> — {l.role}
              </div>
            ))}
          </div>
          <p className="max-w-md text-[13px] text-muted" style={{ lineHeight: 2 }}>
            Loss leaves a gap where all the ordinary tasks and needs live. A grief
            registry gives the people around you a real, specific way to show up —
            with meals, errands, gifts, or the things that actually help.
          </p>
        </div>
      </Section>

      {/* Spacing */}
      <Section eyebrow="05 — Spacing" title="The spacing system.">
        <p className="mb-10 text-[12px] text-muted">
          The spacing values used across the reference. Sections use 60px
          horizontal gutters with 48 / 72 / 80 vertical rhythm.
        </p>
        <div className="flex flex-col gap-4">
          {spacing.map((s) => (
            <div key={s} className="flex items-center gap-5">
              <div className="w-12 text-right text-[11px] text-muted">{s}px</div>
              <div className="h-4 bg-ink" style={{ width: s }} />
            </div>
          ))}
        </div>
      </Section>

      {/* Buttons */}
      <Section eyebrow="06 — Components" title="Buttons & calls to action.">
        <div className="flex flex-col gap-12">
          <div>
            <div className="eyebrow mb-5">Primary button — .btn-primary</div>
            <button className="btn-primary">Subscribe →</button>
          </div>
          <div>
            <div className="eyebrow mb-5">Underlined CTA — .cta-link</div>
            <a href="#" className="cta-link">
              Read our story →
            </a>
          </div>
          <div>
            <div className="eyebrow mb-5">Quiet arrow link — .arrow-link</div>
            <a href="#" className="arrow-link">
              Find your way in →
            </a>
          </div>
        </div>
      </Section>

      {/* Form fields */}
      <Section eyebrow="06 — Components" title="Form fields.">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="eyebrow mb-5">Light surface — .field</div>
            <input className="field" placeholder="your@email.com" aria-label="Email" />
            <input
              className="field mt-6"
              placeholder="Your name"
              aria-label="Name"
            />
          </div>
          <div className="bg-ink p-8">
            <div className="eyebrow mb-5" style={{ color: "var(--color-footer-label)" }}>
              Dark surface — .field-dark
            </div>
            <input
              className="field-dark"
              placeholder="your@email.com"
              aria-label="Email"
            />
          </div>
        </div>
      </Section>

      {/* Borders */}
      <Section eyebrow="07 — Detail" title="0.5px hairlines.">
        <p className="mb-10 text-[12px] text-muted">
          The whole design is held together by half-pixel rules — never heavier.
        </p>
        <div className="flex flex-col gap-10">
          <div>
            <div className="mb-3 text-[11px] text-muted">border-rule (.08)</div>
            <div className="border-hairline border-rule border-t" />
          </div>
          <div>
            <div className="mb-3 text-[11px] text-muted">border-strong (.15)</div>
            <div className="border-hairline border-strong border-t" />
          </div>
        </div>
      </Section>

      <footer className="bg-ink px-6 py-12 text-center sm:px-10 md:px-[60px]">
        <div className="font-serif text-[20px] font-light tracking-[0.2em] text-oat">
          mouurn
        </div>
        <p className="mt-3 text-[11px] text-footer-link">
          Design system · Full Stop Productions LLC
        </p>
      </footer>
    </main>
  );
}
