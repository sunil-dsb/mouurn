import { Cormorant_Garamond, Jost } from "next/font/google";

// Performance: self-hosted via next/font (no CDN, no layout shift), scoped to
// /improved so the faithful clone at "/" is untouched.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export default function ImprovedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The font variables feed --font-sans / --font-serif in globals.css.
  // `improved-type` re-scopes the type/spacing tokens to the elevated scale
  // for this subtree only — the faithful clone at "/" keeps the exact sizes.
  return (
    <div className={`improved-type ${cormorant.variable} ${jost.variable}`}>
      {children}
    </div>
  );
}
