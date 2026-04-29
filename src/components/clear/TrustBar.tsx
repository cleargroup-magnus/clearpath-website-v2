const items = [
  "Web Development",
  "AI Integration",
  "Process Automation",
  "Meta & Google Ads",
  "GTM Engineering",
  "Systems Integration",
];

export function TrustBar() {
  return (
    <div className="flex flex-col items-center gap-5 border-y border-border-soft bg-bg-soft px-6 py-9 md:px-[72px]">
      <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-text-light">
        Full stack growth
      </span>
      <div className="grid w-full max-w-[1280px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((label) => (
          <span
            key={label}
            className="whitespace-nowrap rounded-full border border-border-soft bg-background px-4 py-1.5 text-center text-[13px] font-medium text-text-muted"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}