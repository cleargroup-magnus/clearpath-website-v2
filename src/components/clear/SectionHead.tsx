export function SectionHead({
  tag,
  title,
  accent,
  sub,
  variant = "light",
}: {
  tag: string;
  title: string;
  accent: string;
  sub: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div className="mx-auto mb-20 max-w-[860px] text-center">
      <div
        className={`mb-5 inline-flex items-center gap-2 text-[13px] font-medium ${
          isDark ? "text-blue-light" : "text-blue"
        }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${isDark ? "bg-blue-light" : "bg-blue"}`}
        />
        {tag}
      </div>
      <h2
        className={`mb-6 font-display text-[clamp(40px,5vw,64px)] font-medium leading-[1.05] tracking-[-0.035em] ${
          isDark ? "text-white" : "text-navy"
        }`}
      >
        {title} <span className={isDark ? "text-blue-light" : "text-blue"}>{accent}</span>
      </h2>
      <p
        className={`mx-auto max-w-[580px] text-[18px] leading-[1.7] ${
          isDark ? "text-white/55" : "text-text-muted"
        }`}
      >
        {sub}
      </p>
    </div>
  );
}