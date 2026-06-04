interface FlowerProps {
  className?: string;
  isStatic?: boolean;
}

export default function Flower({ className = "", isStatic = false }: FlowerProps) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 100 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="fade-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-new-gold)" stopOpacity="0" />
          <stop offset="25%" stopColor="var(--color-new-gold)" stopOpacity="0.45" />
          <stop offset="75%" stopColor="var(--color-new-gold)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="var(--color-new-gold)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g>
        {/* Stem */}
        <path
          d="M50,150 Q44,95 50,48"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        {/* Left Leaf (Lower) */}
        <g>
          <path
            d="M48,100 Q32,95 45,86 Q50,93 48,100"
            stroke="currentColor"
            strokeWidth="0.85"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="fill-new-gold/[0.04]"
          />
          <path
            d="M48,100 Q40,94 46,90"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.45"
            strokeLinecap="round"
          />
        </g>

        {/* Right Leaf (Middle) */}
        <g>
          <path
            d="M51,75 Q68,70 55,61 Q50,68 51,75"
            stroke="currentColor"
            strokeWidth="0.85"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="fill-new-gold/[0.04]"
          />
          <path
            d="M51,75 Q61,70 54,66"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.45"
            strokeLinecap="round"
          />
        </g>

        {/* Left Leaf (Upper - Small) */}
        <g>
          <path
            d="M49,62 Q39,58 47,54 Q50,58 49,62"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="fill-new-gold/[0.03]"
          />
          <path
            d="M49,62 Q44,59 47,56"
            stroke="currentColor"
            strokeWidth="0.45"
            opacity="0.4"
            strokeLinecap="round"
          />
        </g>

        {/* Sepal/Calyx cup at the flower base */}
        <path
          d="M44,49 Q50,56 56,49 C54,46 46,46 44,49 Z"
          className="fill-new-gold/15 stroke-new-gold/40"
          strokeWidth="0.65"
        />

        {/* Flower Head at top of stem */}
        <g transform="translate(50, 48)">
          {/* 8 Petals with semi-translucent paper white fill */}
          <ellipse cx="0" cy="-18" rx="5.5" ry="15" stroke="currentColor" strokeWidth="0.8" className="fill-new-white/[0.45]" />
          <ellipse cx="0" cy="-18" rx="5.5" ry="15" stroke="currentColor" strokeWidth="0.8" transform="rotate(45)" className="fill-new-white/[0.45]" />
          <ellipse cx="0" cy="-18" rx="5.5" ry="15" stroke="currentColor" strokeWidth="0.8" transform="rotate(90)" className="fill-new-white/[0.45]" />
          <ellipse cx="0" cy="-18" rx="5.5" ry="15" stroke="currentColor" strokeWidth="0.8" transform="rotate(135)" className="fill-new-white/[0.45]" />
          <ellipse cx="0" cy="-18" rx="5.5" ry="15" stroke="currentColor" strokeWidth="0.8" transform="rotate(180)" className="fill-new-white/[0.45]" />
          <ellipse cx="0" cy="-18" rx="5.5" ry="15" stroke="currentColor" strokeWidth="0.8" transform="rotate(225)" className="fill-new-white/[0.45]" />
          <ellipse cx="0" cy="-18" rx="5.5" ry="15" stroke="currentColor" strokeWidth="0.8" transform="rotate(270)" className="fill-new-white/[0.45]" />
          <ellipse cx="0" cy="-18" rx="5.5" ry="15" stroke="currentColor" strokeWidth="0.8" transform="rotate(315)" className="fill-new-white/[0.45]" />
          {/* Center detail */}
          <circle cx="0" cy="0" r="6.2" stroke="currentColor" strokeWidth="0.75" className="fill-new-white" />
          <circle cx="0" cy="0" r="3.4" stroke="currentColor" strokeWidth="0.55" className="fill-new-gold-lt/[0.2]" />
          <circle cx="0" cy="0" r="1.4" className="fill-new-gold stroke-none" />
        </g>
      </g>
      {/* Horizon line with fade-out gradient */}
      <line
        x1="10"
        y1="150"
        x2="90"
        y2="150"
        stroke="url(#fade-line)"
        strokeWidth="1.2"
        strokeDasharray="4 6"
      />
    </svg>
  );
}
