/**
 * The one kicker for /improved - a short amber rule + uppercase label sitting
 * above a heading. One component = one consistent style everywhere (no more
 * mixed ✻-italic vs rule+label). `tone="overlay"` lightens the label for use
 * over imagery; `center` centres it (e.g. the Mission pull-quote).
 */
export default function Kicker({
  children,
  tone = "default",
  center = false,
  className = "",
}: {
  children: React.ReactNode;
  tone?: "default" | "overlay";
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 ${center ? "justify-center" : ""} ${className}`}
    >
      <span aria-hidden="true" className="h-px w-10 bg-amber" />
      <span
        className={`text-label uppercase tracking-eyebrow ${
          tone === "overlay" ? "text-oat/75" : "text-amber-deep"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
