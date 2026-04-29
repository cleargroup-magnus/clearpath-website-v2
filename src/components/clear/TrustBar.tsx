const items = [
  { label: "Web Development",     hue: 260 },
  { label: "AI Integration",      hue: 280 },
  { label: "Process Automation",  hue: 245 },
  { label: "Meta & Google Ads",   hue: 265 },
  { label: "GTM Engineering",     hue: 255 },
  { label: "Systems Integration", hue: 270 },
];

// Duplicate for seamless loop
const track = [...items, ...items, ...items];

export function TrustBar() {
  return (
    <div className="relative overflow-hidden border-y border-border-soft bg-bg-soft py-7">
      {/* Left fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
        style={{ background: "linear-gradient(to right, var(--color-bg-soft), transparent)" }}
      />
      {/* Right fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
        style={{ background: "linear-gradient(to left, var(--color-bg-soft), transparent)" }}
      />

      <div className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-text-light">
        Full stack growth
      </div>

      {/* Marquee track */}
      <div className="flex" style={{ maskImage: "none" }}>
        <div className="marquee-track flex shrink-0 items-center gap-3">
          {track.map((item, i) => (
            <Pill key={i} label={item.label} hue={item.hue} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Pill({ label, hue }: { label: string; hue: number }) {
  return (
    <span
      className="relative inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-5 py-2 text-[13px] font-medium transition-all duration-300"
      style={{
        background: `color-mix(in oklab, oklch(0.58 0.22 ${hue}) 8%, var(--color-background))`,
        border: `1px solid color-mix(in oklab, oklch(0.58 0.22 ${hue}) 22%, transparent)`,
        color: `oklch(0.62 0.18 ${hue})`,
        boxShadow: `0 0 12px color-mix(in oklab, oklch(0.58 0.22 ${hue}) 18%, transparent)`,
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: `oklch(0.62 0.18 ${hue})`, boxShadow: `0 0 6px oklch(0.62 0.18 ${hue})` }}
      />
      {label}
    </span>
  );
}
