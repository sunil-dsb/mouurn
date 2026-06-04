/**
 * Static pass-through — motion removed from /new-improved per request.
 * Kept as a component so the page composition doesn't need to change.
 */
export default function SoftFade({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return className ? <div className={className}>{children}</div> : <>{children}</>;
}
