/**
 * A slender line-drawn leaf sprig — a gently curved stem with paired leaves.
 * Decorative only. Use absolutely positioned at low opacity to fill margins.
 */
export default function Botanical({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 320"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      className={`pointer-events-none ${className}`}
    >
      {/* Stem */}
      <path
        d="M100 314 C94 252 106 216 100 166 C94 116 104 78 100 26"
        strokeWidth="1.1"
      />
      {/* Paired leaves — larger low, smaller toward the tip */}
      <ellipse cx="116" cy="244" rx="9" ry="28" strokeWidth="0.8" transform="rotate(36 116 244)" />
      <ellipse cx="84" cy="250" rx="9" ry="28" strokeWidth="0.8" transform="rotate(-36 84 250)" />

      <ellipse cx="116" cy="192" rx="9" ry="27" strokeWidth="0.8" transform="rotate(38 116 192)" />
      <ellipse cx="84" cy="198" rx="9" ry="27" strokeWidth="0.8" transform="rotate(-38 84 198)" />

      <ellipse cx="114" cy="142" rx="8" ry="25" strokeWidth="0.75" transform="rotate(40 114 142)" />
      <ellipse cx="86" cy="148" rx="8" ry="25" strokeWidth="0.75" transform="rotate(-40 86 148)" />

      <ellipse cx="112" cy="96" rx="7" ry="22" strokeWidth="0.7" transform="rotate(42 112 96)" />
      <ellipse cx="88" cy="102" rx="7" ry="22" strokeWidth="0.7" transform="rotate(-42 88 102)" />

      <ellipse cx="109" cy="58" rx="6" ry="18" strokeWidth="0.65" transform="rotate(44 109 58)" />
      <ellipse cx="91" cy="64" rx="6" ry="18" strokeWidth="0.65" transform="rotate(-44 91 64)" />

      {/* Tip leaf */}
      <ellipse cx="100" cy="34" rx="5" ry="16" strokeWidth="0.65" />
    </svg>
  );
}
