import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "mouurn — Style Guide",
  description: "The mouurn design system: color, type, spacing, components.",
};

/* ----------------------------- data ----------------------------- */

const brand = [
  { name: "Oat", hex: "#F5F2EC", classes: ["bg-oat"], use: "Warm section backgrounds" },
  { name: "Ink", hex: "#1A1816", classes: ["bg-ink", "text-ink"], use: "Text, footer, primary button" },
  { name: "Muted", hex: "#8A8480", classes: ["text-muted"], use: "Body copy, quiet links" },
  { name: "Soft", hex: "#C8C4BC", classes: ["text-soft"], use: "Eyebrows, placeholders" },
];

const hairlines = [
  { name: "Rule", hex: "rgba(26,24,22,.08)", classes: ["border-rule"], use: "Default 0.5px dividers" },
  { name: "Strong", hex: "rgba(26,24,22,.15)", classes: ["border-strong"], use: "Field underlines, nav" },
];

const neutrals = [
  { name: "Hover wash", hex: "#FAFAF8", classes: ["bg-hover"], use: "Card hover background" },
  { name: "Footer label", hex: "#AAA8A4", classes: ["text-footer-label"], use: "Footer column titles" },
  { name: "Footer link", hex: "#9A9693", classes: ["text-footer-link"], use: "Footer links" },
  { name: "Footer rule", hex: "#2A2826", classes: ["border-footer-rule"], use: "Dividers on ink" },
];

// font: serif | sans · token = the text-* class · track = optional tracking-* class
const serifScale = [
  { token: "text-hero", meta: "52px · 1.05", role: "Hero headline", sample: "When words aren't enough." },
  { token: "text-path", meta: "44px · 1.05", role: "Path heading", sample: "I am grieving." },
  { token: "text-story", meta: "36px · 1.2", role: "Story heading", sample: "No one teaches us how." },
  { token: "text-newsletter", meta: "36px · 1.1", role: "Newsletter heading", sample: "Words for the hardest days." },
  { token: "text-mission", meta: "30px · 1.5", role: "Mission heading", sample: "People want to help." },
  { token: "text-logo", track: "tracking-logo", meta: "28px · 0.32em", role: "Logo wordmark", sample: "mouurn" },
  { token: "text-logo-sm", track: "tracking-label", meta: "20px · 0.2em", role: "Footer logo", sample: "mouurn" },
  { token: "text-prose", meta: "18px · 1.9", role: "Serif body", sample: "Real ways to help, real words to say." },
  { token: "text-prose-sm", meta: "16px · 1.9", role: "Serif body — mobile <900", sample: "Real ways to help, real words to say." },
  { token: "text-teaser", meta: "18px · 1.2", role: "Teaser heading", sample: "What you actually need." },
];

const sansScale = [
  { token: "text-body", meta: "13px · 2.0", role: "Body copy, fields", sample: "A registry for grief, set up in five minutes." },
  { token: "text-sub", meta: "12px · 1.95", role: "Sub-copy", sample: "In service of one act — showing up." },
  { token: "text-small", meta: "11px · 1.9", role: "Teaser copy, footer links", sample: "Beyond flowers and lasagna." },
  { token: "text-nav", track: "tracking-nav", meta: "10px · 0.12em", role: "Nav links", sample: "REGISTRY", upper: true },
  { token: "text-label", track: "tracking-eyebrow", meta: "9px · 0.24em", role: "Eyebrows, buttons, labels", sample: "WHY MOUURN EXISTS", upper: true },
  { token: "text-micro", track: "tracking-btn", meta: "8px · 0.22em", role: "Micro eyebrow", sample: "FOR THEM", upper: true },
];

const tracking = [
  { token: "tracking-fine", val: "0.06em", role: "Footer copyright" },
  { token: "tracking-sub", val: "0.08em", role: "Hero sub-line" },
  { token: "tracking-nav", val: "0.12em", role: "Nav links" },
  { token: "tracking-arrow", val: "0.14em", role: "Teaser arrow" },
  { token: "tracking-sm", val: "0.16em", role: "Footer subscribe" },
  { token: "tracking-cta", val: "0.18em", role: "CTA / arrow links" },
  { token: "tracking-label", val: "0.2em", role: "Footer labels, footer logo" },
  { token: "tracking-btn", val: "0.22em", role: "Buttons, micro eyebrow" },
  { token: "tracking-eyebrow", val: "0.24em", role: "Eyebrows" },
  { token: "tracking-logo", val: "0.32em", role: "Logo wordmark" },
];

const spacing = [8, 10, 12, 14, 16, 20, 24, 26, 28, 32, 36, 40, 48, 60, 72, 80];

/* --------------------------- helpers ---------------------------- */

function Code({ children }: { children: React.ReactNode }) {
  return (
    <span className="mr-1.5 inline-block bg-oat px-1.5 py-1 font-mono text-nav leading-none text-ink">
      {children}
    </span>
  );
}

function Section({
  eyebrow,
  title,
  note,
  children,
}: {
  eyebrow: string;
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b-[0.5px] border-rule px-6 py-16 sm:px-10 md:px-15 md:py-20">
      <div className="eyebrow mb-3">{eyebrow}</div>
      <h2 className="font-serif text-mission font-light text-ink">{title}</h2>
      {note && <p className="mt-4 max-w-xl text-body text-muted">{note}</p>}
      <div className="mt-10">{children}</div>
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
    <div className="border-[0.5px] border-rule">
      <div className="h-24" style={{ background: hex }} />
      <div className={`border-t-[0.5px] border-rule px-4 py-3 ${dark ? "bg-ink" : ""}`}>
        <div className={`font-serif text-teaser leading-none ${dark ? "text-oat" : "text-ink"}`}>
          {name}
        </div>
        <div className={`mt-1.5 text-small ${dark ? "text-footer-link" : "text-muted"}`}>{hex}</div>
        <div className="mt-2 flex flex-wrap">
          {classes.map((c) => (
            <Code key={c}>{c}</Code>
          ))}
        </div>
        <div className={`mt-2 text-small leading-snug ${dark ? "text-footer-link" : "text-muted"}`}>
          {use}
        </div>
      </div>
    </div>
  );
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
    <div className="grid grid-cols-1 gap-3 border-b-[0.5px] border-rule pb-8 md:grid-cols-[220px_1fr] md:items-baseline">
      <div className="text-small text-muted">
        <div className="mb-2 flex flex-wrap">
          <Code>{token}</Code>
          {track && <Code>{track}</Code>}
        </div>
        <div className="text-ink">{meta}</div>
        <div className="mt-0.5 text-soft">{role}</div>
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
    <main className="bg-white">
      {/* Masthead */}
      <header className="border-b-[0.5px] border-strong px-6 py-12 text-center sm:px-10 md:px-15 md:py-16">
        <div className="font-serif text-logo font-light tracking-logo text-ink">mouurn</div>
        <div className="eyebrow mt-5">Design System</div>
        <h1 className="mx-auto mt-3 max-w-xl font-serif text-[40px] font-light leading-tight text-ink">
          The visual language, <em className="italic">in one place.</em>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sub text-muted">
          Every value below is a token. Use the{" "}
          <span className="font-mono text-[11px] text-ink">class name</span> shown — all defined
          in <span className="font-mono text-[11px] text-ink">app/globals.css</span>.
        </p>
      </header>

      {/* Color */}
      <Section eyebrow="01 — Color" title="The palette." note="Reach for the token, never a raw hex. Backgrounds use bg-*, text uses text-*, hairlines use border-*.">
        <p className="mb-6 text-small text-muted">Brand</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {brand.map((c) => (
            <Swatch key={c.name} {...c} />
          ))}
        </div>

        <p className="mb-6 mt-12 text-small text-muted">Hairline rules</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {hairlines.map((c) => (
            <Swatch key={c.name} {...c} />
          ))}
        </div>

        <p className="mb-6 mt-12 text-small text-muted">UI neutrals (mostly on ink)</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {neutrals.map((c) => (
            <Swatch key={c.name} {...c} dark />
          ))}
        </div>
      </Section>

      {/* Typography — serif */}
      <Section
        eyebrow="02 — Typography"
        title="Cormorant Garamond."
        note="Headlines. Pair font-serif with a text-* token. Each specimen below is rendered through its token."
      >
        <div className="flex flex-col gap-8">
          {serifScale.map((t) => (
            <TypeRow key={t.token + t.role} font="serif" {...t} />
          ))}
        </div>
      </Section>

      {/* Typography — sans */}
      <Section
        eyebrow="02 — Typography"
        title="Jost."
        note="Body, navigation, and micro-labels. Pair font-sans with a text-* token (and a tracking-* token for labels)."
      >
        <div className="flex flex-col gap-8">
          {sansScale.map((t) => (
            <TypeRow key={t.token + t.role} font="sans" {...t} />
          ))}
        </div>
      </Section>

      {/* Letter-spacing */}
      <Section eyebrow="03 — Tracking" title="Letter-spacing scale." note="Applied with tracking-* tokens, rendered live below.">
        <div className="flex flex-col gap-5">
          {tracking.map((tr) => (
            <div
              key={tr.token}
              className="grid grid-cols-1 gap-2 border-b-[0.5px] border-rule pb-5 md:grid-cols-[220px_1fr] md:items-center"
            >
              <div className="text-small text-muted">
                <Code>{tr.token}</Code>
                <span className="ml-1 text-ink">{tr.val}</span>
                <div className="mt-0.5 text-soft">{tr.role}</div>
              </div>
              <div className={`text-small uppercase text-ink ${tr.token}`}>
                Restoring the rituals of comfort
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Spacing */}
      <Section
        eyebrow="04 — Spacing"
        title="The spacing system."
        note="The values used across the reference. Section gutters use the shell utility (60px → 40 → 24); vertical rhythm is 48 / 72 / 80."
      >
        <div className="flex flex-col gap-4">
          {spacing.map((s) => (
            <div key={s} className="flex items-center gap-5">
              <div className="w-12 text-right text-small text-muted">{s}px</div>
              <div className="h-4 bg-ink" style={{ width: s }} />
            </div>
          ))}
        </div>
      </Section>

      {/* Buttons & CTAs */}
      <Section eyebrow="05 — Components" title="Buttons & calls to action." note="Reusable @utility primitives — use the class name directly.">
        <div className="flex flex-col gap-12">
          <div>
            <div className="mb-4"><Code>btn-primary</Code></div>
            <button className="btn-primary">Subscribe →</button>
          </div>
          <div>
            <div className="mb-4"><Code>cta-link</Code></div>
            <a href="#" className="cta-link">Read our story →</a>
          </div>
          <div>
            <div className="mb-4"><Code>arrow-link</Code></div>
            <a href="#" className="arrow-link">Find your way in →</a>
          </div>
          <div>
            <div className="mb-4"><Code>eyebrow</Code></div>
            <div className="eyebrow">Why mouurn exists</div>
          </div>
        </div>
      </Section>

      {/* Form fields */}
      <Section eyebrow="05 — Components" title="Form fields.">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4"><Code>field</Code></div>
            <input className="field" placeholder="your@email.com" aria-label="Email" />
            <input className="field mt-6" placeholder="Your name" aria-label="Name" />
          </div>
          <div className="bg-ink p-8">
            <div className="mb-4"><Code>field-dark</Code></div>
            <input className="field-dark" placeholder="your@email.com" aria-label="Email" />
          </div>
        </div>
      </Section>

      {/* Hairlines */}
      <Section eyebrow="06 — Detail" title="0.5px hairlines." note="The whole design is held together by half-pixel rules — applied as border-{side}-[0.5px] with a rule color.">
        <div className="flex flex-col gap-10">
          <div>
            <div className="mb-3 flex flex-wrap"><Code>border-b-[0.5px]</Code><Code>border-rule</Code></div>
            <div className="border-t-[0.5px] border-rule" />
          </div>
          <div>
            <div className="mb-3 flex flex-wrap"><Code>border-b-[0.5px]</Code><Code>border-strong</Code></div>
            <div className="border-t-[0.5px] border-strong" />
          </div>
        </div>
      </Section>

      <footer className="bg-ink px-6 py-12 text-center sm:px-10 md:px-15">
        <div className="font-serif text-logo-sm font-light tracking-label text-oat">mouurn</div>
        <p className="mt-3 text-small text-footer-link">Design system · Full Stop Productions LLC</p>
      </footer>
    </main>
  );
}
